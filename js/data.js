/**
 * 人形机器人中的具身智能智能体：高级认知功能发展现状与瓶颈
 * 动态时间线知识图谱数据中心（最终补充完善版）
 * 基于原增强版 + 用户上传的深度填充版合并；对夸张/不确定表述做了学术化与可验证化改写。
 */

window.KNOWLEDGE_GRAPH = {
  "width": 5200,
  "height": 1780,
  "title": "人形机器人中的具身智能智能体：高级认知功能发展现状与瓶颈",
  "subtitle": "感知—理解—规划—决策—行动：时间线知识图谱",
  "time": {
    "start": 1948,
    "end": 2032,
    "tickInterval": 5
  },
  "stages": [
    {
      "id": "stage-embryonic",
      "name": "控制论与早期仿人机器萌芽",
      "start": 1948,
      "end": 1985,
      "description": "从控制论、符号 AI、早期仿人机器人到 WABOT/ASIMO 前身，核心问题是：机器能否感知、行走、说话与执行简单任务。智能多为规则与工程堆叠，身体与控制仍是主瓶颈。",
      "color": "#edf6ff"
    },
    {
      "id": "stage-classical",
      "name": "行为式机器人与概率机器人阶段",
      "start": 1986,
      "end": 2005,
      "description": "Brooks 反对纯符号模型，强调感知—动作闭环；SLAM、贝叶斯滤波、POMDP、经典规划成为移动机器人与不确定决策的主轴。",
      "color": "#f4f1ff"
    },
    {
      "id": "stage-ros-drc",
      "name": "ROS、仿真与灾难救援工程化阶段",
      "start": 2006,
      "end": 2015,
      "description": "ROS、Gazebo、PR2、DARPA Robotics Challenge 让复杂机器人软件工程和人形机器人系统集成成为主问题。大量任务仍依赖遥操作和人工脚本。",
      "color": "#fff7e6"
    },
    {
      "id": "stage-deep-rl",
      "name": "深度学习、模仿学习与 Sim2Real 阶段",
      "start": 2016,
      "end": 2021,
      "description": "深度视觉、强化学习、行为克隆、轨迹优化、MPC 与仿真合成数据推动运动控制和操作能力进步，但泛化、长程任务和安全闭环仍弱。",
      "color": "#ecfff4"
    },
    {
      "id": "stage-foundation",
      "name": "机器人基础模型与跨本体数据阶段",
      "start": 2022,
      "end": 2024,
      "description": "RT-1、RT-2、Open X-Embodiment、OpenVLA、Octo、π0 等把语言、视觉、动作和跨机器人数据统一起来，机器人智能开始出现类似大模型扩展路线。",
      "color": "#fff0f4"
    },
    {
      "id": "stage-industrial-vla",
      "name": "人形机器人 VLA/Physical AI 产业化阶段",
      "start": 2025,
      "end": 2026,
      "description": "Figure Helix、GR00T N1、Tesla Optimus、Atlas、Digit、Walker S2、Unitree、Fourier、XPENG 等路线并行。问题从“能演示”转向“能稳定闭环工作、规模制造、收集数据”。",
      "color": "#eefafc"
    },
    {
      "id": "stage-frontier",
      "name": "当前瓶颈与未来路线分化",
      "start": 2027,
      "end": 2032,
      "description": "未来几年关键竞争在数据飞轮、世界模型、记忆、长程规划、触觉灵巧手、安全闭环、能耗与成本之间展开。公开资料不足，许多产业能力仍需实测验证。",
      "color": "#f7f7f7"
    }
  ],
  "lanes": [
    {
      "id": "lane-overview",
      "name": "总论/阶段判断",
      "y": 90,
      "color": "#64748b"
    },
    {
      "id": "lane-theory",
      "name": "理论范式与认知架构",
      "y": 220,
      "color": "#3b82f6"
    },
    {
      "id": "lane-perception",
      "name": "感知/语义理解/世界模型",
      "y": 360,
      "color": "#06b6d4"
    },
    {
      "id": "lane-planning",
      "name": "规划/决策/记忆",
      "y": 500,
      "color": "#8b5cf6"
    },
    {
      "id": "lane-control",
      "name": "运动控制/操作/闭环",
      "y": 640,
      "color": "#ef4444"
    },
    {
      "id": "lane-data",
      "name": "数据/训练/仿真",
      "y": 780,
      "color": "#22c55e"
    },
    {
      "id": "lane-models",
      "name": "VLA/机器人基础模型",
      "y": 920,
      "color": "#f59e0b"
    },
    {
      "id": "lane-tools",
      "name": "系统/工具/平台",
      "y": 1060,
      "color": "#14b8a6"
    },
    {
      "id": "lane-industry",
      "name": "公司/产品/产业部署",
      "y": 1200,
      "color": "#f97316"
    },
    {
      "id": "lane-benchmark",
      "name": "评测/基准/场景",
      "y": 1340,
      "color": "#a855f7"
    },
    {
      "id": "lane-bottleneck",
      "name": "瓶颈/争议/未来问题",
      "y": 1480,
      "color": "#dc2626"
    },
    {
      "id": "lane-people",
      "name": "人物/组织",
      "y": 1620,
      "color": "#0f766e"
    }
  ],
  "groups": [
    {
      "id": "group-symbolic",
      "name": "符号规划/经典 AI",
      "color": "#6366f1"
    },
    {
      "id": "group-behavior",
      "name": "行为式/闭环控制",
      "color": "#ef4444"
    },
    {
      "id": "group-probabilistic",
      "name": "概率机器人/POMDP",
      "color": "#0ea5e9"
    },
    {
      "id": "group-learning",
      "name": "深度学习/模仿/RL",
      "color": "#22c55e"
    },
    {
      "id": "group-vla",
      "name": "VLA/机器人基础模型",
      "color": "#f59e0b"
    },
    {
      "id": "group-humanoid",
      "name": "人形机器人硬件/产品",
      "color": "#f97316"
    },
    {
      "id": "group-data",
      "name": "数据/仿真/工具链",
      "color": "#14b8a6"
    },
    {
      "id": "group-bottleneck",
      "name": "瓶颈与未来路线",
      "color": "#dc2626"
    }
  ],
  "nodes": [
    {
      "id": "root",
      "type": "root",
      "name": "人形机器人中的具身智能智能体：高级认知决策系统",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-overview",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "感知—理解—规划—决策—行动闭环的产业现状、技术路线与瓶颈",
      "summary": "该图谱聚焦人形机器人高级认知系统：开放世界感知、语义理解、任务规划、决策、记忆、世界模型、数据飞轮、低层控制闭环与产业部署之间的耦合关系。",
      "definition": "人形机器人具身智能体不是单一 VLA 模型或单一硬件平台，而是由身体、传感器、数据、世界表示、策略模型、任务规划、安全约束、低层控制与运维平台共同构成的闭环系统。",
      "problem": "关键问题不是让机器人在发布会完成一次 demo，而是让它在真实工厂、仓库、家庭等非结构化环境中长时间稳定工作、能从失败中恢复、能持续产生数据并反哺模型。",
      "sources": [
        {
          "name": "Vision-Language-Action Models survey",
          "url": "https://arxiv.org/html/2505.04769v1"
        },
        {
          "name": "Humanoid Robots and Humanoid AI survey",
          "url": "https://arxiv.org/html/2405.15775v2"
        },
        {
          "name": "Opportunities, challenges and roadmap for humanoid robots",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12783740/"
        }
      ],
      "principle": "判断“卡在身体还是智能”应拆成两个层面：短期可部署性受硬件可靠性、成本、能耗、灵巧手和维护约束；通用性、迁移性和长程自主性则主要受数据、世界模型、记忆、规划决策与闭环控制约束。",
      "influence": "图谱的核心目标是将“身体—数据—模型—控制—部署”拆开分析，再重新放回一个系统闭环中评估。",
      "difference": "相比传统工业机器人固定轨迹示教，人形具身智能体必须处理开放词汇对象、动态人类环境、接触不确定性、多步骤任务和安全边界。",
      "relation": "根节点向下分解为身体硬件瓶颈、智能认知瓶颈、数据飞轮瓶颈、世界模型瓶颈、长程规划瓶颈、高低频控制接口瓶颈与产业 ROI 闭环。"
    },
    {
      "id": "stage-embryonic-node",
      "type": "stage",
      "name": "控制论与早期仿人机器萌芽",
      "year": 1948,
      "stage": "stage-embryonic",
      "lane": "lane-overview",
      "group": "group-bottleneck",
      "importance": 4,
      "subtitle": "1948–1985",
      "summary": "从控制论、符号 AI、早期仿人机器人到 WABOT/ASIMO 前身，核心问题是：机器能否感知、行走、说话与执行简单任务。智能多为规则与工程堆叠，身体与控制仍是主瓶颈。",
      "definition": "从控制论、符号 AI、早期仿人机器人到 WABOT/ASIMO 前身，核心问题是：机器能否感知、行走、说话与执行简单任务。智能多为规则与工程堆叠，身体与控制仍是主瓶颈。",
      "principle": "主流范式是符号表示、搜索规划和早期控制论反馈。机器人智能多依赖人工设计的规则、静态环境假设和开环执行。",
      "problem": "从控制论、符号 AI、早期仿人机器人到 WABOT/ASIMO 前身，核心问题是：机器能否感知、行走、说话与执行简单任务。智能多为规则与工程堆叠，身体与控制仍是主瓶颈。",
      "influence": "这一阶段解决了“机器是否可以被组织成感知—规划—行动系统”的可行性问题。",
      "relation": "后续行为式机器人会反击这种过度中心化、过度符号化的范式。",
      "difference": "遗留瓶颈是身体笨重、传感器粗糙、控制带宽不足、对现实环境动态性与噪声缺乏处理能力。"
    },
    {
      "id": "stage-classical-node",
      "type": "stage",
      "name": "行为式机器人与概率机器人阶段",
      "year": 1986,
      "stage": "stage-classical",
      "lane": "lane-overview",
      "group": "group-bottleneck",
      "importance": 4,
      "subtitle": "1986–2005",
      "summary": "Brooks 反对纯符号模型，强调感知—动作闭环；SLAM、贝叶斯滤波、POMDP、经典规划成为移动机器人与不确定决策的主轴。",
      "definition": "Brooks 反对纯符号模型，强调感知—动作闭环；SLAM、贝叶斯滤波、POMDP、经典规划成为移动机器人与不确定决策的主轴。",
      "principle": "主流范式从纯符号规划转向行为式闭环、概率状态估计、SLAM 与 POMDP。",
      "problem": "Brooks 反对纯符号模型，强调感知—动作闭环；SLAM、贝叶斯滤波、POMDP、经典规划成为移动机器人与不确定决策的主轴。",
      "influence": "它让机器人承认“世界不可完全观测”，并用概率方法显式处理不确定性。",
      "relation": "后续 TAMP、视觉伺服、MPC 与现代学习策略都吸收了该阶段的状态估计和闭环思想。",
      "difference": "遗留瓶颈是状态空间和任务空间维度爆炸，面对灵巧操作、开放词汇语义和常识推理仍然脆弱。"
    },
    {
      "id": "stage-ros-drc-node",
      "type": "stage",
      "name": "ROS、仿真与灾难救援工程化阶段",
      "year": 2006,
      "stage": "stage-ros-drc",
      "lane": "lane-overview",
      "group": "group-bottleneck",
      "importance": 4,
      "subtitle": "2006–2015",
      "summary": "ROS、Gazebo、PR2、DARPA Robotics Challenge 让复杂机器人软件工程和人形机器人系统集成成为主问题。大量任务仍依赖遥操作和人工脚本。",
      "definition": "ROS、Gazebo、PR2、DARPA Robotics Challenge 让复杂机器人软件工程和人形机器人系统集成成为主问题。大量任务仍依赖遥操作和人工脚本。",
      "principle": "主流方法：ROS 中间件、Gazebo/MuJoCo 仿真、PR2/Atlas 平台、TAMP、MPC/WBC、DARPA 式任务评测。",
      "problem": "ROS、Gazebo、PR2、DARPA Robotics Challenge 让复杂机器人软件工程和人形机器人系统集成成为主问题。大量任务仍依赖遥操作和人工脚本。",
      "influence": "解决了软件生态和系统集成问题，同时暴露真实人形机器人在速度、可靠性、自主性和遥操作依赖上的巨大短板。",
      "relation": "DRC 的经验说明，身体控制和工程系统不成熟时，高层智能无法稳定落地；这直接推动后续学习型控制和数据驱动方法。"
    },
    {
      "id": "stage-deep-rl-node",
      "type": "stage",
      "name": "深度学习、模仿学习与 Sim2Real 阶段",
      "year": 2016,
      "stage": "stage-deep-rl",
      "lane": "lane-overview",
      "group": "group-bottleneck",
      "importance": 4,
      "subtitle": "2016–2021",
      "summary": "深度视觉、强化学习、行为克隆、轨迹优化、MPC 与仿真合成数据推动运动控制和操作能力进步，但泛化、长程任务和安全闭环仍弱。",
      "definition": "深度视觉、强化学习、行为克隆、轨迹优化、MPC 与仿真合成数据推动运动控制和操作能力进步，但泛化、长程任务和安全闭环仍弱。",
      "principle": "主流方法：行为克隆、DAgger、深度 RL、PPO/SAC、扩散策略、域随机化、Sim2Real、视觉表征预训练。",
      "problem": "深度视觉、强化学习、行为克隆、轨迹优化、MPC 与仿真合成数据推动运动控制和操作能力进步，但泛化、长程任务和安全闭环仍弱。",
      "influence": "显著提升了抓取、操作、移动和全身控制中的若干技能，但在开放世界泛化、长程规划和安全恢复方面仍脆弱。",
      "relation": "该阶段把“数据”和“策略学习”推到核心位置，为 RT-1、Open X-Embodiment、OpenVLA 等基础模型路线提供数据与算法基础。"
    },
    {
      "id": "stage-foundation-node",
      "type": "stage",
      "name": "机器人基础模型与跨本体数据阶段",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-overview",
      "group": "group-bottleneck",
      "importance": 4,
      "subtitle": "2022–2024",
      "summary": "RT-1、RT-2、Open X-Embodiment、OpenVLA、Octo、π0 等把语言、视觉、动作和跨机器人数据统一起来，机器人智能开始出现类似大模型扩展路线。",
      "definition": "RT-1、RT-2、Open X-Embodiment、OpenVLA、Octo、π0 等把语言、视觉、动作和跨机器人数据统一起来，机器人智能开始出现类似大模型扩展路线。",
      "principle": "主流方法转向 VLM/LLM/VLA、跨本体机器人数据、动作 token 化、扩散/flow matching 动作生成和通用策略预训练。",
      "problem": "RT-1、RT-2、Open X-Embodiment、OpenVLA、Octo、π0 等把语言、视觉、动作和跨机器人数据统一起来，机器人智能开始出现类似大模型扩展路线。",
      "influence": "该阶段让机器人第一次明显接入互联网语义知识和大模型扩展规律。",
      "relation": "产业化阶段会围绕“谁能形成真实部署数据飞轮”展开竞争。",
      "difference": "遗留瓶颈是机器人真实数据远少于文本图像数据、动作空间连续而高频、物理失败代价高、长程任务误差会复合。"
    },
    {
      "id": "stage-industrial-vla-node",
      "type": "stage",
      "name": "人形机器人 VLA/Physical AI 产业化阶段",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-overview",
      "group": "group-bottleneck",
      "importance": 4,
      "subtitle": "2025–2026",
      "summary": "Figure Helix、GR00T N1、Tesla Optimus、Atlas、Digit、Walker S2、Unitree、Fourier、XPENG 等路线并行。问题从“能演示”转向“能稳定闭环工作、规模制造、收集数据”。",
      "definition": "Figure Helix、GR00T N1、Tesla Optimus、Atlas、Digit、Walker S2、Unitree、Fourier、XPENG 等路线并行。问题从“能演示”转向“能稳定闭环工作、规模制造、收集数据”。",
      "principle": "人形机器人公司开始把硬件本体、VLA/机器人基础模型、仿真平台、遥操作数据采集和工厂/仓储试点绑定成完整系统。",
      "problem": "Figure Helix、GR00T N1、Tesla Optimus、Atlas、Digit、Walker S2、Unitree、Fourier、XPENG 等路线并行。问题从“能演示”转向“能稳定闭环工作、规模制造、收集数据”。",
      "influence": "问题从“能不能做出一次惊艳演示”转向“能不能稳定重复、可维护、可审计、可规模部署”。",
      "relation": "这一阶段同时暴露身体瓶颈和智能瓶颈，但更关键的是二者之间的闭环耦合。",
      "difference": "公开演示常无法完整披露遥操作比例、失败率、持续运行时长、真实自主性和部署 ROI，因此必须谨慎解读。"
    },
    {
      "id": "stage-frontier-node",
      "type": "stage",
      "name": "当前瓶颈与未来路线分化",
      "year": 2027,
      "stage": "stage-frontier",
      "lane": "lane-overview",
      "group": "group-bottleneck",
      "importance": 4,
      "subtitle": "2027–2032",
      "summary": "未来几年关键竞争在数据飞轮、世界模型、记忆、长程规划、触觉灵巧手、安全闭环、能耗与成本之间展开。公开资料不足，许多产业能力仍需实测验证。",
      "definition": "未来几年关键竞争在数据飞轮、世界模型、记忆、长程规划、触觉灵巧手、安全闭环、能耗与成本之间展开。公开资料不足，许多产业能力仍需实测验证。",
      "principle": "可能路线：分层具身智能体、机器人 RAG、可预测世界模型、触觉基础模型、形式化安全、云边车队学习、低成本可靠身体。",
      "problem": "未来几年关键竞争在数据飞轮、世界模型、记忆、长程规划、触觉灵巧手、安全闭环、能耗与成本之间展开。公开资料不足，许多产业能力仍需实测验证。",
      "influence": "未来范式可能从“单个 VLA 模型”转向“高层认知模型 + 技能库 + 世界模型 + 安全监督器 + 数据飞轮”的系统栈。",
      "relation": "当前很多关系属于技术脉络推断而非直接继承；真正胜出的路线取决于真实部署反馈，而不是论文或演示数量。"
    },
    {
      "id": "question-body-vs-mind",
      "type": "bottleneck",
      "name": "到底卡在身体还是智能？",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-overview",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "系统耦合判断",
      "summary": "短期部署常卡在硬件可靠性、成本、能耗、灵巧手和维护；通用自主性主要卡在智能：真实数据、世界模型、长期记忆、长程规划、闭环控制和安全评测。",
      "definition": "“身体 vs 智能”不是二选一问题，而是系统耦合问题：身体不可靠则无法采集高质量数据，数据不足则模型无法泛化，模型不稳又会放大控制和安全风险。",
      "cause": "硬件、数据、模型、控制和部署 ROI 相互制约，任何一环不足都会限制商业闭环。",
      "openProblems": "需要把失败案例按硬件、感知、规划、策略、控制、安全、人机协作和运维原因细分，而不是笼统归因。",
      "sources": [
        {
          "name": "Opportunities, challenges and roadmap for humanoid robots",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12783740/"
        },
        {
          "name": "Deloitte Physical AI and humanoid robots",
          "url": "https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2026/physical-ai-humanoid-robots.html"
        },
        {
          "name": "NVIDIA GR00T Reference Humanoid Robot",
          "url": "https://nvidianews.nvidia.com/news/nvidia-open-humanoid-robot-reference-design"
        }
      ],
      "affectedNodes": [
        "VLA",
        "机器人基础模型",
        "全身控制",
        "灵巧手",
        "数据飞轮",
        "真实世界评测"
      ],
      "relation": "该节点向下分解为数据匮乏、长程规划、世界模型、高低频控制、灵巧手、能耗和真实评测等瓶颈。"
    },
    {
      "id": "cybernetics",
      "type": "theory",
      "name": "控制论 Cybernetics",
      "year": 1948,
      "stage": "stage-embryonic",
      "lane": "lane-theory",
      "group": "group-probabilistic",
      "importance": 4,
      "subtitle": "Norbert Wiener",
      "summary": "把动物与机器的通信、反馈和控制统一起来，为机器人闭环控制、状态估计和自适应系统提供早期思想基础。",
      "definition": "研究反馈、通信与控制的跨学科理论。",
      "principle": "用反馈回路修正系统行为；在机器人中对应感知—控制—行动闭环。",
      "problem": "解决机器如何根据环境反馈调节行为的问题。",
      "influence": "影响控制理论、智能体理论、机器人闭环控制和现代 physical AI。"
    },
    {
      "id": "symbolic-ai",
      "type": "theory",
      "name": "符号 AI 与物理符号系统假说",
      "year": 1956,
      "stage": "stage-embryonic",
      "lane": "lane-theory",
      "group": "group-symbolic",
      "importance": 4,
      "subtitle": "符号 AI、STRIPS 与 Sense–Plan–Act 的源头",
      "summary": "早期 AI 将智能理解为符号表示、搜索和逻辑推理，为任务规划和知识表示提供基础。",
      "definition": "通过谓词、对象、前置条件、后效和搜索算法描述世界与动作，使机器人能在抽象状态空间中完成目标达成规划。",
      "principle": "机器人先把环境转化为内部符号世界模型，再在符号空间中规划动作序列，最后交给执行层。",
      "problem": "适合结构化、低噪声、目标明确的任务规划；不适合强动态、强接触、开放词汇对象和感知误差频繁出现的真实环境。",
      "difference": "现代 LLM 任务规划在形式上重新激活了符号分解思想，但用统计语义和工具调用替代了完全手写的规则库。",
      "relation": "它既是 STRIPS/PDDL/TAMP 的前置基础，也是 Brooks 行为式机器人批判的对象。"
    },
    {
      "id": "sense-plan-act",
      "type": "concept",
      "name": "Sense–Plan–Act 三段式架构",
      "year": 1966,
      "stage": "stage-embryonic",
      "lane": "lane-theory",
      "group": "group-symbolic",
      "importance": 4,
      "subtitle": "感知—规划—行动",
      "summary": "经典机器人三段式架构将系统拆为感知建模、规划决策和动作执行，至今仍是许多机器人系统的工程骨架。",
      "definition": "Sense 阶段从传感器构建世界状态，Plan 阶段生成行动序列，Act 阶段执行并通过控制器落实。",
      "problem": "提供清晰模块化工程范式。",
      "difference": "面对快速动态环境时，串行规划可能过慢，后续行为式与端到端策略对此提出挑战。",
      "principle": "优点是模块边界清晰、易于调试与验证；缺点是当环境快速变化或感知误差很大时，串行链路容易滞后。",
      "relation": "后来的行为式机器人、端到端策略和分层 VLA 架构都可以被理解为对 SPA 的改造：不是完全抛弃，而是把慢规划与快闭环重新组织。"
    },
    {
      "id": "strips",
      "type": "algorithm",
      "name": "STRIPS 任务规划",
      "year": 1971,
      "stage": "stage-embryonic",
      "lane": "lane-planning",
      "group": "group-symbolic",
      "importance": 4,
      "subtitle": "Stanford Research Institute Problem Solver",
      "summary": "早期符号规划系统，为机器人任务规划、前置条件/后效表示和自动规划奠定基础。",
      "definition": "使用前置条件、添加列表、删除列表描述动作，并通过搜索生成动作序列。",
      "problem": "解决符号状态空间中的目标达成规划。",
      "prerequisites": [
        "符号 AI",
        "Shakey 机器人"
      ],
      "influence": "影响 PDDL、任务规划、TAMP 和 LLM 任务分解。"
    },
    {
      "id": "wabot1",
      "type": "system",
      "name": "WABOT-1",
      "year": 1973,
      "stage": "stage-embryonic",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 5,
      "subtitle": "早稻田大学",
      "summary": "通常被认为是世界首个全尺寸仿人机器人，集成行走、视觉、触觉抓取与日语交流。",
      "definition": "早期全尺寸仿人机器人系统。",
      "contribution": "证明仿人身体、视觉、语言和操作可以被集成到同一机器系统。",
      "whyMilestone": "它把“仿人身体 + 简单感知/交流/操作”作为一个可实现工程目标呈现出来。",
      "sources": [
        {
          "name": "Waseda Humanoid History / WABOT",
          "url": "https://www.humanoid.waseda.ac.jp/history.html"
        }
      ]
    },
    {
      "id": "shakey",
      "type": "system",
      "name": "Shakey 机器人",
      "year": 1970,
      "stage": "stage-embryonic",
      "lane": "lane-tools",
      "group": "group-symbolic",
      "importance": 4,
      "subtitle": "SRI",
      "summary": "第一个把感知、世界模型、推理和行动结合起来的移动机器人之一。",
      "definition": "早期通用移动机器人系统。",
      "contribution": "连接了视觉、导航、符号规划与动作执行。",
      "relation": "STRIPS 等符号规划思想在此类机器人系统中形成。"
    },
    {
      "id": "wabot2",
      "type": "system",
      "name": "WABOT-2",
      "year": 1984,
      "stage": "stage-embryonic",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 3,
      "subtitle": "音乐仿人机器人",
      "summary": "早稻田大学开发的音乐机器人，可读乐谱并演奏键盘，体现感知、符号理解与机械动作协调。",
      "definition": "面向音乐演奏任务的早期仿人机器人。",
      "problem": "展示了机器人从单纯行走到复杂人类活动模拟的扩展。",
      "sources": [
        {
          "name": "Waseda Humanoid History / WABOT",
          "url": "https://www.humanoid.waseda.ac.jp/history.html"
        }
      ]
    },
    {
      "id": "subsumption",
      "type": "theory",
      "name": "包容/层级行为架构 Subsumption",
      "year": 1986,
      "stage": "stage-classical",
      "lane": "lane-theory",
      "group": "group-behavior",
      "importance": 5,
      "subtitle": "Rodney Brooks",
      "summary": "Brooks 的包容式架构强调感知—动作直接耦合，反对先构建完整世界模型再行动的纯串行范式。",
      "definition": "用多个反应式行为层组织控制，低层负责避障、平衡等快速闭环，高层在需要时抑制或组合低层行为。",
      "principle": "“世界本身就是最好的模型”强调实时反馈和环境耦合，而不是离线构造完美内部表征。",
      "problem": "它解决了动态环境下纯符号规划反应慢的问题，但难以独立完成复杂长程语义任务。",
      "difference": "与 Sense–Plan–Act 形成竞争路线；对现代端到端策略和反应式控制仍有影响。",
      "sources": [
        {
          "name": "Brooks, A Robust Layered Control System",
          "url": "https://people.csail.mit.edu/brooks/papers/AIM-864.pdf"
        }
      ],
      "influence": "现代分层智能体中的低层反射控制、行为树、安全监督器和技能库都保留了这一思想。",
      "relation": "与符号规划形成竞争路线，并被现代大脑—小脑分层架构重新吸收。"
    },
    {
      "id": "behavior-based",
      "type": "theory",
      "name": "行为式机器人 Behavior-Based Robotics",
      "year": 1988,
      "stage": "stage-classical",
      "lane": "lane-theory",
      "group": "group-behavior",
      "importance": 4,
      "subtitle": "Situated AI",
      "summary": "用多个感知—动作行为模块组成智能，不要求全局显式符号世界模型。",
      "definition": "基于行为模块、反应式控制和环境耦合的机器人范式。",
      "influence": "影响移动机器人、强化学习策略、端到端控制和具身智能“闭环优先”的思想。"
    },
    {
      "id": "embodied-cognition",
      "type": "theory",
      "name": "具身认知 Embodied Cognition",
      "year": 1991,
      "stage": "stage-classical",
      "lane": "lane-theory",
      "group": "group-behavior",
      "importance": 5,
      "subtitle": "身体参与智能",
      "summary": "认为智能不是纯脑内符号推理，而是身体、环境和行动之间的动态耦合。",
      "definition": "认知依赖身体形态、感觉运动通道和环境交互。",
      "problem": "解释为什么机器人智能不能只靠语言模型或离线推理。",
      "influence": "成为 embodied AI、physical AI、人形机器人研究的重要哲学与理论背景。"
    },
    {
      "id": "affordance",
      "type": "concept",
      "name": "可供性 Affordance",
      "year": 1979,
      "stage": "stage-embryonic",
      "lane": "lane-perception",
      "group": "group-behavior",
      "importance": 4,
      "subtitle": "J. J. Gibson",
      "summary": "环境对象不是只被识别为类别，还被理解为“能对它做什么”。",
      "definition": "对象或环境为行动者提供的行动可能性。",
      "problem": "把视觉理解与动作选择连接起来。",
      "influence": "影响机器人抓取、操作、VLA 中的语义—动作 grounding。"
    },
    {
      "id": "pomdp",
      "type": "theory",
      "name": "POMDP 部分可观测决策",
      "year": 1998,
      "stage": "stage-classical",
      "lane": "lane-planning",
      "group": "group-probabilistic",
      "importance": 5,
      "subtitle": "Planning under uncertainty",
      "summary": "把不确定状态、观测、动作、转移和奖励统一成序贯决策框架。",
      "definition": "在状态不可直接观测时，智能体通过 belief state 进行规划与决策。",
      "problem": "解决机器人在感知噪声、遮挡和动态环境中的不确定决策问题。",
      "difference": "理论上强大但计算复杂，现代学习方法常在其思想上近似。",
      "sources": [
        {
          "name": "Kaelbling et al. 1998 POMDP",
          "url": "https://people.csail.mit.edu/lpk/papers/aij98-pomdp.pdf"
        }
      ]
    },
    {
      "id": "probabilistic-robotics",
      "type": "theory",
      "name": "概率机器人 Probabilistic Robotics",
      "year": 2000,
      "stage": "stage-classical",
      "lane": "lane-theory",
      "group": "group-probabilistic",
      "importance": 5,
      "subtitle": "Thrun/Burgard/Fox",
      "summary": "概率机器人用贝叶斯滤波、粒子滤波、SLAM 与 POMDP 将传感噪声和控制不确定性纳入统一框架。",
      "definition": "机器人不假设自己知道真实世界状态，而是在观测和动作之后持续更新 belief state，并在不确定性下规划。",
      "principle": "预测步骤利用运动模型传播状态分布，更新步骤利用传感观测修正分布；决策层在信念空间上权衡收益与风险。",
      "problem": "解决定位、建图、路径规划、传感器融合和部分可观测决策问题。",
      "sources": [
        {
          "name": "Probabilistic Robotics, MIT Press",
          "url": "https://mitpress.mit.edu/9780262303804/probabilistic-robotics/"
        }
      ],
      "difference": "相比大模型路线，概率机器人更可解释、更可验证，但强依赖人工设计的状态空间、观测模型和转移模型。",
      "relation": "它是 SLAM、TAMP、自动驾驶和移动机器人长期稳定部署的数学基础，也为现代机器人安全评估提供不确定性语言。"
    },
    {
      "id": "slam",
      "type": "algorithm",
      "name": "SLAM 同步定位与建图",
      "year": 1986,
      "stage": "stage-classical",
      "lane": "lane-perception",
      "group": "group-probabilistic",
      "importance": 5,
      "subtitle": "Simultaneous Localization and Mapping",
      "summary": "机器人在未知环境中一边估计自身位置，一边构建地图。",
      "definition": "联合估计机器人轨迹和环境地图。",
      "principle": "通过传感器观测、运动模型和概率推断进行闭环定位建图。",
      "problem": "让机器人不依赖预制地图即可导航。",
      "influence": "成为移动机器人、仓储机器人与人形机器人场景理解的基础。"
    },
    {
      "id": "kalman-particle",
      "type": "algorithm",
      "name": "卡尔曼滤波与粒子滤波",
      "year": 1960,
      "stage": "stage-embryonic",
      "lane": "lane-perception",
      "group": "group-probabilistic",
      "importance": 4,
      "subtitle": "状态估计",
      "summary": "用于从噪声传感器中估计机器人状态。",
      "definition": "贝叶斯递推状态估计方法。",
      "problem": "解决传感器噪声、状态不可直接观测问题。",
      "influence": "支撑 SLAM、视觉惯性里程计、运动状态估计。"
    },
    {
      "id": "mcts",
      "type": "algorithm",
      "name": "MCTS 蒙特卡洛树搜索",
      "year": 2006,
      "stage": "stage-ros-drc",
      "lane": "lane-planning",
      "group": "group-symbolic",
      "importance": 3,
      "subtitle": "Planning by simulation",
      "summary": "通过随机模拟评估动作序列，在复杂决策空间中搜索可行动作。",
      "definition": "基于采样的树搜索算法。",
      "problem": "处理大状态空间规划与不确定决策。",
      "influence": "影响游戏 AI、机器人高层规划和 LLM-agent 树搜索。"
    },
    {
      "id": "rrt",
      "type": "algorithm",
      "name": "RRT/RRT* 采样运动规划",
      "year": 1998,
      "stage": "stage-classical",
      "lane": "lane-planning",
      "group": "group-probabilistic",
      "importance": 4,
      "subtitle": "Sampling-based motion planning",
      "summary": "在连续构型空间中快速搜索无碰路径。",
      "definition": "通过随机采样扩展树结构求解路径规划。",
      "problem": "解决高维机械臂/人形机器人运动规划的可行性问题。",
      "influence": "与 TAMP、MPC、轨迹优化共同构成经典机器人规划控制栈。"
    },
    {
      "id": "tamp",
      "type": "method",
      "name": "TAMP 任务与运动规划",
      "year": 2009,
      "stage": "stage-ros-drc",
      "lane": "lane-planning",
      "group": "group-symbolic",
      "importance": 4,
      "subtitle": "Task and Motion Planning",
      "summary": "TAMP 将高层离散任务规划与低层连续运动规划耦合，是经典机器人处理长程任务和几何可行性的核心方法。",
      "definition": "上层决定“先做什么、后做什么”，下层检查抓取、碰撞、可达性、关节限制和路径可行性；下层失败会反向约束上层重新规划。",
      "problem": "解决纯语言/符号计划无法保证物理可行的问题。",
      "influence": "影响 LLM+机器人规划、VLA 长程任务分解。",
      "principle": "将符号约束与几何/动力学约束交替求解，避免高层计划在物理世界不可执行。",
      "difference": "TAMP 可解释且安全边界清晰，但在开放世界和高维灵巧操作中组合复杂度很高。",
      "relation": "SayCan、LLM 规划和现代技能库可以被看作对 TAMP 高层语义规划部分的学习化替代或增强。"
    },
    {
      "id": "mpc",
      "type": "algorithm",
      "name": "MPC 模型预测控制",
      "year": 1970,
      "stage": "stage-embryonic",
      "lane": "lane-control",
      "group": "group-behavior",
      "importance": 5,
      "subtitle": "Model Predictive Control",
      "summary": "在滚动时间窗内优化未来动作，并实时反馈修正。",
      "definition": "基于模型的在线最优控制方法。",
      "problem": "解决动态系统约束下的实时控制。",
      "influence": "在人形机器人平衡、步态、全身控制和闭环操作中长期核心。"
    },
    {
      "id": "whole-body-control",
      "type": "method",
      "name": "全身控制 Whole-Body Control",
      "year": 2005,
      "stage": "stage-classical",
      "lane": "lane-control",
      "group": "group-behavior",
      "importance": 5,
      "subtitle": "WBC",
      "summary": "在人形机器人上同时协调腿、躯干、手臂、接触力和平衡。",
      "definition": "将多任务、多约束和接触动力学统一到全身关节控制中。",
      "problem": "解决人形机器人多自由度身体的协调控制。",
      "influence": "是 Atlas、Digit、GR 系列等人形平台的底层能力基础。"
    },
    {
      "id": "asimo",
      "type": "system",
      "name": "ASIMO",
      "year": 2000,
      "stage": "stage-classical",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 5,
      "subtitle": "Honda",
      "summary": "Honda 人形机器人代表作，展示稳定双足行走、奔跑、识别和交互能力。",
      "definition": "面向公众展示与技术验证的人形机器人。",
      "contribution": "推动双足行走、运动控制与人形机器人社会想象。",
      "whyMilestone": "把人形机器人从实验室推向公共展示与长期研发品牌。",
      "sources": [
        {
          "name": "Honda ASIMO history",
          "url": "https://global.honda/en/ASIMO/history/"
        }
      ]
    },
    {
      "id": "asimo-autonomy",
      "type": "event",
      "name": "ASIMO 自主行为控制",
      "year": 2011,
      "stage": "stage-ros-drc",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "Autonomous behavior control",
      "summary": "Honda 2011 版 ASIMO 强调自主行为控制，可在人流场景中连续移动。",
      "contribution": "从“能走能展示”进一步转向“能够根据环境自主行动”。",
      "relation": "体现人形机器人早期从机械运动能力向场景智能的过渡。",
      "sources": [
        {
          "name": "Honda ASIMO history",
          "url": "https://global.honda/en/ASIMO/history/"
        }
      ]
    },
    {
      "id": "ros",
      "type": "system",
      "name": "ROS 机器人操作系统",
      "year": 2007,
      "stage": "stage-ros-drc",
      "lane": "lane-tools",
      "group": "group-data",
      "importance": 5,
      "subtitle": "Robot Operating System",
      "summary": "开源机器人软件生态，提供消息通信、包管理、工具链和算法集成。",
      "definition": "面向机器人软件开发的开源中间件与工具集合。",
      "problem": "解决机器人软件复用、模块通信和复杂系统集成问题。",
      "influence": "成为学术和产业机器人开发事实标准之一。",
      "sources": [
        {
          "name": "ROS official",
          "url": "https://www.ros.org/"
        },
        {
          "name": "ROS paper",
          "url": "https://ai.stanford.edu/~ang/papers/icraoss09-ROS.pdf"
        }
      ]
    },
    {
      "id": "pr2",
      "type": "system",
      "name": "PR2 研究机器人",
      "year": 2010,
      "stage": "stage-ros-drc",
      "lane": "lane-tools",
      "group": "group-data",
      "importance": 4,
      "subtitle": "Willow Garage",
      "summary": "配合 ROS 推动移动操作、抓取、导航和服务机器人研究。",
      "definition": "通用移动操作研究平台。",
      "influence": "培养了 ROS 生态和许多机器人学习/操作研究路线。"
    },
    {
      "id": "gazebo",
      "type": "system",
      "name": "Gazebo 仿真器",
      "year": 2002,
      "stage": "stage-classical",
      "lane": "lane-tools",
      "group": "group-data",
      "importance": 4,
      "subtitle": "Open Robotics",
      "summary": "物理仿真与机器人开发工具，常与 ROS 结合。",
      "definition": "支持传感器、动力学和机器人模型的开源仿真环境。",
      "problem": "降低真实机器人测试成本。",
      "influence": "支撑 DRC、ROS 教学、机器人算法原型验证。"
    },
    {
      "id": "mujoco",
      "type": "system",
      "name": "MuJoCo",
      "year": 2012,
      "stage": "stage-ros-drc",
      "lane": "lane-tools",
      "group": "group-data",
      "importance": 4,
      "subtitle": "Multi-Joint dynamics with Contact",
      "summary": "高性能接触动力学仿真器，广泛用于强化学习和控制。",
      "definition": "面向接触丰富系统的物理仿真引擎。",
      "problem": "支持机器人控制策略在仿真中训练与评估。",
      "influence": "影响 Deep RL、HumanoidBench、轨迹优化和 sim2real。"
    },
    {
      "id": "isaac-sim",
      "type": "system",
      "name": "NVIDIA Isaac Sim / Omniverse",
      "year": 2021,
      "stage": "stage-deep-rl",
      "lane": "lane-tools",
      "group": "group-data",
      "importance": 5,
      "subtitle": "Synthetic data + simulation",
      "summary": "Isaac Sim/Omniverse 是 NVIDIA 面向机器人仿真、合成数据和物理 AI 验证的工具链。",
      "definition": "基于 GPU 加速和 Omniverse 的机器人数字孪生、传感器仿真、合成数据和策略训练平台。",
      "problem": "解决真实机器人训练慢、失败代价高、边界情况难采集的问题。",
      "influence": "支撑 Isaac GR00T、Cosmos、Jetson/Thor 等生态。",
      "sources": [
        {
          "name": "NVIDIA Isaac GR00T N1",
          "url": "https://nvidianews.nvidia.com/news/nvidia-isaac-gr00t-n1-open-humanoid-robot-foundation-model-simulation-frameworks"
        }
      ],
      "principle": "通过并行仿真、域随机化、光线追踪和合成标注降低真实试错成本。",
      "difference": "相比传统仿真，它更强调与生成式数据、机器人基础模型和 NVIDIA 边缘计算生态耦合。",
      "relation": "支撑 GR00T、Cosmos、Newton/物理仿真和合成数据飞轮。"
    },
    {
      "id": "cosmos",
      "type": "model",
      "name": "NVIDIA Cosmos 世界基础模型",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-perception",
      "group": "group-data",
      "importance": 4,
      "subtitle": "World foundation model",
      "summary": "面向物理 AI 的世界模型/生成模型生态，用于理解和生成多视角物理世界数据。",
      "definition": "用于物理世界理解、仿真和合成数据的基础模型。",
      "problem": "帮助机器人从视频和仿真中获得物理先验。",
      "relation": "与 Isaac Sim、GR00T、合成数据飞轮形成工具链关系。",
      "sources": [
        {
          "name": "NVIDIA GR00T Reference Humanoid Robot",
          "url": "https://nvidianews.nvidia.com/news/nvidia-open-humanoid-robot-reference-design"
        },
        {
          "name": "Deloitte Physical AI and humanoid robots",
          "url": "https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2026/physical-ai-humanoid-robots.html"
        }
      ]
    },
    {
      "id": "lerobot",
      "type": "system",
      "name": "Hugging Face LeRobot",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-tools",
      "group": "group-data",
      "importance": 3,
      "subtitle": "Open robot learning",
      "summary": "LeRobot 将机器人数据集、策略训练、低成本硬件和 Hugging Face 开源生态连接起来，降低具身智能复现门槛。",
      "definition": "面向机器人学习的开源库，支持数据采集、数据集发布、策略训练、模型共享和低成本机器人实验。",
      "problem": "解决机器人代码、数据格式和硬件接口分散导致的复现困难。",
      "influence": "推动低成本机器人数据采集、复现和开源模型微调。",
      "principle": "把机器人数据和模型纳入类似 Transformers/Datasets 的标准化开源工作流。",
      "relation": "承载 ACT、Diffusion Policy、低成本遥操作和开源模型微调。",
      "sources": [
        {
          "name": "Hugging Face LeRobot",
          "url": "https://github.com/huggingface/lerobot"
        }
      ]
    },
    {
      "id": "rlds",
      "type": "system",
      "name": "RLDS 机器人数据格式",
      "year": 2021,
      "stage": "stage-deep-rl",
      "lane": "lane-data",
      "group": "group-data",
      "importance": 3,
      "subtitle": "Reinforcement Learning Datasets",
      "summary": "用于统一存储轨迹、观测、动作和奖励的数据格式。",
      "definition": "轨迹数据交换格式。",
      "problem": "解决多来源机器人数据格式割裂。",
      "influence": "Open X-Embodiment 等跨本体数据集使用相关格式思想。"
    },
    {
      "id": "deep-vision",
      "type": "method",
      "name": "深度视觉感知",
      "year": 2012,
      "stage": "stage-ros-drc",
      "lane": "lane-perception",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "ImageNet era",
      "summary": "CNN/Transformer 等视觉模型显著提升物体识别、检测、分割和场景理解。",
      "definition": "用深度神经网络从图像/视频中学习语义与几何特征。",
      "problem": "为机器人感知提供比传统特征更强的泛化能力。",
      "influence": "支撑 VLM、VLA、视觉伺服、抓取和导航。"
    },
    {
      "id": "visual-servoing",
      "type": "method",
      "name": "视觉伺服 Visual Servoing",
      "year": 1990,
      "stage": "stage-classical",
      "lane": "lane-control",
      "group": "group-behavior",
      "importance": 4,
      "subtitle": "closed-loop perception-action",
      "summary": "用视觉反馈直接修正机械臂或机器人运动。",
      "definition": "把视觉误差作为控制量进行闭环控制。",
      "problem": "解决真实操作中的定位误差和执行偏差。",
      "influence": "是现代闭环 VLA 和策略执行需要吸收的经典思想。"
    },
    {
      "id": "imitation-learning",
      "type": "method",
      "name": "模仿学习 Imitation Learning",
      "year": 1991,
      "stage": "stage-classical",
      "lane": "lane-data",
      "group": "group-learning",
      "importance": 5,
      "subtitle": "从示范学习",
      "summary": "机器人通过人类或专家轨迹学习策略。",
      "definition": "从专家示范中学习状态到动作的映射。",
      "problem": "减少手写控制规则，学习复杂操作技能。",
      "difference": "易受分布偏移影响，DAgger、离线 RL、VLA 等路线试图缓解。"
    },
    {
      "id": "dagger",
      "type": "algorithm",
      "name": "DAgger",
      "year": 2011,
      "stage": "stage-ros-drc",
      "lane": "lane-data",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "Dataset Aggregation",
      "summary": "通过交互式收集专家纠正数据缓解行为克隆分布偏移。",
      "definition": "迭代收集学习策略访问到的状态并由专家标注动作。",
      "problem": "解决纯行为克隆在执行时偏离训练分布的问题。",
      "influence": "思想上影响机器人数据飞轮和人工介入纠错。"
    },
    {
      "id": "deep-rl",
      "type": "method",
      "name": "深度强化学习用于控制",
      "year": 2015,
      "stage": "stage-ros-drc",
      "lane": "lane-control",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "DQN / PPO / SAC",
      "summary": "用深度网络近似策略或价值函数，训练机器人在仿真或真实环境中获得技能。",
      "definition": "深度神经网络 + 强化学习。",
      "problem": "自动学习复杂控制和操作策略。",
      "difference": "样本效率、安全和 sim2real 是持续瓶颈。"
    },
    {
      "id": "sim2real",
      "type": "method",
      "name": "Sim2Real 与域随机化",
      "year": 2016,
      "stage": "stage-deep-rl",
      "lane": "lane-data",
      "group": "group-learning",
      "importance": 5,
      "subtitle": "simulation to reality",
      "summary": "先在仿真中训练，再迁移到真实机器人；通过随机化缓解仿真与现实差异。",
      "definition": "仿真训练到真实部署的迁移路线。",
      "problem": "降低真实机器人采样成本和安全风险。",
      "openProblems": "接触、摩擦、柔性物体、长程任务和传感器噪声仍难以完全模拟。"
    },
    {
      "id": "domain-randomization",
      "type": "algorithm",
      "name": "域随机化 Domain Randomization",
      "year": 2017,
      "stage": "stage-deep-rl",
      "lane": "lane-data",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "Robust sim training",
      "summary": "随机化仿真中的纹理、光照、动力学和扰动，使策略在真实世界更鲁棒。",
      "definition": "通过扩大训练域提高现实泛化。",
      "problem": "缓解仿真现实差距。",
      "influence": "被广泛用于抓取、四足/双足运动和视觉策略训练。"
    },
    {
      "id": "offline-rl",
      "type": "method",
      "name": "离线强化学习",
      "year": 2020,
      "stage": "stage-deep-rl",
      "lane": "lane-data",
      "group": "group-learning",
      "importance": 3,
      "subtitle": "batch RL",
      "summary": "从已有数据集中学习策略，避免在线试错。",
      "definition": "不与环境交互或少交互地学习控制策略。",
      "problem": "适合昂贵/危险的真实机器人训练。",
      "openProblems": "数据分布外动作评估和安全性困难。"
    },
    {
      "id": "diffusion-policy",
      "type": "algorithm",
      "name": "Diffusion Policy",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-control",
      "group": "group-learning",
      "importance": 5,
      "subtitle": "扩散模型动作生成",
      "summary": "Diffusion Policy 将机器人动作生成建模为条件去噪过程，能够表达多峰动作分布并生成平滑轨迹。",
      "definition": "给定视觉/状态条件，从噪声动作轨迹逐步去噪得到可执行动作序列的策略模型。",
      "problem": "避免多种可行动作被简单平均导致的“均值动作”失败，适合复杂操作和高维连续动作。",
      "influence": "影响 Octo、π0、GR00T 等动作生成模块。",
      "principle": "通过 score/denoising 学习动作分布，结合 receding horizon 控制和视觉条件生成动作。",
      "difference": "比简单回归或行为克隆更善于处理多模态动作；代价是推理计算更复杂。",
      "relation": "其思想被 π0、GR00T 等连续动作生成路线吸收。",
      "sources": [
        {
          "name": "Diffusion Policy arXiv",
          "url": "https://arxiv.org/abs/2303.04137"
        }
      ]
    },
    {
      "id": "behavior-transformer",
      "type": "model",
      "name": "Behavior Transformer / 序列策略",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-models",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "Transformer policy",
      "summary": "用 Transformer 建模观测、语言和动作序列。",
      "definition": "把机器人控制转化为序列建模问题。",
      "problem": "吸收大规模多任务轨迹数据。",
      "influence": "RT-1、RT-2、OpenVLA、Octo 等均属于或借鉴此路线。"
    },
    {
      "id": "world-models",
      "type": "concept",
      "name": "世界模型 World Models",
      "year": 2018,
      "stage": "stage-deep-rl",
      "lane": "lane-perception",
      "group": "group-learning",
      "importance": 5,
      "subtitle": "predictive models",
      "summary": "世界模型让机器人学习“如果我这么做，世界会怎样变化”，是长程规划、反事实评估和安全验证的核心。",
      "definition": "机器人世界模型可以预测未来视频、状态转移、物体接触后果、任务进度和失败风险。",
      "problem": "没有世界模型，VLA 往往只能根据当前帧局部反应，难以在多步骤任务中预见错误积累。",
      "openProblems": "真实物理接触、人体环境、多物体交互和不确定性仍难可靠预测。",
      "principle": "它可来自物理仿真、视频生成模型、潜空间预测模型、3D 场景图或机器人轨迹模型；核心是把动作后果变成可推演对象。",
      "difference": "经典动力学模型精确但覆盖窄，生成式世界模型覆盖广但可靠性和可验证性仍不足。",
      "relation": "与 Cosmos、Humanoid World Models、Sim2Real、长程规划和安全评估紧密相连。"
    },
    {
      "id": "memory-robot",
      "type": "concept",
      "name": "机器人长期记忆与情景记忆",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-planning",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "episodic / semantic memory",
      "summary": "机器人需要记住场景布局、用户偏好、任务进度和失败经验。",
      "definition": "把历史交互、地图、任务经验和语义知识存储并在决策时检索。",
      "problem": "解决长程任务、个性化交互和持续学习。",
      "openProblems": "记忆的可靠更新、遗忘、隐私与任务相关检索仍未成熟。"
    },
    {
      "id": "llm-planning",
      "type": "method",
      "name": "LLM 任务规划与工具调用",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-planning",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "LLM as high-level planner",
      "summary": "用大语言模型把自然语言目标分解为子任务、工具调用或技能序列。",
      "definition": "将语言模型作为高层任务规划器。",
      "problem": "提升机器人语义理解和任务分解能力。",
      "difference": "若缺少物理 grounding 和闭环反馈，容易产生不可执行计划。"
    },
    {
      "id": "saycan",
      "type": "paper",
      "name": "SayCan",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-planning",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "Do As I Can, Not As I Say",
      "summary": "SayCan 将语言模型的语义可用性与机器人技能的物理可执行性结合，避免 LLM 产生不接地的任务计划。",
      "contribution": "把 LLM 语义常识与机器人可供技能相结合。",
      "whyMilestone": "是 LLM+机器人高层规划的代表性早期工作之一。",
      "relation": "上承 TAMP 的分层规划思想，下接 RT-1/RT-2 的端到端策略与 VLA 路线。",
      "definition": "LLM 给出某个技能是否适合当前语言目标的概率，机器人技能价值函数估计该技能在当前环境中是否可执行，两者结合选择下一步技能。",
      "principle": "“Say” 负责语言常识，“Can” 负责身体和环境可行性。",
      "problem": "解决 LLM 只会“说得通”但不一定“做得到”的具身 grounding 问题。",
      "influence": "成为 LLM 机器人规划、技能库调用和任务可执行性评估的代表性起点。",
      "sources": [
        {
          "name": "SayCan project",
          "url": "https://say-can.github.io/"
        }
      ]
    },
    {
      "id": "palm-e",
      "type": "paper",
      "name": "PaLM-E",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-perception",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "Embodied multimodal language model",
      "summary": "把视觉、语言和机器人状态融合进多模态语言模型，用于具身推理。",
      "contribution": "展示多模态大模型可作为机器人理解与推理骨干。",
      "relation": "与 RT-2、VLA 路线共同推动“互联网知识迁移到机器人”。"
    },
    {
      "id": "rt1",
      "type": "paper",
      "name": "RT-1 Robotics Transformer",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-models",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "Real-world control at scale",
      "summary": "RT-1 将语言条件、多任务真实机器人数据和 Transformer 策略结合，验证了机器人控制也可以受益于规模化数据和序列建模。",
      "definition": "输入图像历史和语言指令，输出离散化动作 token 的多任务机器人策略。",
      "problem": "突破一任务一模型的局限，使单模型在大量厨房/桌面任务上泛化。",
      "whyMilestone": "证明机器人策略也可以出现“数据规模 + 模型容量 + 多任务泛化”的趋势。",
      "sources": [
        {
          "name": "RT-1 arXiv",
          "url": "https://arxiv.org/abs/2212.06817"
        }
      ],
      "principle": "把机器人动作序列当作类似语言 token 的预测对象，用真实机器人示范进行行为克隆。",
      "difference": "RT-1 主要依赖机器人数据本身，尚未像 RT-2 一样充分利用互联网 VLM 语义知识。",
      "relation": "RT-2 在 RT-1 基础上把机器人动作接入 VLM 词表，Open X-Embodiment 则进一步扩展跨本体数据规模。"
    },
    {
      "id": "rt2",
      "type": "paper",
      "name": "RT-2 Vision-Language-Action",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-models",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "Web knowledge to robotic control",
      "summary": "RT-2 将互联网规模 VLM 与机器人动作数据共同微调，把动作表示为 token，使视觉语言知识迁移到控制。",
      "definition": "Vision-Language-Action 模型：输入图像和语言，输出可执行动作 token。",
      "problem": "缓解机器人数据少、开放词汇对象泛化弱和语义推理不足的问题。",
      "whyMilestone": "让机器人具备一定开放词汇和语义推理能力，例如理解未在机器人数据中出现的对象属性。",
      "sources": [
        {
          "name": "RT-2 arXiv",
          "url": "https://arxiv.org/abs/2307.15818"
        }
      ],
      "principle": "把动作写入与自然语言相同的 token 预测格式，使 VLM 的语义常识与机器人轨迹数据共享参数。",
      "difference": "相比 RT-1，RT-2 引入互联网视觉语言预训练；相比连续动作模型，RT-2 仍受离散动作 token 表示约束。",
      "relation": "它确立了 VLA 这一技术范式，并影响 OpenVLA、GR00T、Gemini Robotics 等后续路线。"
    },
    {
      "id": "rt-x",
      "type": "model",
      "name": "RT-X 跨本体策略",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-models",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "Open X-Embodiment models",
      "summary": "基于多个机构、多种机器人数据训练的跨本体机器人模型。",
      "definition": "利用不同机器人本体的数据产生正迁移的通用策略模型。",
      "problem": "突破单机器人单场景数据瓶颈。",
      "influence": "支撑 Open X-Embodiment 数据生态和后续开源 VLA。",
      "sources": [
        {
          "name": "Open X-Embodiment project",
          "url": "https://robotics-transformer-x.github.io/"
        }
      ]
    },
    {
      "id": "open-x",
      "type": "benchmark",
      "name": "Open X-Embodiment Dataset",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-data",
      "group": "group-data",
      "importance": 5,
      "subtitle": "1M+ trajectories / 22 embodiments",
      "summary": "Open X-Embodiment 将多机构、多机器人本体、百万级真实轨迹汇集为跨本体机器人数据生态，是机器人基础模型的重要数据基础。",
      "definition": "跨机器人本体的真实机器人交互数据集，覆盖不同机械臂、夹爪、任务和场景。",
      "problem": "打破单一实验室/单一机器人平台数据规模过小的问题。",
      "whyMilestone": "类似机器人学习中的“ImageNet 候选”，为 RT-X、OpenVLA、Octo 等提供数据基础。",
      "sources": [
        {
          "name": "Open X-Embodiment project",
          "url": "https://robotics-transformer-x.github.io/"
        }
      ],
      "principle": "通过统一数据格式和动作表示，让不同机器人平台之间产生正迁移。",
      "difference": "它不是单一仿真基准，而是多机构真实机器人数据集合；跨本体动作对齐仍是难点。",
      "relation": "直接支撑 RT-X、OpenVLA、Octo 等通用策略，也为数据飞轮思想提供开放样本。"
    },
    {
      "id": "droid",
      "type": "benchmark",
      "name": "DROID 机器人操作数据集",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-data",
      "group": "group-data",
      "importance": 4,
      "subtitle": "Distributed Robot Interaction Dataset",
      "summary": "通过分布式真实机器人收集多样家庭/桌面操作数据。",
      "definition": "大规模真实机器人交互数据集。",
      "problem": "补充开放环境中真实操作轨迹。",
      "influence": "常被用于 VLA/通用策略训练与评估。"
    },
    {
      "id": "openvla",
      "type": "model",
      "name": "OpenVLA",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-models",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "7B open-source VLA",
      "summary": "OpenVLA 是开源 7B VLA 模型，使研究者可以复现、微调和分析 VLA 在真实机器人控制中的能力。",
      "definition": "基于开放视觉/语言骨干和机器人动作 token 训练的开源视觉-语言-动作模型。",
      "problem": "降低闭源 VLA 难复现、难适配私有硬件的门槛。",
      "difference": "相比 RT-2，它更开放、更易微调；相比 π0/GR00T 一类连续动作模型，其动作 token 化可能限制精细控制。",
      "sources": [
        {
          "name": "OpenVLA arXiv",
          "url": "https://arxiv.org/abs/2406.09246"
        },
        {
          "name": "OpenVLA project",
          "url": "https://openvla.github.io/"
        }
      ],
      "principle": "用机器人轨迹对 VLM 进行动作对齐，使图像、语言和动作进入同一自回归预测框架。",
      "relation": "与 Octo、π0、GR00T 构成通用机器人策略的不同实现路线。"
    },
    {
      "id": "octo",
      "type": "model",
      "name": "Octo 通用机器人策略",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-models",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "Open-source generalist robot policy",
      "summary": "基于 Open X-Embodiment 的 Transformer/扩散策略，支持语言或目标图像条件，并能快速微调到新机器人。",
      "definition": "开源通用机器人操作策略。",
      "problem": "为研究者提供可复现、可微调的通用策略初始化。",
      "relation": "继承 Open X 数据生态，与 OpenVLA、RT-X 互为开源通用策略路线。",
      "sources": [
        {
          "name": "Octo arXiv",
          "url": "https://arxiv.org/abs/2405.12213"
        }
      ]
    },
    {
      "id": "rfm1",
      "type": "model",
      "name": "Covariant RFM-1",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-models",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "Robotics Foundation Model",
      "summary": "Covariant 面向仓储操作推出的机器人基础模型，结合互联网数据与真实机器人交互数据。",
      "definition": "面向真实仓储机器人的多模态机器人基础模型。",
      "problem": "让机器人在复杂仓储条件下理解语言、场景和动作。",
      "uncertainty": "主要能力细节由公司发布，外部可复现实验有限。",
      "sources": [
        {
          "name": "Covariant RFM-1",
          "url": "https://covariant.ai/rfm/"
        }
      ]
    },
    {
      "id": "pi0",
      "type": "model",
      "name": "π0 / pi-zero",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-models",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "Generalist robot policy",
      "summary": "π0 将视觉语言模型和 flow matching/扩散式连续动作生成结合，代表 VLA 从离散动作 token 走向高频连续控制的路线。",
      "definition": "输入视觉和语言指令，输出连续动作 chunk 的通用机器人策略。",
      "problem": "提升灵巧操作中动作平滑性、多峰分布表达和高自由度连续控制能力。",
      "relation": "吸收 Diffusion Policy/flow matching 的动作生成思想，并与 OpenVLA、GR00T、Gemini Robotics 等构成竞争/互补路线。",
      "sources": [
        {
          "name": "Physical Intelligence π0",
          "url": "https://www.pi.website/blog/pi0"
        },
        {
          "name": "Physical Intelligence π0",
          "url": "https://www.physicalintelligence.company/blog/pi0"
        }
      ],
      "principle": "高层语义来自 VLM，低层动作通过 flow matching 生成连续轨迹，避免将动作过度离散化。",
      "difference": "不同于 RT-2/OpenVLA 的离散 token 输出，π0 更强调连续动作和物理操作能力。"
    },
    {
      "id": "pi07",
      "type": "model",
      "name": "π0.7",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-models",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "Steerable generalist policy",
      "summary": "Physical Intelligence 进一步强调组合泛化和可引导的通用策略。",
      "definition": "面向更强组合泛化的机器人基础模型。",
      "problem": "提升未见任务、复杂指令和灵巧操作的泛化。",
      "uncertainty": "截至 2026 年公开资料仍以论文/演示为主，真实产业规模部署能力需继续验证。",
      "sources": [
        {
          "name": "π0.7 PDF",
          "url": "https://www.pi.website/download/pi07.pdf"
        }
      ]
    },
    {
      "id": "gr00t-n1",
      "type": "model",
      "name": "NVIDIA Isaac GR00T N1",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-models",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "Open humanoid foundation model",
      "summary": "GR00T N1 是 NVIDIA 面向通用人形机器人的开放基础模型，采用视觉语言理解模块与扩散 Transformer 动作生成模块的双系统架构。",
      "definition": "开放人形机器人 VLA/基础模型，训练数据包括真实机器人轨迹、人类视频和合成数据。",
      "problem": "为不同人形机器人提供可定制的通用策略初始化，并连接仿真、合成数据和端侧计算生态。",
      "relation": "继承 VLA 与扩散动作生成思想，工程上依赖 Isaac/合成数据工具链，并直接暴露高低频接口和真实部署验证问题。",
      "sources": [
        {
          "name": "NVIDIA Isaac GR00T N1",
          "url": "https://nvidianews.nvidia.com/news/nvidia-isaac-gr00t-n1-open-humanoid-robot-foundation-model-simulation-frameworks"
        },
        {
          "name": "GR00T N1 arXiv",
          "url": "https://arxiv.org/abs/2503.14734"
        }
      ],
      "principle": "System 2 负责视觉语言理解和任务语义，System 1 负责实时生成流畅动作，两者端到端联合训练。",
      "difference": "它不仅是模型，也是 NVIDIA Isaac、Omniverse、Cosmos、Jetson/Thor 与参考硬件设计生态的一部分。"
    },
    {
      "id": "gr00t-n17",
      "type": "model",
      "name": "NVIDIA Isaac GR00T N1.7",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-models",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "Cross-embodiment humanoid VLA",
      "summary": "GR00T 开源仓库中的更新模型，强调跨本体、多模态输入与人形操作任务适配。",
      "definition": "开放 VLA 模型更新版本。",
      "problem": "改善跨机器人、双臂/半人形/人形数据混合训练。",
      "sources": [
        {
          "name": "NVIDIA Isaac-GR00T GitHub",
          "url": "https://github.com/Nvidia/Isaac-GR00T"
        }
      ]
    },
    {
      "id": "figure-helix",
      "type": "model",
      "name": "Figure Helix",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-models",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "Generalist humanoid VLA",
      "summary": "Figure Helix 是面向人形机器人的通用 VLA 控制系统，强调语言理解、双机器人协作和连续上身控制。",
      "definition": "Figure 官方描述 Helix 为端到端 VLA 系统，用于把视觉和语言输入转化为人形机器人动作。",
      "problem": "解决人形机器人在开放指令下进行双臂/上身操作、物体交互和任务泛化的问题。",
      "uncertainty": "Helix 的训练数据、失败率、遥操作比例和大规模部署效果主要来自公司披露，仍需要独立评测。",
      "sources": [
        {
          "name": "Figure Helix",
          "url": "https://www.figure.ai/news/helix"
        }
      ],
      "principle": "采用类似快慢双系统：慢速语义理解层处理目标和场景，快速动作层输出连续控制。",
      "relation": "与 GR00T N1、Gemini Robotics、π0 等同属“VLA/机器人基础模型走向产业人形”的路线。"
    },
    {
      "id": "skild-brain",
      "type": "model",
      "name": "Skild Brain",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-models",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "Omni-bodied robot brain",
      "summary": "Skild AI 宣称训练可跨四足、人形、机械臂等多本体的通用机器人基础模型。",
      "definition": "跨本体机器人基础模型。",
      "problem": "用多形态机器人数据提升泛化与鲁棒性。",
      "uncertainty": "以公司叙述和合作案例为主，具体训练数据与评测不完全公开。",
      "sources": [
        {
          "name": "Skild AI omni-bodied robot brain",
          "url": "https://www.skild.ai/blogs/building-the-general-purpose-robotic-brain"
        },
        {
          "name": "NVIDIA case study: Skild AI",
          "url": "https://www.nvidia.com/en-us/case-studies/skild-ai/"
        }
      ]
    },
    {
      "id": "atlas-2013",
      "type": "system",
      "name": "Atlas 2013 / DARPA",
      "year": 2013,
      "stage": "stage-ros-drc",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 5,
      "subtitle": "Boston Dynamics + DARPA",
      "summary": "面向灾难救援挑战的人形机器人，早期依赖外部供电/计算和人类操作。",
      "definition": "DARPA Robotics Challenge 代表性人形平台。",
      "problem": "检验人形机器人在危险、人类环境中的移动和操作能力。",
      "whyMilestone": "暴露了当时人形机器人在可靠性、速度、感知与自主性上的巨大差距。",
      "sources": [
        {
          "name": "DARPA Atlas Robot Debut",
          "url": "https://www.darpa.mil/about/innovation-timeline/atlas-robot-debut"
        },
        {
          "name": "DARPA Robotics Challenge",
          "url": "https://www.darpa.mil/research/programs/darpa-robotics-challenge"
        }
      ]
    },
    {
      "id": "drc-2015",
      "type": "event",
      "name": "DARPA Robotics Challenge 决赛",
      "year": 2015,
      "stage": "stage-ros-drc",
      "lane": "lane-benchmark",
      "group": "group-humanoid",
      "importance": 5,
      "subtitle": "灾难救援任务",
      "summary": "要求机器人驾驶、开门、使用工具、通过障碍等，强调人类工程环境中的复杂任务。",
      "contribution": "推动机器人系统集成、遥操作、自主导航和全身控制。",
      "whyMilestone": "成为人形机器人“现实世界任务难度”的标志性事件。",
      "sources": [
        {
          "name": "DARPA Robotics Challenge",
          "url": "https://www.darpa.mil/research/programs/darpa-robotics-challenge"
        }
      ]
    },
    {
      "id": "digit",
      "type": "system",
      "name": "Agility Robotics Digit",
      "year": 2020,
      "stage": "stage-deep-rl",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 5,
      "subtitle": "Warehouse humanoid",
      "summary": "面向物流和仓储搬运的人形/类人双足机器人，强调商业部署和平台化管理。",
      "definition": "商用仓储双足机器人。",
      "problem": "优先解决特定场景 ROI，而非追求全能人形智能。",
      "relation": "与 Arc 云平台形成“机器人 + 工作流控制 + 服务支持”路线。",
      "sources": [
        {
          "name": "Agility Robotics Digit",
          "url": "https://www.agilityrobotics.com/"
        }
      ]
    },
    {
      "id": "arc-platform",
      "type": "system",
      "name": "Agility Arc 云平台",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-tools",
      "group": "group-data",
      "importance": 4,
      "subtitle": "fleet workflow",
      "summary": "用于管理 Digit 任务、工作流、指标和车队集成。",
      "definition": "面向仓储部署的机器人云平台。",
      "problem": "解决机器人融入仓库系统、监控和规模部署问题。",
      "relation": "说明产业瓶颈不只在模型，也在工作流、集成、运维和安全。",
      "sources": [
        {
          "name": "Agility Robotics Digit",
          "url": "https://www.agilityrobotics.com/"
        }
      ]
    },
    {
      "id": "tesla-optimus",
      "type": "system",
      "name": "Tesla Optimus",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 5,
      "subtitle": "Tesla Bot",
      "summary": "Tesla Optimus 代表汽车公司把视觉 AI、制造能力、供应链和人形机器人结合的路线。",
      "definition": "面向通用劳动任务的人形机器人项目，强调纯视觉感知、端到端学习、量产制造和工厂场景迭代。",
      "problem": "尝试用制造规模和数据闭环降低人形机器人成本，并在工厂内部形成早期部署场景。",
      "uncertainty": "Optimus 的真实自主比例、遥操作比例、持续运行时长、任务失败率和部署规模需要以更公开的独立评测来验证。",
      "sources": [
        {
          "name": "Tesla AI & Robotics",
          "url": "https://www.tesla.com/AI"
        }
      ],
      "principle": "复用自动驾驶中的视觉、数据、训练和工程基础，同时通过真实工厂任务收集机器人数据。",
      "relation": "其核心挑战同时落在硬件成本、真实数据采集、长程任务稳定性和安全闭环。"
    },
    {
      "id": "phoenix",
      "type": "system",
      "name": "Sanctuary AI Phoenix / Carbon",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "Carbon AI control system",
      "summary": "Sanctuary AI 的人形机器人与 Carbon AI 控制系统，主打语言到行动、可解释任务和运动计划。",
      "definition": "工业级通用人形机器人 + 认知控制架构。",
      "problem": "把自然语言、任务规划、运动计划和工业任务自动化连接起来。",
      "uncertainty": "任务范围和自主性多由公司披露，外部验证有限。",
      "sources": [
        {
          "name": "Sanctuary AI Phoenix",
          "url": "https://www.sanctuary.ai/blog/sanctuary-ai-unveils-phoenix-a-humanoid-general-purpose-robot-designed-for-work"
        }
      ]
    },
    {
      "id": "apptronik-apollo",
      "type": "system",
      "name": "Apptronik Apollo",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "commercial humanoid",
      "summary": "Apptronik 面向真实工作场景的人形机器人，强调安全、量产与高负载。",
      "definition": "通用工业/物流人形机器人。",
      "problem": "以可制造、安全、可部署为核心，而不是只追求演示能力。",
      "sources": [
        {
          "name": "Apptronik Apollo",
          "url": "https://apptronik.com/apollo"
        }
      ]
    },
    {
      "id": "figure-01",
      "type": "system",
      "name": "Figure 01",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "Figure AI",
      "summary": "Figure 早期通用人形机器人，用于展示语言交互、操作与工厂应用潜力。",
      "definition": "Figure AI 第一代人形机器人。",
      "problem": "验证通用人形机器人的商业化场景。",
      "relation": "后续 Figure 02/03 和 Helix 的硬件基础。"
    },
    {
      "id": "figure-03",
      "type": "system",
      "name": "Figure 03",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 5,
      "subtitle": "designed for Helix",
      "summary": "Figure 第三代人形机器人，强调为 Helix、家庭和规模化世界任务重新设计。",
      "definition": "面向 VLA 和量产的人形机器人硬件平台。",
      "problem": "将“机器人身体”设计成适配大模型闭环控制和真实数据采集的载体。",
      "sources": [
        {
          "name": "Figure 03",
          "url": "https://www.figure.ai/news/introducing-figure-03"
        }
      ]
    },
    {
      "id": "unitree-h1",
      "type": "system",
      "name": "Unitree H1 / H1-2",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "Full-size universal humanoid",
      "summary": "宇树全尺寸通用人形机器人，强调速度、感知和高性能关节。",
      "definition": "全尺寸通用人形平台。",
      "problem": "提供高动态身体平台，推动研究和展示。",
      "sources": [
        {
          "name": "Unitree H1",
          "url": "https://www.unitree.com/h1"
        }
      ]
    },
    {
      "id": "unitree-g1",
      "type": "system",
      "name": "Unitree G1",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 5,
      "subtitle": "research-friendly humanoid",
      "summary": "价格相对可及的人形机器人平台，强调灵活关节、模仿/强化学习和力位混合灵巧手。",
      "definition": "面向研究/教育/开发的通用人形平台。",
      "problem": "降低人形机器人数据采集和研究门槛。",
      "sources": [
        {
          "name": "Unitree G1",
          "url": "https://www.unitree.com/g1"
        }
      ]
    },
    {
      "id": "fourier-gr1",
      "type": "system",
      "name": "Fourier GR-1",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "General purpose humanoid",
      "summary": "傅利叶智能 GR 系列，强调康复、服务和通用辅助场景。",
      "definition": "人形机器人硬件与交互平台。",
      "problem": "将医疗康复/服务机器人经验扩展到通用人形。",
      "sources": [
        {
          "name": "Fourier GR-1",
          "url": "https://www.fftai.com/products-gr1"
        }
      ]
    },
    {
      "id": "fourier-gr3",
      "type": "system",
      "name": "Fourier GR-3",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "care-oriented humanoid",
      "summary": "傅利叶 GR 系列三代产品，偏向人机友好、护理/服务场景。",
      "definition": "面向服务与照护的人形机器人。",
      "problem": "探索人形机器人在非工厂场景中的交互、安全和接受度。",
      "sources": [
        {
          "name": "WIPO Fourier GR series",
          "url": "https://www.wipo.int/en/web/ip-advantage/w/stories/fourier-healthcare-robots-with-humanoid-designs"
        }
      ]
    },
    {
      "id": "ubtech-walker-s2",
      "type": "system",
      "name": "UBTECH Walker S2",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "industrial humanoid",
      "summary": "优必选 Walker S2 面向制造场景，公开资料强调双循环 AI、视觉和自动换电。",
      "definition": "面向工厂部署的工业人形机器人。",
      "problem": "解决产线任务、连续运行和商业闭环。",
      "uncertainty": "部署规模和自主能力以公司及行业报道为主，需区分试点和规模化稳定生产。",
      "sources": [
        {
          "name": "MERICS UBTECH Walker S2",
          "url": "https://merics.org/en/comment/ubtech-humanoid-robots-future-manufacturing"
        }
      ]
    },
    {
      "id": "xpeng-iron",
      "type": "system",
      "name": "XPENG IRON",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "Physical AI full stack",
      "summary": "小鹏 IRON 依托汽车 AI 技术栈，强调视觉、语言、运动和多脑架构。",
      "definition": "汽车公司向人形机器人迁移的代表路线。",
      "problem": "复用智能汽车的感知、计算、制造和量产体系。",
      "sources": [
        {
          "name": "XPENG IRON / VLA 2.0",
          "url": "https://www.xpeng.com/news/019a56f54fe99a2a0a8d8a0282e402b7"
        }
      ]
    },
    {
      "id": "gr00t-reference",
      "type": "system",
      "name": "NVIDIA GR00T Reference Humanoid Robot",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 5,
      "subtitle": "Unitree + Sharpa + Jetson Thor",
      "summary": "NVIDIA 在 2026 年宣布开放参考人形机器人设计，结合 Unitree 机体、Sharpa 灵巧手和 NVIDIA 计算/软件栈。",
      "definition": "面向研究者和开发者的人形机器人参考设计。",
      "problem": "通过标准化硬件+模型+仿真+数据流程降低开发门槛。",
      "whyMilestone": "标志人形机器人开始出现类似 PC/开发板的参考平台路线。",
      "sources": [
        {
          "name": "NVIDIA GR00T Reference Humanoid Robot",
          "url": "https://nvidianews.nvidia.com/news/nvidia-open-humanoid-robot-reference-design"
        },
        {
          "name": "Reuters: NVIDIA humanoid robot partnerships",
          "url": "https://www.reuters.com/world/asia-pacific/nvidia-work-with-us-european-humanoid-robot-makers-addition-chinas-unitree-2026-06-01/"
        }
      ]
    },
    {
      "id": "boston-atlas-electric",
      "type": "system",
      "name": "电动 Atlas",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 5,
      "subtitle": "Boston Dynamics",
      "summary": "电动 Atlas 体现 Boston Dynamics 从液压高动态展示转向可产品化工业人形机器人的路线。",
      "definition": "全电动人形平台，目标是面向工业材料搬运和复杂身体运动能力。",
      "problem": "优先解决“身体能否稳定、敏捷、可靠地完成重载动态动作”的问题。",
      "sources": [
        {
          "name": "Boston Dynamics Atlas",
          "url": "https://bostondynamics.com/products/atlas/"
        }
      ],
      "principle": "利用高性能执行器、全身控制和学习化运动策略实现强动态身体能力。",
      "difference": "相对 VLA 公司更强调运动控制和硬件动态能力，但未来部署同样需要高级认知和任务泛化。",
      "relation": "与 Figure/Tesla 等路线形成“运动控制强项 vs 通用认知大脑”互补竞争。"
    },
    {
      "id": "atlas-2026-product",
      "type": "event",
      "name": "Atlas 2026 产品版与 Hyundai/DeepMind 部署",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 5,
      "subtitle": "product deployment",
      "summary": "Boston Dynamics 宣布产品版 Atlas 并计划在 Hyundai 和 Google DeepMind 等场景部署。",
      "contribution": "把电动 Atlas 推向工业部署验证阶段，并强调基础模型训练多样工业任务。",
      "whyMilestone": "说明领先运动控制公司也必须与 AI 基础模型和产业场景深度结合。",
      "sources": [
        {
          "name": "Boston Dynamics 2026 Atlas",
          "url": "https://bostondynamics.com/blog/boston-dynamics-unveils-new-atlas-robot-to-revolutionize-industry/"
        }
      ]
    },
    {
      "id": "rlbench",
      "type": "benchmark",
      "name": "RLBench",
      "year": 2019,
      "stage": "stage-deep-rl",
      "lane": "lane-benchmark",
      "group": "group-data",
      "importance": 3,
      "subtitle": "robot learning benchmark",
      "summary": "面向机械臂操作和多任务学习的仿真基准。",
      "definition": "包含大量操作任务的机器人学习评测环境。",
      "problem": "评估多任务策略、模仿学习和视觉控制。"
    },
    {
      "id": "calvin",
      "type": "benchmark",
      "name": "CALVIN",
      "year": 2021,
      "stage": "stage-deep-rl",
      "lane": "lane-benchmark",
      "group": "group-data",
      "importance": 4,
      "subtitle": "long-horizon language-conditioned manipulation",
      "summary": "长程语言条件机器人操作基准。",
      "definition": "测试机器人在多步骤桌面场景中的语言条件操作能力。",
      "problem": "揭示单技能策略难以完成长程组合任务。"
    },
    {
      "id": "libero",
      "type": "benchmark",
      "name": "LIBERO",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-benchmark",
      "group": "group-data",
      "importance": 4,
      "subtitle": "lifelong robot learning",
      "summary": "评估机器人策略的终身学习、迁移和组合泛化。",
      "definition": "面向机器人学习泛化和持续学习的基准。",
      "problem": "检测任务、场景、物体和语言泛化能力。"
    },
    {
      "id": "behavior1k",
      "type": "benchmark",
      "name": "BEHAVIOR-1K",
      "year": 2021,
      "stage": "stage-deep-rl",
      "lane": "lane-benchmark",
      "group": "group-data",
      "importance": 4,
      "subtitle": "household activities",
      "summary": "面向家庭活动和日常任务的仿真基准。",
      "definition": "包含大量家庭任务和物体交互的具身 AI 基准。",
      "problem": "推动长期任务规划、物理交互和可供性理解。"
    },
    {
      "id": "humanoidbench",
      "type": "benchmark",
      "name": "HumanoidBench",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-benchmark",
      "group": "group-data",
      "importance": 4,
      "subtitle": "humanoid control benchmark",
      "summary": "面向人形机器人全身控制和操作的仿真评测。",
      "definition": "测试人形机器人运动、操作和全身协调能力的基准。",
      "problem": "为“身体控制能力”提供可比指标。"
    },
    {
      "id": "maniskill",
      "type": "benchmark",
      "name": "ManiSkill",
      "year": 2020,
      "stage": "stage-deep-rl",
      "lane": "lane-benchmark",
      "group": "group-data",
      "importance": 3,
      "subtitle": "manipulation skill benchmark",
      "summary": "机器人操作技能仿真与评测平台。",
      "definition": "包含多种操作任务和传感器设置。",
      "problem": "用于评估强化学习、模仿学习和视觉操作。"
    },
    {
      "id": "real-world-eval",
      "type": "bottleneck",
      "name": "缺少统一真实世界评测",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-benchmark",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "No ImageNet yet",
      "summary": "人形机器人缺少可复现、可比较、覆盖感知—规划—控制—安全闭环的真实世界标准评测。",
      "definition": "不同公司演示场景、遥操作比例、失败率和任务分布不统一。",
      "cause": "真实机器人昂贵、场景安全风险高、数据/代码闭源、部署目标差异大。",
      "openProblems": "需要公开任务协议、失败统计、持续运行指标和安全指标。"
    },
    {
      "id": "data-bottleneck",
      "type": "bottleneck",
      "name": "机器人真实数据瓶颈",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "关键瓶颈",
      "summary": "机器人无法像语言模型直接利用互联网文本那样低成本获取海量动作数据，真实交互数据采集慢、贵、危险且格式不统一。",
      "definition": "数据瓶颈包括真实轨迹不足、失败案例少、触觉/力觉数据缺失、跨本体动作难对齐、遥操作成本高和隐私/安全限制。",
      "cause": "机器人每条高质量轨迹都需要真实硬件、场景布置、同步传感器、人类示教或遥操作；失败可能损坏设备或伤人。",
      "openProblems": "需要将真实部署、低成本遥操作、合成数据、仿真校准、自动标注和跨本体标准结合成数据飞轮。",
      "sources": [
        {
          "name": "Opportunities, challenges and roadmap for humanoid robots",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12783740/"
        },
        {
          "name": "Vision-Language-Action Models survey",
          "url": "https://arxiv.org/html/2505.04769v1"
        }
      ],
      "relation": "Open X-Embodiment、ALOHA、DROID、LeRobot、GR00T/Isaac 合成数据均是对该瓶颈的不同回应。"
    },
    {
      "id": "sim2real-bottleneck",
      "type": "bottleneck",
      "name": "Sim2Real 接触差距",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "关键瓶颈",
      "summary": "仿真可以快速训练，但复杂接触、摩擦、柔性物体、人类环境和传感器噪声难以逼真。",
      "definition": "仿真可以快速训练，但复杂接触、摩擦、柔性物体、人类环境和传感器噪声难以逼真。",
      "cause": "接触动力学和材料参数难准确，长程任务误差会累积。",
      "openProblems": "需要更高保真物理引擎、真实数据校准、世界模型和在线闭环修正。",
      "sources": [
        {
          "name": "Opportunities, challenges and roadmap for humanoid robots",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12783740/"
        },
        {
          "name": "Vision-Language-Action Models survey",
          "url": "https://arxiv.org/html/2505.04769v1"
        }
      ]
    },
    {
      "id": "long-horizon-bottleneck",
      "type": "bottleneck",
      "name": "长程规划与任务记忆瓶颈",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "关键瓶颈",
      "summary": "长程任务中的小误差会随时间累积，导致任务进度记忆丢失、状态误判、重复动作或无法恢复。",
      "definition": "当 VLA/策略模型逐步自回归生成动作时，早期的感知误差、执行偏差或环境扰动可能被后续步骤当作真实状态，形成复合误差。",
      "cause": "当前模型通常缺乏可靠的任务状态跟踪、世界模型前瞻、失败检测和可恢复规划。",
      "openProblems": "需要把情景记忆、世界模型、任务图、技能库、监控器和低层控制反馈融合起来。",
      "sources": [
        {
          "name": "Opportunities, challenges and roadmap for humanoid robots",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12783740/"
        },
        {
          "name": "Vision-Language-Action Models survey",
          "url": "https://arxiv.org/html/2505.04769v1"
        }
      ],
      "relation": "具身预测世界模型、机器人 RAG、失败检测与自恢复、行为树和 TAMP/LLM 混合规划都是候选解决方向。"
    },
    {
      "id": "perception-bottleneck",
      "type": "bottleneck",
      "name": "开放世界感知与语义 grounding 瓶颈",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "关键瓶颈",
      "summary": "机器人需要识别物体、空间、可供性、遮挡、材质、危险和人类意图，而不仅是图像分类。",
      "definition": "机器人需要识别物体、空间、可供性、遮挡、材质、危险和人类意图，而不仅是图像分类。",
      "cause": "视觉语言模型擅长语义，但对物理属性、接触和可操作性的 grounding 不稳定。",
      "openProblems": "融合 3D、触觉、力觉、语言和历史交互，建立可行动世界表示。",
      "sources": [
        {
          "name": "Opportunities, challenges and roadmap for humanoid robots",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12783740/"
        },
        {
          "name": "Vision-Language-Action Models survey",
          "url": "https://arxiv.org/html/2505.04769v1"
        }
      ]
    },
    {
      "id": "dexterous-hand-bottleneck",
      "type": "bottleneck",
      "name": "灵巧手与触觉瓶颈",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "关键瓶颈",
      "summary": "人形机器人想替代人类任务，手部灵巧、触觉反馈、耐用性和成本是核心短板。",
      "definition": "人形机器人想替代人类任务，手部灵巧、触觉反馈、耐用性和成本是核心短板。",
      "cause": "高自由度手昂贵易损，触觉传感难规模化，控制高频且接触丰富。",
      "openProblems": "数据驱动灵巧操作、触觉大模型、可制造低成本灵巧手、手臂—躯干全身协调。",
      "sources": [
        {
          "name": "Opportunities, challenges and roadmap for humanoid robots",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12783740/"
        },
        {
          "name": "Vision-Language-Action Models survey",
          "url": "https://arxiv.org/html/2505.04769v1"
        }
      ]
    },
    {
      "id": "energy-bottleneck",
      "type": "bottleneck",
      "name": "能耗、电池与热管理瓶颈",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "关键瓶颈",
      "summary": "人形机器人需要高功率关节、边缘计算和长时间运行，电池与散热限制实际工作时长。",
      "definition": "人形机器人需要高功率关节、边缘计算和长时间运行，电池与散热限制实际工作时长。",
      "cause": "双足移动和全身操作耗能高；大模型推理也消耗算力。",
      "openProblems": "低功耗执行器、能量回收、边缘模型压缩、任务调度与自动充换电。",
      "sources": [
        {
          "name": "Opportunities, challenges and roadmap for humanoid robots",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12783740/"
        },
        {
          "name": "Vision-Language-Action Models survey",
          "url": "https://arxiv.org/html/2505.04769v1"
        }
      ]
    },
    {
      "id": "safety-bottleneck",
      "type": "bottleneck",
      "name": "安全、合规与人机协作瓶颈",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "关键瓶颈",
      "summary": "人形机器人在开放人类环境中必须保证碰撞、夹伤、误执行、网络安全和隐私安全。",
      "definition": "人形机器人在开放人类环境中必须保证碰撞、夹伤、误执行、网络安全和隐私安全。",
      "cause": "通用模型不可完全预测，机器人又具有物理伤害能力。",
      "openProblems": "可验证安全边界、故障检测、权限控制、审计日志和网络安全。",
      "sources": [
        {
          "name": "Opportunities, challenges and roadmap for humanoid robots",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12783740/"
        },
        {
          "name": "Vision-Language-Action Models survey",
          "url": "https://arxiv.org/html/2505.04769v1"
        }
      ]
    },
    {
      "id": "closed-loop-bottleneck",
      "type": "bottleneck",
      "name": "高层智能与低层控制闭环断裂",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "关键瓶颈",
      "summary": "高层语义模型推理频率低，低层平衡/接触控制频率高，二者接口不稳定会造成动作延迟、抖动或安全风险。",
      "definition": "LLM/VLM/VLA 可能以 1–10Hz 输出目标或动作 chunk，而关节控制、状态估计、碰撞检测和力控常需要 100–1000Hz 以上稳定闭环。",
      "cause": "高层模型参数量大、推理慢且不确定；低层控制实时性强、容错小、必须遵守物理安全约束。",
      "openProblems": "需要动作缓冲、轨迹插值、MPC/WBC 接口、安全监督器、异步调度和可验证的 fallback 策略。",
      "sources": [
        {
          "name": "Opportunities, challenges and roadmap for humanoid robots",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12783740/"
        },
        {
          "name": "Vision-Language-Action Models survey",
          "url": "https://arxiv.org/html/2505.04769v1"
        }
      ],
      "relation": "直接来源于“大脑—小脑”分层架构，是人形机器人从 demo 到稳定部署必须解决的系统瓶颈。"
    },
    {
      "id": "manufacturing-bottleneck",
      "type": "bottleneck",
      "name": "规模制造与维护瓶颈",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "关键瓶颈",
      "summary": "人形机器人不仅要“会做”，还要可量产、可维护、低成本和有明确 ROI。",
      "definition": "人形机器人不仅要“会做”，还要可量产、可维护、低成本和有明确 ROI。",
      "cause": "关节、减速器、灵巧手、传感器、供应链和现场维护成本高。",
      "openProblems": "标准化平台、模块化维修、车队管理、实际 ROI 场景优先。",
      "sources": [
        {
          "name": "Opportunities, challenges and roadmap for humanoid robots",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12783740/"
        },
        {
          "name": "Vision-Language-Action Models survey",
          "url": "https://arxiv.org/html/2505.04769v1"
        }
      ]
    },
    {
      "id": "world-model-bottleneck",
      "type": "bottleneck",
      "name": "可预测物理世界模型瓶颈",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "关键瓶颈",
      "summary": "高级认知需要预测动作后果、对象变化和环境风险；当前模型对真实物理因果仍弱。",
      "definition": "高级认知需要预测动作后果、对象变化和环境风险；当前模型对真实物理因果仍弱。",
      "cause": "互联网视频和机器人数据缺乏动作—接触—力的完整监督。",
      "openProblems": "把视频生成、3D 表征、物理仿真、机器人轨迹和失败案例融合为可执行世界模型。",
      "sources": [
        {
          "name": "Opportunities, challenges and roadmap for humanoid robots",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12783740/"
        },
        {
          "name": "Vision-Language-Action Models survey",
          "url": "https://arxiv.org/html/2505.04769v1"
        }
      ]
    },
    {
      "id": "data-flywheel",
      "type": "trend",
      "name": "机器人数据飞轮",
      "year": 2027,
      "stage": "stage-frontier",
      "lane": "lane-data",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "deploy → collect → train → improve",
      "summary": "只有机器人足够有用并规模部署，才能持续收集真实长尾数据，反过来提升模型。",
      "definition": "以真实部署产生数据、数据训练模型、模型提升部署能力的正反馈。",
      "problem": "突破机器人数据稀缺。",
      "openProblems": "早期如何跨过“能力不足导致无法部署、无法部署导致缺数据”的冷启动。"
    },
    {
      "id": "body-as-data-platform",
      "type": "trend",
      "name": "身体作为数据平台",
      "year": 2027,
      "stage": "stage-frontier",
      "lane": "lane-overview",
      "group": "group-bottleneck",
      "importance": 4,
      "subtitle": "hardware enables intelligence",
      "summary": "人形身体不只是执行器，也是采集物理交互数据、验证世界模型和形成场景闭环的平台。",
      "definition": "将机器人身体视为产生具身数据和约束智能的基础设施。",
      "problem": "解释为什么智能路线必须与低成本、可靠、可维护身体共同发展。"
    },
    {
      "id": "hierarchical-agent-stack",
      "type": "trend",
      "name": "分层具身智能体架构",
      "year": 2027,
      "stage": "stage-frontier",
      "lane": "lane-planning",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "LLM/VLM/VLA + skills + control",
      "summary": "未来主流很可能不是一个单体模型直接解决所有问题，而是“语义推理—世界模型—任务规划—技能库—动作生成—安全控制”的分层协作。",
      "definition": "高层语义规划与低层连续控制耦合的智能体架构。",
      "problem": "平衡泛化、实时性、安全与可解释性。",
      "relation": "该节点与“大脑—小脑双环分层具身智能体架构”互补：前者强调未来系统栈，后者强调高低频认知/控制接口。"
    },
    {
      "id": "robot-rag",
      "type": "trend",
      "name": "机器人 RAG / 场景知识检索",
      "year": 2027,
      "stage": "stage-frontier",
      "lane": "lane-planning",
      "group": "group-vla",
      "importance": 3,
      "subtitle": "retrieve maps, manuals, episodes",
      "summary": "机器人在执行任务时检索地图、说明书、历史失败、技能库和用户偏好。",
      "definition": "把外部知识库、场景记忆和任务经验接入机器人决策。",
      "problem": "缓解长程任务中上下文遗忘和知识不全。"
    },
    {
      "id": "tactile-foundation-model",
      "type": "trend",
      "name": "触觉/力觉基础模型",
      "year": 2028,
      "stage": "stage-frontier",
      "lane": "lane-perception",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "touch + force + vision",
      "summary": "灵巧操作需要触觉、力觉与视觉语言统一表征。",
      "definition": "面向触觉和力反馈的多模态机器人模型。",
      "problem": "让机器人真正理解接触、滑动、硬度、重量和抓取稳定性。"
    },
    {
      "id": "fleet-learning",
      "type": "trend",
      "name": "人形机器人车队学习",
      "year": 2028,
      "stage": "stage-frontier",
      "lane": "lane-data",
      "group": "group-bottleneck",
      "importance": 4,
      "subtitle": "fleet-scale learning",
      "summary": "多台机器人在工厂/仓库/家庭中持续收集经验并同步模型改进。",
      "definition": "通过机器人车队分布式收集和更新策略。",
      "problem": "获得长尾真实数据和持续改进。",
      "openProblems": "隐私、安全、版本控制、灾难性遗忘和合规问题。"
    },
    {
      "id": "person-wiener",
      "type": "person",
      "name": "Norbert Wiener",
      "year": 1948,
      "stage": "stage-embryonic",
      "lane": "lane-people",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "人物",
      "summary": "控制论影响机器人闭环控制和智能体反馈思想。",
      "status": "控制论奠基人",
      "mastery": "反馈、控制与通信理论",
      "contribution": "控制论影响机器人闭环控制和智能体反馈思想。",
      "representativeWorks": [
        "反馈、控制与通信理论"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "控制论影响机器人闭环控制和智能体反馈思想。"
    },
    {
      "id": "person-mccarthy",
      "type": "person",
      "name": "John McCarthy",
      "year": 1956,
      "stage": "stage-embryonic",
      "lane": "lane-people",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "人物",
      "summary": "其符号智能传统影响自动规划、知识表示和早期机器人。",
      "status": "AI 领域奠基人物之一",
      "mastery": "人工智能概念与符号 AI",
      "contribution": "其符号智能传统影响自动规划、知识表示和早期机器人。",
      "representativeWorks": [
        "人工智能概念与符号 AI"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "其符号智能传统影响自动规划、知识表示和早期机器人。"
    },
    {
      "id": "person-kato",
      "type": "person",
      "name": "Ichiro Kato 加藤一郎",
      "year": 1973,
      "stage": "stage-embryonic",
      "lane": "lane-people",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动早稻田仿人机器人谱系，是 WABOT-1 的核心领军人物。",
      "status": "日本仿人机器人先驱",
      "mastery": "WABOT 项目",
      "contribution": "推动早稻田仿人机器人谱系，是 WABOT-1 的核心领军人物。",
      "representativeWorks": [
        "WABOT 项目"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动早稻田仿人机器人谱系，是 WABOT-1 的核心领军人物。"
    },
    {
      "id": "person-brooks",
      "type": "person",
      "name": "Rodney Brooks",
      "year": 1986,
      "stage": "stage-classical",
      "lane": "lane-people",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "人物",
      "summary": "反对纯符号世界模型，强调身体、环境和实时行动。",
      "status": "行为式机器人与具身 AI 的代表人物，MIT 教授，iRobot、Rethink Robotics 共同创始人。",
      "mastery": "反应式机器人、Subsumption 架构、具身智能思想。",
      "contribution": "批判纯符号 AI 的“先建模再行动”路线，强调机器人应通过身体与环境实时闭环产生智能。",
      "representativeWorks": [
        "A Robust Layered Control System for a Mobile Robot",
        "Elephants Don't Play Chess"
      ],
      "relation": "与符号 AI 形成思想对照，其快速感知—动作闭环思想被现代分层机器人系统吸收。",
      "influence": "影响清洁机器人、行为式控制、反应式安全层和现代机器人“小脑”控制思想。"
    },
    {
      "id": "person-thrun",
      "type": "person",
      "name": "Sebastian Thrun",
      "year": 2000,
      "stage": "stage-classical",
      "lane": "lane-people",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动不确定感知、SLAM 和概率方法工程化。",
      "status": "概率机器人、SLAM 和自动驾驶的重要推动者。",
      "mastery": "概率状态估计、SLAM、移动机器人和自动驾驶。",
      "contribution": "系统化概率机器人方法，推动机器人在不确定环境中进行定位、建图和决策。",
      "representativeWorks": [
        "Probabilistic Robotics",
        "Stanley autonomous vehicle"
      ],
      "relation": "与 Burgard、Fox 等共同构建概率机器人体系；其思想支撑自动驾驶与移动机器人长期部署。",
      "influence": "影响 SLAM、AMR、自动驾驶、POMDP 和不确定性建模。"
    },
    {
      "id": "person-burgard",
      "type": "person",
      "name": "Wolfram Burgard",
      "year": 2005,
      "stage": "stage-classical",
      "lane": "lane-people",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "人物",
      "summary": "与 Thrun/Fox 共同系统化概率机器人框架。",
      "status": "概率机器人重要人物",
      "mastery": "地图构建、移动机器人",
      "contribution": "与 Thrun/Fox 共同系统化概率机器人框架。",
      "representativeWorks": [
        "地图构建、移动机器人"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "与 Thrun/Fox 共同系统化概率机器人框架。"
    },
    {
      "id": "person-fox",
      "type": "person",
      "name": "Dieter Fox",
      "year": 2005,
      "stage": "stage-classical",
      "lane": "lane-people",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动概率状态估计与现代机器人学习。",
      "status": "概率机器人和机器人学习重要人物",
      "mastery": "粒子滤波、定位、机器人学习",
      "contribution": "推动概率状态估计与现代机器人学习。",
      "representativeWorks": [
        "粒子滤波、定位、机器人学习"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动概率状态估计与现代机器人学习。"
    },
    {
      "id": "person-ng",
      "type": "person",
      "name": "Andrew Ng",
      "year": 2007,
      "stage": "stage-ros-drc",
      "lane": "lane-people",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "人物",
      "summary": "参与推动机器人软件生态和学习方法。",
      "status": "机器学习与机器人代表人物",
      "mastery": "STAIR、ROS 早期生态、深度学习教育",
      "contribution": "参与推动机器人软件生态和学习方法。",
      "representativeWorks": [
        "STAIR、ROS 早期生态、深度学习教育"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "参与推动机器人软件生态和学习方法。"
    },
    {
      "id": "person-quigley",
      "type": "person",
      "name": "Morgan Quigley",
      "year": 2009,
      "stage": "stage-ros-drc",
      "lane": "lane-people",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动开源机器人软件基础设施。",
      "status": "ROS 论文核心作者",
      "mastery": "ROS 中间件",
      "contribution": "推动开源机器人软件基础设施。",
      "representativeWorks": [
        "ROS 中间件"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动开源机器人软件基础设施。"
    },
    {
      "id": "person-raibert",
      "type": "person",
      "name": "Marc Raibert",
      "year": 1992,
      "stage": "stage-classical",
      "lane": "lane-people",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "人物",
      "summary": "其团队长期推动高动态运动控制，从 BigDog 到 Atlas。",
      "status": "动态机器人和 Boston Dynamics 创始人",
      "mastery": "腿式机器人动态控制",
      "contribution": "其团队长期推动高动态运动控制，从 BigDog 到 Atlas。",
      "representativeWorks": [
        "腿式机器人动态控制"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "其团队长期推动高动态运动控制，从 BigDog 到 Atlas。"
    },
    {
      "id": "person-abbeel",
      "type": "person",
      "name": "Pieter Abbeel",
      "year": 2010,
      "stage": "stage-ros-drc",
      "lane": "lane-people",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动从示范和数据学习机器人技能。",
      "status": "机器人学习代表人物",
      "mastery": "模仿学习、强化学习、Covariant",
      "contribution": "推动从示范和数据学习机器人技能。",
      "representativeWorks": [
        "模仿学习、强化学习、Covariant"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动从示范和数据学习机器人技能。"
    },
    {
      "id": "person-levine",
      "type": "person",
      "name": "Sergey Levine",
      "year": 2016,
      "stage": "stage-deep-rl",
      "lane": "lane-people",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动数据驱动机器人学习、通用策略和数据飞轮思想。",
      "status": "机器人学习、模仿学习、强化学习和通用机器人策略的重要研究者。",
      "mastery": "深度强化学习、离线 RL、模仿学习、机器人基础模型。",
      "contribution": "推动从手写控制转向数据驱动机器人学习，参与多项通用策略和跨本体数据工作。",
      "representativeWorks": [
        "End-to-End Training of Deep Visuomotor Policies",
        "RT-1",
        "Open X-Embodiment",
        "π0 related work"
      ],
      "relation": "与 Berkeley/Google/Physical Intelligence 等机器人学习路线相关。",
      "influence": "强化了机器人学习的 scaling、数据、多任务和真实部署导向。"
    },
    {
      "id": "person-finn",
      "type": "person",
      "name": "Chelsea Finn",
      "year": 2017,
      "stage": "stage-deep-rl",
      "lane": "lane-people",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "人物",
      "summary": "关注快速适应、泛化和机器人学习数据。",
      "status": "机器人学习、元学习和跨本体机器人数据的重要研究者。",
      "mastery": "元学习、模仿学习、机器人泛化、Open X/Octo/ALOHA 相关生态。",
      "contribution": "推动机器人快速适应、跨任务泛化和开放数据协作；参与 Open X-Embodiment、Mobile ALOHA 等工作。",
      "representativeWorks": [
        "Model-Agnostic Meta-Learning",
        "Open X-Embodiment",
        "Mobile ALOHA"
      ],
      "relation": "与 Sergey Levine、Stanford/Berkeley/Google 机器人学习生态联系密切。",
      "influence": "对机器人数据共享、低成本操作平台和泛化学习产生持续影响。"
    },
    {
      "id": "person-brohan",
      "type": "person",
      "name": "Anthony Brohan",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-people",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动机器人 Transformer 和 VLA 路线。",
      "status": "Google Robotics 研究者",
      "mastery": "RT-1/RT-2",
      "contribution": "推动机器人 Transformer 和 VLA 路线。",
      "representativeWorks": [
        "RT-1/RT-2"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动机器人 Transformer 和 VLA 路线。"
    },
    {
      "id": "person-hausman",
      "type": "person",
      "name": "Karol Hausman",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-people",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动大规模机器人数据和策略模型。",
      "status": "Google Robotics 研究者",
      "mastery": "RT-1/RT-2/Open X",
      "contribution": "推动大规模机器人数据和策略模型。",
      "representativeWorks": [
        "RT-1/RT-2/Open X"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动大规模机器人数据和策略模型。"
    },
    {
      "id": "person-tedxiao",
      "type": "person",
      "name": "Ted Xiao",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-people",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "人物",
      "summary": "参与 RT/VLA 研究并总结 foundation models in robotics 趋势。",
      "status": "机器人基础模型传播者/研究者",
      "mastery": "RT 系列、机器人基础模型趋势",
      "contribution": "参与 RT/VLA 研究并总结 foundation models in robotics 趋势。",
      "representativeWorks": [
        "RT 系列、机器人基础模型趋势"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "参与 RT/VLA 研究并总结 foundation models in robotics 趋势。"
    },
    {
      "id": "person-yuke-zhu",
      "type": "person",
      "name": "Yuke Zhu",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-people",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "人物",
      "summary": "参与 NVIDIA GR00T 等通用人形模型研究。",
      "status": "机器人学习与 GR00T 相关研究者",
      "mastery": "仿真、数据、GR00T",
      "contribution": "参与 NVIDIA GR00T 等通用人形模型研究。",
      "representativeWorks": [
        "仿真、数据、GR00T"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "参与 NVIDIA GR00T 等通用人形模型研究。"
    },
    {
      "id": "person-linxi-fan",
      "type": "person",
      "name": "Linxi “Jim” Fan",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-people",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动开放人形机器人基础模型和物理 AI 平台。",
      "status": "NVIDIA 机器人基础模型研究者",
      "mastery": "GR00T、游戏/物理 AI",
      "contribution": "推动开放人形机器人基础模型和物理 AI 平台。",
      "representativeWorks": [
        "GR00T、游戏/物理 AI"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动开放人形机器人基础模型和物理 AI 平台。"
    },
    {
      "id": "person-huang",
      "type": "person",
      "name": "Jensen Huang 黄仁勋",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-people",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动 Isaac、GR00T、Cosmos、Jetson Thor 和参考机器人生态。",
      "status": "NVIDIA CEO",
      "mastery": "Physical AI 平台生态",
      "contribution": "推动 Isaac、GR00T、Cosmos、Jetson Thor 和参考机器人生态。",
      "representativeWorks": [
        "Physical AI 平台生态"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动 Isaac、GR00T、Cosmos、Jetson Thor 和参考机器人生态。"
    },
    {
      "id": "person-musk",
      "type": "person",
      "name": "Elon Musk",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-people",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动 Tesla 将自动驾驶 AI、制造和人形机器人整合。",
      "status": "Tesla CEO",
      "mastery": "Optimus 与制造体系",
      "contribution": "推动 Tesla 将自动驾驶 AI、制造和人形机器人整合。",
      "representativeWorks": [
        "Optimus 与制造体系"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动 Tesla 将自动驾驶 AI、制造和人形机器人整合。"
    },
    {
      "id": "person-adcock",
      "type": "person",
      "name": "Brett Adcock",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-people",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动通用人形机器人与 VLA 结合。",
      "status": "Figure AI 创始人",
      "mastery": "Figure 人形机器人与 Helix",
      "contribution": "推动通用人形机器人与 VLA 结合。",
      "representativeWorks": [
        "Figure 人形机器人与 Helix"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动通用人形机器人与 VLA 结合。"
    },
    {
      "id": "person-playter",
      "type": "person",
      "name": "Robert Playter",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-people",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动 Atlas 从动态展示转向工业产品化。",
      "status": "Boston Dynamics CEO",
      "mastery": "Atlas 产品化",
      "contribution": "推动 Atlas 从动态展示转向工业产品化。",
      "representativeWorks": [
        "Atlas 产品化"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动 Atlas 从动态展示转向工业产品化。"
    },
    {
      "id": "person-hurst",
      "type": "person",
      "name": "Jonathan Hurst",
      "year": 2015,
      "stage": "stage-ros-drc",
      "lane": "lane-people",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动面向仓储的商用双足人形路线。",
      "status": "Agility Robotics 联合创始人",
      "mastery": "双足机器人与 Digit",
      "contribution": "推动面向仓储的商用双足人形路线。",
      "representativeWorks": [
        "双足机器人与 Digit"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动面向仓储的商用双足人形路线。"
    },
    {
      "id": "person-geordie",
      "type": "person",
      "name": "Geordie Rose",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-people",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动认知架构与工业人形机器人结合。",
      "status": "Sanctuary AI CEO",
      "mastery": "Carbon AI / Phoenix",
      "contribution": "推动认知架构与工业人形机器人结合。",
      "representativeWorks": [
        "Carbon AI / Phoenix"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动认知架构与工业人形机器人结合。"
    },
    {
      "id": "person-cardenas",
      "type": "person",
      "name": "Jeff Cardenas",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-people",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动可制造和商用通用人形机器人。",
      "status": "Apptronik CEO",
      "mastery": "Apollo 通用人形机器人",
      "contribution": "推动可制造和商用通用人形机器人。",
      "representativeWorks": [
        "Apollo 通用人形机器人"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动可制造和商用通用人形机器人。"
    },
    {
      "id": "person-wang-xingxing",
      "type": "person",
      "name": "王兴兴",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-people",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动四足和人形机器人硬件平台普及。",
      "status": "Unitree 创始人",
      "mastery": "低成本高性能腿式/人形平台",
      "contribution": "推动四足和人形机器人硬件平台普及。",
      "representativeWorks": [
        "低成本高性能腿式/人形平台"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动四足和人形机器人硬件平台普及。"
    },
    {
      "id": "person-ubtech-zhou",
      "type": "person",
      "name": "周剑",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-people",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动中国工业人形机器人部署。",
      "status": "优必选创始人",
      "mastery": "Walker 工业人形机器人",
      "contribution": "推动中国工业人形机器人部署。",
      "representativeWorks": [
        "Walker 工业人形机器人"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动中国工业人形机器人部署。"
    },
    {
      "id": "person-he-xiaopeng",
      "type": "person",
      "name": "何小鹏",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-people",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "人物",
      "summary": "推动智能汽车技术栈迁移到人形机器人。",
      "status": "小鹏汽车董事长",
      "mastery": "IRON 与物理 AI 全栈",
      "contribution": "推动智能汽车技术栈迁移到人形机器人。",
      "representativeWorks": [
        "IRON 与物理 AI 全栈"
      ],
      "relation": "与图中相关模型、系统或理论相连；人物关系更多表示技术脉络影响，不等同于直接师承。",
      "influence": "推动智能汽车技术栈迁移到人形机器人。"
    },
    {
      "id": "foundation-model",
      "type": "concept",
      "name": "机器人基础模型 Robot Foundation Model",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-models",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "RFM / EFM / LBM",
      "summary": "把大规模、多任务、多本体数据训练成可泛化的机器人策略或认知模型。",
      "definition": "面向机器人感知、语言、动作、控制或世界建模的基础模型。",
      "problem": "复用大模型扩展规律解决机器人泛化。",
      "difference": "与普通 VLM 相比必须输出可执行动作并闭环。"
    },
    {
      "id": "vla",
      "type": "concept",
      "name": "VLA 视觉-语言-动作模型",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-models",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "Vision-Language-Action",
      "summary": "输入视觉观测和语言指令，输出动作或控制命令。",
      "definition": "统一感知、语言理解和行动生成的模型。",
      "problem": "把语义理解直接连接到机器人行动。",
      "openProblems": "动作频率、连续控制、跨本体泛化、长程记忆和安全闭环仍是瓶颈。",
      "sources": [
        {
          "name": "Vision-Language-Action Models survey",
          "url": "https://arxiv.org/html/2505.04769v1"
        }
      ]
    },
    {
      "id": "physical-ai",
      "type": "concept",
      "name": "Physical AI / 物理 AI",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-overview",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "AI in physical world",
      "summary": "强调 AI 不只处理文本/图像，还要理解并改变真实物理世界。",
      "definition": "能够感知、预测并作用于物理环境的 AI 系统。",
      "problem": "将基础模型、仿真、机器人身体和工业流程连接起来。",
      "sources": [
        {
          "name": "Deloitte Physical AI and humanoid robots",
          "url": "https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2026/physical-ai-humanoid-robots.html"
        },
        {
          "name": "NVIDIA GR00T Reference Humanoid Robot",
          "url": "https://nvidianews.nvidia.com/news/nvidia-open-humanoid-robot-reference-design"
        }
      ]
    },
    {
      "id": "closed-loop-agent",
      "type": "concept",
      "name": "感知—理解—规划—决策—行动闭环",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-overview",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "高级认知主线",
      "summary": "人形具身智能体需要从传感输入理解场景，规划任务，做出决策并通过身体行动，再利用反馈修正。",
      "definition": "高级认知功能在机器人中的系统闭环。",
      "problem": "任何单点能力不足都会导致真实任务失败。"
    },
    {
      "id": "skill-library",
      "type": "concept",
      "name": "技能库 Skill Library",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-planning",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "primitives / policies",
      "summary": "把抓取、开门、搬运、导航等技能封装成可调用模块，由高层规划器选择与组合。",
      "definition": "机器人可复用动作/策略模块集合。",
      "problem": "降低长程任务规划难度。",
      "relation": "SayCan、LLM planning、TAMP 和 VLA 都可与技能库结合。"
    },
    {
      "id": "safety-supervisor",
      "type": "method",
      "name": "安全监督器 Safety Supervisor",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-control",
      "group": "group-bottleneck",
      "importance": 4,
      "subtitle": "guardrails for robots",
      "summary": "在高层模型和低层执行之间加入碰撞、力、速度、权限、任务边界等安全约束。",
      "definition": "监控并限制机器人动作的安全层。",
      "problem": "防止大模型或策略在开放环境中执行危险动作。"
    },
    {
      "id": "teleoperation",
      "type": "method",
      "name": "遥操作与人类示教",
      "year": 2013,
      "stage": "stage-ros-drc",
      "lane": "lane-data",
      "group": "group-data",
      "importance": 5,
      "subtitle": "human-in-the-loop data",
      "summary": "通过 VR、手柄、外骨骼或远程控制收集机器人示范和处理长尾任务。",
      "definition": "人类远程控制机器人执行任务或提供示范数据。",
      "problem": "解决早期自主能力不足和数据采集冷启动。",
      "difference": "商业演示中遥操作比例常不透明，是判断自主性的关键不确定点。"
    },
    {
      "id": "zmp",
      "type": "theory",
      "name": "ZMP 零力矩点稳定性",
      "year": 1969,
      "stage": "stage-embryonic",
      "lane": "lane-control",
      "group": "group-behavior",
      "importance": 4,
      "subtitle": "biped stability",
      "summary": "双足机器人经典稳定性判据，用于规划脚步、质心和支撑多边形关系。",
      "definition": "Zero Moment Point 表示地面反作用力矩水平分量为零的点；若落在支撑区域内，机器人更容易保持动态稳定。",
      "principle": "把复杂双足动力学简化为可计算的稳定性约束。",
      "problem": "解决早期双足行走中“怎么不倒”的工程核心问题。",
      "influence": "ASIMO、HRP 系列和许多早期人形步态控制受其影响。",
      "difference": "相对现代学习型控制，ZMP 更可解释但动作风格较保守。"
    },
    {
      "id": "impedance-control",
      "type": "algorithm",
      "name": "阻抗控制 Impedance Control",
      "year": 1985,
      "stage": "stage-embryonic",
      "lane": "lane-control",
      "group": "group-behavior",
      "importance": 5,
      "subtitle": "force-compliant control",
      "summary": "通过设定力—位移/速度关系，让机器人在接触环境中柔顺而安全。",
      "definition": "控制机械臂或全身系统表现出期望的质量—阻尼—刚度动态。",
      "principle": "不是死盯位置轨迹，而是让机器人根据接触力调整运动。",
      "problem": "解决装配、抓取、人机协作和灵巧操作中的接触安全。",
      "influence": "现代柔顺控制、力控灵巧手、协作机器人和人形机器人接触任务都依赖类似思想。"
    },
    {
      "id": "operational-space-control",
      "type": "algorithm",
      "name": "操作空间控制 Operational Space Control",
      "year": 1987,
      "stage": "stage-classical",
      "lane": "lane-control",
      "group": "group-behavior",
      "importance": 4,
      "subtitle": "Khatib",
      "summary": "直接在末端/任务空间控制机器人力和运动，是机械臂与全身控制的重要基础。",
      "definition": "将关节空间动力学映射到任务空间，以任务目标而非单个关节为核心进行控制。",
      "principle": "用雅可比和动力学模型协调冗余自由度。",
      "problem": "解决高自由度机器人执行多任务时的协调问题。",
      "influence": "全身控制、接触任务、双臂操作和人形机器人任务优先级控制的重要前身。"
    },
    {
      "id": "soar",
      "type": "theory",
      "name": "SOAR 认知架构",
      "year": 1983,
      "stage": "stage-embryonic",
      "lane": "lane-theory",
      "group": "group-symbolic",
      "importance": 3,
      "subtitle": "symbolic cognitive architecture",
      "summary": "经典通用认知架构，强调问题空间、产生式规则和目标驱动推理。",
      "definition": "一种以符号规则、目标分解和学习机制构成的认知架构。",
      "principle": "把智能体行为视为在问题空间中不断选择操作符。",
      "problem": "为高层任务规划、推理和记忆提供系统框架。",
      "influence": "虽未成为现代人形机器人主流，但对“具身智能体需要认知架构”这一问题有历史意义。",
      "difference": "与 VLA 的端到端学习不同，SOAR 更可解释但感知与控制 grounding 弱。"
    },
    {
      "id": "bdi-agent",
      "type": "theory",
      "name": "BDI 智能体模型",
      "year": 1987,
      "stage": "stage-classical",
      "lane": "lane-planning",
      "group": "group-symbolic",
      "importance": 3,
      "subtitle": "Belief–Desire–Intention",
      "summary": "用信念、欲望和意图描述理性智能体决策，影响多智能体系统和任务规划。",
      "definition": "信念表示世界状态，欲望表示目标，意图表示已承诺计划。",
      "principle": "决策不是单步反应，而是在目标、承诺和环境变化之间调整。",
      "problem": "为长程任务、任务承诺和计划修正提供抽象模型。",
      "influence": "可与 LLM agent、机器人任务管理和安全授权机制结合。"
    },
    {
      "id": "act-r",
      "type": "theory",
      "name": "ACT-R 认知架构",
      "year": 1993,
      "stage": "stage-classical",
      "lane": "lane-theory",
      "group": "group-symbolic",
      "importance": 3,
      "subtitle": "human cognition model",
      "summary": "把人类认知分解为模块、产生式规则和记忆系统，对机器人认知架构有启发。",
      "definition": "模拟人类记忆、感知、动作和决策过程的认知架构。",
      "principle": "陈述性记忆与程序性规则共同驱动行为。",
      "problem": "解释人类任务执行和学习过程。",
      "influence": "启发机器人长期记忆、任务模型和人机交互，但工程机器人中使用不如 ROS/VLA 广泛。"
    },
    {
      "id": "htn-planning",
      "type": "algorithm",
      "name": "HTN 分层任务网络规划",
      "year": 1994,
      "stage": "stage-classical",
      "lane": "lane-planning",
      "group": "group-symbolic",
      "importance": 4,
      "subtitle": "Hierarchical Task Network",
      "summary": "把复杂任务递归分解成子任务和原子动作，适合服务机器人长程任务。",
      "definition": "使用任务方法将高层目标分解为可执行动作序列。",
      "principle": "人类专家把“做饭/整理/装配”等目标编码为层级结构。",
      "problem": "解决长程任务搜索空间爆炸。",
      "influence": "与 TAMP、LLM 任务分解和技能库调用关系密切。"
    },
    {
      "id": "pddl",
      "type": "algorithm",
      "name": "PDDL 规划描述语言",
      "year": 1998,
      "stage": "stage-classical",
      "lane": "lane-planning",
      "group": "group-symbolic",
      "importance": 4,
      "subtitle": "Planning Domain Definition Language",
      "summary": "标准化描述动作、前置条件、目标和规划问题，是自动规划基准的重要基础。",
      "definition": "一种表达规划域和规划问题的形式化语言。",
      "principle": "将任务规划从具体代码中抽象为可搜索的动作模型。",
      "problem": "提高规划算法可比较性和复用性。",
      "influence": "机器人 TAMP、任务规划、LLM-to-PDDL 等方法常借用其形式化思想。"
    },
    {
      "id": "options-hrl",
      "type": "theory",
      "name": "Options 与分层强化学习",
      "year": 1999,
      "stage": "stage-classical",
      "lane": "lane-planning",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "temporal abstraction",
      "summary": "把策略组织成可复用的时间扩展动作，是技能库和分层智能体的重要理论基础。",
      "definition": "Option 包含触发条件、内部策略和终止条件。",
      "principle": "高层选择技能，低层执行连续动作。",
      "problem": "缓解长程任务中的探索和信用分配困难。",
      "influence": "SayCan、技能库、LLM+机器人分层规划和 VLA 后处理都可看作其现代变体。"
    },
    {
      "id": "dmp",
      "type": "algorithm",
      "name": "DMP 动态运动基元",
      "year": 2003,
      "stage": "stage-classical",
      "lane": "lane-control",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "Dynamic Movement Primitives",
      "summary": "用可稳定泛化的动力系统表示动作轨迹，适合从示范学习运动技能。",
      "definition": "将运动轨迹编码为吸引子动力系统加非线性调制项。",
      "principle": "保留动作形状，同时允许改变目标、速度和时长。",
      "problem": "解决机器人如何复用示范动作。",
      "influence": "技能库、模仿学习、运动生成和现代扩散策略之前的重要动作表示。"
    },
    {
      "id": "behavior-tree",
      "type": "method",
      "name": "行为树 Behavior Tree",
      "year": 2001,
      "stage": "stage-classical",
      "lane": "lane-planning",
      "group": "group-symbolic",
      "importance": 4,
      "subtitle": "reactive task control",
      "summary": "用树状结构组织条件判断、动作和回退策略，广泛用于游戏、机器人和工业自动化。",
      "definition": "由选择器、序列、条件和动作节点组成的反应式任务控制结构。",
      "principle": "局部节点可重用，失败时能回退到其他分支。",
      "problem": "比纯脚本更模块化，比纯规划更工程可控。",
      "influence": "适合给 LLM/VLA 外围加安全任务壳和失败恢复逻辑。"
    },
    {
      "id": "formal-methods-robotics",
      "type": "method",
      "name": "形式化验证与时序逻辑任务",
      "year": 2007,
      "stage": "stage-ros-drc",
      "lane": "lane-planning",
      "group": "group-symbolic",
      "importance": 3,
      "subtitle": "LTL / safety guarantees",
      "summary": "用时序逻辑和形式化方法约束机器人任务，保证某些安全性质。",
      "definition": "将任务规范写成可验证逻辑公式，并合成或检查控制策略。",
      "principle": "把“永不碰撞、必须先确认再执行”等安全规则转化为逻辑约束。",
      "problem": "解决学习型策略不可验证的安全风险。",
      "influence": "未来人形机器人安全监督器可能需要类似方法与 VLA 结合。"
    },
    {
      "id": "active-inference",
      "type": "theory",
      "name": "主动推断 Active Inference",
      "year": 2010,
      "stage": "stage-deep-rl",
      "lane": "lane-theory",
      "group": "group-probabilistic",
      "importance": 3,
      "subtitle": "free-energy principle",
      "summary": "把感知和行动看作最小化预测误差/自由能的统一过程。",
      "definition": "智能体通过更新信念和选择行动来减少感知预测误差。",
      "principle": "行动也是一种主动采样，用来让世界符合内部模型预测。",
      "problem": "为感知、世界模型、行动选择的统一提供理论视角。",
      "influence": "与机器人世界模型、主动视觉、闭环控制和具身认知存在概念连接，但工业落地仍有限。"
    },
    {
      "id": "spatial-intelligence",
      "type": "concept",
      "name": "空间智能 Spatial Intelligence",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-perception",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "3D scene + action grounding",
      "summary": "机器人不仅要识别图像，还要理解可达性、几何关系、遮挡、支撑、容器、路径和接触风险。",
      "definition": "在三维空间中理解对象、关系、可供性和行动后果的能力。",
      "principle": "把 VLM 语义、3D 表示、语义地图和物理约束结合起来。",
      "problem": "弥合“看懂图片”和“能安全操作真实世界”之间的差距。",
      "influence": "Gemini Robotics-ER、VoxPoser、Open-vocabulary SLAM、机器人世界模型都属于相关方向。"
    },
    {
      "id": "embodied-reasoning",
      "type": "concept",
      "name": "具身推理 Embodied Reasoning",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-planning",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "reason about physical action",
      "summary": "围绕可执行动作进行空间、物理、安全和任务推理，而不只是语言链式思考。",
      "definition": "模型根据机器人身体、环境状态、可供性、约束和任务目标生成可执行计划或动作。",
      "principle": "推理必须被传感反馈和低层控制闭环检验。",
      "problem": "解决 LLM 规划“说得对但做不了”的问题。",
      "influence": "Google Gemini Robotics-ER、SayCan、Code as Policies、VoxPoser、Being-0 等都从不同角度处理该问题。"
    },
    {
      "id": "hierarchical-robot-agent",
      "type": "concept",
      "name": "分层机器人智能体栈",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-planning",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "planner–skills–controller",
      "summary": "高层语义模型负责任务理解与规划，中层技能库/VLA 负责动作策略，低层控制器保证稳定、安全和实时闭环。",
      "definition": "一种把 LLM/VLM/VLA、记忆、世界模型、技能库、安全监督器和控制器分层组织的具身智能体架构。",
      "principle": "高层低频“慢思考”，低层高频“快控制”，中间用可执行技能接口连接。",
      "problem": "避免单一端到端模型同时承担语义推理、长程记忆、高频控制和安全保证的过高负担。",
      "influence": "Figure Helix、GR00T、Gemini Robotics-ER、Being-0 和工业系统多采用类似分层思想。"
    },
    {
      "id": "semantic-map",
      "type": "concept",
      "name": "语义地图与场景图",
      "year": 2012,
      "stage": "stage-ros-drc",
      "lane": "lane-perception",
      "group": "group-probabilistic",
      "importance": 4,
      "subtitle": "semantic mapping / scene graph",
      "summary": "把空间地图与对象类别、关系和可供性结合，为机器人导航、记忆和任务规划提供场景状态。",
      "definition": "同时表示几何位置、对象语义、拓扑关系和任务相关属性的环境模型。",
      "principle": "将 SLAM 的几何地图升级为可供规划使用的语义世界状态。",
      "problem": "解决“知道自己在哪里”到“知道世界中有什么、能做什么”的跨越。",
      "influence": "长期记忆、机器人 RAG、VoxPoser、Gemini Robotics-ER 等都需要类似中间表示。"
    },
    {
      "id": "clip",
      "type": "model",
      "name": "CLIP 开放词汇视觉表征",
      "year": 2021,
      "stage": "stage-deep-rl",
      "lane": "lane-perception",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "contrastive vision-language",
      "summary": "用图文对比学习获得开放词汇视觉语义，为机器人从自然语言定位对象提供基础。",
      "definition": "将图像和文本映射到共同嵌入空间的视觉语言模型。",
      "principle": "通过大规模图文对学习语义对齐。",
      "problem": "突破固定类别视觉识别，支持“找红色杯子/像工具的物体”等自然语言 grounding。",
      "influence": "开放词汇检测、VLM、VLA、机器人语义抓取均受其影响。"
    },
    {
      "id": "sam",
      "type": "model",
      "name": "Segment Anything / SAM",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-perception",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "promptable segmentation",
      "summary": "可提示分割模型，为机器人在开放场景中提取对象轮廓和可交互区域提供工具。",
      "definition": "根据点、框或文本等提示生成图像分割掩码的基础模型。",
      "principle": "把分割能力从封闭类别扩展到可提示任务。",
      "problem": "机器人需要精确对象边界来抓取、避障和建图。",
      "influence": "Grounded-SAM、开放词汇场景理解和机器人视觉前处理常用此类模型。"
    },
    {
      "id": "open-vocab-perception",
      "type": "method",
      "name": "开放词汇感知与 Grounded-SAM",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-perception",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "open-vocabulary detection + segmentation",
      "summary": "开放词汇感知让机器人不仅识别固定类别，还能根据任意语言描述定位对象、部件、属性和可供性。",
      "definition": "利用 CLIP、Grounding DINO、SAM 等视觉基础模型，把自然语言概念映射到 2D/3D 空间中的对象区域。",
      "principle": "视觉特征与文本特征在共享嵌入空间中对齐，再通过检测、分割和多视角融合得到可操作对象。",
      "problem": "缓解传统检测器只能识别固定训练类别的问题，为“拿起红色扳手旁边的黑色胶带”这类开放指令提供感知基础。",
      "influence": "它是语义地图、3D 场景图、机器人 RAG 和 VLA grounding 的前置能力。",
      "relation": "上接语言指令和高层规划，下接 3D 场景图、抓取位姿估计和视觉伺服。"
    },
    {
      "id": "nerf-3dgs",
      "type": "method",
      "name": "NeRF / 3D Gaussian Splatting 场景表示",
      "year": 2020,
      "stage": "stage-deep-rl",
      "lane": "lane-perception",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "neural 3D representation",
      "summary": "从多视角图像重建连续三维场景，帮助机器人获得可视化、可查询的空间表示。",
      "definition": "用神经辐射场或 3D 高斯表示场景几何和外观。",
      "principle": "通过多视角一致性学习三维结构。",
      "problem": "解决机器人需要 3D 记忆、视角预测和空间推理的问题。",
      "influence": "未来世界模型、数字孪生、仿真数据生成和开放场景操作可能受其推动。"
    },
    {
      "id": "visual-language-navigation",
      "type": "method",
      "name": "视觉语言导航 VLN",
      "year": 2018,
      "stage": "stage-deep-rl",
      "lane": "lane-planning",
      "group": "group-learning",
      "importance": 3,
      "subtitle": "language-guided navigation",
      "summary": "根据自然语言指令在室内外环境中导航，是具身 AI 早期重要任务。",
      "definition": "智能体将语言路线描述与视觉观测结合，输出导航动作。",
      "principle": "把语言 grounding、空间记忆和动作决策结合。",
      "problem": "解决“理解人的空间指令并移动到目标”的问题。",
      "influence": "对人形机器人中的任务导航、语义地图和长期记忆有直接启发。"
    },
    {
      "id": "robot-episodic-memory",
      "type": "concept",
      "name": "机器人情景记忆系统",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-planning",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "episodes + retrieval + state tracking",
      "summary": "记录每次任务的观测、动作、结果和失败原因，供未来规划与纠错检索。",
      "definition": "面向真实机器人任务的长期事件记忆和可检索经验库。",
      "principle": "把任务历史切成可检索 episode，结合语义标签、场景图和时间状态。",
      "problem": "解决长程任务中“我刚才做到哪了、失败在哪里、用户偏好是什么”的问题。",
      "influence": "机器人 RAG、车队学习、自我反思和持续学习都依赖情景记忆。"
    },
    {
      "id": "failure-recovery",
      "type": "method",
      "name": "失败检测与自恢复",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-planning",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "detect–diagnose–retry",
      "summary": "真实机器人必须识别抓取失败、滑落、迷路、碰撞风险和计划不可执行，并能自动修正。",
      "definition": "监测执行过程并根据异常进行诊断、回退、重试或请求人类帮助。",
      "principle": "结合视觉/力觉反馈、状态估计、技能终止条件和高层反思。",
      "problem": "解决 demo 与真实部署之间最大的差距之一：失败不是少数事件，而是常态。",
      "influence": "Figure Helix 的任务完成度预测、GR00T/Gemini 的闭环重规划、安全监督器都与此有关。"
    },
    {
      "id": "gato",
      "type": "model",
      "name": "Gato 通用智能体",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-models",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "multi-modal generalist agent",
      "summary": "DeepMind 提出的多模态通用智能体，用同一 Transformer 处理游戏、语言、图像和机器人控制任务。",
      "definition": "把不同任务的观测和动作都 token 化为序列建模问题。",
      "principle": "一个模型、多种模态、多种任务。",
      "problem": "探索通用序列模型是否能跨任务泛化。",
      "influence": "RT-1 将机器人控制专门化并大规模真实数据化；Gato 常作为 RT-1 对比基线。",
      "difference": "Gato 广而浅，机器人控制数据和部署能力不如 RT 系列聚焦。"
    },
    {
      "id": "bc-z",
      "type": "model",
      "name": "BC-Z 语言条件行为克隆",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-models",
      "group": "group-learning",
      "importance": 3,
      "subtitle": "language-conditioned imitation",
      "summary": "语言条件多任务行为克隆路线，尝试从自然语言和示范中泛化到新任务。",
      "definition": "输入视觉观测与语言指令，输出动作的监督学习策略。",
      "principle": "将任务描述作为条件变量，学习跨任务共享策略。",
      "problem": "解决多任务机器人学习中任务表示问题。",
      "influence": "RT-1 证明更大模型和更多数据可显著超过 BC-Z 这类基线。"
    },
    {
      "id": "peract",
      "type": "model",
      "name": "PerAct 3D Perceiver-Actor",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-models",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "voxelized language-conditioned manipulation",
      "summary": "把语言条件桌面操作建模在 3D 体素空间中，适合需要空间精度的抓取与放置。",
      "definition": "使用 Perceiver Transformer 处理 3D 体素和语言条件，输出离散操作动作。",
      "principle": "让策略在 3D 空间直接推理可交互位置。",
      "problem": "解决仅 2D 图像策略对空间几何理解不足的问题。",
      "influence": "影响后续 3D VLA、RVT、VoxPoser 和空间智能路线。"
    },
    {
      "id": "vima",
      "type": "model",
      "name": "VIMA 多模态提示机器人策略",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-models",
      "group": "group-learning",
      "importance": 3,
      "subtitle": "multimodal prompts",
      "summary": "使用文字、图像和对象提示来指定机器人任务，强调组合泛化。",
      "definition": "多模态提示条件下的机器人操作策略。",
      "principle": "任务不只由语言给出，还可由图像、对象引用和示例给出。",
      "problem": "解决任务表达形式单一导致泛化受限的问题。",
      "influence": "启发后续 VLA 的多模态条件、示例条件和 in-context robot learning。"
    },
    {
      "id": "r3m-vc1",
      "type": "model",
      "name": "R3M / VC-1 机器人视觉表征",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-perception",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "pretrained visual representation",
      "summary": "从视频、语言或机器人数据中预训练视觉表征，用于下游控制和操作。",
      "definition": "面向机器人控制的视觉特征预训练模型。",
      "principle": "先从大规模视觉/视频中学通用表征，再少量数据适配机器人任务。",
      "problem": "解决从零训练视觉策略样本效率低的问题。",
      "influence": "是 RT-2 等 VLA 之外的另一条“视觉预训练迁移到控制”路线。"
    },
    {
      "id": "robocat",
      "type": "model",
      "name": "RoboCat 自改进机器人智能体",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-models",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "self-improving robot agent",
      "summary": "DeepMind 提出的可在不同机械臂和任务上适应，并通过自生成数据继续改进的机器人智能体。",
      "definition": "结合多任务示范、少样本适应和数据回流的机器人策略模型。",
      "principle": "机器人尝试新任务产生数据，再把数据加入训练集形成自我改进。",
      "problem": "缓解机器人数据稀缺和跨任务适应问题。",
      "influence": "数据飞轮、跨本体学习和通用机器人策略的重要先例。"
    },
    {
      "id": "unipi",
      "type": "model",
      "name": "UniPi 视频计划生成",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-planning",
      "group": "group-learning",
      "importance": 3,
      "subtitle": "text-conditioned video planning",
      "summary": "用文本条件视频生成作为机器人计划，再从视频计划中提取动作。",
      "definition": "通过生成未来视觉轨迹来指导机器人动作。",
      "principle": "先想象任务如何完成，再将视觉计划转成控制。",
      "problem": "为世界模型和计划生成提供生成式路线。",
      "influence": "与 Genie、Cosmos、HWM 等视频世界模型存在技术脉络联系。"
    },
    {
      "id": "code-as-policies",
      "type": "method",
      "name": "Code as Policies",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-planning",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "LLM-generated robot code",
      "summary": "用 LLM 生成调用机器人 API 的代码，把语言指令转为可执行程序。",
      "definition": "让语言模型通过代码形式表达任务逻辑和工具调用。",
      "principle": "高层语义由 LLM 处理，底层几何、控制和传感由已有 API 完成。",
      "problem": "提高任务规划的组合性和可解释性。",
      "influence": "LLM agent、机器人工具调用、Gemini Robotics-ER 的代码生成式具身推理都与此相关。"
    },
    {
      "id": "inner-monologue",
      "type": "method",
      "name": "Inner Monologue 闭环语言反馈",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-planning",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "language feedback loop",
      "summary": "机器人把环境反馈、成功/失败和检测结果转成语言，再交给 LLM 继续规划。",
      "definition": "使用语言化环境反馈形成持续任务循环。",
      "principle": "让高层语言模型不仅生成计划，也接收执行反馈。",
      "problem": "缓解一次性 LLM 规划无法根据真实执行变化调整的问题。",
      "influence": "失败恢复、机器人 RAG、LLM+技能库闭环的重要前身。"
    },
    {
      "id": "voxposer",
      "type": "method",
      "name": "VoxPoser 语言到 3D 可供性地图",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-planning",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "LLM/VLM + affordance fields",
      "summary": "把 LLM/VLM 的语义知识转化为 3D 体素空间中的可供性和值函数，引导机器人动作。",
      "definition": "通过语言模型生成 3D 价值地图和约束地图，再由低层规划器执行。",
      "principle": "让语义目标落到空间中的可操作区域。",
      "problem": "解决“语言知道要做什么，但不知道手该到哪里”的 grounding 问题。",
      "influence": "代表 LLM/VLM 与经典机器人规划控制结合的一条路线。"
    },
    {
      "id": "mobile-aloha",
      "type": "system",
      "name": "Mobile ALOHA",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-data",
      "group": "group-data",
      "importance": 5,
      "subtitle": "low-cost bimanual mobile manipulation",
      "summary": "Mobile ALOHA 将低成本双臂遥操作扩展到移动操作，使机器人可学习需要全身移动和双手协同的家庭/厨房任务。",
      "definition": "低成本移动双臂遥操作与模仿学习系统。",
      "principle": "用人类全身遥操作收集示范，再通过行为克隆训练机器人完成移动双手任务。",
      "problem": "解决静态桌面操作不足以覆盖真实家庭任务的问题。",
      "influence": "推动“便宜数据采集平台”成为机器人基础模型的重要基础设施。",
      "relation": "与 ACT、ALOHA 2、LeRobot 和机器人数据飞轮紧密相关。",
      "sources": [
        {
          "name": "Mobile ALOHA arXiv",
          "url": "https://arxiv.org/abs/2401.02117"
        }
      ]
    },
    {
      "id": "aloha2",
      "type": "system",
      "name": "ALOHA 2",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-data",
      "group": "group-data",
      "importance": 4,
      "subtitle": "enhanced low-cost teleoperation",
      "summary": "ALOHA 的增强低成本双臂遥操作硬件，更适合大规模示范数据采集。",
      "definition": "用于双臂操作示教的低成本硬件平台。",
      "principle": "降低机器人遥操作采集成本，提升可复制性。",
      "problem": "解决真实机器人数据采集昂贵、硬件门槛高的问题。",
      "influence": "Gemini Robotics 等双臂 VLA 研究常与 ALOHA 系列平台相关。",
      "sources": [
        {
          "name": "ALOHA 2 project",
          "url": "https://aloha-2.github.io/"
        }
      ]
    },
    {
      "id": "bridge-data",
      "type": "benchmark",
      "name": "BridgeData V2",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-data",
      "group": "group-data",
      "importance": 4,
      "subtitle": "large-scale robot manipulation dataset",
      "summary": "面向真实机器人操作的大规模多环境数据集，被用于通用策略和迁移学习研究。",
      "definition": "覆盖多个厨房/桌面场景、对象和任务的真实机器人轨迹数据。",
      "principle": "用多样真实环境数据提升策略泛化。",
      "problem": "补充单实验室、单环境数据的不足。",
      "influence": "OpenVLA、Octo 等开源策略生态常吸收这类数据。"
    },
    {
      "id": "robonet",
      "type": "benchmark",
      "name": "RoboNet",
      "year": 2020,
      "stage": "stage-deep-rl",
      "lane": "lane-data",
      "group": "group-data",
      "importance": 3,
      "subtitle": "multi-robot manipulation data",
      "summary": "早期跨机器人、多机构真实操作数据集，探索不同机械臂之间的迁移。",
      "definition": "多机器人视频/动作轨迹数据集。",
      "principle": "把多个机器人平台的数据合并训练，提高模型泛化。",
      "problem": "验证跨本体数据是否有助于机器人学习。",
      "influence": "Open X-Embodiment 和跨本体 VLA 的前驱。"
    },
    {
      "id": "mimicgen",
      "type": "method",
      "name": "MimicGen / DexMimicGen 数据合成",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-data",
      "group": "group-data",
      "importance": 4,
      "subtitle": "generate demonstrations from few demos",
      "summary": "从少量人类示范中自动生成大量机器人示范，缓解数据稀缺。",
      "definition": "通过轨迹分段、对象扰动、重规划或仿真扩展生成新示范。",
      "principle": "用少量高质量示范种子扩增到多样任务配置。",
      "problem": "降低每个新任务都需要大量人工遥操作的成本。",
      "influence": "和 GR00T/Isaac Sim/合成数据飞轮方向高度相关。"
    },
    {
      "id": "human-video-pretraining",
      "type": "method",
      "name": "人类视频预训练与动作先验",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-data",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "learn from humans before robots",
      "summary": "利用互联网人类活动视频、Ego4D、HumanML3D 等数据学习动作、可供性和物理交互先验。",
      "definition": "从非机器人视频中提取任务结构、手部运动、物体交互和语义知识。",
      "principle": "人类视频规模远大于机器人数据，可作为机器人世界模型和动作先验。",
      "problem": "缓解机器人真实交互数据不足。",
      "influence": "π0、Skild Brain、FRoM-W1、DreamControl 等均体现“人类数据 → 机器人动作”的趋势。"
    },
    {
      "id": "flow-matching-action",
      "type": "algorithm",
      "name": "Flow Matching 连续动作生成",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-control",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "continuous action head",
      "summary": "用 flow matching/扩散类方法生成高频连续动作序列，替代离散动作 token 的部分局限。",
      "definition": "学习从噪声到动作分布的连续流变换，用于生成多峰动作轨迹。",
      "principle": "保留 VLM 语义理解，同时输出机器人需要的连续控制量。",
      "problem": "解决灵巧操作中动作连续、高频、多峰的问题。",
      "influence": "π0、GR00T、部分扩散策略和未来高维人形控制模型的重要动作表示方向。"
    },
    {
      "id": "gemini-robotics",
      "type": "model",
      "name": "Gemini Robotics",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-models",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "Gemini 2.0-based VLA",
      "summary": "Google DeepMind 发布的基于 Gemini 2.0 的 VLA，将物理动作作为输出模态，目标是让机器人具备泛化、交互和灵巧操作能力。",
      "definition": "视觉—语言—动作模型，输入感知和语言，输出机器人动作。",
      "principle": "把 Gemini 的多模态推理和世界理解扩展到真实物理控制。",
      "problem": "解决机器人在新物体、新环境、新指令下的泛化。",
      "influence": "与 Apptronik Apollo 合作，并面向多种机器人形态验证；推动 VLA 从研究系统进入产业测试阶段。",
      "difference": "相对 RT-2，更强调 Gemini 2.0 的多模态推理、交互性、灵巧操作和跨本体适配。",
      "sources": [
        {
          "name": "Google DeepMind Gemini Robotics",
          "url": "https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/"
        }
      ]
    },
    {
      "id": "gemini-robotics-er",
      "type": "model",
      "name": "Gemini Robotics-ER",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-planning",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "embodied reasoning",
      "summary": "Google DeepMind 的具身推理模型，强调空间理解、3D 检测、指向、代码生成和与低层控制器接口。",
      "definition": "面向机器人空间推理和程序化控制的 VLM/ER 模型。",
      "principle": "高层模型负责空间理解与动作计划，底层控制器负责安全关键执行。",
      "problem": "解决 VLA 端到端控制难以覆盖所有本体和安全约束的问题。",
      "influence": "代表“VLM/LLM + 低层控制器”分层架构，与 Code as Policies、VoxPoser、TAMP 有明显脉络联系。",
      "difference": "不是直接输出所有连续动作，而是更偏 embodied reasoning、状态估计和代码/API 调用。",
      "sources": [
        {
          "name": "Google DeepMind Gemini Robotics",
          "url": "https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/"
        }
      ]
    },
    {
      "id": "gemini-robotics-on-device",
      "type": "model",
      "name": "Gemini Robotics On-Device",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-models",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "local VLA inference",
      "summary": "Google DeepMind 推出的本地运行 VLA，面向低延迟、断网鲁棒和安全敏感场景，并支持少量示范快速适配。",
      "definition": "优化到机器人本体本地运行的 VLA 模型。",
      "principle": "把 VLA 推理从云端/混合模式尽量压到机器人本体上。",
      "problem": "解决网络依赖、延迟、安全和隐私问题。",
      "influence": "表明边缘计算和模型压缩是机器人规模化部署的核心路线。",
      "difference": "相对旗舰 Gemini Robotics，牺牲部分能力以换取低延迟、本地运行和快速 fine-tuning。",
      "sources": [
        {
          "name": "Google DeepMind Gemini Robotics On-Device",
          "url": "https://deepmind.google/blog/gemini-robotics-on-device-brings-ai-to-local-robotic-devices/"
        }
      ]
    },
    {
      "id": "being-0",
      "type": "paper",
      "name": "Being-0 分层人形机器人智能体",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-planning",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "FM + modular skills + connector",
      "summary": "分层人形机器人智能体框架：基础模型处理指令理解、任务规划和推理；技能库负责移动和灵巧操作；Connector 把语言计划转成可执行技能命令。",
      "background": "端到端组合常因长程任务误差累积、模块延迟不一致和底层技能不稳而失败。",
      "contribution": "提出基础模型、轻量 VLM Connector、模块技能库的分层架构，并在全尺寸人形机器人上验证长程室内任务。",
      "whyMilestone": "代表“高级认知 + 技能库 + 低层控制”的实用架构路线。",
      "relation": "与 hierarchical-agent-stack、skill-library、LLM planning 和 failure recovery 直接相关。",
      "influence": "说明人形智能可能不是单个大模型，而是多层智能体栈。",
      "sources": [
        {
          "name": "Being-0 arXiv",
          "url": "https://arxiv.org/abs/2503.12533"
        }
      ]
    },
    {
      "id": "humanoid-world-models",
      "type": "paper",
      "name": "Humanoid World Models",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-perception",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "egocentric video prediction conditioned on action",
      "summary": "面向人形机器人的轻量视频世界模型，预测行动条件下的未来第一人称观测。",
      "background": "人形机器人需要在行动前预测动作后果，但大规模物理世界模型昂贵且难部署。",
      "contribution": "使用约 100 小时人形示范训练 Masked Transformer/Flow Matching 世界模型，并关注小实验室可训练部署。",
      "whyMilestone": "把“世界模型”具体落到人形机器人第一人称行动预测。",
      "relation": "连接 world-models、human-video-pretraining、failure recovery 和 long-horizon planning。",
      "influence": "未来可用于计划评估、失败预测、仿真补充和数据效率提升。",
      "sources": [
        {
          "name": "Humanoid World Models arXiv",
          "url": "https://arxiv.org/abs/2506.01182"
        }
      ]
    },
    {
      "id": "bfm-survey",
      "type": "paper",
      "name": "Behavior Foundation Model for Humanoid WBC Survey",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-control",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "whole-body control foundation models",
      "summary": "总结人形机器人全身控制中的行为基础模型，强调大规模预训练的可复用行为先验。",
      "background": "传统 WBC 和 RL 控制常需任务特定奖励、重新训练和大量工程调参。",
      "contribution": "把行为基础模型定义为学习可复用原始技能和行为先验的范式。",
      "whyMilestone": "将“基础模型”概念从高层 VLA 扩展到全身控制层。",
      "relation": "连接 whole-body-control、options-hrl、flow-matching-action、FRoM-W1 和 DreamControl。",
      "influence": "提示未来人形控制也可能出现 scaling law 与预训练—微调路线。",
      "sources": [
        {
          "name": "BFM Survey arXiv",
          "url": "https://arxiv.org/abs/2506.20487"
        }
      ]
    },
    {
      "id": "from-w1",
      "type": "paper",
      "name": "FRoM-W1 语言驱动全身控制",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-control",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "language → human motion → robot control",
      "summary": "开源框架：用 H-GPT 根据语言生成人类全身动作，再 retarget 到机器人并用 H-ACT 控制器在 Unitree H1/G1 上执行。",
      "background": "人形机器人会跳舞、后空翻等演示动作，但很多动作是硬编码或单独训练，缺少语言泛化。",
      "contribution": "将人类动作生成、链式思考、动作重定向、RL 控制和 sim2real 连接起来。",
      "whyMilestone": "体现“人类动作数据 + 语言 + 人形控制”的新路线。",
      "relation": "连接 human-video-pretraining、BFM、DreamControl、Unitree 平台和 sim2real。",
      "influence": "可补充 VLA 在全身动作表达上的不足。",
      "sources": [
        {
          "name": "FRoM-W1 arXiv",
          "url": "https://arxiv.org/abs/2601.12799"
        }
      ]
    },
    {
      "id": "dreamcontrol",
      "type": "paper",
      "name": "DreamControl 扩散先验全身场景交互",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-control",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "diffusion prior + RL",
      "summary": "用人类运动扩散先验指导强化学习，让 Unitree G1 学习同时涉及下肢、上肢和物体交互的任务。",
      "background": "直接 RL 在复杂全身交互中探索困难且动作不自然。",
      "contribution": "用人类动作扩散模型作为先验，引导仿真 RL 找到更自然可迁移的控制策略。",
      "whyMilestone": "代表“人类运动生成模型 + RL + 人形真实机”的融合路线。",
      "relation": "连接 human-video-pretraining、diffusion-policy、sim2real 和 whole-body-control。",
      "influence": "为人形机器人从人类动作库迁移复杂技能提供路径。",
      "sources": [
        {
          "name": "DreamControl arXiv",
          "url": "https://arxiv.org/abs/2509.14353"
        }
      ]
    },
    {
      "id": "meta-world",
      "type": "benchmark",
      "name": "Meta-World",
      "year": 2019,
      "stage": "stage-deep-rl",
      "lane": "lane-benchmark",
      "group": "group-data",
      "importance": 3,
      "subtitle": "multi-task manipulation benchmark",
      "summary": "多任务机械臂操作基准，常用于评估元学习、强化学习和多任务策略。",
      "definition": "包含多种桌面操作任务的仿真基准。",
      "problem": "评估策略是否能跨任务学习和迁移。",
      "influence": "虽然不专门面向人形，但影响机器人多任务学习方法。"
    },
    {
      "id": "habitat",
      "type": "benchmark",
      "name": "Habitat / Habitat 3.0",
      "year": 2019,
      "stage": "stage-deep-rl",
      "lane": "lane-benchmark",
      "group": "group-data",
      "importance": 4,
      "subtitle": "embodied AI simulation",
      "summary": "具身 AI 仿真平台，支持导航、交互、多智能体和人机协作任务。",
      "definition": "面向室内场景中 embodied AI 训练与评估的仿真环境。",
      "problem": "评估视觉导航、语义探索、家庭交互和协作。",
      "influence": "为人形机器人进入家庭/室内场景提供任务与仿真参考。"
    },
    {
      "id": "ai2thor-procthor",
      "type": "benchmark",
      "name": "AI2-THOR / ProcTHOR / RoboTHOR",
      "year": 2017,
      "stage": "stage-deep-rl",
      "lane": "lane-benchmark",
      "group": "group-data",
      "importance": 3,
      "subtitle": "interactive household environments",
      "summary": "家庭交互仿真环境，用于视觉导航、物体交互和任务规划。",
      "definition": "包含可交互家庭场景的具身 AI 平台。",
      "problem": "为家庭任务中的感知—行动闭环提供可重复测试。",
      "influence": "影响 embodied AI 与家庭机器人任务设定。"
    },
    {
      "id": "simpler-env",
      "type": "benchmark",
      "name": "SimplerEnv",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-benchmark",
      "group": "group-data",
      "importance": 4,
      "subtitle": "simulated policy evaluation for real robot policies",
      "summary": "用于评估真实机器人策略在仿真中的可迁移表现，试图降低真实机评测成本。",
      "definition": "面向通用机器人策略的仿真评估框架。",
      "problem": "VLA 评测昂贵且难复现，仿真可提供近似比较。",
      "influence": "与 OpenVLA、Octo 等开源策略评估密切相关。"
    },
    {
      "id": "robocasa",
      "type": "benchmark",
      "name": "RoboCasa",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-benchmark",
      "group": "group-data",
      "importance": 4,
      "subtitle": "large-scale everyday manipulation simulation",
      "summary": "面向日常厨房/家庭操作的大规模仿真基准，强调多场景多任务和数据生成。",
      "definition": "用于训练和评估日常操作策略的仿真环境。",
      "problem": "补足真实家庭数据稀缺和任务多样性不足。",
      "influence": "与 BEHAVIOR、CALVIN、LIBERO 共同定义长程家庭操作评测空间。"
    },
    {
      "id": "asimov-benchmark",
      "type": "benchmark",
      "name": "ASIMOV 具身安全评测",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-benchmark",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "semantic safety for embodied AI",
      "summary": "Google DeepMind 发布/提及的具身 AI 安全数据集，用于评估机器人动作的语义安全风险。",
      "definition": "面向真实场景中机器人行为安全性的评测数据集。",
      "problem": "机器人不仅要任务成功，还要知道哪些动作不该做。",
      "influence": "把“语义安全”和“物理安全”同时纳入 VLA/机器人基础模型评测。",
      "sources": [
        {
          "name": "Google DeepMind Gemini Robotics safety discussion",
          "url": "https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/"
        }
      ]
    },
    {
      "id": "company-google-deepmind",
      "type": "company",
      "name": "Google DeepMind Robotics",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-people",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "Gemini Robotics / RT / Open X",
      "summary": "从 RT-1/RT-2/Open X 到 Gemini Robotics，Google DeepMind 是机器人基础模型与 VLA 路线的核心推动者。",
      "definition": "围绕 VLA、具身推理、世界模型和机器人安全开展研究与产业合作的 AI 组织。",
      "status": "VLA/机器人基础模型重要组织。",
      "principle": "互联网规模多模态预训练 + 机器人数据微调 + 安全评测 + 多本体合作。",
      "problem": "把 Gemini 等大模型能力迁移到真实物理世界。",
      "uncertainty": "公开模型多处于论文、受限测试或合作伙伴阶段，真实大规模部署数据有限。"
    },
    {
      "id": "company-nvidia-robotics",
      "type": "company",
      "name": "NVIDIA Robotics / Physical AI",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-people",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "GR00T / Isaac / Cosmos / Jetson Thor",
      "summary": "以 GPU/边缘计算/仿真/合成数据/基础模型构建 Physical AI 平台生态。",
      "definition": "提供机器人训练、仿真、部署和边缘计算基础设施的 AI 平台公司。",
      "status": "Physical AI 平台核心公司。",
      "principle": "GR00T 模型 + Isaac Sim/Lab + Omniverse/Cosmos + Jetson/Thor 硬件。",
      "problem": "为开发者和人形公司降低模型训练、仿真验证和部署成本。",
      "uncertainty": "平台能力强，但各人形公司的真实部署效果还取决于硬件、数据和现场集成。"
    },
    {
      "id": "one-x-neo",
      "type": "system",
      "name": "1X NEO / NEO Gamma",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "home humanoid",
      "summary": "1X 面向家庭助手的人形机器人路线，并展示与 NVIDIA GR00T N1 后训练策略相关的自主整理任务。",
      "definition": "面向家庭场景的人形机器人平台。",
      "problem": "探索家用人形机器人在低速、安全、长期互动场景中的可行性。",
      "relation": "与 GR00T N1、家庭场景数据和安全监督密切相关。",
      "uncertainty": "家庭机器人场景极复杂，公开演示与大规模家庭部署仍有距离。"
    },
    {
      "id": "agibot",
      "type": "system",
      "name": "智元机器人 AgiBot",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 4,
      "subtitle": "中国通用人形/具身智能公司",
      "summary": "中国人形机器人与具身智能公司，围绕工业、服务和通用场景推出系列机器人与数据/模型生态。",
      "definition": "面向通用机器人硬件、软件和数据闭环的产业公司。",
      "problem": "在中国制造和应用场景中推进人形机器人落地。",
      "uncertainty": "公开生产数量、部署规模与真实自主能力需与公司宣传和独立评测区分。"
    },
    {
      "id": "neura-4ne1",
      "type": "system",
      "name": "NEURA Robotics 4NE-1",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 3,
      "subtitle": "cognitive humanoid",
      "summary": "NEURA Robotics 推出的人形机器人路线，强调认知机器人、感知和协作。",
      "definition": "面向工业/服务协作的人形机器人。",
      "problem": "把认知机器人平台扩展到人形形态。",
      "uncertainty": "具体自主能力和部署规模需持续验证。"
    },
    {
      "id": "mentee-robotics",
      "type": "system",
      "name": "MenteeBot",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 3,
      "subtitle": "AI humanoid worker",
      "summary": "Mentee Robotics 的人形机器人，公开资料强调 AI 驱动、自然语言任务和工商业劳动。",
      "definition": "面向通用工作任务的人形机器人项目。",
      "problem": "探索从自然语言到物理工作的产品化。",
      "uncertainty": "外部可复现能力与规模部署资料有限。"
    },
    {
      "id": "kepler-forerunner",
      "type": "system",
      "name": "Kepler Forerunner / 开普勒人形机器人",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 3,
      "subtitle": "Chinese industrial humanoid",
      "summary": "中国人形机器人产品路线之一，面向工业巡检、搬运、教育科研等场景。",
      "definition": "通用人形机器人硬件平台。",
      "problem": "尝试以较低成本切入工业与服务场景。",
      "uncertainty": "真实任务覆盖和自主程度仍需独立验证。"
    },
    {
      "id": "galbot",
      "type": "system",
      "name": "Galbot / 银河通用机器人",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-industry",
      "group": "group-humanoid",
      "importance": 3,
      "subtitle": "mobile manipulation + embodied AI",
      "summary": "中国具身智能公司，强调移动操作、机器人数据和大模型控制路线。",
      "definition": "面向移动操作和通用机器人智能的产品与研究路线。",
      "problem": "在真实商业场景中收集数据并训练可泛化策略。",
      "uncertainty": "公开资料以演示和合作为主，规模化生产/部署仍需观察。"
    },
    {
      "id": "edge-compute-bottleneck",
      "type": "bottleneck",
      "name": "边缘算力与实时推理瓶颈",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "latency, power, thermal",
      "summary": "人形机器人需要同时运行视觉、语言、世界模型、动作生成和安全控制，但本体电池、散热和算力有限。",
      "definition": "模型能力与本体实时计算资源之间的矛盾。",
      "cause": "VLM/VLA 推理耗算力，控制闭环要求毫秒级响应，云端推理又受网络延迟和隐私限制。",
      "affectedNodes": [
        "Gemini Robotics On-Device",
        "Figure Helix",
        "GR00T N1",
        "Jetson Thor",
        "安全监督器"
      ],
      "openProblems": "模型压缩、异步双系统、云边协同、低功耗 GPU/NPU、任务级缓存和本地安全回退机制。",
      "relation": "Gemini Robotics On-Device 和 Helix 的本体推理设计都直接面对该瓶颈。"
    },
    {
      "id": "cross-embodiment-bottleneck",
      "type": "bottleneck",
      "name": "跨本体动作表示瓶颈",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "one policy, many bodies?",
      "summary": "不同机器人有不同关节、手爪、传感器、动力学和动作频率，导致数据很难直接合并。",
      "definition": "跨机器人形态共享数据和策略时出现的动作空间、观测空间和动力学不一致问题。",
      "cause": "机械臂、人形、双臂、移动底盘、灵巧手的 DOF 与控制接口差异巨大。",
      "affectedNodes": [
        "Open X-Embodiment",
        "RT-X",
        "OpenVLA",
        "Skild Brain",
        "GR00T N1.7"
      ],
      "openProblems": "统一动作抽象、技能级接口、动作重定向、世界模型中介、body-token 或 morphology-conditioned policy。",
      "relation": "Open X、RT-X、Skild Brain 和 Gemini Robotics 的跨本体适配都在尝试解决这一问题。"
    },
    {
      "id": "teleop-transparency-bottleneck",
      "type": "bottleneck",
      "name": "遥操作透明度与自主性评估瓶颈",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "demo autonomy gap",
      "summary": "产业演示中常难判断机器人是全自主、半自主、远程遥操作，还是事先脚本化。",
      "definition": "公开演示与真实自主能力之间缺少透明标准。",
      "cause": "公司有商业保密需求，复杂任务早期也确实需要人类监督。",
      "affectedNodes": [
        "Figure Helix",
        "Tesla Optimus",
        "UBTECH Walker S2",
        "AgiBot",
        "1X NEO"
      ],
      "openProblems": "应公开遥操作介入比例、失败率、任务分布、连续运行时长、远程接管方式和安全回退。",
      "relation": "它直接影响“人形机器人到底卡在哪里”的判断。"
    },
    {
      "id": "roi-bottleneck",
      "type": "bottleneck",
      "name": "ROI 与场景闭环瓶颈",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "useful enough to deploy?",
      "summary": "机器人必须在某些场景中比人类/传统自动化更划算，才能规模部署并形成数据飞轮。",
      "definition": "成本、产能、维护、任务成功率和替代劳动价值之间的商业闭环。",
      "cause": "人形机器人硬件昂贵、维护复杂、任务效率低于专用自动化，早期难覆盖成本。",
      "affectedNodes": [
        "Digit",
        "Optimus",
        "Walker S2",
        "Apollo",
        "Atlas product"
      ],
      "openProblems": "优先选择高重复、危险、缺工且环境半结构化场景，如物流搬运、工厂上下料、巡检、包装。",
      "relation": "没有 ROI 就没有部署，没有部署就没有真实数据飞轮。"
    },
    {
      "id": "semantic-safety-bottleneck",
      "type": "bottleneck",
      "name": "语义安全与价值对齐瓶颈",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "should the robot do it?",
      "summary": "机器人不仅要判断“能不能做”，还要判断“该不该做”：例如隐私、危险物品、儿童/老人场景和权限边界。",
      "definition": "把人类价值、法律合规、场景权限和物理安全整合进机器人决策。",
      "cause": "VLA/LLM 可能误解意图、执行危险指令或泄露隐私。",
      "affectedNodes": [
        "Gemini Robotics-ER",
        "ASIMOV benchmark",
        "Safety Supervisor"
      ],
      "openProblems": "自然语言安全宪法、场景权限系统、可审计日志、风险等级策略和人类确认机制。",
      "relation": "Google DeepMind 的 Robot Constitution/ASIMOV 思路代表该方向的早期尝试。"
    },
    {
      "id": "continual-learning-bottleneck",
      "type": "bottleneck",
      "name": "持续学习与灾难性遗忘瓶颈",
      "year": 2027,
      "stage": "stage-frontier",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 4,
      "subtitle": "learn without breaking skills",
      "summary": "机器人部署后需要不断学习新任务和新环境，但更新模型可能破坏旧技能或带来安全风险。",
      "definition": "在持续数据流中学习，同时保持旧能力、可追溯和可回滚。",
      "cause": "真实世界数据非平稳，场景、硬件磨损、用户习惯和任务分布不断变化。",
      "affectedNodes": [
        "data-flywheel",
        "fleet-learning",
        "robot-episodic-memory"
      ],
      "openProblems": "版本控制、离线评测、影子部署、安全回滚、参数高效微调和个体/车队经验合并。"
    },
    {
      "id": "embodied-ai-operating-system",
      "type": "trend",
      "name": "具身智能操作系统/中间层",
      "year": 2028,
      "stage": "stage-frontier",
      "lane": "lane-tools",
      "group": "group-data",
      "importance": 4,
      "subtitle": "robot runtime for agents",
      "summary": "未来可能出现连接 VLA、技能库、场景记忆、控制器、安全规则和车队运维的统一运行时。",
      "definition": "面向物理智能体的软件中间层，类似 ROS 的下一代 AI-native 版本。",
      "problem": "把基础模型能力可靠接入真实机器人流程，而不是停留在 demo 脚本。",
      "openProblems": "标准接口、日志格式、模型版本管理、安全权限、云边协同和多厂商兼容。"
    },
    {
      "id": "robot-devops",
      "type": "trend",
      "name": "RobotOps / 机器人运维学习闭环",
      "year": 2028,
      "stage": "stage-frontier",
      "lane": "lane-data",
      "group": "group-data",
      "importance": 4,
      "subtitle": "monitor, label, retrain, redeploy",
      "summary": "机器人规模部署后需要像软件 DevOps 一样监控、记录、标注、训练、评测和回滚。",
      "definition": "面向机器人车队的持续集成、持续评测和持续学习体系。",
      "problem": "解决模型更新和现场安全之间的工程断裂。",
      "openProblems": "如何定义标准任务日志、失败标注、场景回放、仿真复现和安全 A/B 测试。"
    },
    {
      "id": "person-khatib",
      "type": "person",
      "name": "Oussama Khatib",
      "year": 1987,
      "stage": "stage-classical",
      "lane": "lane-people",
      "group": "group-behavior",
      "importance": 4,
      "subtitle": "操作空间控制 / 人机协作",
      "summary": "提出操作空间控制等关键思想，影响机械臂与人形全身控制。",
      "status": "机器人控制领域重要人物",
      "mastery": "操作空间控制、动态交互、人机协作",
      "contribution": "把任务空间动力学和冗余机器人控制系统化。",
      "representativeWorks": [
        "Operational Space Control"
      ],
      "relation": "连接 operational-space-control、whole-body-control、impedance-control。",
      "influence": "影响现代全身控制、接触任务和安全人机协作。"
    },
    {
      "id": "person-tedrake",
      "type": "person",
      "name": "Russ Tedrake",
      "year": 2005,
      "stage": "stage-classical",
      "lane": "lane-people",
      "group": "group-behavior",
      "importance": 4,
      "subtitle": "underactuated robotics / planning",
      "summary": "推动欠驱动机器人、控制、轨迹优化、Drake 工具链和机器人规划。",
      "status": "机器人控制与规划重要人物",
      "mastery": "欠驱动系统、轨迹优化、Drake、机器人规划",
      "contribution": "把优化、控制和软件工具结合到复杂机器人系统。",
      "representativeWorks": [
        "Underactuated Robotics",
        "Drake"
      ],
      "relation": "连接 mpc、tamp、whole-body-control、formal-methods。",
      "influence": "影响机器人控制教学、软件工具和可验证规划。"
    },
    {
      "id": "person-feifei-li",
      "type": "person",
      "name": "Fei-Fei Li 李飞飞",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-people",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "spatial intelligence",
      "summary": "倡导从视觉智能走向空间智能，对机器人世界理解和 3D grounding 有重要影响。",
      "status": "计算机视觉与空间智能代表人物",
      "mastery": "视觉基础模型、空间智能、World Labs",
      "contribution": "推动 AI 从图像识别走向三维空间理解和物理世界建模。",
      "representativeWorks": [
        "ImageNet",
        "Spatial Intelligence"
      ],
      "relation": "连接 spatial-intelligence、world-models、nerf-3dgs。",
      "influence": "强调机器人需要空间和物理世界模型，而不只是语言模型。"
    },
    {
      "id": "person-brian-ichter",
      "type": "person",
      "name": "Brian Ichter",
      "year": 2022,
      "stage": "stage-foundation",
      "lane": "lane-people",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "SayCan / RT 系列",
      "summary": "参与 SayCan、RT-1/RT-2 等工作，推动语言模型与机器人技能结合。",
      "status": "Google Robotics 研究者",
      "mastery": "LLM+机器人规划、VLA、机器人学习",
      "contribution": "推动从语言到可执行技能和机器人 Transformer 路线。",
      "representativeWorks": [
        "SayCan",
        "RT-1",
        "RT-2"
      ],
      "relation": "连接 saycan、rt1、rt2、llm-planning。",
      "influence": "影响 LLM 规划和 VLA 研究脉络。"
    },
    {
      "id": "person-carolina-parada",
      "type": "person",
      "name": "Carolina Parada",
      "year": 2025,
      "stage": "stage-industrial-vla",
      "lane": "lane-people",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "Gemini Robotics",
      "summary": "Google DeepMind Gemini Robotics 公开介绍作者/负责人之一。",
      "status": "Google DeepMind 机器人 AI 负责人之一",
      "mastery": "VLA、语音/语言/机器人模型产品化",
      "contribution": "推动 Gemini Robotics 与 Gemini Robotics On-Device 进入公开阶段。",
      "representativeWorks": [
        "Gemini Robotics",
        "Gemini Robotics On-Device"
      ],
      "relation": "连接 gemini-robotics、gemini-robotics-on-device、semantic-safety-bottleneck。",
      "influence": "推动 Google 机器人 AI 从 RT 系列进入 Gemini 时代。"
    },
    {
      "id": "person-deepak-pathak",
      "type": "person",
      "name": "Deepak Pathak",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-people",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "Skild AI",
      "summary": "Skild AI 联合创始人，长期研究具身智能、无监督探索和通用机器人学习。",
      "status": "机器人学习/具身智能研究者与创业者",
      "mastery": "无监督探索、机器人基础模型、跨本体学习",
      "contribution": "推动 Skild Brain 这类 omni-bodied robot foundation model。",
      "representativeWorks": [
        "Skild Brain"
      ],
      "relation": "连接 skild-brain、cross-embodiment-bottleneck、human-video-pretraining。",
      "influence": "推动从互联网视频/仿真/多本体数据构建机器人基础模型。"
    },
    {
      "id": "person-abhinav-gupta",
      "type": "person",
      "name": "Abhinav Gupta",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-people",
      "group": "group-vla",
      "importance": 4,
      "subtitle": "Skild AI / embodied learning",
      "summary": "Skild AI 联合创始人，研究视觉、机器人学习和自监督具身智能。",
      "status": "视觉与机器人学习研究者",
      "mastery": "自监督视觉、机器人学习、基础模型",
      "contribution": "推动跨本体、跨任务机器人基础模型。",
      "representativeWorks": [
        "Skild Brain"
      ],
      "relation": "连接 skild-brain、robot foundation model、spatial intelligence。",
      "influence": "影响具身智能数据和表征学习路线。"
    },
    {
      "id": "hierarchical-brain-cerebellum-agent",
      "type": "theory",
      "name": "大脑—小脑双环分层具身智能体架构",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-theory",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "低频语义推理 + 高频反射控制",
      "summary": "将人形机器人拆成慢速语义认知层和快速物理控制层，是当前 VLA/基础模型产业落地中最关键的系统架构之一。",
      "definition": "高层“大脑”由 LLM/VLM/VLA、任务规划器、记忆和世界模型组成，负责理解目标、分解任务、选择技能；低层“小脑”由 MPC/WBC、神经策略、状态估计和安全监督器组成，负责毫秒级平衡、接触和轨迹执行。",
      "principle": "高层语义模型通常以 1–10Hz 甚至更低频率推理，低层控制需要 100–1000Hz 稳定闭环，因此必须通过技能抽象、动作块、轨迹缓冲、阻抗控制和安全约束接口连接。",
      "problem": "解决“LLM/VLM 具有语义常识但太慢，低层控制很快但不懂任务语义”的结构矛盾。",
      "prerequisites": [
        "实时操作系统/控制总线",
        "技能库或动作 chunk 接口",
        "状态估计与安全监督器",
        "端侧/云端推理调度"
      ],
      "influence": "Figure Helix、GR00T N1、Gemini Robotics 等路线均体现了某种形式的高层语义推理与低层动作生成/控制分离。",
      "difference": "它不是简单端到端像素到力矩，也不是完全符号分层，而是用学习模型、经典控制和安全层共同构成的混合系统。",
      "relation": "继承 Brooks 快反射思想、TAMP 分层思想和 VLA 语义模型能力，同时直接暴露高低频控制接口瓶颈。",
      "sources": [
        {
          "name": "GR00T N1 arXiv",
          "url": "https://arxiv.org/abs/2503.14734"
        },
        {
          "name": "Figure Helix",
          "url": "https://www.figure.ai/news/helix"
        }
      ]
    },
    {
      "id": "semantic-scene-graph-3d",
      "type": "concept",
      "name": "3D 语义场景图 / ConceptGraphs",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-perception",
      "group": "group-learning",
      "importance": 5,
      "subtitle": "开放词汇 3D 空间记忆",
      "summary": "把点云/图像中的对象组织成带语义、空间关系和可检索属性的图结构，是机器人长期空间记忆的重要载体。",
      "definition": "3D 语义场景图用节点表示房间、区域、对象、部件或人，用边表示相邻、包含、支撑、遮挡、可达等空间关系，并在节点上保存开放词汇语义特征。",
      "principle": "通过 2D 基础模型检测/分割对象，再进行多视角关联与 3D 融合，将连续空间压缩成可供规划和语言检索使用的实体图。",
      "problem": "解决机器人“看不到就忘记”“只知道占据栅格、不知道物体语义和关系”的空间认知缺陷。",
      "prerequisites": [
        "开放词汇视觉模型",
        "SLAM/视觉里程计",
        "多视角实例关联",
        "场景记忆数据库"
      ],
      "influence": "可支撑机器人 RAG、长程导航、物体寻找、任务规划和错误恢复。",
      "difference": "相比 3D 占据网格，它不仅描述哪里有障碍，还描述“这是什么、能做什么、与其他物体有什么关系”。",
      "relation": "从开放词汇感知继承语义，从 SLAM 继承几何位姿，为分层智能体和记忆系统提供中间表示。",
      "sources": [
        {
          "name": "ConceptGraphs arXiv",
          "url": "https://arxiv.org/abs/2309.16650"
        }
      ]
    },
    {
      "id": "embodied-predictive-world-model",
      "type": "concept",
      "name": "具身预测世界模型",
      "year": 2024,
      "stage": "stage-foundation",
      "lane": "lane-perception",
      "group": "group-vla",
      "importance": 5,
      "subtitle": "动作条件未来预测与物理后果推演",
      "summary": "具身预测世界模型试图让机器人在执行前预测未来数秒的物理变化，用于任务前瞻、错误恢复和安全评估。",
      "definition": "输入当前观测、历史状态、语言目标和候选动作，输出未来状态、视频帧、隐变量或成功概率的模型。",
      "principle": "模型在视频、仿真、真实机器人轨迹和失败案例上学习物理时序规律，在隐空间中评估“动作会造成什么后果”。",
      "problem": "缓解长程自回归动作模型一步错、步步错的复合误差问题。",
      "prerequisites": [
        "真实机器人轨迹",
        "人类视频/合成视频",
        "动作条件建模",
        "可校准的不确定性估计"
      ],
      "influence": "可能成为机器人从短技能走向长程自主任务的关键中间层。",
      "difference": "与普通视频生成不同，它必须对动作、接触、力、可执行性和任务状态敏感。",
      "relation": "它连接数据飞轮、仿真、VLA 策略和安全监督器，是可预测物理世界模型瓶颈的主要候选解法。",
      "sources": [
        {
          "name": "NVIDIA Cosmos / Physical AI news",
          "url": "https://nvidianews.nvidia.com/news/nvidia-open-humanoid-robot-reference-design"
        }
      ]
    },
    {
      "id": "action-chunking-transformer",
      "type": "method",
      "name": "ACT 动作分块 Transformer",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-control",
      "group": "group-learning",
      "importance": 5,
      "subtitle": "Action Chunking with Transformers",
      "summary": "ACT 将未来一段动作作为 chunk 一次性生成，并通过时序集成平滑执行，是低成本双臂灵巧操作的重要算法。",
      "definition": "一种模仿学习策略，用 Transformer/CVAE 学习动作序列分布，一次预测未来 k 步动作而非单步动作。",
      "principle": "动作分块减少逐帧行为克隆的误差积累，时序集成降低动作抖动，使低成本硬件也能完成较精细的双臂任务。",
      "problem": "解决高精度操作中单步行为克隆容易抖动、非平稳示范难建模、误差随时间累积的问题。",
      "prerequisites": [
        "高频遥操作数据",
        "多视角相机",
        "关节状态同步记录",
        "行为克隆训练管线"
      ],
      "influence": "直接推动 ALOHA/Mobile ALOHA 成为机器人操作研究中的重要开源平台。",
      "difference": "相比 Diffusion Policy，ACT 更简单高效；面对强多峰动作分布时，扩散/flow matching 可能表达能力更强。",
      "relation": "连接遥操作数据、ALOHA 基准、LeRobot 工具链和底层动作平滑控制。",
      "sources": [
        {
          "name": "Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware",
          "url": "https://arxiv.org/abs/2304.13705"
        }
      ]
    },
    {
      "id": "rapid-motor-adaptation",
      "type": "method",
      "name": "RMA 快速运动适应",
      "year": 2021,
      "stage": "stage-deep-rl",
      "lane": "lane-control",
      "group": "group-learning",
      "importance": 4,
      "subtitle": "Rapid Motor Adaptation for legged robots",
      "summary": "RMA 通过本体感觉在线估计地形、负载和动力学变化，使腿式机器人在未知环境中快速调整步态。",
      "definition": "由基础策略和适应模块组成的腿式机器人运动控制方法，通常在仿真中通过域随机化训练，再迁移到真实机器人。",
      "principle": "适应模块从最近的本体感觉历史中推断环境隐变量，基础策略据此改变动作。",
      "problem": "解决腿式机器人在摩擦、坡度、软硬地面、负载变化和磨损条件下的实时适应问题。",
      "prerequisites": [
        "大规模仿真训练",
        "本体感觉传感器",
        "低延迟控制器",
        "域随机化"
      ],
      "influence": "其思想影响四足/双足机器人用学习策略处理未知地形和扰动。",
      "difference": "相比手写步态和纯 MPC，RMA 更强调从数据中学习隐式环境适应；但安全验证和可解释性更难。",
      "relation": "它属于低层“小脑”运动控制能力，与高层 VLA 语义规划互补。",
      "sources": [
        {
          "name": "RMA arXiv",
          "url": "https://arxiv.org/abs/2107.04034"
        }
      ]
    },
    {
      "id": "aloha-benchmark-system",
      "type": "benchmark",
      "name": "ALOHA / Mobile ALOHA 灵巧操作体系",
      "year": 2023,
      "stage": "stage-foundation",
      "lane": "lane-benchmark",
      "group": "group-data",
      "importance": 4,
      "subtitle": "低成本遥操作 + 双臂真实世界基准",
      "summary": "ALOHA 系列降低了双臂精细操作数据采集门槛，成为 ACT、Diffusion Policy 等算法在真实机器人上评估的重要平台。",
      "definition": "由主从臂遥操作、相机、关节记录和模仿学习训练流程组成的真实世界操作平台。",
      "principle": "通过低成本硬件让人类示范大量双臂任务，并将示范转换为可训练的行为克隆数据。",
      "problem": "解决灵巧操作数据采集昂贵、真实评测稀缺和实验难复现的问题。",
      "influence": "推动桌面双臂、移动双臂和低成本机器人学习生态。",
      "difference": "它强调真实物理任务而非纯仿真，因此能暴露摩擦、遮挡、接触和硬件误差。",
      "relation": "ACT 是其关键策略算法之一；Mobile ALOHA 和 ALOHA 2 是其扩展。",
      "sources": [
        {
          "name": "ALOHA ACT arXiv",
          "url": "https://arxiv.org/abs/2304.13705"
        },
        {
          "name": "Mobile ALOHA arXiv",
          "url": "https://arxiv.org/abs/2401.02117"
        }
      ]
    },
    {
      "id": "compound-error-bottleneck",
      "type": "bottleneck",
      "name": "长程自回归复合误差瓶颈",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "一步偏差被后续步骤放大",
      "summary": "机器人在多步骤任务中常不是第一步就失败，而是在若干小偏差累积后进入不可恢复状态。",
      "definition": "自回归策略将先前动作结果作为后续输入，若没有状态校验和世界模型前瞻，误差会沿任务链传播并放大。",
      "cause": "感知误差、控制执行偏差、对象滑动、遮挡、任务状态未更新和历史上下文丢失。",
      "affectedNodes": [
        "RT-2/OpenVLA 类离散动作 VLA",
        "长程家庭任务",
        "工厂连续装配",
        "移动双臂任务"
      ],
      "openProblems": "动作 chunk、扩散策略、世界模型、任务图校验、失败检测与自恢复需要组合使用。",
      "relation": "是长程规划瓶颈的时序机制层解释。"
    },
    {
      "id": "high-low-frequency-gap",
      "type": "bottleneck",
      "name": "高层慢认知与低层快控制断层",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "1–10Hz 语义推理 vs 100–1000Hz 控制闭环",
      "summary": "大模型负责理解和规划，但机器人身体需要毫秒级控制；高低频接口是人形机器人安全部署的核心系统问题。",
      "definition": "高层模型输出目标、技能或动作片段的频率远低于低层关节控制频率，接口若缺乏缓冲和安全约束，会造成动作不连续、延迟或失稳。",
      "cause": "多模态模型推理成本高，低层动力学对时间延迟极敏感，二者时钟周期和不确定性表示不同。",
      "affectedNodes": [
        "大脑—小脑双环分层具身智能体架构",
        "GR00T N1",
        "Figure Helix",
        "Gemini Robotics",
        "MPC/WBC"
      ],
      "openProblems": "如何设计动作抽象粒度、反馈频率、实时安全层和异常恢复策略。",
      "relation": "它把“智能瓶颈”和“身体瓶颈”连接起来：不是模型不聪明或关节不强，而是接口必须工程化。",
      "sources": [
        {
          "name": "GR00T N1 arXiv",
          "url": "https://arxiv.org/abs/2503.14734"
        },
        {
          "name": "Figure Helix",
          "url": "https://www.figure.ai/news/helix"
        }
      ]
    },
    {
      "id": "mind-body-misalignment-bottleneck",
      "type": "bottleneck",
      "name": "身体—智能协同失调瓶颈",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 5,
      "subtitle": "不是身体或智能单点问题，而是协同问题",
      "summary": "人形机器人常在“硬件已能动、模型似乎能懂、真实任务仍不稳定”的中间地带失败。",
      "definition": "身体平台、传感器、数据分布、策略模型、控制接口和任务场景没有共同优化，导致系统整体能力低于单点能力之和。",
      "cause": "硬件可采集的数据分布不等于模型需要的数据分布；模型输出的动作粒度不等于控制器安全可执行的动作粒度。",
      "affectedNodes": [
        "Tesla Optimus",
        "Figure Helix",
        "GR00T N1",
        "OpenVLA",
        "π0",
        "真实部署评测"
      ],
      "openProblems": "需要联合设计硬件、传感器、遥操作接口、数据格式、策略模型、实时控制器和部署场景。",
      "relation": "它是“到底卡在身体还是智能”问题的系统工程回答。"
    },
    {
      "id": "action-representation-bottleneck",
      "type": "bottleneck",
      "name": "动作表示瓶颈：离散 token、连续轨迹与跨本体对齐",
      "year": 2026,
      "stage": "stage-industrial-vla",
      "lane": "lane-bottleneck",
      "group": "group-bottleneck",
      "importance": 4,
      "subtitle": "动作空间如何被模型理解和生成",
      "summary": "VLA 必须把连续、高频、受动力学约束的机器人动作压缩成模型可学习的表示，这是跨本体泛化的关键难题。",
      "definition": "动作可表示为离散 token、末端位姿增量、关节目标、动作 chunk、扩散轨迹、flow matching 轨迹或技能调用；不同表示影响精度、泛化和安全。",
      "cause": "语言模型擅长离散 token，但机器人动作天然连续；不同机器人关节结构和末端执行器差异很大。",
      "affectedNodes": [
        "RT-2",
        "OpenVLA",
        "π0",
        "GR00T N1",
        "Open X-Embodiment"
      ],
      "openProblems": "如何统一跨本体动作表示，同时保留高频连续控制精度和物理约束。",
      "relation": "OpenVLA 与 RT-2 代表动作 token 路线；π0、Diffusion Policy、GR00T 动作模块代表连续动作生成路线。"
    }
  ],
  "links": [
    {
      "source": "stage-embryonic-node",
      "target": "root",
      "type": "opens",
      "label": "阶段",
      "year": 1948,
      "strength": 0.4,
      "description": "该阶段构成总知识图谱的时间背景。"
    },
    {
      "source": "stage-classical-node",
      "target": "root",
      "type": "opens",
      "label": "阶段",
      "year": 1986,
      "strength": 0.4,
      "description": "该阶段构成总知识图谱的时间背景。"
    },
    {
      "source": "stage-ros-drc-node",
      "target": "root",
      "type": "opens",
      "label": "阶段",
      "year": 2006,
      "strength": 0.4,
      "description": "该阶段构成总知识图谱的时间背景。"
    },
    {
      "source": "stage-deep-rl-node",
      "target": "root",
      "type": "opens",
      "label": "阶段",
      "year": 2016,
      "strength": 0.4,
      "description": "该阶段构成总知识图谱的时间背景。"
    },
    {
      "source": "stage-foundation-node",
      "target": "root",
      "type": "opens",
      "label": "阶段",
      "year": 2022,
      "strength": 0.4,
      "description": "该阶段构成总知识图谱的时间背景。"
    },
    {
      "source": "stage-industrial-vla-node",
      "target": "root",
      "type": "opens",
      "label": "阶段",
      "year": 2025,
      "strength": 0.4,
      "description": "该阶段构成总知识图谱的时间背景。"
    },
    {
      "source": "stage-frontier-node",
      "target": "root",
      "type": "opens",
      "label": "阶段",
      "year": 2027,
      "strength": 0.4,
      "description": "该阶段构成总知识图谱的时间背景。"
    },
    {
      "source": "root",
      "target": "question-body-vs-mind",
      "type": "opens",
      "label": "总论",
      "year": 2026,
      "strength": 0.9,
      "description": "根问题展开为核心概念。"
    },
    {
      "source": "root",
      "target": "closed-loop-agent",
      "type": "opens",
      "label": "总论",
      "year": 2026,
      "strength": 0.9,
      "description": "根问题展开为核心概念。"
    },
    {
      "source": "root",
      "target": "physical-ai",
      "type": "opens",
      "label": "总论",
      "year": 2026,
      "strength": 0.9,
      "description": "根问题展开为核心概念。"
    },
    {
      "source": "root",
      "target": "vla",
      "type": "opens",
      "label": "总论",
      "year": 2026,
      "strength": 0.9,
      "description": "根问题展开为核心概念。"
    },
    {
      "source": "root",
      "target": "foundation-model",
      "type": "opens",
      "label": "总论",
      "year": 2026,
      "strength": 0.9,
      "description": "根问题展开为核心概念。"
    },
    {
      "source": "cybernetics",
      "target": "mpc",
      "type": "influences",
      "label": "反馈控制思想",
      "year": 1970,
      "strength": 0.8,
      "description": "控制论影响现代反馈控制与 MPC。"
    },
    {
      "source": "cybernetics",
      "target": "closed-loop-agent",
      "type": "influences",
      "label": "闭环思想",
      "year": 2026,
      "strength": 0.8,
      "description": "闭环反馈是具身智能体的核心。"
    },
    {
      "source": "symbolic-ai",
      "target": "strips",
      "type": "enables",
      "label": "理论基础",
      "year": 1971,
      "strength": 0.9,
      "description": "符号 AI 支撑 STRIPS 自动规划。"
    },
    {
      "source": "sense-plan-act",
      "target": "strips",
      "type": "applies",
      "label": "规划模块",
      "year": 1971,
      "strength": 0.7,
      "description": "三段式架构中规划模块可由 STRIPS 等实现。"
    },
    {
      "source": "strips",
      "target": "tamp",
      "type": "influences",
      "label": "影响 TAMP",
      "year": 2009,
      "strength": 0.7,
      "description": "符号动作前置条件思想影响任务-运动规划。"
    },
    {
      "source": "wabot1",
      "target": "wabot2",
      "type": "inherits",
      "label": "早稻田谱系",
      "year": 1984,
      "strength": 0.8,
      "description": "WABOT-2 继承 WABOT 人形集成路线。"
    },
    {
      "source": "person-kato",
      "target": "wabot1",
      "type": "proposes",
      "label": "领导/推动",
      "year": 1973,
      "strength": 0.9,
      "description": "加藤一郎领导 WABOT 项目。"
    },
    {
      "source": "shakey",
      "target": "strips",
      "type": "enables",
      "label": "催生",
      "year": 1971,
      "strength": 0.8,
      "description": "Shakey 项目推动 STRIPS 等规划方法。"
    },
    {
      "source": "sense-plan-act",
      "target": "subsumption",
      "type": "competes",
      "label": "竞争范式",
      "year": 1986,
      "strength": 0.9,
      "description": "Subsumption 反对过度串行的感知-规划-行动范式。"
    },
    {
      "source": "person-brooks",
      "target": "subsumption",
      "type": "proposes",
      "label": "提出",
      "year": 1986,
      "strength": 0.9,
      "description": "Brooks 提出/推动包容架构。"
    },
    {
      "source": "subsumption",
      "target": "behavior-based",
      "type": "opens",
      "label": "开启行为式",
      "year": 1988,
      "strength": 0.9,
      "description": "包容架构开启行为式机器人潮流。"
    },
    {
      "source": "behavior-based",
      "target": "visual-servoing",
      "type": "influences",
      "label": "闭环动作",
      "year": 1990,
      "strength": 0.6,
      "description": "行为式思想强调实时反馈。"
    },
    {
      "source": "affordance",
      "target": "vla",
      "type": "influences",
      "label": "语义到动作",
      "year": 2023,
      "strength": 0.7,
      "description": "VLA 需要把对象语义转化为可行动性。"
    },
    {
      "source": "pomdp",
      "target": "llm-planning",
      "type": "influences",
      "label": "不确定规划思想",
      "year": 2022,
      "strength": 0.5,
      "description": "LLM 规划若要落地仍需处理 POMDP 式不确定性。"
    },
    {
      "source": "probabilistic-robotics",
      "target": "slam",
      "type": "enables",
      "label": "概率基础",
      "year": 2000,
      "strength": 0.9,
      "description": "概率方法系统化 SLAM 和定位。"
    },
    {
      "source": "kalman-particle",
      "target": "slam",
      "type": "enables",
      "label": "状态估计",
      "year": 1986,
      "strength": 0.8,
      "description": "滤波是 SLAM 的核心组成。"
    },
    {
      "source": "person-thrun",
      "target": "probabilistic-robotics",
      "type": "proposes",
      "label": "系统化",
      "year": 2000,
      "strength": 0.8,
      "description": "Thrun 推动概率机器人体系。"
    },
    {
      "source": "person-burgard",
      "target": "probabilistic-robotics",
      "type": "author",
      "label": "作者",
      "year": 2005,
      "strength": 0.8,
      "description": "Burgard 参与概率机器人体系化。"
    },
    {
      "source": "person-fox",
      "target": "probabilistic-robotics",
      "type": "author",
      "label": "作者",
      "year": 2005,
      "strength": 0.8,
      "description": "Fox 参与概率机器人体系化。"
    },
    {
      "source": "slam",
      "target": "ros",
      "type": "applies",
      "label": "工程集成",
      "year": 2007,
      "strength": 0.6,
      "description": "ROS 集成大量导航/SLAM 软件包。"
    },
    {
      "source": "rrt",
      "target": "tamp",
      "type": "enables",
      "label": "运动规划",
      "year": 2009,
      "strength": 0.8,
      "description": "采样运动规划是 TAMP 的连续空间基础。"
    },
    {
      "source": "mpc",
      "target": "whole-body-control",
      "type": "enables",
      "label": "底层控制",
      "year": 2005,
      "strength": 0.9,
      "description": "MPC 与优化控制支撑全身控制。"
    },
    {
      "source": "whole-body-control",
      "target": "atlas-2013",
      "type": "applies",
      "label": "全身协调",
      "year": 2013,
      "strength": 0.8,
      "description": "Atlas 等人形系统依赖全身控制。"
    },
    {
      "source": "whole-body-control",
      "target": "boston-atlas-electric",
      "type": "applies",
      "label": "全身控制",
      "year": 2024,
      "strength": 0.8,
      "description": "电动 Atlas 继承高动态全身控制能力。"
    },
    {
      "source": "person-raibert",
      "target": "atlas-2013",
      "type": "influences",
      "label": "动态机器人传统",
      "year": 2013,
      "strength": 0.8,
      "description": "Raibert/Boston Dynamics 推动高动态人形机器人。"
    },
    {
      "source": "person-raibert",
      "target": "boston-atlas-electric",
      "type": "influences",
      "label": "Boston Dynamics 路线",
      "year": 2024,
      "strength": 0.8,
      "description": "动态运动控制传统延续至电动 Atlas。"
    },
    {
      "source": "person-playter",
      "target": "atlas-2026-product",
      "type": "influences",
      "label": "产品化推动",
      "year": 2026,
      "strength": 0.7,
      "description": "Boston Dynamics 管理层推动 Atlas 产品化。"
    },
    {
      "source": "atlas-2013",
      "target": "drc-2015",
      "type": "evaluates",
      "label": "竞赛验证",
      "year": 2015,
      "strength": 0.9,
      "description": "DRC 检验 Atlas 等机器人灾难救援任务。"
    },
    {
      "source": "drc-2015",
      "target": "teleoperation",
      "type": "causes",
      "label": "暴露遥操作需求",
      "year": 2015,
      "strength": 0.8,
      "description": "DRC 展示复杂任务常依赖人类介入。"
    },
    {
      "source": "drc-2015",
      "target": "ros",
      "type": "applies",
      "label": "工程生态",
      "year": 2015,
      "strength": 0.6,
      "description": "DRC 促进 ROS 和仿真工具应用。"
    },
    {
      "source": "ros",
      "target": "pr2",
      "type": "implements",
      "label": "平台实现",
      "year": 2010,
      "strength": 0.7,
      "description": "PR2 是 ROS 生态重要研究平台。"
    },
    {
      "source": "ros",
      "target": "gazebo",
      "type": "bridge",
      "label": "仿真开发",
      "year": 2009,
      "strength": 0.7,
      "description": "ROS 与 Gazebo 形成常见仿真开发组合。"
    },
    {
      "source": "gazebo",
      "target": "drc-2015",
      "type": "evaluates",
      "label": "仿真赛道",
      "year": 2015,
      "strength": 0.6,
      "description": "DRC 使用仿真与真实任务促进系统验证。"
    },
    {
      "source": "mujoco",
      "target": "deep-rl",
      "type": "enables",
      "label": "仿真训练",
      "year": 2015,
      "strength": 0.7,
      "description": "MuJoCo 推动机器人 RL 基准和训练。"
    },
    {
      "source": "deep-vision",
      "target": "palm-e",
      "type": "enables",
      "label": "多模态视觉基础",
      "year": 2023,
      "strength": 0.6,
      "description": "深度视觉是多模态具身模型前提。"
    },
    {
      "source": "imitation-learning",
      "target": "dagger",
      "type": "improves",
      "label": "缓解分布偏移",
      "year": 2011,
      "strength": 0.8,
      "description": "DAgger 改进纯行为克隆的分布偏移。"
    },
    {
      "source": "imitation-learning",
      "target": "rt1",
      "type": "influences",
      "label": "示范学习",
      "year": 2022,
      "strength": 0.7,
      "description": "RT-1 学习大规模机器人示范轨迹。"
    },
    {
      "source": "deep-rl",
      "target": "sim2real",
      "type": "influences",
      "label": "仿真训练",
      "year": 2016,
      "strength": 0.7,
      "description": "深度 RL 常需 sim2real。"
    },
    {
      "source": "domain-randomization",
      "target": "sim2real",
      "type": "improves",
      "label": "提高泛化",
      "year": 2017,
      "strength": 0.8,
      "description": "域随机化缓解仿真现实差距。"
    },
    {
      "source": "sim2real",
      "target": "isaac-sim",
      "type": "enables",
      "label": "仿真工具链",
      "year": 2021,
      "strength": 0.7,
      "description": "Isaac Sim 支持合成数据和 sim2real。"
    },
    {
      "source": "diffusion-policy",
      "target": "octo",
      "type": "influences",
      "label": "扩散动作生成",
      "year": 2024,
      "strength": 0.8,
      "description": "Octo 等通用策略采用/借鉴扩散式动作建模。"
    },
    {
      "source": "diffusion-policy",
      "target": "pi0",
      "type": "influences",
      "label": "动作生成",
      "year": 2024,
      "strength": 0.8,
      "description": "π0 使用 flow/diffusion 类连续动作生成思想。"
    },
    {
      "source": "diffusion-policy",
      "target": "gr00t-n1",
      "type": "influences",
      "label": "System 1 动作生成",
      "year": 2025,
      "strength": 0.8,
      "description": "GR00T N1 使用扩散 Transformer 生成动作。"
    },
    {
      "source": "behavior-transformer",
      "target": "rt1",
      "type": "influences",
      "label": "序列建模",
      "year": 2022,
      "strength": 0.9,
      "description": "RT-1 把机器人控制转化为 Transformer 序列建模。"
    },
    {
      "source": "behavior-transformer",
      "target": "rt2",
      "type": "influences",
      "label": "VLA 序列建模",
      "year": 2023,
      "strength": 0.9,
      "description": "RT-2 继承 Transformer action token 路线。"
    },
    {
      "source": "world-models",
      "target": "cosmos",
      "type": "influences",
      "label": "物理世界生成",
      "year": 2025,
      "strength": 0.7,
      "description": "Cosmos 可视为物理 AI 世界模型生态的一部分。"
    },
    {
      "source": "world-models",
      "target": "world-model-bottleneck",
      "type": "bottleneck",
      "label": "尚未解决",
      "year": 2026,
      "strength": 0.9,
      "description": "可靠世界模型仍是瓶颈。"
    },
    {
      "source": "memory-robot",
      "target": "long-horizon-bottleneck",
      "type": "bottleneck",
      "label": "记忆不足",
      "year": 2026,
      "strength": 0.8,
      "description": "长期记忆不足导致长程任务脆弱。"
    },
    {
      "source": "llm-planning",
      "target": "saycan",
      "type": "influences",
      "label": "LLM+可执行性",
      "year": 2022,
      "strength": 0.8,
      "description": "SayCan 将 LLM 与可执行技能值结合。"
    },
    {
      "source": "skill-library",
      "target": "saycan",
      "type": "applies",
      "label": "技能选择",
      "year": 2022,
      "strength": 0.8,
      "description": "SayCan 在技能库上选择可执行动作。"
    },
    {
      "source": "saycan",
      "target": "llm-planning",
      "type": "opens",
      "label": "开启 LLM 规划",
      "year": 2022,
      "strength": 0.8,
      "description": "SayCan 是 LLM 机器人规划代表工作。"
    },
    {
      "source": "palm-e",
      "target": "rt2",
      "type": "influences",
      "label": "多模态具身模型",
      "year": 2023,
      "strength": 0.7,
      "description": "PaLM-E 与 RT-2 共同推动 VLM 到机器人。"
    },
    {
      "source": "rt1",
      "target": "rt2",
      "type": "improves",
      "label": "Web 语义迁移",
      "year": 2023,
      "strength": 0.9,
      "description": "RT-2 在 RT-1 基础上引入互联网 VLM 知识。"
    },
    {
      "source": "rt1",
      "target": "rt-x",
      "type": "inherits",
      "label": "跨本体扩展",
      "year": 2023,
      "strength": 0.8,
      "description": "RT-X 扩展 RT 系列到跨机器人数据。"
    },
    {
      "source": "open-x",
      "target": "rt-x",
      "type": "enables",
      "label": "数据基础",
      "year": 2023,
      "strength": 0.9,
      "description": "Open X-Embodiment 为 RT-X 提供跨本体数据。"
    },
    {
      "source": "open-x",
      "target": "openvla",
      "type": "enables",
      "label": "训练数据",
      "year": 2024,
      "strength": 0.9,
      "description": "OpenVLA 使用多样机器人示范数据。"
    },
    {
      "source": "open-x",
      "target": "octo",
      "type": "enables",
      "label": "训练数据",
      "year": 2024,
      "strength": 0.9,
      "description": "Octo 预训练于 Open X 数据子集。"
    },
    {
      "source": "open-x",
      "target": "gr00t-n1",
      "type": "influences",
      "label": "跨本体数据范式",
      "year": 2025,
      "strength": 0.6,
      "description": "GR00T 延续多来源机器人数据混合训练趋势。"
    },
    {
      "source": "vla",
      "target": "rt2",
      "type": "opens",
      "label": "VLA 代表",
      "year": 2023,
      "strength": 0.9,
      "description": "RT-2 是 VLA 名称和路线代表。"
    },
    {
      "source": "vla",
      "target": "openvla",
      "type": "influences",
      "label": "开源 VLA",
      "year": 2024,
      "strength": 0.8,
      "description": "OpenVLA 开源化 VLA 路线。"
    },
    {
      "source": "vla",
      "target": "figure-helix",
      "type": "influences",
      "label": "产业 VLA",
      "year": 2025,
      "strength": 0.8,
      "description": "Figure Helix 是产业人形 VLA 代表。"
    },
    {
      "source": "vla",
      "target": "gr00t-n1",
      "type": "influences",
      "label": "人形 VLA",
      "year": 2025,
      "strength": 0.8,
      "description": "GR00T N1 是开放人形基础模型代表。"
    },
    {
      "source": "foundation-model",
      "target": "rt2",
      "type": "influences",
      "label": "模型化趋势",
      "year": 2023,
      "strength": 0.7,
      "description": "RT-2 推动机器人基础模型概念。"
    },
    {
      "source": "foundation-model",
      "target": "rfm1",
      "type": "influences",
      "label": "产业 RFM",
      "year": 2024,
      "strength": 0.8,
      "description": "RFM-1 直接以机器人基础模型命名。"
    },
    {
      "source": "foundation-model",
      "target": "pi0",
      "type": "influences",
      "label": "通用策略",
      "year": 2024,
      "strength": 0.8,
      "description": "π0 是通用机器人策略路线。"
    },
    {
      "source": "foundation-model",
      "target": "skild-brain",
      "type": "influences",
      "label": "跨本体模型",
      "year": 2025,
      "strength": 0.8,
      "description": "Skild Brain 强调 omni-bodied。"
    },
    {
      "source": "foundation-model",
      "target": "gr00t-n1",
      "type": "influences",
      "label": "人形基础模型",
      "year": 2025,
      "strength": 0.9,
      "description": "GR00T N1 是人形基础模型。"
    },
    {
      "source": "openvla",
      "target": "pi0",
      "type": "competes",
      "label": "通用策略路线",
      "year": 2024,
      "strength": 0.6,
      "description": "OpenVLA 与 π0 都追求通用机器人策略，但动作表示不同。"
    },
    {
      "source": "octo",
      "target": "openvla",
      "type": "competes",
      "label": "开源通用策略",
      "year": 2024,
      "strength": 0.6,
      "description": "Octo 与 OpenVLA 代表不同开源模型设计。"
    },
    {
      "source": "pi0",
      "target": "pi07",
      "type": "improves",
      "label": "组合泛化",
      "year": 2026,
      "strength": 0.8,
      "description": "π0.7 试图提升 π0 的组合泛化与可引导性。"
    },
    {
      "source": "gr00t-n1",
      "target": "gr00t-n17",
      "type": "improves",
      "label": "版本更新",
      "year": 2026,
      "strength": 0.8,
      "description": "GR00T N1.7 更新模型能力与数据混合。"
    },
    {
      "source": "gr00t-n1",
      "target": "gr00t-reference",
      "type": "implements",
      "label": "参考实现",
      "year": 2026,
      "strength": 0.9,
      "description": "GR00T 参考机器人将模型、硬件和工具链连接。"
    },
    {
      "source": "isaac-sim",
      "target": "gr00t-n1",
      "type": "enables",
      "label": "合成数据/仿真",
      "year": 2025,
      "strength": 0.8,
      "description": "GR00T 使用 NVIDIA 仿真与合成数据生态。"
    },
    {
      "source": "cosmos",
      "target": "gr00t-reference",
      "type": "enables",
      "label": "物理世界模型",
      "year": 2026,
      "strength": 0.7,
      "description": "Cosmos/GR00T/Isaac 形成物理 AI 工具链。"
    },
    {
      "source": "person-brohan",
      "target": "rt1",
      "type": "author",
      "label": "核心作者",
      "year": 2022,
      "strength": 0.8,
      "description": "Brohan 是 RT-1/RT-2 代表作者之一。"
    },
    {
      "source": "person-brohan",
      "target": "rt2",
      "type": "author",
      "label": "核心作者",
      "year": 2023,
      "strength": 0.8,
      "description": "Brohan 是 RT-2 代表作者之一。"
    },
    {
      "source": "person-hausman",
      "target": "rt1",
      "type": "author",
      "label": "作者",
      "year": 2022,
      "strength": 0.7,
      "description": "参与 RT 系列研究。"
    },
    {
      "source": "person-tedxiao",
      "target": "rt2",
      "type": "author",
      "label": "作者/传播",
      "year": 2023,
      "strength": 0.6,
      "description": "参与 RT/VLA 研究并传播机器人基础模型趋势。"
    },
    {
      "source": "person-levine",
      "target": "octo",
      "type": "author",
      "label": "作者团队",
      "year": 2024,
      "strength": 0.7,
      "description": "Levine 团队参与 Octo/Open X 生态。"
    },
    {
      "source": "person-finn",
      "target": "octo",
      "type": "author",
      "label": "作者团队",
      "year": 2024,
      "strength": 0.7,
      "description": "Finn 团队参与 Octo/Open X 生态。"
    },
    {
      "source": "person-yuke-zhu",
      "target": "gr00t-n1",
      "type": "author",
      "label": "作者团队",
      "year": 2025,
      "strength": 0.7,
      "description": "Yuke Zhu 参与 GR00T N1。"
    },
    {
      "source": "person-linxi-fan",
      "target": "gr00t-n1",
      "type": "author",
      "label": "研究推动",
      "year": 2025,
      "strength": 0.8,
      "description": "Linxi Fan 参与 GR00T/物理 AI 方向。"
    },
    {
      "source": "person-huang",
      "target": "gr00t-reference",
      "type": "proposes",
      "label": "平台推动",
      "year": 2026,
      "strength": 0.8,
      "description": "Jensen Huang 推动 NVIDIA 物理 AI 生态。"
    },
    {
      "source": "tesla-optimus",
      "target": "question-body-vs-mind",
      "type": "applies",
      "label": "典型争议",
      "year": 2026,
      "strength": 0.6,
      "description": "Optimus 常被用于讨论身体、制造与自主智能哪个更难。"
    },
    {
      "source": "person-musk",
      "target": "tesla-optimus",
      "type": "proposes",
      "label": "推动项目",
      "year": 2022,
      "strength": 0.9,
      "description": "Musk 推动 Tesla Optimus。"
    },
    {
      "source": "tesla-optimus",
      "target": "deep-vision",
      "type": "influences",
      "label": "复用自动驾驶视觉",
      "year": 2022,
      "strength": 0.4,
      "description": "Tesla 公开强调 AI for vision and planning。"
    },
    {
      "source": "tesla-optimus",
      "target": "closed-loop-bottleneck",
      "type": "bottleneck",
      "label": "自主闭环不透明",
      "year": 2026,
      "strength": 0.7,
      "description": "Optimus 的公开自主能力仍需验证。"
    },
    {
      "source": "figure-01",
      "target": "figure-03",
      "type": "improves",
      "label": "硬件迭代",
      "year": 2025,
      "strength": 0.8,
      "description": "Figure 03 是 Figure 早期平台的迭代。"
    },
    {
      "source": "figure-helix",
      "target": "figure-03",
      "type": "implements",
      "label": "AI 系统适配硬件",
      "year": 2025,
      "strength": 0.9,
      "description": "Figure 03 被设计为适配 Helix。"
    },
    {
      "source": "person-adcock",
      "target": "figure-helix",
      "type": "proposes",
      "label": "公司推动",
      "year": 2025,
      "strength": 0.8,
      "description": "Adcock/Figure 推动 Helix。"
    },
    {
      "source": "figure-helix",
      "target": "closed-loop-agent",
      "type": "implements",
      "label": "闭环 VLA",
      "year": 2025,
      "strength": 0.8,
      "description": "Helix 宣称控制感知、运动和推理闭环。"
    },
    {
      "source": "person-hurst",
      "target": "digit",
      "type": "proposes",
      "label": "创始团队",
      "year": 2020,
      "strength": 0.8,
      "description": "Hurst 推动 Digit 双足商业路线。"
    },
    {
      "source": "digit",
      "target": "arc-platform",
      "type": "implements",
      "label": "车队平台",
      "year": 2024,
      "strength": 0.9,
      "description": "Arc 管理 Digit 工作流和车队。"
    },
    {
      "source": "digit",
      "target": "manufacturing-bottleneck",
      "type": "applies",
      "label": "部署优先",
      "year": 2026,
      "strength": 0.6,
      "description": "Digit 展示特定场景优先商业化。"
    },
    {
      "source": "phoenix",
      "target": "closed-loop-agent",
      "type": "applies",
      "label": "Carbon 架构",
      "year": 2023,
      "strength": 0.7,
      "description": "Carbon 试图连接语言、规划和行动。"
    },
    {
      "source": "person-geordie",
      "target": "phoenix",
      "type": "proposes",
      "label": "公司推动",
      "year": 2023,
      "strength": 0.8,
      "description": "Geordie Rose 推动 Sanctuary Phoenix/Carbon。"
    },
    {
      "source": "person-cardenas",
      "target": "apptronik-apollo",
      "type": "proposes",
      "label": "公司推动",
      "year": 2023,
      "strength": 0.8,
      "description": "Jeff Cardenas 推动 Apollo。"
    },
    {
      "source": "apptronik-apollo",
      "target": "manufacturing-bottleneck",
      "type": "applies",
      "label": "量产导向",
      "year": 2026,
      "strength": 0.6,
      "description": "Apollo 强调可制造和安全。"
    },
    {
      "source": "person-wang-xingxing",
      "target": "unitree-g1",
      "type": "proposes",
      "label": "公司推动",
      "year": 2024,
      "strength": 0.8,
      "description": "王兴兴推动 Unitree 人形平台。"
    },
    {
      "source": "unitree-h1",
      "target": "unitree-g1",
      "type": "improves",
      "label": "平台分化",
      "year": 2024,
      "strength": 0.7,
      "description": "G1 更偏研究可及性，H1 更偏全尺寸高性能。"
    },
    {
      "source": "unitree-g1",
      "target": "gr00t-reference",
      "type": "implements",
      "label": "参考硬件生态",
      "year": 2026,
      "strength": 0.8,
      "description": "NVIDIA GR00T workflow 面向 Unitree G1。"
    },
    {
      "source": "unitree-h1",
      "target": "gr00t-reference",
      "type": "implements",
      "label": "H2/H2+ 参考机体",
      "year": 2026,
      "strength": 0.7,
      "description": "NVIDIA 2026 参考设计结合 Unitree 机体。"
    },
    {
      "source": "fourier-gr1",
      "target": "fourier-gr3",
      "type": "improves",
      "label": "代际迭代",
      "year": 2025,
      "strength": 0.7,
      "description": "GR 系列从 GR-1 发展到 GR-3。"
    },
    {
      "source": "fourier-gr1",
      "target": "gr00t-n1",
      "type": "applies",
      "label": "部署平台",
      "year": 2025,
      "strength": 0.7,
      "description": "GR00T N1 论文部署到 Fourier GR-1。"
    },
    {
      "source": "person-ubtech-zhou",
      "target": "ubtech-walker-s2",
      "type": "proposes",
      "label": "公司推动",
      "year": 2025,
      "strength": 0.7,
      "description": "优必选推动 Walker 工业部署。"
    },
    {
      "source": "ubtech-walker-s2",
      "target": "energy-bottleneck",
      "type": "improves",
      "label": "自动换电尝试",
      "year": 2025,
      "strength": 0.6,
      "description": "Walker S2 公开强调自动换电以提升连续运行。"
    },
    {
      "source": "person-he-xiaopeng",
      "target": "xpeng-iron",
      "type": "proposes",
      "label": "公司推动",
      "year": 2025,
      "strength": 0.8,
      "description": "何小鹏推动 IRON 与物理 AI 技术栈。"
    },
    {
      "source": "xpeng-iron",
      "target": "deep-vision",
      "type": "inherits",
      "label": "汽车 AI 迁移",
      "year": 2025,
      "strength": 0.7,
      "description": "XPENG 公开强调复用汽车 AI 技术源。"
    },
    {
      "source": "boston-atlas-electric",
      "target": "atlas-2026-product",
      "type": "improves",
      "label": "产品化",
      "year": 2026,
      "strength": 0.8,
      "description": "Atlas 从电动展示进入产品版部署。"
    },
    {
      "source": "atlas-2026-product",
      "target": "gr00t-n1",
      "type": "bridge",
      "label": "基础模型训练工业任务",
      "year": 2026,
      "strength": 0.6,
      "description": "Boston Dynamics 也强调基础模型训练工业任务。"
    },
    {
      "source": "gr00t-reference",
      "target": "data-flywheel",
      "type": "enables",
      "label": "标准化数据平台",
      "year": 2027,
      "strength": 0.7,
      "description": "参考平台有利于统一数据采集和训练流程。"
    },
    {
      "source": "rt2",
      "target": "data-bottleneck",
      "type": "bottleneck",
      "label": "依赖数据",
      "year": 2026,
      "strength": 0.7,
      "description": "VLA/基础模型能力依赖大量高质量真实轨迹。"
    },
    {
      "source": "rt2",
      "target": "long-horizon-bottleneck",
      "type": "bottleneck",
      "label": "长程不足",
      "year": 2026,
      "strength": 0.6,
      "description": "短程技能泛化不等于长程任务自主。"
    },
    {
      "source": "rt2",
      "target": "closed-loop-bottleneck",
      "type": "bottleneck",
      "label": "闭环接口",
      "year": 2026,
      "strength": 0.7,
      "description": "模型输出动作必须与高频控制和安全闭环集成。"
    },
    {
      "source": "openvla",
      "target": "data-bottleneck",
      "type": "bottleneck",
      "label": "依赖数据",
      "year": 2026,
      "strength": 0.7,
      "description": "VLA/基础模型能力依赖大量高质量真实轨迹。"
    },
    {
      "source": "openvla",
      "target": "long-horizon-bottleneck",
      "type": "bottleneck",
      "label": "长程不足",
      "year": 2026,
      "strength": 0.6,
      "description": "短程技能泛化不等于长程任务自主。"
    },
    {
      "source": "openvla",
      "target": "closed-loop-bottleneck",
      "type": "bottleneck",
      "label": "闭环接口",
      "year": 2026,
      "strength": 0.7,
      "description": "模型输出动作必须与高频控制和安全闭环集成。"
    },
    {
      "source": "octo",
      "target": "data-bottleneck",
      "type": "bottleneck",
      "label": "依赖数据",
      "year": 2026,
      "strength": 0.7,
      "description": "VLA/基础模型能力依赖大量高质量真实轨迹。"
    },
    {
      "source": "octo",
      "target": "long-horizon-bottleneck",
      "type": "bottleneck",
      "label": "长程不足",
      "year": 2026,
      "strength": 0.6,
      "description": "短程技能泛化不等于长程任务自主。"
    },
    {
      "source": "octo",
      "target": "closed-loop-bottleneck",
      "type": "bottleneck",
      "label": "闭环接口",
      "year": 2026,
      "strength": 0.7,
      "description": "模型输出动作必须与高频控制和安全闭环集成。"
    },
    {
      "source": "pi0",
      "target": "data-bottleneck",
      "type": "bottleneck",
      "label": "依赖数据",
      "year": 2026,
      "strength": 0.7,
      "description": "VLA/基础模型能力依赖大量高质量真实轨迹。"
    },
    {
      "source": "pi0",
      "target": "long-horizon-bottleneck",
      "type": "bottleneck",
      "label": "长程不足",
      "year": 2026,
      "strength": 0.6,
      "description": "短程技能泛化不等于长程任务自主。"
    },
    {
      "source": "pi0",
      "target": "closed-loop-bottleneck",
      "type": "bottleneck",
      "label": "闭环接口",
      "year": 2026,
      "strength": 0.7,
      "description": "模型输出动作必须与高频控制和安全闭环集成。"
    },
    {
      "source": "gr00t-n1",
      "target": "data-bottleneck",
      "type": "bottleneck",
      "label": "依赖数据",
      "year": 2026,
      "strength": 0.7,
      "description": "VLA/基础模型能力依赖大量高质量真实轨迹。"
    },
    {
      "source": "gr00t-n1",
      "target": "long-horizon-bottleneck",
      "type": "bottleneck",
      "label": "长程不足",
      "year": 2026,
      "strength": 0.6,
      "description": "短程技能泛化不等于长程任务自主。"
    },
    {
      "source": "gr00t-n1",
      "target": "closed-loop-bottleneck",
      "type": "bottleneck",
      "label": "闭环接口",
      "year": 2026,
      "strength": 0.7,
      "description": "模型输出动作必须与高频控制和安全闭环集成。"
    },
    {
      "source": "figure-helix",
      "target": "data-bottleneck",
      "type": "bottleneck",
      "label": "依赖数据",
      "year": 2026,
      "strength": 0.7,
      "description": "VLA/基础模型能力依赖大量高质量真实轨迹。"
    },
    {
      "source": "figure-helix",
      "target": "long-horizon-bottleneck",
      "type": "bottleneck",
      "label": "长程不足",
      "year": 2026,
      "strength": 0.6,
      "description": "短程技能泛化不等于长程任务自主。"
    },
    {
      "source": "figure-helix",
      "target": "closed-loop-bottleneck",
      "type": "bottleneck",
      "label": "闭环接口",
      "year": 2026,
      "strength": 0.7,
      "description": "模型输出动作必须与高频控制和安全闭环集成。"
    },
    {
      "source": "skild-brain",
      "target": "data-bottleneck",
      "type": "bottleneck",
      "label": "依赖数据",
      "year": 2026,
      "strength": 0.7,
      "description": "VLA/基础模型能力依赖大量高质量真实轨迹。"
    },
    {
      "source": "skild-brain",
      "target": "long-horizon-bottleneck",
      "type": "bottleneck",
      "label": "长程不足",
      "year": 2026,
      "strength": 0.6,
      "description": "短程技能泛化不等于长程任务自主。"
    },
    {
      "source": "skild-brain",
      "target": "closed-loop-bottleneck",
      "type": "bottleneck",
      "label": "闭环接口",
      "year": 2026,
      "strength": 0.7,
      "description": "模型输出动作必须与高频控制和安全闭环集成。"
    },
    {
      "source": "sim2real",
      "target": "sim2real-bottleneck",
      "type": "bottleneck",
      "label": "仿真差距",
      "year": 2026,
      "strength": 0.9,
      "description": "Sim2Real 仍存在接触和长尾现实差距。"
    },
    {
      "source": "deep-vision",
      "target": "perception-bottleneck",
      "type": "bottleneck",
      "label": "感知语义不足",
      "year": 2026,
      "strength": 0.7,
      "description": "深度视觉并不自动获得物理可供性。"
    },
    {
      "source": "vla",
      "target": "perception-bottleneck",
      "type": "bottleneck",
      "label": "grounding 不稳",
      "year": 2026,
      "strength": 0.8,
      "description": "VLA 必须把语言/视觉 grounding 到可执行动作。"
    },
    {
      "source": "whole-body-control",
      "target": "closed-loop-bottleneck",
      "type": "bottleneck",
      "label": "接口断裂",
      "year": 2026,
      "strength": 0.7,
      "description": "高层智能与低层控制需要稳定接口。"
    },
    {
      "source": "teleoperation",
      "target": "data-bottleneck",
      "type": "applies",
      "label": "数据采集手段",
      "year": 2024,
      "strength": 0.8,
      "description": "遥操作是收集真实数据的重要方式。"
    },
    {
      "source": "teleoperation",
      "target": "question-body-vs-mind",
      "type": "bottleneck",
      "label": "自主性不透明",
      "year": 2026,
      "strength": 0.7,
      "description": "公开演示若依赖遥操作，说明智能闭环仍未完全解决。"
    },
    {
      "source": "data-bottleneck",
      "target": "data-flywheel",
      "type": "causes",
      "label": "催生飞轮路线",
      "year": 2027,
      "strength": 0.9,
      "description": "数据瓶颈推动真实部署数据飞轮。"
    },
    {
      "source": "data-flywheel",
      "target": "fleet-learning",
      "type": "improves",
      "label": "车队学习",
      "year": 2028,
      "strength": 0.8,
      "description": "车队学习是数据飞轮的规模化形态。"
    },
    {
      "source": "body-as-data-platform",
      "target": "data-flywheel",
      "type": "enables",
      "label": "身体采集数据",
      "year": 2027,
      "strength": 0.7,
      "description": "身体可靠性越高，越能产生真实数据。"
    },
    {
      "source": "dexterous-hand-bottleneck",
      "target": "tactile-foundation-model",
      "type": "opens",
      "label": "触觉模型需求",
      "year": 2028,
      "strength": 0.7,
      "description": "灵巧手瓶颈推动触觉基础模型。"
    },
    {
      "source": "world-model-bottleneck",
      "target": "hierarchical-agent-stack",
      "type": "causes",
      "label": "需要分层架构",
      "year": 2027,
      "strength": 0.6,
      "description": "可靠世界模型不足时需要分层安全架构。"
    },
    {
      "source": "llm-planning",
      "target": "hierarchical-agent-stack",
      "type": "influences",
      "label": "高层规划层",
      "year": 2027,
      "strength": 0.8,
      "description": "LLM 规划可能成为分层架构高层。"
    },
    {
      "source": "vla",
      "target": "hierarchical-agent-stack",
      "type": "influences",
      "label": "技能/策略层",
      "year": 2027,
      "strength": 0.8,
      "description": "VLA 可能承担中低层技能策略。"
    },
    {
      "source": "safety-supervisor",
      "target": "hierarchical-agent-stack",
      "type": "implements",
      "label": "安全层",
      "year": 2027,
      "strength": 0.8,
      "description": "安全监督器是分层架构的必要组件。"
    },
    {
      "source": "robot-rag",
      "target": "memory-robot",
      "type": "improves",
      "label": "记忆检索",
      "year": 2027,
      "strength": 0.7,
      "description": "机器人 RAG 改善长期记忆使用。"
    },
    {
      "source": "real-world-eval",
      "target": "question-body-vs-mind",
      "type": "bottleneck",
      "label": "难以判断",
      "year": 2026,
      "strength": 0.8,
      "description": "缺少统一评测使“卡在哪”难以客观量化。"
    },
    {
      "source": "person-quigley",
      "target": "ros",
      "type": "author",
      "label": "作者/开发者",
      "year": 2009,
      "strength": 0.8,
      "description": "Quigley 是 ROS 论文作者之一。"
    },
    {
      "source": "person-ng",
      "target": "ros",
      "type": "influences",
      "label": "早期生态",
      "year": 2009,
      "strength": 0.5,
      "description": "Stanford/Willow Garage 生态推动 ROS。"
    },
    {
      "source": "person-abbeel",
      "target": "rfm1",
      "type": "influences",
      "label": "Covariant/机器人学习",
      "year": 2024,
      "strength": 0.6,
      "description": "Abbeel 作为机器人学习创业与研究代表影响产业 RFM。"
    },
    {
      "source": "asimo",
      "target": "atlas-2013",
      "type": "influences",
      "label": "人形技术传统",
      "year": 2013,
      "strength": 0.5,
      "description": "ASIMO 等早期平台影响公众和工程界对人形机器人的想象。"
    },
    {
      "source": "asimo",
      "target": "boston-atlas-electric",
      "type": "influences",
      "label": "人形谱系",
      "year": 2024,
      "strength": 0.4,
      "description": "早期人形积累推动后续平台。"
    },
    {
      "source": "wabot1",
      "target": "asimo",
      "type": "influences",
      "label": "日本人形谱系",
      "year": 2000,
      "strength": 0.5,
      "description": "WABOT 开启日本仿人研究传统。"
    },
    {
      "source": "ros",
      "target": "open-x",
      "type": "bridge",
      "label": "数据工具生态",
      "year": 2023,
      "strength": 0.4,
      "description": "ROS 生态培养了标准化和开源协作文化。"
    },
    {
      "source": "open-x",
      "target": "data-bottleneck",
      "type": "improves",
      "label": "缓解数据瓶颈",
      "year": 2023,
      "strength": 0.8,
      "description": "Open X 是公开跨本体数据的重要缓解。"
    },
    {
      "source": "droid",
      "target": "data-bottleneck",
      "type": "improves",
      "label": "真实数据",
      "year": 2024,
      "strength": 0.7,
      "description": "DROID 增加开放真实操作数据。"
    },
    {
      "source": "rlbench",
      "target": "libero",
      "type": "influences",
      "label": "基准演进",
      "year": 2023,
      "strength": 0.6,
      "description": "机器人学习基准从单技能走向泛化和持续学习。"
    },
    {
      "source": "calvin",
      "target": "long-horizon-bottleneck",
      "type": "evaluates",
      "label": "长程评测",
      "year": 2021,
      "strength": 0.8,
      "description": "CALVIN 暴露长程任务困难。"
    },
    {
      "source": "behavior1k",
      "target": "world-model-bottleneck",
      "type": "evaluates",
      "label": "家庭任务物理复杂性",
      "year": 2021,
      "strength": 0.6,
      "description": "复杂家庭任务测试世界模型与规划。"
    },
    {
      "source": "humanoidbench",
      "target": "whole-body-control",
      "type": "evaluates",
      "label": "全身控制评测",
      "year": 2024,
      "strength": 0.7,
      "description": "HumanoidBench 用于评估人形控制技能。"
    },
    {
      "source": "maniskill",
      "target": "diffusion-policy",
      "type": "evaluates",
      "label": "操作评测",
      "year": 2023,
      "strength": 0.5,
      "description": "操作基准推动策略模型评估。"
    },
    {
      "source": "question-body-vs-mind",
      "target": "perception-bottleneck",
      "type": "bottleneck",
      "label": "智能子瓶颈",
      "year": 2026,
      "strength": 0.8,
      "description": "如果认为卡在智能，则可进一步拆解到该节点。"
    },
    {
      "source": "question-body-vs-mind",
      "target": "long-horizon-bottleneck",
      "type": "bottleneck",
      "label": "智能子瓶颈",
      "year": 2026,
      "strength": 0.8,
      "description": "如果认为卡在智能，则可进一步拆解到该节点。"
    },
    {
      "source": "question-body-vs-mind",
      "target": "memory-robot",
      "type": "bottleneck",
      "label": "智能子瓶颈",
      "year": 2026,
      "strength": 0.8,
      "description": "如果认为卡在智能，则可进一步拆解到该节点。"
    },
    {
      "source": "question-body-vs-mind",
      "target": "world-model-bottleneck",
      "type": "bottleneck",
      "label": "智能子瓶颈",
      "year": 2026,
      "strength": 0.8,
      "description": "如果认为卡在智能，则可进一步拆解到该节点。"
    },
    {
      "source": "question-body-vs-mind",
      "target": "data-bottleneck",
      "type": "bottleneck",
      "label": "智能子瓶颈",
      "year": 2026,
      "strength": 0.8,
      "description": "如果认为卡在智能，则可进一步拆解到该节点。"
    },
    {
      "source": "question-body-vs-mind",
      "target": "closed-loop-bottleneck",
      "type": "bottleneck",
      "label": "智能子瓶颈",
      "year": 2026,
      "strength": 0.8,
      "description": "如果认为卡在智能，则可进一步拆解到该节点。"
    },
    {
      "source": "question-body-vs-mind",
      "target": "dexterous-hand-bottleneck",
      "type": "bottleneck",
      "label": "身体/工程子瓶颈",
      "year": 2026,
      "strength": 0.8,
      "description": "如果认为卡在身体/工程，则可进一步拆解到该节点。"
    },
    {
      "source": "question-body-vs-mind",
      "target": "energy-bottleneck",
      "type": "bottleneck",
      "label": "身体/工程子瓶颈",
      "year": 2026,
      "strength": 0.8,
      "description": "如果认为卡在身体/工程，则可进一步拆解到该节点。"
    },
    {
      "source": "question-body-vs-mind",
      "target": "manufacturing-bottleneck",
      "type": "bottleneck",
      "label": "身体/工程子瓶颈",
      "year": 2026,
      "strength": 0.8,
      "description": "如果认为卡在身体/工程，则可进一步拆解到该节点。"
    },
    {
      "source": "question-body-vs-mind",
      "target": "safety-bottleneck",
      "type": "bottleneck",
      "label": "身体/工程子瓶颈",
      "year": 2026,
      "strength": 0.8,
      "description": "如果认为卡在身体/工程，则可进一步拆解到该节点。"
    },
    {
      "source": "zmp",
      "target": "asimo",
      "type": "applies",
      "label": "双足稳定",
      "year": 2000,
      "strength": 0.8,
      "description": "ASIMO 等早期双足机器人依赖 ZMP 相关稳定性思想。"
    },
    {
      "source": "zmp",
      "target": "whole-body-control",
      "type": "influences",
      "label": "稳定性约束",
      "year": 2005,
      "strength": 0.7,
      "description": "ZMP 是后续全身控制和步态规划的重要前身。"
    },
    {
      "source": "impedance-control",
      "target": "whole-body-control",
      "type": "enables",
      "label": "接触柔顺",
      "year": 2005,
      "strength": 0.8,
      "description": "阻抗/柔顺控制支撑接触丰富任务中的全身控制。"
    },
    {
      "source": "operational-space-control",
      "target": "whole-body-control",
      "type": "enables",
      "label": "任务空间控制",
      "year": 2005,
      "strength": 0.9,
      "description": "操作空间控制为人形机器人多任务全身控制提供理论基础。"
    },
    {
      "source": "person-khatib",
      "target": "operational-space-control",
      "type": "proposes",
      "label": "提出/推动",
      "year": 1987,
      "strength": 0.9,
      "description": "Khatib 是操作空间控制关键人物。"
    },
    {
      "source": "person-tedrake",
      "target": "formal-methods-robotics",
      "type": "influences",
      "label": "控制与验证",
      "year": 2007,
      "strength": 0.6,
      "description": "Tedrake 的控制与规划工具链影响可验证机器人研究。"
    },
    {
      "source": "soar",
      "target": "hierarchical-robot-agent",
      "type": "influences",
      "label": "认知架构启发",
      "year": 2025,
      "strength": 0.4,
      "description": "经典认知架构为现代分层机器人智能体提供历史参照。"
    },
    {
      "source": "act-r",
      "target": "robot-episodic-memory",
      "type": "influences",
      "label": "记忆系统启发",
      "year": 2024,
      "strength": 0.4,
      "description": "认知架构中的记忆模块启发现代机器人长期记忆。"
    },
    {
      "source": "bdi-agent",
      "target": "llm-planning",
      "type": "influences",
      "label": "信念-目标-意图",
      "year": 2022,
      "strength": 0.5,
      "description": "BDI 为 LLM agent 的任务承诺和信念更新提供抽象参照。"
    },
    {
      "source": "htn-planning",
      "target": "llm-planning",
      "type": "influences",
      "label": "任务分解",
      "year": 2022,
      "strength": 0.7,
      "description": "LLM 任务规划常以自然语言方式重现 HTN 式层级分解。"
    },
    {
      "source": "pddl",
      "target": "code-as-policies",
      "type": "influences",
      "label": "形式化任务",
      "year": 2022,
      "strength": 0.6,
      "description": "代码生成和规划语言都试图把语言目标转为可执行程序。"
    },
    {
      "source": "pddl",
      "target": "tamp",
      "type": "enables",
      "label": "任务描述",
      "year": 2009,
      "strength": 0.7,
      "description": "TAMP 继承 PDDL/符号规划的离散任务表达。"
    },
    {
      "source": "options-hrl",
      "target": "skill-library",
      "type": "enables",
      "label": "时间抽象技能",
      "year": 2022,
      "strength": 0.8,
      "description": "技能库可看作 options 在现代机器人系统中的工程化版本。"
    },
    {
      "source": "options-hrl",
      "target": "hierarchical-robot-agent",
      "type": "enables",
      "label": "分层策略",
      "year": 2025,
      "strength": 0.8,
      "description": "分层机器人智能体依赖高低层时间抽象。"
    },
    {
      "source": "dmp",
      "target": "imitation-learning",
      "type": "enables",
      "label": "动作基元",
      "year": 2003,
      "strength": 0.7,
      "description": "DMP 是从示范学习动作基元的经典方法。"
    },
    {
      "source": "behavior-tree",
      "target": "failure-recovery",
      "type": "enables",
      "label": "回退逻辑",
      "year": 2024,
      "strength": 0.8,
      "description": "行为树适合组织失败回退和重试。"
    },
    {
      "source": "formal-methods-robotics",
      "target": "safety-supervisor",
      "type": "enables",
      "label": "安全验证",
      "year": 2026,
      "strength": 0.8,
      "description": "安全监督器需要形式化约束和可验证规则。"
    },
    {
      "source": "active-inference",
      "target": "world-models",
      "type": "influences",
      "label": "预测误差",
      "year": 2018,
      "strength": 0.5,
      "description": "主动推断与世界模型共享预测-行动闭环思想。"
    },
    {
      "source": "spatial-intelligence",
      "target": "gemini-robotics-er",
      "type": "enables",
      "label": "空间推理",
      "year": 2025,
      "strength": 0.8,
      "description": "Gemini Robotics-ER 强调空间理解和 3D 检测。"
    },
    {
      "source": "spatial-intelligence",
      "target": "open-vocab-perception",
      "type": "enables",
      "label": "开放词汇空间理解",
      "year": 2023,
      "strength": 0.7,
      "description": "开放词汇感知是空间智能的入口之一。"
    },
    {
      "source": "embodied-reasoning",
      "target": "gemini-robotics-er",
      "type": "implements",
      "label": "ER 实现",
      "year": 2025,
      "strength": 0.9,
      "description": "Gemini Robotics-ER 是具身推理的代表系统。"
    },
    {
      "source": "embodied-reasoning",
      "target": "being-0",
      "type": "applies",
      "label": "高层认知",
      "year": 2025,
      "strength": 0.7,
      "description": "Being-0 将基础模型用于高层任务理解和推理。"
    },
    {
      "source": "hierarchical-robot-agent",
      "target": "being-0",
      "type": "implements",
      "label": "分层框架",
      "year": 2025,
      "strength": 0.9,
      "description": "Being-0 是分层具身智能体实现。"
    },
    {
      "source": "hierarchical-robot-agent",
      "target": "figure-helix",
      "type": "influences",
      "label": "双系统架构",
      "year": 2025,
      "strength": 0.7,
      "description": "Helix 使用 S2/S1 快慢双系统。"
    },
    {
      "source": "hierarchical-robot-agent",
      "target": "gr00t-n1",
      "type": "influences",
      "label": "System 1/2",
      "year": 2025,
      "strength": 0.7,
      "description": "GR00T N1 使用快慢双系统架构。"
    },
    {
      "source": "semantic-map",
      "target": "memory-robot",
      "type": "enables",
      "label": "场景记忆",
      "year": 2023,
      "strength": 0.8,
      "description": "语义地图是长期记忆的重要结构化内容。"
    },
    {
      "source": "semantic-map",
      "target": "robot-rag",
      "type": "enables",
      "label": "检索场景知识",
      "year": 2027,
      "strength": 0.7,
      "description": "机器人 RAG 需要可检索场景图和语义地图。"
    },
    {
      "source": "clip",
      "target": "open-vocab-perception",
      "type": "enables",
      "label": "图文对齐",
      "year": 2023,
      "strength": 0.8,
      "description": "开放词汇感知建立在 CLIP/VLM 的语义对齐上。"
    },
    {
      "source": "sam",
      "target": "open-vocab-perception",
      "type": "enables",
      "label": "可提示分割",
      "year": 2023,
      "strength": 0.8,
      "description": "SAM 为开放词汇目标提供分割掩码。"
    },
    {
      "source": "open-vocab-perception",
      "target": "voxposer",
      "type": "enables",
      "label": "目标 grounding",
      "year": 2023,
      "strength": 0.8,
      "description": "VoxPoser 需要把语言目标落到 3D 对象和可供性上。"
    },
    {
      "source": "nerf-3dgs",
      "target": "world-models",
      "type": "influences",
      "label": "3D 场景表示",
      "year": 2023,
      "strength": 0.6,
      "description": "3D 神经表示有助于世界模型和数字孪生。"
    },
    {
      "source": "visual-language-navigation",
      "target": "robot-episodic-memory",
      "type": "influences",
      "label": "空间历史",
      "year": 2024,
      "strength": 0.5,
      "description": "导航任务推动空间记忆和语言 grounding。"
    },
    {
      "source": "robot-episodic-memory",
      "target": "robot-rag",
      "type": "enables",
      "label": "历史检索",
      "year": 2027,
      "strength": 0.8,
      "description": "机器人 RAG 需要情景记忆作为检索库。"
    },
    {
      "source": "failure-recovery",
      "target": "safety-supervisor",
      "type": "bridge",
      "label": "异常处置",
      "year": 2026,
      "strength": 0.8,
      "description": "失败恢复和安全监督共同构成真实部署闭环。"
    },
    {
      "source": "failure-recovery",
      "target": "long-horizon-bottleneck",
      "type": "bottleneck",
      "label": "失败累积",
      "year": 2026,
      "strength": 0.9,
      "description": "长程任务失败常来自小错误无法恢复。"
    },
    {
      "source": "gato",
      "target": "rt1",
      "type": "competes",
      "label": "通用模型基线",
      "year": 2022,
      "strength": 0.6,
      "description": "RT-1 在机器人控制上超越 Gato 等泛化基线。"
    },
    {
      "source": "bc-z",
      "target": "rt1",
      "type": "competes",
      "label": "行为克隆基线",
      "year": 2022,
      "strength": 0.6,
      "description": "RT-1 与 BC-Z 比较展示 scaling 带来的泛化提升。"
    },
    {
      "source": "peract",
      "target": "spatial-intelligence",
      "type": "influences",
      "label": "3D 操作",
      "year": 2022,
      "strength": 0.7,
      "description": "PerAct 将操作策略放到 3D 体素空间。"
    },
    {
      "source": "vima",
      "target": "vla",
      "type": "influences",
      "label": "多模态提示",
      "year": 2023,
      "strength": 0.5,
      "description": "VIMA 启发多模态条件策略。"
    },
    {
      "source": "r3m-vc1",
      "target": "rt2",
      "type": "competes",
      "label": "视觉预训练基线",
      "year": 2023,
      "strength": 0.4,
      "description": "RT-2 论文对比了视觉预训练方法。"
    },
    {
      "source": "robocat",
      "target": "data-flywheel",
      "type": "influences",
      "label": "自改进数据",
      "year": 2023,
      "strength": 0.8,
      "description": "RoboCat 体现机器人自生成数据改进策略。"
    },
    {
      "source": "unipi",
      "target": "world-models",
      "type": "influences",
      "label": "视频计划",
      "year": 2023,
      "strength": 0.7,
      "description": "UniPi 通过视频计划体现世界模型思路。"
    },
    {
      "source": "code-as-policies",
      "target": "gemini-robotics-er",
      "type": "influences",
      "label": "代码/API 控制",
      "year": 2025,
      "strength": 0.7,
      "description": "Gemini Robotics-ER 可生成代码并连接低层控制器。"
    },
    {
      "source": "inner-monologue",
      "target": "failure-recovery",
      "type": "influences",
      "label": "语言化反馈",
      "year": 2024,
      "strength": 0.8,
      "description": "语言反馈闭环有助于高层模型纠错。"
    },
    {
      "source": "voxposer",
      "target": "llm-planning",
      "type": "bridge",
      "label": "语义到空间",
      "year": 2023,
      "strength": 0.8,
      "description": "VoxPoser 把语言计划映射为空间值函数。"
    },
    {
      "source": "mobile-aloha",
      "target": "aloha2",
      "type": "inherits",
      "label": "低成本遥操作谱系",
      "year": 2024,
      "strength": 0.7,
      "description": "ALOHA 2 延续低成本双臂遥操作路线。"
    },
    {
      "source": "aloha2",
      "target": "gemini-robotics-on-device",
      "type": "enables",
      "label": "双臂数据/平台",
      "year": 2025,
      "strength": 0.7,
      "description": "Gemini Robotics On-Device 主要训练在 ALOHA 机器人并可适配其他本体。"
    },
    {
      "source": "bridge-data",
      "target": "open-x",
      "type": "enables",
      "label": "数据来源",
      "year": 2023,
      "strength": 0.6,
      "description": "Open X 生态吸收多来源真实机器人数据。"
    },
    {
      "source": "robonet",
      "target": "open-x",
      "type": "influences",
      "label": "跨机器人数据前驱",
      "year": 2023,
      "strength": 0.7,
      "description": "RoboNet 是跨机器人数据合并的早期探索。"
    },
    {
      "source": "mimicgen",
      "target": "isaac-sim",
      "type": "bridge",
      "label": "合成示范",
      "year": 2024,
      "strength": 0.7,
      "description": "示范合成与仿真平台共同缓解数据瓶颈。"
    },
    {
      "source": "human-video-pretraining",
      "target": "pi0",
      "type": "enables",
      "label": "物理交互先验",
      "year": 2024,
      "strength": 0.7,
      "description": "π0 使用 VLM 语义和多机器人数据，体现从互联网/人类数据继承语义的路线。"
    },
    {
      "source": "human-video-pretraining",
      "target": "from-w1",
      "type": "enables",
      "label": "人类全身动作",
      "year": 2026,
      "strength": 0.9,
      "description": "FRoM-W1 用大规模人类动作数据生成机器人全身动作。"
    },
    {
      "source": "flow-matching-action",
      "target": "pi0",
      "type": "enables",
      "label": "连续动作",
      "year": 2024,
      "strength": 0.9,
      "description": "π0 使用 flow matching 生成高频连续动作。"
    },
    {
      "source": "flow-matching-action",
      "target": "humanoid-world-models",
      "type": "influences",
      "label": "生成式预测",
      "year": 2025,
      "strength": 0.6,
      "description": "HWM 探索 flow matching 视频预测模型。"
    },
    {
      "source": "gemini-robotics",
      "target": "gemini-robotics-er",
      "type": "bridge",
      "label": "VLA + ER",
      "year": 2025,
      "strength": 0.9,
      "description": "DeepMind 同时发布动作控制 VLA 与具身推理 ER 模型。"
    },
    {
      "source": "gemini-robotics",
      "target": "gemini-robotics-on-device",
      "type": "improves",
      "label": "本地化部署",
      "year": 2025,
      "strength": 0.9,
      "description": "On-Device 将 Gemini Robotics 能力优化到本体运行。"
    },
    {
      "source": "gemini-robotics",
      "target": "apptronik-apollo",
      "type": "applies",
      "label": "Apollo 适配",
      "year": 2025,
      "strength": 0.8,
      "description": "Google DeepMind 与 Apptronik 合作面向 Apollo 人形机器人。"
    },
    {
      "source": "gemini-robotics",
      "target": "vla",
      "type": "implements",
      "label": "VLA 代表",
      "year": 2025,
      "strength": 0.9,
      "description": "Gemini Robotics 是 2025 年代表性 VLA。"
    },
    {
      "source": "gemini-robotics-er",
      "target": "safety-supervisor",
      "type": "enables",
      "label": "安全控制接口",
      "year": 2025,
      "strength": 0.7,
      "description": "ER 可连接低层安全控制器。"
    },
    {
      "source": "being-0",
      "target": "skill-library",
      "type": "applies",
      "label": "模块技能库",
      "year": 2025,
      "strength": 0.9,
      "description": "Being-0 使用模块技能库承担移动与灵巧操作。"
    },
    {
      "source": "humanoid-world-models",
      "target": "world-model-bottleneck",
      "type": "bottleneck",
      "label": "世界预测不足",
      "year": 2025,
      "strength": 0.8,
      "description": "HWM 针对人形世界预测瓶颈。"
    },
    {
      "source": "humanoid-world-models",
      "target": "world-models",
      "type": "implements",
      "label": "人形世界模型",
      "year": 2025,
      "strength": 0.8,
      "description": "HWM 是人形机器人视频世界模型实例。"
    },
    {
      "source": "bfm-survey",
      "target": "whole-body-control",
      "type": "influences",
      "label": "全身控制基础模型化",
      "year": 2025,
      "strength": 0.8,
      "description": "BFM 把 WBC 推向预训练/基础模型范式。"
    },
    {
      "source": "bfm-survey",
      "target": "from-w1",
      "type": "influences",
      "label": "语言全身控制",
      "year": 2026,
      "strength": 0.6,
      "description": "FRoM-W1 属于行为基础模型相关方向。"
    },
    {
      "source": "dreamcontrol",
      "target": "bfm-survey",
      "type": "influences",
      "label": "行为先验",
      "year": 2025,
      "strength": 0.6,
      "description": "DreamControl 使用人类动作扩散先验支持全身控制。"
    },
    {
      "source": "dreamcontrol",
      "target": "unitree-g1",
      "type": "applies",
      "label": "G1 实机验证",
      "year": 2025,
      "strength": 0.8,
      "description": "DreamControl 在 Unitree G1 上进行真实任务验证。"
    },
    {
      "source": "from-w1",
      "target": "unitree-g1",
      "type": "applies",
      "label": "H1/G1 实机",
      "year": 2026,
      "strength": 0.8,
      "description": "FRoM-W1 在 Unitree H1/G1 上评估。"
    },
    {
      "source": "meta-world",
      "target": "deep-rl",
      "type": "evaluates",
      "label": "多任务评测",
      "year": 2019,
      "strength": 0.5,
      "description": "Meta-World 评估多任务 RL/模仿学习。"
    },
    {
      "source": "habitat",
      "target": "visual-language-navigation",
      "type": "evaluates",
      "label": "导航评测",
      "year": 2019,
      "strength": 0.7,
      "description": "Habitat 推动视觉导航与 embodied AI 评测。"
    },
    {
      "source": "ai2thor-procthor",
      "target": "visual-language-navigation",
      "type": "evaluates",
      "label": "家庭交互评测",
      "year": 2017,
      "strength": 0.6,
      "description": "AI2-THOR 等平台支持家庭视觉导航/交互。"
    },
    {
      "source": "simpler-env",
      "target": "openvla",
      "type": "evaluates",
      "label": "VLA 评测",
      "year": 2024,
      "strength": 0.7,
      "description": "SimplerEnv 常用于开源 VLA 评估。"
    },
    {
      "source": "robocasa",
      "target": "sim2real",
      "type": "evaluates",
      "label": "家庭操作仿真",
      "year": 2024,
      "strength": 0.6,
      "description": "RoboCasa 支持大规模日常操作仿真。"
    },
    {
      "source": "asimov-benchmark",
      "target": "semantic-safety-bottleneck",
      "type": "evaluates",
      "label": "语义安全",
      "year": 2025,
      "strength": 0.9,
      "description": "ASIMOV 评估机器人动作语义安全。"
    },
    {
      "source": "company-google-deepmind",
      "target": "rt1",
      "type": "proposes",
      "label": "Google RT 系列",
      "year": 2022,
      "strength": 0.8,
      "description": "Google Robotics/DeepMind 推动 RT-1。"
    },
    {
      "source": "company-google-deepmind",
      "target": "rt2",
      "type": "proposes",
      "label": "RT-2/VLA",
      "year": 2023,
      "strength": 0.8,
      "description": "Google DeepMind 推动 RT-2。"
    },
    {
      "source": "company-google-deepmind",
      "target": "gemini-robotics",
      "type": "proposes",
      "label": "Gemini Robotics",
      "year": 2025,
      "strength": 0.9,
      "description": "Google DeepMind 发布 Gemini Robotics。"
    },
    {
      "source": "company-nvidia-robotics",
      "target": "gr00t-n1",
      "type": "proposes",
      "label": "GR00T N1",
      "year": 2025,
      "strength": 0.9,
      "description": "NVIDIA 发布 GR00T N1。"
    },
    {
      "source": "company-nvidia-robotics",
      "target": "isaac-sim",
      "type": "implements",
      "label": "Isaac 工具链",
      "year": 2021,
      "strength": 0.8,
      "description": "NVIDIA Isaac 支撑仿真和数据生成。"
    },
    {
      "source": "company-nvidia-robotics",
      "target": "cosmos",
      "type": "implements",
      "label": "世界模型生态",
      "year": 2025,
      "strength": 0.7,
      "description": "Cosmos 是 NVIDIA Physical AI 世界模型生态组成。"
    },
    {
      "source": "company-nvidia-robotics",
      "target": "gr00t-reference",
      "type": "implements",
      "label": "参考平台",
      "year": 2026,
      "strength": 0.9,
      "description": "NVIDIA 推动 GR00T 参考人形机器人。"
    },
    {
      "source": "gr00t-n1",
      "target": "one-x-neo",
      "type": "applies",
      "label": "NEO 后训练",
      "year": 2025,
      "strength": 0.6,
      "description": "公开资料显示 1X 使用基于 GR00T N1 后训练策略做演示。"
    },
    {
      "source": "gr00t-n1",
      "target": "edge-compute-bottleneck",
      "type": "bottleneck",
      "label": "本体推理压力",
      "year": 2026,
      "strength": 0.6,
      "description": "GR00T 类模型必须面对边缘推理成本。"
    },
    {
      "source": "figure-helix",
      "target": "edge-compute-bottleneck",
      "type": "bottleneck",
      "label": "双 GPU 本体推理",
      "year": 2025,
      "strength": 0.7,
      "description": "Helix 的 S1/S2 异步本体部署直接面对实时算力瓶颈。"
    },
    {
      "source": "gemini-robotics-on-device",
      "target": "edge-compute-bottleneck",
      "type": "improves",
      "label": "本地推理",
      "year": 2025,
      "strength": 0.8,
      "description": "On-Device 直接改善网络延迟和本体推理瓶颈。"
    },
    {
      "source": "open-x",
      "target": "cross-embodiment-bottleneck",
      "type": "bottleneck",
      "label": "跨本体数据",
      "year": 2026,
      "strength": 0.8,
      "description": "Open X 解决数据规模同时暴露跨本体表示问题。"
    },
    {
      "source": "skild-brain",
      "target": "cross-embodiment-bottleneck",
      "type": "improves",
      "label": "omni-bodied",
      "year": 2025,
      "strength": 0.8,
      "description": "Skild Brain 宣称跨机器人本体操作。"
    },
    {
      "source": "teleoperation",
      "target": "teleop-transparency-bottleneck",
      "type": "bottleneck",
      "label": "演示不透明",
      "year": 2026,
      "strength": 0.9,
      "description": "遥操作是数据采集工具，也是评估自主性的透明度问题。"
    },
    {
      "source": "roi-bottleneck",
      "target": "data-flywheel",
      "type": "causes",
      "label": "部署冷启动",
      "year": 2027,
      "strength": 0.9,
      "description": "没有 ROI 就难以规模部署并形成数据飞轮。"
    },
    {
      "source": "semantic-safety-bottleneck",
      "target": "safety-supervisor",
      "type": "causes",
      "label": "需要安全层",
      "year": 2026,
      "strength": 0.9,
      "description": "语义安全风险需要安全监督器和权限控制。"
    },
    {
      "source": "continual-learning-bottleneck",
      "target": "fleet-learning",
      "type": "bottleneck",
      "label": "持续更新风险",
      "year": 2028,
      "strength": 0.8,
      "description": "车队学习必须处理持续学习和安全回滚。"
    },
    {
      "source": "embodied-ai-operating-system",
      "target": "robot-devops",
      "type": "bridge",
      "label": "运行时与运维闭环",
      "year": 2028,
      "strength": 0.8,
      "description": "AI-native 机器人操作系统需要 RobotOps 支撑。"
    },
    {
      "source": "robot-devops",
      "target": "data-flywheel",
      "type": "implements",
      "label": "数据飞轮工程化",
      "year": 2028,
      "strength": 0.8,
      "description": "RobotOps 是数据飞轮落地的工程机制。"
    },
    {
      "source": "person-feifei-li",
      "target": "spatial-intelligence",
      "type": "influences",
      "label": "空间智能倡导",
      "year": 2024,
      "strength": 0.7,
      "description": "Fei-Fei Li 倡导 spatial intelligence 方向。"
    },
    {
      "source": "person-brian-ichter",
      "target": "saycan",
      "type": "author",
      "label": "关键作者/推动",
      "year": 2022,
      "strength": 0.8,
      "description": "Brian Ichter 参与 SayCan 等工作。"
    },
    {
      "source": "person-carolina-parada",
      "target": "gemini-robotics",
      "type": "proposes",
      "label": "发布/推动",
      "year": 2025,
      "strength": 0.7,
      "description": "Carolina Parada 是 DeepMind Gemini Robotics 公开博文作者。"
    },
    {
      "source": "person-deepak-pathak",
      "target": "skild-brain",
      "type": "proposes",
      "label": "联合创始人",
      "year": 2025,
      "strength": 0.7,
      "description": "Deepak Pathak 推动 Skild Brain。"
    },
    {
      "source": "person-abhinav-gupta",
      "target": "skild-brain",
      "type": "proposes",
      "label": "联合创始人",
      "year": 2025,
      "strength": 0.7,
      "description": "Abhinav Gupta 推动 Skild Brain。"
    },
    {
      "source": "agibot",
      "target": "teleop-transparency-bottleneck",
      "type": "bottleneck",
      "label": "自主性待验证",
      "year": 2026,
      "strength": 0.5,
      "description": "产业演示需区分自主和遥操作。"
    },
    {
      "source": "neura-4ne1",
      "target": "gr00t-n1",
      "type": "bridge",
      "label": "早期访问/生态相关",
      "year": 2025,
      "strength": 0.4,
      "description": "NEURA 等公司与 GR00T 生态存在公开合作/早期访问脉络。"
    },
    {
      "source": "mentee-robotics",
      "target": "gr00t-n1",
      "type": "bridge",
      "label": "早期访问/生态相关",
      "year": 2025,
      "strength": 0.4,
      "description": "Mentee Robotics 被 NVIDIA 列为早期接触/生态公司之一。"
    },
    {
      "source": "one-x-neo",
      "target": "roi-bottleneck",
      "type": "bottleneck",
      "label": "家庭场景 ROI",
      "year": 2026,
      "strength": 0.6,
      "description": "家庭场景价值高但任务开放度极大，ROI 与安全挑战更强。"
    },
    {
      "source": "digit",
      "target": "roi-bottleneck",
      "type": "applies",
      "label": "仓储优先场景",
      "year": 2026,
      "strength": 0.7,
      "description": "Digit 优先面向仓储物流，符合 ROI 先行策略。"
    },
    {
      "source": "symbolic-ai",
      "target": "subsumption",
      "type": "competes",
      "label": "符号规划与行为式竞争",
      "year": 1986,
      "strength": 0.9,
      "description": "Brooks 的行为式机器人批判早期纯符号/SPA 范式在动态环境中的滞后。"
    },
    {
      "source": "subsumption",
      "target": "hierarchical-brain-cerebellum-agent",
      "type": "influences",
      "label": "快反射思想",
      "year": 2023,
      "strength": 0.8,
      "description": "现代分层架构中的低层快速控制保留了行为式闭环思想。"
    },
    {
      "source": "symbolic-ai",
      "target": "tamp",
      "type": "influences",
      "label": "符号任务规划基础",
      "year": 2010,
      "strength": 0.8,
      "description": "TAMP 的高层任务规划吸收了符号动作和前置条件思想。"
    },
    {
      "source": "probabilistic-robotics",
      "target": "tamp",
      "type": "enables",
      "label": "不确定性与几何状态估计",
      "year": 2010,
      "strength": 0.7,
      "description": "概率状态估计支撑 TAMP 在真实机器人中的状态与风险处理。"
    },
    {
      "source": "tamp",
      "target": "saycan",
      "type": "influences",
      "label": "从手写规划到 LLM 接地规划",
      "year": 2022,
      "strength": 0.8,
      "description": "SayCan 可看作对高层任务分解的学习化增强，同时保留物理可执行性约束。"
    },
    {
      "source": "saycan",
      "target": "rt1",
      "type": "influences",
      "label": "从技能选择到数据驱动策略",
      "year": 2022,
      "strength": 0.6,
      "description": "SayCan 展示语言到技能选择，RT-1 展示多任务数据驱动策略学习。"
    },
    {
      "source": "rt1",
      "target": "rt2",
      "type": "improves",
      "label": "接入互联网视觉语言常识",
      "year": 2023,
      "strength": 0.9,
      "description": "RT-2 在 RT-1 基础上将 VLM 语义知识迁移到机器人控制。"
    },
    {
      "source": "rt2",
      "target": "open-x",
      "type": "causes",
      "label": "推动跨本体数据需求",
      "year": 2023,
      "strength": 0.8,
      "description": "VLA 泛化需求推动跨机器人数据集与 RT-X 路线。"
    },
    {
      "source": "open-x",
      "target": "openvla",
      "type": "enables",
      "label": "开源 VLA 数据基础",
      "year": 2024,
      "strength": 0.9,
      "description": "OpenVLA 使用跨本体机器人数据进行训练。"
    },
    {
      "source": "openvla",
      "target": "action-representation-bottleneck",
      "type": "bottleneck",
      "label": "离散动作表示限制",
      "year": 2026,
      "strength": 0.7,
      "description": "离散动作 token 路线在高频精细操作中可能受限。"
    },
    {
      "source": "diffusion-policy",
      "target": "pi0",
      "type": "influences",
      "label": "连续动作生成思想",
      "year": 2024,
      "strength": 0.8,
      "description": "π0 吸收扩散/flow matching 一类连续动作生成思想。"
    },
    {
      "source": "diffusion-policy",
      "target": "gr00t-n1",
      "type": "influences",
      "label": "扩散动作模块",
      "year": 2025,
      "strength": 0.8,
      "description": "GR00T N1 使用扩散 Transformer 生成流畅动作。"
    },
    {
      "source": "action-chunking-transformer",
      "target": "mobile-aloha",
      "type": "enables",
      "label": "低成本双臂策略",
      "year": 2024,
      "strength": 0.8,
      "description": "ACT 是 ALOHA/Mobile ALOHA 低成本操作学习的重要策略之一。"
    },
    {
      "source": "action-chunking-transformer",
      "target": "aloha-benchmark-system",
      "type": "enables",
      "label": "核心算法",
      "year": 2023,
      "strength": 0.9,
      "description": "ALOHA 系列平台广泛使用 ACT 类动作分块策略。"
    },
    {
      "source": "aloha-benchmark-system",
      "target": "data-bottleneck",
      "type": "remedies",
      "label": "降低真实数据采集门槛",
      "year": 2024,
      "strength": 0.7,
      "description": "低成本遥操作平台缓解真实操作数据稀缺。"
    },
    {
      "source": "rapid-motor-adaptation",
      "target": "whole-body-control",
      "type": "influences",
      "label": "本体感觉适应",
      "year": 2021,
      "strength": 0.7,
      "description": "RMA 思想影响学习化腿式机器人运动控制。"
    },
    {
      "source": "rapid-motor-adaptation",
      "target": "sim2real",
      "type": "applies",
      "label": "仿真训练到真实地形",
      "year": 2021,
      "strength": 0.8,
      "description": "RMA 是 sim2real 用于腿式运动适应的代表案例。"
    },
    {
      "source": "open-vocab-perception",
      "target": "semantic-scene-graph-3d",
      "type": "enables",
      "label": "语义实体输入",
      "year": 2023,
      "strength": 0.9,
      "description": "开放词汇感知提供 3D 场景图中的实体语义。"
    },
    {
      "source": "semantic-scene-graph-3d",
      "target": "memory-robot",
      "type": "enables",
      "label": "空间长期记忆",
      "year": 2023,
      "strength": 0.8,
      "description": "3D 场景图可作为机器人长期空间记忆。"
    },
    {
      "source": "semantic-scene-graph-3d",
      "target": "robot-rag",
      "type": "enables",
      "label": "场景知识检索",
      "year": 2027,
      "strength": 0.7,
      "description": "机器人 RAG 可检索场景图、地图和历史经验。"
    },
    {
      "source": "world-models",
      "target": "embodied-predictive-world-model",
      "type": "improves",
      "label": "动作条件化",
      "year": 2024,
      "strength": 0.7,
      "description": "具身预测世界模型是世界模型在机器人行动上的具体化。"
    },
    {
      "source": "embodied-predictive-world-model",
      "target": "compound-error-bottleneck",
      "type": "remedies",
      "label": "前瞻预测缓解误差累积",
      "year": 2026,
      "strength": 0.9,
      "description": "预测动作后果可以在执行前发现潜在失败。"
    },
    {
      "source": "long-horizon-bottleneck",
      "target": "compound-error-bottleneck",
      "type": "decomposes",
      "label": "时序机制细化",
      "year": 2026,
      "strength": 0.9,
      "description": "复合误差是长程规划失败的核心机制之一。"
    },
    {
      "source": "hierarchical-brain-cerebellum-agent",
      "target": "high-low-frequency-gap",
      "type": "bottleneck",
      "label": "接口瓶颈",
      "year": 2026,
      "strength": 0.95,
      "description": "大脑—小脑分层架构直接产生高低频接口问题。"
    },
    {
      "source": "high-low-frequency-gap",
      "target": "closed-loop-bottleneck",
      "type": "decomposes",
      "label": "闭环瓶颈机制",
      "year": 2026,
      "strength": 0.9,
      "description": "高低频断层是闭环控制瓶颈的具体机制。"
    },
    {
      "source": "question-body-vs-mind",
      "target": "mind-body-misalignment-bottleneck",
      "type": "decomposes",
      "label": "系统耦合解释",
      "year": 2026,
      "strength": 0.9,
      "description": "身体和智能不是二选一，而是共同设计问题。"
    },
    {
      "source": "mind-body-misalignment-bottleneck",
      "target": "data-bottleneck",
      "type": "causes",
      "label": "身体影响数据",
      "year": 2026,
      "strength": 0.8,
      "description": "可靠身体不足会限制真实数据采集。"
    },
    {
      "source": "mind-body-misalignment-bottleneck",
      "target": "closed-loop-bottleneck",
      "type": "causes",
      "label": "模型动作接口不匹配",
      "year": 2026,
      "strength": 0.8,
      "description": "模型输出和控制器执行之间的不匹配会造成闭环不稳定。"
    },
    {
      "source": "isaac-sim",
      "target": "gr00t-n1",
      "type": "supports",
      "label": "仿真与合成数据",
      "year": 2025,
      "strength": 0.8,
      "description": "NVIDIA 机器人基础模型依赖仿真与合成数据工具链。"
    },
    {
      "source": "gr00t-n1",
      "target": "high-low-frequency-gap",
      "type": "bottleneck",
      "label": "双系统接口挑战",
      "year": 2026,
      "strength": 0.7,
      "description": "GR00T 的双系统架构仍需要稳定连接语义推理和动作生成。"
    },
    {
      "source": "figure-helix",
      "target": "high-low-frequency-gap",
      "type": "bottleneck",
      "label": "快慢系统接口",
      "year": 2025,
      "strength": 0.7,
      "description": "Helix 的快慢系统设计体现高低频接口挑战。"
    },
    {
      "source": "tesla-optimus",
      "target": "data-bottleneck",
      "type": "bottleneck",
      "label": "工厂数据闭环需求",
      "year": 2026,
      "strength": 0.8,
      "description": "Optimus 的泛化能力依赖真实部署和数据回流。"
    },
    {
      "source": "boston-atlas-electric",
      "target": "mind-body-misalignment-bottleneck",
      "type": "exposes",
      "label": "身体强但仍需智能",
      "year": 2026,
      "strength": 0.6,
      "description": "强运动能力需要高级认知才能转化为长期自主任务能力。"
    },
    {
      "source": "person-brooks",
      "target": "subsumption",
      "type": "contributes",
      "label": "提出/推动",
      "year": 1986,
      "strength": 0.95,
      "description": "Brooks 是包容式架构和行为式机器人代表人物。"
    },
    {
      "source": "person-thrun",
      "target": "probabilistic-robotics",
      "type": "contributes",
      "label": "系统化",
      "year": 2005,
      "strength": 0.95,
      "description": "Thrun 等系统化概率机器人体系。"
    },
    {
      "source": "person-levine",
      "target": "rt1",
      "type": "contributes",
      "label": "机器人学习推动",
      "year": 2022,
      "strength": 0.8,
      "description": "Levine 等推动数据驱动机器人学习和 RT 系列相关研究。"
    },
    {
      "source": "person-finn",
      "target": "open-x",
      "type": "contributes",
      "label": "跨本体数据协作",
      "year": 2023,
      "strength": 0.8,
      "description": "Finn 等参与推动跨本体机器人数据协作。"
    }
  ],
  "typeLabels": {
    "root": "根节点",
    "stage": "阶段",
    "person": "人物",
    "concept": "概念",
    "theory": "理论",
    "model": "模型",
    "algorithm": "算法",
    "method": "方法",
    "system": "系统/工具/产品",
    "paper": "论文",
    "benchmark": "评测基准",
    "event": "事件/里程碑",
    "bottleneck": "瓶颈",
    "trend": "趋势",
    "company": "公司/组织"
  },
  "relationLabels": {
    "author": "作者/提出者",
    "proposes": "提出/发展",
    "improves": "改进",
    "inherits": "继承",
    "influences": "影响",
    "competes": "竞争路线",
    "merges": "融合",
    "applies": "应用",
    "implements": "工程实现",
    "evaluates": "评测",
    "enables": "使能",
    "causes": "导致",
    "replaces": "替代",
    "bridge": "跨领域纽带",
    "milestone": "里程碑",
    "bottleneck": "形成瓶颈",
    "opens": "开启新阶段"
  },
  "created": "2026-06-03",
  "note": "增强版：在原始 144 节点/184 关系基础上，补充认知架构、规划决策、开放词汇感知、世界模型、机器人数据、VLA/基础模型、人形全身控制、真实评测、产业公司与瓶颈诊断。产业节点仍基于公开资料整理；遥操作比例、自主程度、数据规模、部署数量等未披露信息一律标注不确定性或用瓶颈节点提示。",
  "typeNames": {
    "root": "根节点",
    "stage": "阶段",
    "person": "人物",
    "concept": "概念",
    "theory": "理论",
    "model": "模型",
    "algorithm": "算法",
    "method": "方法",
    "system": "系统/工具/产品",
    "paper": "论文",
    "benchmark": "评测基准",
    "event": "事件/里程碑",
    "bottleneck": "瓶颈",
    "trend": "趋势",
    "company": "公司/组织"
  },
  "relationNames": {
    "author": "作者/提出者",
    "proposes": "提出/发展",
    "improves": "改进",
    "inherits": "继承",
    "influences": "影响",
    "competes": "竞争路线",
    "merges": "融合",
    "applies": "应用",
    "implements": "工程实现",
    "evaluates": "评测",
    "enables": "使能",
    "causes": "导致",
    "replaces": "替代",
    "bridge": "跨领域纽带",
    "milestone": "里程碑",
    "bottleneck": "形成瓶颈",
    "opens": "开启新阶段",
    "depends": "前置依赖",
    "supports": "工程支撑/训练平台",
    "remedies": "缓解/解决瓶颈",
    "contributes": "主导贡献/提出者",
    "exposes": "暴露问题",
    "decomposes": "分解/细化",
    "constrains": "约束/限制",
    "operationalizes": "工程落地"
  },
  "sourceCatalog": [
    {
      "name": "RT-1 Robotics Transformer",
      "url": "https://robotics-transformer1.github.io/",
      "topic": "大规模真实机器人数据与 Transformer 策略"
    },
    {
      "name": "RT-2 Vision-Language-Action Models",
      "url": "https://robotics-transformer2.github.io/",
      "topic": "互联网 VLM 知识迁移到机器人动作"
    },
    {
      "name": "Open X-Embodiment / RT-X",
      "url": "https://robotics-transformer-x.github.io/",
      "topic": "跨本体机器人数据集与 RT-X 模型"
    },
    {
      "name": "OpenVLA",
      "url": "https://openvla.github.io/",
      "topic": "开源 VLA"
    },
    {
      "name": "Octo",
      "url": "https://octo-models.github.io/",
      "topic": "开源通用机器人策略"
    },
    {
      "name": "Gemini Robotics",
      "url": "https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/",
      "topic": "Google DeepMind VLA 与具身推理"
    },
    {
      "name": "Gemini Robotics On-Device",
      "url": "https://deepmind.google/blog/gemini-robotics-on-device-brings-ai-to-local-robotic-devices/",
      "topic": "本地运行 VLA 与少样本适配"
    },
    {
      "name": "Figure Helix",
      "url": "https://www.figure.ai/news/helix",
      "topic": "人形机器人 S1/S2 VLA 与 200Hz 上身控制"
    },
    {
      "name": "NVIDIA GR00T N1",
      "url": "https://nvidianews.nvidia.com/news/nvidia-isaac-gr00t-n1-open-humanoid-robot-foundation-model-simulation-frameworks",
      "topic": "开放人形基础模型、合成数据和 Newton 物理引擎"
    },
    {
      "name": "Physical Intelligence π0",
      "url": "https://www.pi.website/blog/pi0",
      "topic": "VLM + flow matching 连续动作生成"
    },
    {
      "name": "Being-0",
      "url": "https://arxiv.org/abs/2503.12533",
      "topic": "分层人形机器人智能体"
    },
    {
      "name": "Humanoid World Models",
      "url": "https://arxiv.org/abs/2506.01182",
      "topic": "人形机器人行动条件视频世界模型"
    },
    {
      "name": "Behavior Foundation Model Survey",
      "url": "https://arxiv.org/abs/2506.20487",
      "topic": "人形全身控制基础模型"
    },
    {
      "name": "FRoM-W1",
      "url": "https://arxiv.org/abs/2601.12799",
      "topic": "语言驱动人形全身控制"
    },
    {
      "name": "DreamControl",
      "url": "https://arxiv.org/abs/2509.14353",
      "topic": "扩散先验 + RL 的人形场景交互控制"
    }
  ],
  "updated": "2026-06-03",
  "version": "completed-with-user-deep-fill-2026-06-03",
  "notes": "基于原增强版与用户提供的深度填充版 data.js 合并。对补充文件中过于绝对或难以公开验证的表达已改写为中性、可展示表述。"
};
