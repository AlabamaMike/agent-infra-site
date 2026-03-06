export const frameworkContent = {
  eyebrow: "Conceptual Framework | March 2026",
  heroTitle: "The software layer between models and agents",
  heroSubtitle:
    "A guided briefing on the emerging infrastructure stack that turns foundation models into autonomous systems.",
  thesis:
    "The companies that provide the primitives agents depend on will be to the agentic era what AWS, Stripe, and Twilio were to the cloud era.",
  summary:
    "Foundation models are necessary but not sufficient. Production agents need durable execution, delegated identity, persistent context, safe tool use, and governance before they become reliable systems.",
  marketSignals: [
    { stat: "60%", label: "of enterprises are piloting or deploying agentic systems" },
    { stat: "20-30x", label: "higher token consumption than standard GenAI workloads" },
    { stat: "$740M", label: "paid by CrowdStrike for SGNL, highlighting agent identity urgency" },
    { stat: "88%", label: "of Fortune 100 using E2B sandboxes, per company reporting" },
    { stat: "4 of 5", label: "Neon databases created by code rather than humans" },
    { stat: "8", label: "distinct layers needed for a production-ready agent stack" },
  ],
  whyNow: [
    "Compute for agents is untrusted by default because the model is generating code at runtime.",
    "State is conversational, long-lived, and cross-system rather than neatly transactional.",
    "Identity is delegated, not direct, which breaks the assumptions built into traditional OAuth flows.",
  ],
  layers: [
    {
      num: 1,
      slug: "frameworks-runtimes",
      name: "Frameworks & Runtimes",
      tagline: "The reasoning loop that makes an agent an agent",
      description:
        "This layer defines the plan-act-observe cycle, tool selection model, retry behavior, and execution semantics that distinguish an agent from a prompt-response wrapper.",
      breaks:
        "Without a structured runtime, teams hand-roll orchestration for every workflow. Planning becomes brittle, integrations are bespoke, and durability is an afterthought.",
      players: [
        { name: "LangChain / LangGraph", type: "Open Source", desc: "The most adopted open ecosystem for agent graphs and workflows." },
        { name: "CrewAI", type: "Open Source", desc: "Role-based multi-agent orchestration for developer-led teams." },
        { name: "AutoGen", type: "Open Source", desc: "Microsoft-led multi-agent conversation framework." },
        { name: "Temporal.io", type: "Specialized", desc: "Durable execution primitives for long-running agent workflows." },
      ],
    },
    {
      num: 2,
      slug: "sandboxed-compute",
      name: "Sandboxed Compute",
      tagline: "Where agents safely run untrusted code",
      description:
        "Sandboxed compute gives agents isolated environments to execute generated code, manipulate files, and browse the web without exposing production systems directly.",
      breaks:
        "Without hardened isolation, malformed or malicious model output can delete files, leak secrets, or interfere with shared systems.",
      players: [
        { name: "E2B", type: "Code Sandbox", desc: "Firecracker-based execution platform built for agent workloads." },
        { name: "Modal", type: "Code Sandbox", desc: "Serverless compute with strong execution primitives and GPU access." },
        { name: "Browserbase", type: "Browser Env", desc: "Managed browser infrastructure for agent web interaction." },
        { name: "Daytona", type: "Code Sandbox", desc: "Fast-start ephemeral environments for code-heavy agents." },
      ],
    },
    {
      num: 3,
      slug: "state-persistence",
      name: "State & Persistence",
      tagline: "Where agents store, version, and retrieve their work product",
      description:
        "This layer handles artifacts, datasets, code, and intermediate outputs with versioning semantics that match agent-speed iteration and branching.",
      breaks:
        "Without purpose-built persistence, teams hit GitHub rate limits, lose branching semantics in object storage, or rebuild version control atop general databases.",
      players: [
        { name: "Mesa", type: "Agent Filesystem", desc: "Git-backed virtual filesystem for agent-native branching and merge workflows." },
        { name: "Neon", type: "Agent Database", desc: "Branching Postgres that maps naturally to parallel agent workflows." },
        { name: "Turso", type: "Agent Database", desc: "Edge-native SQLite for distributed applications and agents." },
        { name: "/dev/agents", type: "Agent OS", desc: "An ambitious platform bet on bundling persistence into an agent operating system." },
      ],
    },
    {
      num: 4,
      slug: "memory-context",
      name: "Memory & Context",
      tagline: "What the agent knows and remembers across sessions",
      description:
        "Memory systems manage working, episodic, semantic, and procedural context so an agent can retain understanding and improve over time.",
      breaks:
        "Without memory, each interaction starts from zero. The agent cannot maintain continuity, remember preferences, or accumulate institutional knowledge.",
      deepDiveSlug: "memory",
      players: [
        { name: "Mem0", type: "Memory Platform", desc: "Automatic extraction and retrieval memory API with strong enterprise momentum." },
        { name: "Letta", type: "Memory Platform", desc: "White-box, self-editing memory runtime inspired by MemGPT." },
        { name: "Zep", type: "Memory Platform", desc: "Temporal knowledge graph for changing facts over time." },
        { name: "Anthropic Memory", type: "Platform-Native", desc: "Project-scoped memory embedded in Claude workflows." },
      ],
    },
    {
      num: 5,
      slug: "auth-identity",
      name: "Auth & Identity",
      tagline: "Who the agent acts as and what it can access",
      description:
        "Agent auth handles delegation, token brokering, permission scoping, vaulting, and audit trails across the systems an agent must access.",
      breaks:
        "Without agent-native identity, teams over-scope credentials, store tokens unsafely, and fail to build the delegated trust model enterprises require.",
      deepDiveSlug: "auth",
      players: [
        { name: "Composio", type: "Agent-Native", desc: "Unified auth, tool execution, and governance across hundreds of integrations." },
        { name: "Nango", type: "Agent-Native", desc: "Open-source auth infrastructure with broad connector coverage." },
        { name: "Arcade", type: "Agent-Native", desc: "Execution-time permission checks for fine-grained tool access." },
        { name: "Scalekit", type: "MCP-Native", desc: "OAuth 2.1 primitives designed for MCP ecosystems." },
      ],
    },
    {
      num: 6,
      slug: "tool-integration-discovery",
      name: "Tool Integration & Discovery",
      tagline: "How agents interact with the outside world",
      description:
        "This layer standardizes how agents discover, invoke, and govern external tools through MCP, connectors, and managed gateways.",
      breaks:
        "Without tool standards, every agent integration is a bespoke N x M project with inconsistent permissions, discovery, and observability.",
      deepDiveSlug: "mcp",
      players: [
        { name: "Composio", type: "MCP Gateway", desc: "Managed integration and auth layer converging toward agent control plane." },
        { name: "Portkey", type: "MCP Gateway", desc: "Unified LLM and MCP management with governance features." },
        { name: "Docker MCP", type: "Tool Platform", desc: "Verified tool packaging and distribution for containerized MCP services." },
        { name: "Zapier MCP", type: "Tool Platform", desc: "A massive long-tail app ecosystem exposed through MCP." },
      ],
    },
    {
      num: 7,
      slug: "orchestration-multi-agent",
      name: "Orchestration & Multi-Agent",
      tagline: "How multiple agents collaborate on complex tasks",
      description:
        "Orchestration routes work across agents, humans, and systems with shared state, escalation logic, and durable checkpoints.",
      breaks:
        "Without orchestration, multi-agent systems duplicate work, contradict each other, and lack clear failure boundaries.",
      players: [
        { name: "LangGraph", type: "Multi-Agent", desc: "Graph-based orchestration for branching workflows and coordination." },
        { name: "AutoGen", type: "Multi-Agent", desc: "Conversation-first multi-agent coordination patterns." },
        { name: "Temporal.io", type: "Durable Execution", desc: "Resilient workflow primitives for long-running operations." },
        { name: "A2A Protocol", type: "Standards", desc: "An emerging communication standard for agent-to-agent interoperability." },
      ],
    },
    {
      num: 8,
      slug: "governance-observability",
      name: "Governance & Observability",
      tagline: "What the agent did, and can we prove it?",
      description:
        "This control plane provides tracing, policy, cost controls, approvals, auditability, and runtime monitoring for autonomous behavior.",
      breaks:
        "Without governance, agents operate as opaque systems with no trustworthy history, no enforceable controls, and no compliance story.",
      players: [
        { name: "LangSmith", type: "Observability", desc: "Trace, evaluation, and debugging workflows for agent systems." },
        { name: "AgentOps", type: "Observability", desc: "Agent-focused telemetry, monitoring, and session analysis." },
        { name: "Helicone", type: "Cost Mgmt", desc: "Cost tracking and optimization infrastructure for LLM-heavy workloads." },
        { name: "Lasso Security", type: "Security", desc: "Governance and protection around MCP and LLM interaction surfaces." },
      ],
    },
  ],
};

export const playerTypeColors = {
  "Open Source": "#2e2e38",
  Specialized: "#6b7280",
  "Code Sandbox": "#2e2e38",
  "Browser Env": "#6b7280",
  "Agent Filesystem": "#2e2e38",
  "Agent Database": "#2e2e38",
  "Agent OS": "#6b7280",
  "Memory Platform": "#2e2e38",
  "Platform-Native": "#6b7280",
  "Agent-Native": "#2e2e38",
  "MCP-Native": "#6b7280",
  "MCP Gateway": "#2e2e38",
  "Tool Platform": "#6b7280",
  "Multi-Agent": "#2e2e38",
  "Durable Execution": "#6b7280",
  Standards: "#6b7280",
  Observability: "#2e2e38",
  "Cost Mgmt": "#6b7280",
  Security: "#2e2e38",
};
