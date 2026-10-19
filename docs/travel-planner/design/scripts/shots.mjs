import { chromium } from "playwright";
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const designRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const proto = path.join(designRoot, "prototype");
const outDir = path.join(designRoot, "screenshots");

const targets = [
  { file: path.join(proto, "foundations.html"), id: "foundations" },
  { file: path.join(proto, "components.html"), id: "components" },
];

try {
  const pages = await readdir(path.join(proto, "pages"));
  for (const name of pages.sort()) {
    if (!name.endsWith(".html")) continue;
    targets.push({
      file: path.join(proto, "pages", name),
      id: name.replace(/\.html$/, ""),
    });
  }
} catch {
  // pages/ is empty until later batches
}

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  locale: "zh-CN",
  colorScheme: "light",
});

for (const target of targets) {
  const page = await context.newPage();
  await page.goto(pathToFileURL(target.file).href, { waitUntil: "load" });
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  await page.addStyleTag({
    content: "*,*::before,*::after{animation:none !important;transition:none !important;}",
  });
  const height = await page.evaluate(() =>
    Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, 844),
  );
  await page.setViewportSize({ width: 390, height });
  const png = path.join(outDir, `${target.id}.png`);
  await page.screenshot({ path: png });
  console.log(`${target.id}.png  ${390}×${height} @2x`);
  await page.close();
}

await browser.close();
