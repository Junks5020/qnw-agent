# 去哪玩 · 移动端设计说明 v0.1

> 依据：[PRD v0.1](../prd/PRD-v0.1.md) 第 5–6 章，以及主分支 §11 设计交付约定（`3e9fd0d`）
> 日期：2026-10-19 ｜ 设计：ui ｜ 状态：批次 1–2 已按验收修订，批次 3 已交付。评审以 HTML 原型和 `screenshots/` 为准。

## 1. 怎么打开

原型在 `docs/travel-planner/design/prototype/`，纯 HTML + CSS，浏览器直接打开，不需要构建。

1. 打开 [`prototype/index.html`](prototype/index.html)，这是全部画板和页面的目录。
2. 批次 1：[`foundations.html`](prototype/foundations.html) 基础规范，[`components.html`](prototype/components.html) 组件和状态。
3. 之后每个页面状态一个文件：`prototype/pages/<page-id>.html`。例如 `pages/P02-a-home-empty.html`、`pages/P02-d-home-pretrip.html`。不使用 `?state=`，也不在同一个页面文件里并排多个状态。

画板宽 390。手机页的视口是 390×844，高于 844 的规范页按内容整页展开。

## 2. 截图和色值检查

在 `docs/travel-planner/design/` 下：

```bash
npm install
npx playwright install chromium
npm run check-colors
npm run shots
```

- `npm run shots` 用 Playwright 把每个画板 / 页面渲成 `screenshots/<page-id>.png`。CSS 宽 390，`deviceScaleFactor` 为 2（物理像素宽 780）。短页至少 844 高；更高的规范页按内容整页截，不裁切。
- 行程预览会高出一屏。`P04-a-preview.png` 只截 390×844 的首屏（含底部固定按钮）。整页另存 `screenshots/P04-a-preview-full.png`。
- 文件名与 HTML 主文件名相同：`foundations.html` → `foundations.png`，`pages/P02-d-home-pretrip.html` → `P02-d-home-pretrip.png`。
- 截图环境需要中文字体。本机用 Noto Sans CJK SC；没有该字体时字体会落到文泉驿或 Droid Sans Fallback。
- `npm run check-colors` 扫描 `prototype/` 里除 `tokens.css` 以外的 HTML / CSS / JS。出现 `#` 十六进制或 `rgb()` / `rgba()` 即失败。唯一豁免：`foundations.html` 里 `class="token-hex"` 的色板文字标注。色块填充必须用变量。

颜色、字体、间距、圆角只定义在 [`prototype/tokens.css`](prototype/tokens.css)。

## 3. 视觉规范（色彩系统 v0.2）

年轻、轻松、可信赖；克制，少彩色。灰和白占页面的大部分。

- **约 60%**：黑、白、各级灰。页面底、卡片、正文、图标默认态。
- **约 30%**：中灰表面和分割（muted、border、skeleton、次级文字）。
- **约 10%**：点缀蓝。只用在主按钮、选中态、关键标签。
- 不使用青绿主色，也不按天使用彩虹色。第 1–4 天用灰度阶；「今天」是选中态，可以是蓝。

### 3.1 颜色

| 分组 | 变量 |
|---|---|
| brand | primary `#111111` · primary-pressed `#000000` · primary-soft `#F3F3F3` · accent `#2563EB` · accent-pressed `#1D4ED8` · accent-soft `#EFF6FF` |
| text | primary `#111111` · secondary `#666666` · tertiary `#999999` · on-dark `#FFFFFF` |
| bg | page `#F5F5F5` · surface `#FFFFFF` · muted `#F0F0F0` · muted-pressed `#E8E8E8` · skeleton `#EEEEEE` |
| border | default `#E5E5E5` · strong `#BDBDBD` |
| overlay | 黑 40% |
| status | success `#1F9D63` / warning `#B7791F` / danger `#D9363E`。浅底 success-soft `#E6F6EE`、warning-soft `#FBF3E6`、danger-soft `#FDECEC`。info 与 info-soft 复用 accent `#2563EB` / accent-soft `#EFF6FF`，不再单独用另一支蓝。语义色不计入 6:3:1 |
| day | 1 `#111111` · 2 `#666666` · 3 `#999999` · 4 `#BDBDBD` |

