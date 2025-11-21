type Milestone = {
  year: string;
  title: string;
  detail: string;
};

const milestones: Milestone[] = [
  {
    year: "1943",
    title: "McCulloch-Pitts 神经元模型",
    detail: "提出简化的人工神经元与布尔逻辑联结，被视为神经网络与深度学习的起点。",
  },
  {
    year: "1950",
    title: "图灵测试",
    detail: "Alan Turing 在《Computing Machinery and Intelligence》中提出机器智能判定标准。",
  },
  {
    year: "1956",
    title: "达特茅斯会议",
    detail: "“Artificial Intelligence”作为学术概念被正式提出，奠定了学科起点。",
  },
  {
    year: "1958",
    title: "Rosenblatt 感知机",
    detail: "线性可分判别器引发早期连接主义热潮，为后续神经网络奠基。",
  },
  {
    year: "1966",
    title: "ELIZA 诞生",
    detail: "早期对话系统展示自然语言交互潜力，也暴露模式匹配局限。",
  },
  {
    year: "1997",
    title: "深蓝击败国际象棋冠军",
    detail: "IBM Deep Blue 以 3.5:2.5 战胜加里·卡斯帕罗夫，象征符号式和搜索式 AI 的巅峰。",
  },
  {
    year: "2012",
    title: "AlexNet 引爆深度学习",
    detail: "卷积神经网络在 ImageNet 取得显著优势，GPU 训练推动深度学习进入主流。",
  },
  {
    year: "2016",
    title: "AlphaGo 4:1 李世石",
    detail: "深度神经网络 + 蒙特卡洛树搜索的结合，展示强化学习与规划的强大协同。",
  },
  {
    year: "2017",
    title: "Transformer 架构提出",
    detail: "论文《Attention Is All You Need》用自注意力与并行训练革新序列建模，奠定大模型与多模态的核心基石。",
  },
  {
    year: "2018",
    title: "BERT 提示预训练-微调范式",
    detail: "双向 Transformer 预训练，显著提升 NLP 表达与理解，奠定大模型时代基础。",
  },
  {
    year: "2020",
    title: "GPT-3 规模化通用语言模型",
    detail: "1750 亿参数展现少样本泛化能力，标志大规模自回归模型的通用潜力。",
  },
  {
    year: "2021",
    title: "AlphaFold2 发布结构数据库",
    detail: "高精度蛋白质结构预测公开，证明自监督与注意力机制在科学领域的突破。",
  },
  {
    year: "2022",
    title: "生成式 AI 走向大众",
    detail: "Stable Diffusion 开源、ChatGPT 上线，文本到图像与对话式交互迅速普及。",
  },
  {
    year: "2023",
    title: "多模态与开放权重",
    detail: "GPT-4 引入视觉理解，LLaMA 系列开放权重带动开源生态与行业快速迭代。",
  },
  {
    year: "2024",
    title: "原生多模态与长上下文",
    detail: "GPT-4o 实现实时语音/视觉对话，Gemini 1.5 Pro 公测最高 100 万 tokens，上线 Claude 3 与 Llama 3 开源大模型。",
  },
  {
    year: "2025",
    title: "推理增强与端侧落地",
    detail: "厂商持续迭代多模态、长上下文与更高效推理模型，并推进端侧/混合部署以降低延迟和成本。",
  },
];

