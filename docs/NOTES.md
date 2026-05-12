# 学习笔记（NOTES）

## 三个 `@tailwind` 分别干嘛

在 `src/index.css`：

- `@tailwind base`：重置/基础样式
- `@tailwind components`：组件层（可按需自定义）
- `@tailwind utilities`：最多用到的 utility class

## Vite + Tailwind 的最小心智模型

源码里的 class 字符串 → Tailwind 扫描 → PostCSS 处理 → 最终 CSS 注入页面。

## 版本提示

Tailwind v4 的安装方式与 v3 不同；本仓库刻意使用 **v3 + postcss** 以便与多数教程一致。若你改用 v4，请以官网安装指引为准。
