"use client";

import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { BrainCircuit, Code, FileText, Lightbulb, Database, Settings, Box, Layers, ArrowRight, ChevronDown } from 'lucide-react';

const IDEA_TYPES = [
  { id: 'paper', icon: FileText, label: '学术论文 (Paper)' },
  { id: 'repo', icon: Code, label: '代码库 (Repo)' },
  { id: 'product', icon: Lightbulb, label: '产品概念 (Product)' },
  { id: 'article', icon: Box, label: '自媒体样本 (Article)' },
];

const AGENT_DATA = {
  paper: {
    runtime: "🔄 跨学科研究综述智能体 (正在构建语义网络...)",
    skills: ["📄 PDF 深度解析器", "🌐 学术知识图谱检索", "🧮 复杂公式转译"],
    artifacts: ["📑 文献核心观点矩阵", "📊 研究演进时间轴图"],
    memory: ["💾 检索以往学术写作的严谨语气设定"],
    value: "将一次性论文阅读升级为可复用的研究综述流水线。"
  },
  repo: {
    runtime: "🔄 代码库逆向工程智能体 (正在解析依赖关系...)",
    skills: ["🔧 AST 语法树分析", "📖 README 语义理解"],
    artifacts: ["📁 核心模块功能清单", "🔗 API 接口定义文档"],
    memory: ["💾 提取作者偏好的代码高亮风格"],
    value: "深度消化整个 GitHub 仓库，自动输出具有技术深度的架构解析。"
  },
  product: {
    runtime: "🔄 商业价值拆解智能体 (正在进行竞品对比...)",
    skills: ["🕷️ 全网舆情爬虫", "📈 SWOT 分析模型生成"],
    artifacts: ["👥 目标受众痛点报告", "💡 商业模式画布"],
    memory: ["💾 回溯过往爆款产品文案结构"],
    value: "从单一概念出发，生成结构严密的深度产品洞察文章。"
  },
  article: {
    runtime: "🔄 个人知识库对齐智能体 (正在提取语料特征...)",
    skills: ["📝 NLP 语境分析", "🎭 写作风格指纹提取"],
    artifacts: ["📊 爆款文章结构拆解", "🗣️ 金句与惯用词汇表"],
    memory: ["💾 建立针对特定平台的流量密码档案"],
    value: "沉淀创作者的独特风格，将碎片化样本转化为内容生产力。"
  }
};

export default function ITPDashboard() {
  const [activeIdea, setActiveIdea] = useState('paper');
  const currentData = AGENT_DATA[activeIdea as keyof typeof AGENT_DATA];

  return (
    // 移除 overflow-hidden，允许页面上下滚动
    <div className="relative bg-black text-white font-sans">
      
      {/* 1. 固定的 3D 背景层：使用 fixed 铺满全屏，永远在最底层 */}
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <Spline scene="https://prod.spline.design/0F8ofUVhsFkUZ9bs/scene.splinecode" />
      </div>

      {/* 2. 滚动内容容器：使用 relative z-10 盖在 3D 模型上方 */}
      <div className="relative z-10 flex flex-col">
        
        {/* === 第一屏：Hero Section（留白，让 3D 模型完全展现） === */}
        <div className="h-screen flex flex-col items-center justify-end pb-12 pointer-events-none">
          {/* 这是一个提示下滑的呼吸动画箭头 */}
          <div className="flex flex-col items-center text-white/50 animate-bounce">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase mb-3">Scroll to Explore</span>
            <ChevronDown className="w-6 h-6 opacity-70" />
          </div>
        </div>

        {/* === 第二屏：ITP 控制台内容 === */}
        {/* 背景加上一层黑色渐变和毛玻璃，随着滚动遮住背后的 3D 模型 */}
        <div className="min-h-screen bg-black/60 backdrop-blur-xl border-t border-white/10 pt-24 pb-24 px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Header */}
            <header className="pb-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
                  <BrainCircuit className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                  ITP Agent System
                </h1>
              </div>
              <p className="text-white/60 text-lg ml-1">Idea to Publish • Workflow Orchestrator</p>
            </header>

            {/* 控制面板主体内容 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* 左侧菜单 */}
              <div className="lg:col-span-4 space-y-4">
                <h2 className="text-sm font-semibold text-white/50 uppercase tracking-widest ml-1">Input Source</h2>
                <div className="flex flex-col gap-3">
                  {IDEA_TYPES.map((idea) => {
                    const Icon = idea.icon;
                    const isActive = activeIdea === idea.id;
                    return (
                      <button
                        key={idea.id}
                        onClick={() => setActiveIdea(idea.id)}
                        className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 backdrop-blur-md border ${
                          isActive 
                            ? 'bg-white/20 border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.1)] translate-x-2' 
                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-white/50'}`} />
                        <span className={`font-medium ${isActive ? 'text-white' : 'text-white/60'}`}>{idea.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 右侧数据看板 */}
              <div className="lg:col-span-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col justify-between hover:bg-white/10 transition-colors duration-500">
                <div className="space-y-8">
                  {/* Runtime Status */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-white/80">
                      <Settings className="w-5 h-5 animate-[spin_3s_linear_infinite]" />
                      <h3 className="font-semibold tracking-wide">Runtime State</h3>
                    </div>
                    <div className="bg-black/40 border border-white/10 rounded-xl p-4 font-mono text-sm text-green-400">
                      {currentData.runtime}
                    </div>
                  </div>

                  {/* Skills & Artifacts */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-white/80 mb-3 flex items-center gap-2">
                        <Layers className="w-4 h-4" /> Active Skills
                      </h3>
                      <ul className="space-y-2">
                        {currentData.skills.map((skill, idx) => (
                          <li key={idx} className="text-sm bg-black/30 px-3 py-2 rounded-lg text-white/70 flex items-center gap-2 border border-white/5">
                            <ArrowRight className="w-3 h-3 opacity-50" /> {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white/80 mb-3 flex items-center gap-2">
                        <Box className="w-4 h-4" /> Artifacts
                      </h3>
                      <ul className="space-y-2">
                        {currentData.artifacts.map((artifact, idx) => (
                          <li key={idx} className="text-sm bg-black/30 px-3 py-2 rounded-lg text-white/70 flex items-center gap-2 border border-white/5">
                             <ArrowRight className="w-3 h-3 opacity-50" /> {artifact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Value Proposition */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-lg font-light text-white/90 leading-relaxed">
                    "{currentData.value}"
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}