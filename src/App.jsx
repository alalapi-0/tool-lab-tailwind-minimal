export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 font-sans text-slate-900">
      <div className="mx-auto max-w-md">
        <h1 className="mb-6 text-2xl font-bold tracking-tight">Tailwind CSS 最小实验</h1>

        {/* 一张「卡片」：用 utility class 描述样式，而不是单独写一个 .card { ... } */}
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">示例卡片标题</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            这段描述用来演示 Tailwind 的排版类：外边距、字号、行高、文字颜色都来自 class 名字。
          </p>
          <button
            type="button"
            className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            示例按钮
          </button>
        </article>
      </div>
    </main>
  );
}