const frontierHighlights = [
  {
    title: "原生多模态",
    body: "从文字到图像、语音与视频，模型一次性跨模态理解与生成，交互更贴近人类沟通方式。",
    tags: ["GPT-4o", "Gemini 1.5", "实时语音"],
  },
  {
    title: "长上下文与外部记忆",
    body: "百万级上下文窗口与检索增强，让模型处理整本文档、长代码库与视频，不易遗忘关键信息。",
    tags: ["1M tokens", "RAG", "文档级推理"],
  },
  {
    title: "Agent 化与自动化",
    body: "工具调用、规划执行与反馈循环正在落地，模型不只回答，更能完成多步任务与业务流程。",
    tags: ["工具调用", "自主规划", "工作流"],
  },
  {
    title: "可信与可控",
    body: "评测集、事实核查、引用溯源与安全对齐并行推进，降低幻觉，保证合规与可解释性。",
    tags: ["评测", "检索引用", "安全对齐"],
  },
];

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-6 pt-8 sm:px-10 lg:px-14">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-10%] top-10 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="absolute right-[-8%] top-[28%] h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
          <div className="absolute inset-x-0 bottom-[-10%] h-72 bg-gradient-to-t from-blue-50 to-transparent" />
        </div>

        <header className="flex flex-col gap-5 text-center sm:text-left">
          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">
              AI Evolution Poster
            </span>
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl font-semibold leading-tight text-slate-900 sm:text-6xl">
              人工智能发展历程
            </h1>
            <p className="text-xl leading-relaxed text-slate-600 sm:text-2xl">
              从符号主义到深度学习，再到大模型驱动的多模态与 Agent，AI 正在以可验证的突破重塑科学、工业和创意流程。
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-4 text-left shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-base font-semibold text-blue-700 shadow-inner">
                LLM
              </div>
              <p className="text-base leading-relaxed text-slate-700">
                大模型时代：推理、多模态、长上下文与工具调用正在形成新一代智能基础设施。
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white/70 px-4 py-4 text-left shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold uppercase text-white">
                Now
              </div>
              <p className="text-base leading-relaxed text-slate-700">
                关键词：原生多模态 · 百万级上下文 · 实时语音 · 可信评测。
              </p>
            </div>
          </div>
        </header>

        <section className="rounded-3xl border border-blue-100 bg-white/85 shadow-xl shadow-blue-100/40">
          <div className="border-b border-blue-100/80 px-6 pb-5 pt-6 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-blue-600 text-center text-sm font-semibold uppercase tracking-wide text-white">
                Mil
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">1943 - 2025</p>
                <h2 className="text-3xl font-semibold text-slate-900">AI 关键里程碑</h2>
              </div>
            </div>
          </div>
          <div className="relative px-6 py-8 sm:px-10">
            <div className="absolute left-6 top-10 bottom-10 hidden w-px bg-gradient-to-b from-blue-200 via-blue-300 to-blue-100 sm:block" />
            <div className="space-y-7">
              {milestones.map((item) => (
                <div key={item.year} className="flex gap-5 sm:gap-7">
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-center sm:pt-1">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-white text-base font-semibold text-blue-700 shadow-md shadow-blue-100/60">
                      {item.year}
                    </div>
                    <div className="h-full w-px bg-blue-100" />
                  </div>
                  <div className="sm:hidden">
                    <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {item.year}
                    </div>
                  </div>
                  <div className="relative flex-1 rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-blue-50/60 to-white p-6 shadow-md shadow-blue-100/60">
                    <div className="absolute left-[-22px] top-6 hidden h-3 w-3 rounded-full border border-white bg-blue-400 shadow shadow-blue-200 sm:block" />
                    <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-700">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-5 rounded-3xl border border-blue-100 bg-white/90 px-6 py-6 shadow-lg shadow-blue-100/40 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-blue-500 text-center text-sm font-semibold uppercase tracking-wide text-white">
                Now
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Post-LLM Era</p>
                <h2 className="text-3xl font-semibold text-slate-900">大模型时代焦点</h2>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">推理与规划</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  在工具调用和检索的配合下，模型可完成分步骤推理和代码/数据分析，适配更多业务场景。
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-4 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">多模态交互</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  支持图像理解、语音对话乃至视频摘要，让产品体验从单一文本跃迁到实时、多通道交互。
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">长文档与代码库</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  百万级上下文与结构化检索结合，使模型能够处理长专利、法规、项目文档或整仓代码。 
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-4 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">可信评测</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  更透明的基准、引用与安全对齐成为部署前置，确保输出可追溯、可验证、可合规。
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-blue-100 bg-white/90 px-6 py-6 shadow-lg shadow-blue-100/40 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-blue-500 text-center text-sm font-semibold uppercase tracking-wide text-white">
                Next
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">What&apos;s Emerging</p>
                <h2 className="text-3xl font-semibold text-slate-900">前沿趋势</h2>
              </div>
            </div>
            <div className="grid gap-4">
              {frontierHighlights.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-blue-100 bg-gradient-to-r from-white to-blue-50/60 p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                    <div className="flex gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-base leading-relaxed text-slate-700">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-8 text-white shadow-2xl shadow-blue-200/50 sm:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-100">Impact</p>
              <h2 className="text-3xl font-semibold leading-tight">AI 的影响力正在加速外溢</h2>
              <p className="text-sm leading-relaxed text-blue-50">
                科研（蛋白质、材料）、工业（设计、质量检测）、软件（代码生成、测试）、创意（视频、音频）、教育与政务服务都在被新一代模型重塑。
              </p>
            </div>
            <div className="grid w-full max-w-md grid-cols-2 gap-3 sm:max-w-none sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4 text-center shadow-sm shadow-blue-900/30">
                <p className="text-3xl font-semibold">多模态</p>
                <p className="mt-1 text-xs text-blue-100">单次对话联动语音、图像与文本</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 text-center shadow-sm shadow-blue-900/30">
                <p className="text-3xl font-semibold">长上下文</p>
                <p className="mt-1 text-xs text-blue-100">百万 token 级输入让知识连续</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 text-center shadow-sm shadow-blue-900/30">
                <p className="text-3xl font-semibold">Agent</p>
                <p className="mt-1 text-xs text-blue-100">结合工具与反馈完成多步任务</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