### 3.2 字体

苹方 PingFang SC，截图和 Android 回退到 Noto Sans CJK SC / 思源黑体 / 系统中文栈。

| 样式 | 字号 / 行高 | 字重 | 用途 |
|---|---|---|---|
| Display | 28 / 36 | Bold 700 | 品牌、启动页 |
| Title | 20 / 28 | Semibold 600 | 页面标题、区块标题 |
| Headline | 17 / 24 | Semibold 600 | 条目名、导航标题 |
| Body | 15 / 22 | Regular 400 | 正文、按钮 |
| Caption | 13 / 18 | Regular 400 | 次级说明、耗时 |
| Micro | 11 / 16 | Medium 500 | Tab、角标、色板标注 |

### 3.3 间距、圆角、海拔

- 间距：4 · 8 · 12 · 16 · 20 · 24 · 32 · 40。页面左右边距 16；卡片内边距 12。
- 圆角：8 标签 · 12 输入和横幅 · 16 卡片 · 24 半屏顶部 · full 按钮和胶囊。
- 海拔：卡片 `y2 blur12 黑 8%`，浮层 `y8 blur24 黑 16%`。

## 4. 组件（批次 1）

见 [`components.html`](prototype/components.html)。图标是内联 SVG，打开页面时不请求外部图标库。

| 组件 | 状态 |
|---|---|
| Button | 主按钮（蓝）、次按钮、文字、禁用、加载、危险（实心红 / 白底红字） |
| Chip | 默认 / 选中 |
| NavBar | 返回、标题、右侧操作 |
| TabBar | 首页 / 行程 / AI / 消息 / 我的。AI 居中，普通标签，不是悬浮按钮。选中为蓝。消息未读角标为危险红 |
| ItineraryItem | 时间、地点、时长、灰度日标、拖拽手柄；另有拖拽态 |
| TransportSeg | 方式图标、耗时、距离，夹在条目之间 |
| POICard | 灰色图片占位、名称、评分、标签、参考价。无预订按钮 |
| Banner | info / warning，例如「定位未开启」 |
| AIBadge | 胶囊「AI 生成 · 仅供参考」 |
| Toast | 删除后撤销 |
| BottomSheet | 半屏，蒙层黑 40% |
| Skeleton | 卡片骨架 |

## 5. 页面索引

一个状态一个文件。空 / 加载 / 异常排在该页主状态之后，仍是独立文件。地图页可以用静态占位图。

