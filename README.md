# 🧠 ITP (Idea to Publish) - Multi-Agent Content Workflow System

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-v1.0.0--alpha-orange.svg)
![Status](https://img.shields.io/badge/status-Active_Development-brightgreen.svg)

> **一句话目标**：搭建一个面向内容创作者的长任务 Agent 系统，把 idea、论文、产品、GitHub 项目或文章样本，自动化转化为高质量的可发布内容。

## 🎯 问题陈述 (Problem Statement)
自媒体与技术内容创作者在选题、资料理解、研究、写作风格复用、内容成稿之间存在大量重复劳动。现有的大部分 AI 写作工具多停留在单轮对话或浅层总结，**难以稳定处理**诸如长篇论文、深度产品调研、复杂代码仓库解读以及个人风格技能沉淀等**长周期、高上下文依赖**的长任务 (Long-horizon Tasks)。

## 💡 价值主张 (Value Proposition)
ITP 通过构建可编排的 **Agent Runtime**、**可插拔 Skills**、**Workspace Artifacts**、**Memory** 与后续平台化能力，彻底改变内容创作范式。我们将一次性、单维度的 AI 内容生成，升级为**可复用、可追踪、可交接的 idea-to-publish 自动化工作流**。

## 🏗️ 核心架构 (System Architecture)

- **Agent Runtime (智能体运行环境)**: 负责长任务拆解与多智能体协同调度 (Orchestration)。
- **Pluggable Skills (可插拔技能)**: 动态挂载的工具集（如：网页爬虫、GitHub API 解析、论文 PDF 语义提取）。
- **Workspace Artifacts (工作区中间件)**: 沉淀中间思考过程与结构化数据，确保长任务不跑偏。
- **Memory (记忆系统)**: 基于向量数据库，实现创作者过往写作风格 (Style-Alignment) 与领域知识的长期沉淀。

## 🚀 快速开始 (Getting Started)

### 环境要求
- Node.js >= 18.0.0
- 一台用于部署后端大模型服务的 VPS (推荐 Ubuntu 22.04)

### 安装
\`\`\`bash
git clone https://github.com/your-username/itp-agent-system.git
cd itp-agent-system
npm install
npm run dev
\`\`\`

## 🛣️ 路线图 (Roadmap)
- [x] Agent Runtime 基础调度器架构设计
- [x] 多模态数据解析 (PDF, Web, Git) 技能集成
- [ ] 长期记忆库 (Vector DB) 接入与风格克隆
- [ ] 可视化 Workflow 编排面板开发
