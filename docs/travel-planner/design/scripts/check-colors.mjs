import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "prototype");

const hexRe = /#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{4}|[0-9a-fA-F]{3})\b/g;
const rgbRe = /\brgba?\s*\(/gi;

async function filesUnder(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await filesUnder(full)));
    else if (/\.(html|css|js|mjs|svg)$/.test(entry.name)) out.push(full);
  }
  return out;
}

function stripFoundationLabels(html) {
  return html.replace(
    /(<([a-zA-Z0-9]+)\b[^>]*\bclass=(["'])[^"']*\btoken-hex\b[^"']*\3[^>]*>)([\s\S]*?)(<\/\2>)/g,
    "$1$5",
  );
}

function violations(text) {
  const lines = text.split(/\r?\n/);
  const hits = [];
  lines.forEach((line, index) => {
    hexRe.lastIndex = 0;
    rgbRe.lastIndex = 0;
    if (hexRe.test(line) || rgbRe.test(line)) hits.push({ line: index + 1, text: line.trim() });
  });
  return hits;
}

const files = await filesUnder(root);
let failed = false;

for (const file of files) {
  if (path.basename(file) === "tokens.css") continue;
  let text = await readFile(file, "utf8");
  const rel = path.relative(root, file);
  if (rel === "foundations.html") text = stripFoundationLabels(text);
  const hits = violations(text);
  if (hits.length) {
    failed = true;
    for (const hit of hits) {
      console.error(`${rel}:${hit.line}: ${hit.text}`);
    }
  }
}

if (failed) {
  console.error("Colour check failed. Hex and rgb() belong in prototype/tokens.css only.");
  process.exit(1);
}

console.log(`Colour check passed (${files.length} files, tokens.css exempt, foundations token-hex labels exempt).`);
