# tool-lab-tailwind-minimal

在 **React + Vite** 里接入 **Tailwind CSS**，做一张最简单的卡片（标题 / 描述 / 按钮）。

## 这个工具是什么

- **Tailwind CSS**：一种「实用类优先（utility-first）」的 CSS 框架。你在 JSX 里写很多小段 class（如 `flex`、`p-4`、`text-sm`），由 Tailwind 生成对应样式。
- **和普通 CSS 的区别**：较少手写大块 `.my-card { ... }`（仍可配合 `@layer components` 抽取，但入门阶段先体会 utility）。

## Utility class 是什么

形如 `rounded-xl`、`bg-white`、`hover:bg-blue-700` 的类名，每一小段只做一件事；组合起来描述完整 UI。

## 这个最小实验验证什么

- `tailwind.config.js` 的 `content` 指向了你的源码路径（Tailwind 才能「扫描」用到的类）。
- PostCSS 管道里接了 `tailwindcss` + `autoprefixer`。
- 浏览器里卡片样式生效。

## 为什么程序员常用它

- 改样式不必在 HTML 与 CSS 文件之间来回跳转。
- 设计系统在团队内可通过配置主题扩展统一间距与颜色。

## 安装步骤

```bash
cd tool-lab-tailwind-minimal
npm install
```

## 运行步骤

```bash
npm run dev
```

## 成功后应该看到什么

- 浅灰背景上一张白卡片，蓝底按钮；鼠标悬停按钮颜色略变深。

## 常见失败原因

| 现象 | 可能原因 |
| --- | --- |
| 样式完全没生效 | `src/index.css` 未 `@tailwind` 三行；或 `main.jsx` 未 import `./index.css` |
| 构建报错 PostCSS | `postcss.config.js` 缺失或包版本冲突 |
| 某些 class 无效 | `tailwind.config.js` 的 `content` 路径没有覆盖到你的文件 |

## 下一步可以怎么扩展

- 打开 Tailwind 官方文档搜索任意 class，试着改按钮圆角：`rounded-full`。
- 运行 `npm run build`，理解「生产环境会 purge 未使用的样式」（体积更小）。

## 安全注意事项

- 纯样式实验；无密钥。

## 官方文档（参数以文档为准）

`https://tailwindcss.com/docs/installation`

笔记：[`docs/NOTES.md`](./docs/NOTES.md)。