| 批次 | 页面 | 文件 | 截图 | 状态 |
|---|---|---|---|---|
| 1 | Foundations | `prototype/foundations.html` | `screenshots/foundations.png` | 已交付 |
| 1 | Components | `prototype/components.html` | `screenshots/components.png` | 已交付 |
| 2 | 启动 | `pages/P01-a-splash.html` | `screenshots/P01-a-splash.png` | 已修订：无继续按钮，1.5 秒内自动进入 |
| 2 | 引导 | `pages/P01-b-onboarding.html` | `screenshots/P01-b-onboarding.png` | 已交付 |
| 2 | 偏好 | `pages/P01-c-preferences.html` | `screenshots/P01-c-preferences.png` | 已修订：首行与导航留出间距 |
| 2 | 首页 · 空 | `pages/P02-a-home-empty.html` | `screenshots/P02-a-home-empty.png` | 已交付 |
| 2 | 首页 · 行前 | `pages/P02-d-home-pretrip.html` | `screenshots/P02-d-home-pretrip.png` | 已修订：底部输入框、语音、「预算友好」；查看行程进入详情 |
| 2 | 首页 · 出行中 | `pages/P02-b-home-ongoing.html` | `screenshots/P02-b-home-ongoing.png` | 已修订：底部输入框、语音、「预算友好」 |
| 2 | 首页 · 加载 / 离线 | `pages/P02-c-home-offline.html` | `screenshots/P02-c-home-offline.png` | 已交付 |
| 2 | 对话 · 首次 | `pages/P03-a-chat-welcome.html` | `screenshots/P03-a-chat-welcome.png` | 已交付 |
| 2 | 对话 · 追问（标 1/3） | `pages/P03-b-chat-clarify.html` | `screenshots/P03-b-chat-clarify.png` | 已交付 |
| 2 | 对话 · 摘要卡 | `pages/P03-c-chat-summary.html` | `screenshots/P03-c-chat-summary.png` | 已修订：每行右侧箭头，可点进修改 |
| 2 | 对话 · 生成中 | `pages/P03-d-chat-generating.html` | `screenshots/P03-d-chat-generating.png` | 已交付 |
| 2 | 对话 · 失败 / 断网 | `pages/P03-e-chat-error.html` | `screenshots/P03-e-chat-error.png` | 已交付 |
| 2 | 行程预览 | `pages/P04-a-preview.html` | `screenshots/P04-a-preview.png`、`P04-a-preview-full.png` | 已修订：按天卡、地图占位、预算分项、说明、反馈 |
| 2 | 登录半屏 | `pages/P13-a-login.html` | `screenshots/P13-a-login.png` | 已交付 |
| 2 | 保存成功 | `pages/P13-b-save-success.html` | `screenshots/P13-b-save-success.png` | 已修订：查看行程、回到首页、开启提醒 |
| 3 | 详情 · 出行中 | `pages/P05-a-detail-ongoing.html` | 同名 png | 已交付 |
| 3 | 详情 · 某天无条目 | `pages/P05-b-detail-empty.html` | 同名 png | 已交付 |
| 3 | 详情 · 离线只读 | `pages/P05-c-detail-offline.html` | 同名 png | 已交付 |
| 3 | 详情 · 冲突 | `pages/P05-d-detail-conflict.html` | 同名 png | 已交付 |
| 3 | 编辑 · 拖拽 | `pages/P06-a-edit-drag.html` | 同名 png | 已交付 |
| 3 | 编辑 · 待安排池 | `pages/P06-b-edit-pool.html` | 同名 png | 已交付 |
| 3 | 编辑 · 撤销 Toast | `pages/P06-c-edit-undo.html` | 同名 png | 已交付 |
| 3 | 编辑 · 重算中 | `pages/P06-d-edit-recalc.html` | 同名 png | 已交付 |
| 3 | 编辑 · 重算完成 | `pages/P06-e-edit-recalc-done.html` | 同名 png | 已交付 |
| 3 | 编辑 · 重算失败 | `pages/P06-f-edit-recalc-fail.html` | 同名 png | 已交付 |
| 3 | 差异预览 | `pages/P04-b-diff.html` | 同名 png | 已交付 |
| 3 | 应用确认半屏 | `pages/P04-c-apply-confirm.html` | 同名 png | 已交付 |
| 4 | 地图 | `pages/P07-a-map.html` | 同名 png | 待交付 |
| 4 | 地图降级 | `pages/P07-b-map-fallback.html` | 同名 png | 待交付 |
| 4 | 景点 | `pages/P08-a-poi-sight.html` | 同名 png | 待交付 |
| 4 | 餐饮 | `pages/P08-b-poi-food.html` | 同名 png | 待交付 |
| 4 | 酒店（参考价，无预订） | `pages/P08-c-poi-hotel.html` | 同名 png | 待交付 |
| 4 | 地点异常 | `pages/P08-d-poi-closed.html` | 同名 png | 待交付 |
| 4 | 预算 | `pages/P09-a-budget.html` | 同名 png | 待交付 |
| 4 | 预算未知项 | `pages/P09-b-budget-unknown.html` | 同名 png | 待交付 |
| 4 | 预算空状态 | `pages/P09-c-budget-empty.html` | 同名 png | 待交付 |
| 5 | 即将出发 | `pages/P10-a-trips-upcoming.html` | 同名 png | 待交付 |
| 5 | 草稿 | `pages/P10-b-trips-draft.html` | 同名 png | 待交付 |
| 5 | 已完成 | `pages/P10-c-trips-done.html` | 同名 png | 待交付 |
| 5 | 行程空状态 | `pages/P10-d-trips-empty.html` | 同名 png | 待交付 |
| 5 | 未登录本地草稿 | `pages/P10-e-trips-local.html` | 同名 png | 待交付 |
| 5 | 通知列表 | `pages/P11-a-notifications.html` | 同名 png | 待交付 |
| 5 | 调整方案 | `pages/P11-b-adjust-sheet.html` | 同名 png | 待交付 |
| 5 | 定位权限半屏 | `pages/P11-c-location-permission.html` | 同名 png | 待交付 |
| 5 | 通知未开启 | `pages/P11-d-notify-off.html` | 同名 png | 待交付 |
| 5 | 个人中心 | `pages/P12-a-profile.html` | 同名 png | 待交付 |
| 5 | 个人中心未登录 | `pages/P12-b-profile-guest.html` | 同名 png | 待交付 |
| 5 | 只读分享链接 | `pages/P14-a-share-link.html` | 同名 png | 待交付 |
| 5 | 分享长图 | `pages/P14-b-share-image.html` | 同名 png | 待交付 |

