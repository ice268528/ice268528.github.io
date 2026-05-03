"use client";

import React, { useState } from 'react';
import { BrainCircuit, Code, FileText, Lightbulb, Database, Settings, Box, Layers, ArrowRight } from 'lucide-react';

// 核心数据配置
const IDEA_TYPES = [
  { id: 'paper', icon: FileText, label: '学术论文 (Research Paper)' },
  { id: 'repo', icon: Code, label: 'GitHub 代码库 (Code Repo)' },
  { id: 'product', icon: Lightbulb, label: '产品概念 (Product Concept)' },
  { id: 'article', icon: Box, label: '自媒体样本 (Article Samples)' },
];

const AGENT_DATA = {
  paper: {
    runtime: "🔄 跨学科研究综述智能体 (正在进行语义网络构建...)",
    skills: ["📄 PDF 深度解析器", "🌐 学术知识图谱检索", "🧮 复杂公式转译"],
    artifacts: ["📑 文献核心观点矩阵", "📊 研究演进时间轴图", "📝 逻辑大纲 V1"],
    memory: ["💾 检索以往学术写作的严谨语气设定", "💾 加载相关领域专有名词词典"],
    value: "将一次性论文阅读升级为可复用的研究综述流水线，大幅消除文献总结的重复劳动。"
  },
  repo: {
    runtime: "🔄 代码库逆向工程智能体 (正在解析目录树与依赖关系...)",
    skills: ["🔧 AST 语法树分析", "📖 README 语义理解", "📊 系统架构绘图"],
    artifacts: ["📁 核心模块功能清单", "🔗 API 接口定义文档", "💡 技术亮点提取报告"],
    memory: ["💾 加载过往技术博客的排版规范", "💾 提取作者偏好的代码高亮风格"],
    value: "深度消化整个 GitHub 仓库，自动输出具有技术深度的架构解析与使用教程。"
  },
  product: {
    runtime: "🔄 商业价值拆解智能体 (正在进行竞品多维度对比...)",
    skills: ["🕷️ 全网舆情爬虫", "📈 SWOT 分析模型生成", "🎯 用户画像推理"],
    artifacts: ["👥 目标受众痛点报告", "🏆 竞品优劣势横评矩阵", "💡 商业模式画布"],
    memory: ["💾 调用该品牌一贯的宣发口吻", "💾 回溯过往爆款产品文案结构"],
    value: "从单一概念出发，横向扩展商业上下文，生成结构严密的深度产品洞察文章。"
  },
  article: {
    runtime: "🔄 个人知识库对齐智能体 (正在进行语料特征提取...)",
    skills: ["📝 NLP 语境分析", "🎭 写作风格指纹提取", "🔍 信息密度检测"],
    artifacts: ["📊 爆款文章结构拆解", "🗣️ 金句与惯用词汇表", "📑 选题延伸思维导图"],
    memory: ["💾 更新创作者个人风格技能库", "💾 建立针对特定平台的流量密码档案"],
    value: "沉淀创作者的独特风格与技能，将碎片化的样本转化为可持续输出的内容生产力。"
  }
};

export default function ITPDashboard() {
  const [activeIdea, setActiveIdea] = useState('paper');
  const currentData = AGENT_DATA[activeIdea as keyof typeof AGENT_DATA];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-gray-800 pb-6 flex items-center gap-4">
          <BrainCircuit className="w-10 h-10 text-blue-500" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">ITP Agent System</h1>
            <p className="text-gray-400 text-sm mt-1">Idea to Publish - Long-horizon Content Workflow Orchestrator</p>
          </div>
        </header>

        {/* 控制面板 */}
        <section className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Select Idea Input</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {IDEA_TYPES.map((idea) => {
              const Icon = idea.icon;
              const isActive = activeIdea === idea.id;
              return (
                <button
                  key={idea.id}
                  onClick={() => setActiveIdea(idea.id)}
                  className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 text-left ${
                    isActive 
                      ? 'bg-blue-600/10 border-blue-500 text-blue-400 border' 
                      : 'bg-gray-950 border-gray-800 text-gray-400 border hover:border-gray-600 hover:text-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">{idea.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 动态状态监视器 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Agent Runtime */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <div className="flex items-center gap-2 mb-4 text-blue-400">
              <Settings className="w-5 h-5 animate-spin-slow" />
              <h3 className="font-semibold">Agent Runtime</h3>
            </div>
            <p className="font-mono text-sm text-green-400 bg-gray-950 p-3 rounded border border-gray-800">
              {currentData.runtime}
            </p>
          </div>

          {/* Active Skills */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
            <div className="flex items-center gap-2 mb-4 text-purple-400">
              <Layers className="w-5 h-5" />
              <h3 className="font-semibold">Active Pluggable Skills</h3>
            </div>
            <ul className="space-y-2">
              {currentData.skills.map((skill, idx) => (
                <li key={idx} className="text-sm bg-gray-950 px-3 py-2 rounded text-gray-300 flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-purple-500" /> {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Workspace Artifacts */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
            <div className="flex items-center gap-2 mb-4 text-orange-400">
              <Box className="w-5 h-5" />
              <h3 className="font-semibold">Workspace Artifacts</h3>
            </div>
            <ul className="space-y-2">
              {currentData.artifacts.map((artifact, idx) => (
                <li key={idx} className="text-sm bg-gray-950 px-3 py-2 rounded text-gray-300 flex items-center gap-2">
                   <ArrowRight className="w-3 h-3 text-orange-500" /> {artifact}
                </li>
              ))}
            </ul>
          </div>

          {/* Memory */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
            <div className="flex items-center gap-2 mb-4 text-teal-400">
              <Database className="w-5 h-5" />
              <h3 className="font-semibold">Memory Context</h3>
            </div>
            <ul className="space-y-2">
              {currentData.memory.map((mem, idx) => (
                <li key={idx} className="text-sm bg-gray-950 px-3 py-2 rounded text-gray-300 flex items-center gap-2">
                   <ArrowRight className="w-3 h-3 text-teal-500" /> {mem}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 价值总结 */}
        <section className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/50 rounded-xl p-6 text-center">
          <p className="text-lg font-medium text-gray-200">
            {currentData.value}
          </p>
        </section>

      </div>
    </div>
  );
}