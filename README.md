# qnw-agent

多项目 monorepo，统一存放各项目的代码、产品文档（PRD）和设计稿。

## 目录约定

```
qnw-agent/
├── apps/                 # 各应用代码，一个应用一个子目录（如 apps/travel-planner-mobile）
├── packages/             # 多个应用共享的包（组件库、工具函数、类型定义等）
└── docs/
    └── <project>/        # 按项目分目录，如 docs/travel-planner
        ├── prd/          # 产品需求文档，文件名 PRD-v<版本>.md
        └── design/       # UI 设计稿与设计说明
```

## 当前项目

| 项目 | 说明 | 文档 |
|---|---|---|
| travel-planner | 旅行规划 agent 移动端应用 | [PRD v0.1](docs/travel-planner/prd/PRD-v0.1.md) |

## 约定

- 新项目在 `docs/` 下建同名目录，代码放 `apps/<项目名>-<端>`。
- PRD 版本递增时新建文件（如 `PRD-v0.2.md`），保留旧版本便于追溯。