路径相对 `prototype/`。示例数据仍是上海出发、杭州两日游（10/24–10/25，2 人，舒适档）。

行前首页不是今日驾驶舱：倒计时、行程摘要、「查看行程」「继续问 AI」。出行中才进入今日视图。

## 6. 关键设计决策

1. **Tab 为首页 / 行程 / AI / 消息 / 我的。** AI 在正中，是普通标签，不是悬浮「＋」。选中项用点缀蓝。消息有未读时用危险红角标。悬浮按钮已取消（PRD 5.1，2026-10-19）。
2. **蓝色的用量。** 主按钮、选中芯片、选中 Tab、关键标签（如「建议上午」）。倒计时和日标不用蓝。
3. **按天用灰度阶。** 日标是 1–4 的灰圆，数字区分。
4. **可信度。** AI 内容旁放「AI 生成 · 仅供参考」。价格写区间并标「参考」。
5. **不接预订。** 地点卡没有「去预订」。后续详情页底部只有收藏、替换、加入行程。
6. **人工确认。** 删除一天用半屏：次按钮 + 危险红按钮，不用蓝。差异预览里，删除用危险红并标「删除」，新增用成功绿并标「新增」，调整只用灰底和「调整」文字，不用品牌蓝铺底。
7. **图片是灰色占位。** 地图页（批次 4）用静态灰阶占位，不引入彩色地图。

## 7. 待确认

1. **Logo / Slogan。** 仍无正式 Logo。启动页暂留「一句话，说走就走」，并注明 1.5 秒内自动进入引导。
2. **导航尚未交付。** 出行中的「导航」、预览里的迷你地图要等批次 4 的地图页，当前不是链接。「查看行程」已进入行程详情。
3. **地图服务商**（PRD Q4）。
4. **登录方式**（PRD Q5）：本机号码、验证码、微信、Apple。
5. **深色模式**（PRD Q16）：token 按浅色一套，MVP 可以不做。
6. **语音输入**（PRD Q14）。
7. **离线编辑**（PRD Q13）：按离线只读。
8. **字体。** 设计指定苹方；截图用 Noto Sans CJK SC。是否再引入品牌字体未定。

## 8. Figma 归档

[去哪玩 - 移动端设计 v0.1](https://www.figma.com/design/uajCEb4MuRKA8rXWZf2QSM)（文件 `uajCEb4MuRKA8rXWZf2QSM`）已归档，只读。那一版仍是旧青绿主题，只能当布局参考，不能当颜色或组件的依据。颜色和组件以本目录的 HTML 原型为准。
