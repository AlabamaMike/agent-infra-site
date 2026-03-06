import { useState, useEffect, useRef } from "react";

const LAYERS = [
  {
    num: 1, name: "Frameworks & Runtimes",
    tagline: "The reasoning loop that makes an agent an agent",
    description: "Agent frameworks provide the core plan-act-observe cycle that distinguishes an agent from a prompt-response system. They define how an agent decomposes tasks, selects tools, manages state, and handles failure.",
    breaks: "Without a structured framework, developers hand-roll bespoke orchestration for every agent. Planning is brittle, error handling ad hoc, and there's no standard interface for plugging in memory, tools, or governance.",
    players: [
      { name: "LangChain / LangGraph", type: "Open Source", desc: "Most widely adopted agent framework ecosystem" },
      { name: "CrewAI", type: "Open Source", desc: "Multi-agent orchestration with role-based agents" },
      { name: "AutoGen", type: "Open Source", desc: "Microsoft's multi-agent conversation framework" },
      { name: "Letta", type: "Open Source", desc: "Stateful agent platform with MemGPT memory" },
      { name: "Semantic Kernel", type: "Open Source", desc: "Microsoft's SDK for AI orchestration" },
      { name: "Azure AI Foundry", type: "Commercial", desc: "Visual multi-agent workflows on Azure" },
      { name: "Amazon Bedrock Agents", type: "Commercial", desc: "Managed agent service on AWS" },
      { name: "Google Vertex AI", type: "Commercial", desc: "Agent Builder on Google Cloud" },
      { name: "OpenAI Agent SDK", type: "Commercial", desc: "Native agent building on OpenAI" },
      { name: "Temporal.io", type: "Specialized", desc: "Durable execution for long-running agents" },
      { name: "Inngest", type: "Specialized", desc: "Event-driven agent workflows" },
      { name: "BAML", type: "Open Source", desc: "Domain-specific language for AI functions" },
    ]
  },
  { num: 2, name: "Sandboxed Compute", tagline: "Where agents safely run untrusted code", description: "Sandboxed compute provides agents with isolated, ephemeral environments — typically Firecracker microVMs — where they can safely execute AI-generated code, manipulate filesystems, and interact with browsers.", breaks: "Without purpose-built sandboxes, agent-generated code runs in shared environments with access to production systems. A single malformed LLM output can wipe a filesystem or exfiltrate data.", players: [
    { name: "E2B", type: "Code Sandbox", desc: "Firecracker microVMs, 88% of Fortune 100, $21M Series A" },
    { name: "Modal", type: "Code Sandbox", desc: "Serverless compute with GPU support, $164M raised" },
    { name: "Cloudflare Sandboxes", type: "Code Sandbox", desc: "Container-based execution on the edge" },
    { name: "Vercel Sandbox", type: "Code Sandbox", desc: "Firecracker-based, integrated with Vercel platform" },
    { name: "Daytona", type: "Code Sandbox", desc: "Fastest cold starts (~27ms), Docker-based" },
    { name: "Browserbase", type: "Browser Env", desc: "Headless browser cloud, $300M valuation, 50M sessions" },
    { name: "Browser Use", type: "Browser Env", desc: "Open-source browser automation, $17M seed" },
    { name: "Steel", type: "Browser Env", desc: "Browser automation infrastructure" },
    { name: "Northflank", type: "Desktop/OS", desc: "MicroVM sandboxes with unlimited sessions, BYOC" },
    { name: "Fly.io Sprites", type: "Desktop/OS", desc: "Stateful Firecracker sandboxes for coding agents" },
  ]},
  { num: 3, name: "State & Persistence", tagline: "Where agents store, version, and retrieve their work product", description: "State and persistence infrastructure gives agents a durable place to store their output — code, documents, datasets. Distinct from memory (what agents recall), this is about the artifacts themselves: versioned, branched, and merged at agent speed.", breaks: "Without purpose-built persistence, teams hit GitHub's rate limits in minutes, lose all versioning with S3, or spend months rebuilding version control on Postgres.", players: [
    { name: "Mesa", type: "Agent Filesystem", desc: "Git-backed VFS with sub-50ms latency, POSIX mount" },
    { name: "Terminal Use", type: "Agent Filesystem", desc: "Orchestration platform for filesystem-using agents" },
    { name: "Neon", type: "Agent Database", desc: "Serverless Postgres, instant branching, acquired by Databricks" },
    { name: "Supabase", type: "Agent Database", desc: "Open-source Firebase alternative with Postgres" },
    { name: "Turso", type: "Agent Database", desc: "Edge-native SQLite for distributed agents" },
    { name: "/dev/agents", type: "Agent OS", desc: "$56M seed, cloud OS for agents from ex-Android team" },
    { name: "Agentuity", type: "Agent OS", desc: "Cloud platform treating agents as organizing unit" },
  ]},
  { num: 4, name: "Memory & Context", tagline: "What the agent knows and remembers across sessions", description: "Memory systems give agents the ability to retain, retrieve, and reason over information across sessions — working memory, episodic memory, semantic memory, and procedural memory each serving different cognitive functions.", breaks: "Without memory, every interaction starts from zero. The agent can't learn from mistakes, recall preferences, or maintain continuity. It remains perpetually a first-day employee.", players: [
    { name: "Mem0", type: "Memory Platform", desc: "186M API calls/quarter, AWS Strands partner, $24M Series A" },
    { name: "Letta", type: "Memory Platform", desc: "Self-editing memory (MemGPT), white-box control, $10M seed" },
    { name: "Zep", type: "Memory Platform", desc: "Temporal knowledge graph, tracks fact changes over time" },
    { name: "Hyperspell", type: "Memory Platform", desc: "Company knowledge aggregation across Slack, Gmail, Notion" },
    { name: "Pinecone", type: "Vector DB", desc: "Purpose-built vector database for semantic search" },
    { name: "Weaviate", type: "Vector DB", desc: "Open-source vector database with hybrid search" },
    { name: "Chroma", type: "Vector DB", desc: "Open-source embedding database for AI apps" },
    { name: "Qdrant", type: "Vector DB", desc: "High-performance vector similarity search engine" },
    { name: "Anthropic Memory", type: "Platform-Native", desc: "Project-scoped memory built into Claude" },
    { name: "OpenAI Memory", type: "Platform-Native", desc: "Automatic memory for ChatGPT Pro users" },
    { name: "MS Foundry Memory", type: "Platform-Native", desc: "Managed extract-consolidate-retrieve (preview)" },
  ]},
  { num: 5, name: "Auth & Identity", tagline: "Who the agent acts as and what it can access", description: "Auth infrastructure solves the delegation problem: agents acting on behalf of users, with scoped credentials, across dozens of services. Requires managing OAuth flows, token lifecycles, and audit trails.", breaks: "Without dedicated auth, tokens sit in plaintext, permissions are over-scoped, and there's no centralized view of agent access. Many prototypes never reach production because the auth wall is too high.", players: [
    { name: "Composio", type: "Agent-Native", desc: "500+ integrations, unified OAuth, SOC 2 Type II" },
    { name: "Nango", type: "Agent-Native", desc: "Open-source auth infrastructure, 500+ connectors" },
    { name: "Arcade", type: "Agent-Native", desc: "Just-in-time permissions at execution time" },
    { name: "Auth0 for AI Agents", type: "Incumbent", desc: "Okta subsidiary extending to agent auth (beta)" },
    { name: "SGNL", type: "Incumbent", desc: "Continuous dynamic authorization, acquired by CrowdStrike $740M" },
    { name: "Clerk", type: "Incumbent", desc: "Adding agent identity primitives to dev auth" },
    { name: "Stytch", type: "Incumbent", desc: "Passwordless auth extending to agent identity" },
    { name: "Scalekit", type: "MCP-Native", desc: "Drop-in OAuth 2.1 for MCP servers" },
    { name: "Prefactor", type: "MCP-Native", desc: "Native MCP identity layer for SaaS" },
  ]},
  { num: 6, name: "Tool Integration & Discovery", tagline: "How agents interact with the outside world", description: "Tool integration via the Model Context Protocol (MCP) provides connective tissue between agents and external systems. MCP gateways are becoming the control plane for all agent-tool communication.", breaks: "Without standardized tools, every agent-to-API integration is a custom N×M problem. Discovery is manual, error handling inconsistent, and there's no governance over what agents can call.", players: [
    { name: "Composio", type: "MCP Gateway", desc: "500+ managed integrations, unified auth + gateway" },
    { name: "Portkey", type: "MCP Gateway", desc: "Unified LLM + MCP management, 50+ guardrails" },
    { name: "MintMCP", type: "MCP Gateway", desc: "SOC 2 Type II, governance-first, one-click deploy" },
    { name: "TrueFoundry", type: "MCP Gateway", desc: "Sub-10ms latency, unified AI control plane" },
    { name: "Bifrost (Maxim)", type: "MCP Gateway", desc: "11µs latency Go gateway for performance" },
    { name: "Docker MCP", type: "Tool Platform", desc: "200+ verified containerized MCP tools" },
    { name: "Zapier MCP", type: "Tool Platform", desc: "8,000+ app ecosystem via MCP" },
    { name: "Workato", type: "Tool Platform", desc: "12,000+ enterprise connectors extending to MCP" },
    { name: "Exa", type: "Specialized", desc: "Agent-optimized web search API" },
    { name: "Stripe Agent SDK", type: "Specialized", desc: "Payment infrastructure for agents" },
    { name: "AAIF", type: "Standards", desc: "Linux Foundation: MCP + A2A + AGENTS.md governance" },
  ]},
  { num: 7, name: "Orchestration & Multi-Agent", tagline: "How multiple agents collaborate on complex tasks", description: "Orchestration manages coordination of multiple agents: routing tasks, inter-agent communication via A2A, shared state, human-in-the-loop checkpoints, and durable execution for long-running workflows.", breaks: "Without orchestration, multi-agent systems devolve into chaos. Agents duplicate work, contradict each other, and lack escalation mechanisms.", players: [
    { name: "AutoGen", type: "Multi-Agent", desc: "Microsoft's multi-agent conversation framework" },
    { name: "CrewAI", type: "Multi-Agent", desc: "Role-based multi-agent orchestration" },
    { name: "LangGraph", type: "Multi-Agent", desc: "Graph-based agent workflow orchestration" },
    { name: "Swarm", type: "Multi-Agent", desc: "OpenAI's lightweight multi-agent framework" },
    { name: "Temporal.io", type: "Durable Execution", desc: "Workflow durability for long-running agents" },
    { name: "Inngest", type: "Durable Execution", desc: "Event-driven agent coordination" },
    { name: "Restate", type: "Durable Execution", desc: "Durable execution with persistent state" },
    { name: "A2A Protocol", type: "Standards", desc: "Google's agent-to-agent communication standard" },
  ]},
  { num: 8, name: "Governance & Observability", tagline: "What the agent did, and can we prove it?", description: "Governance provides the control plane: tracing every action, monitoring anomalies, enforcing policy, managing costs (20-30x higher than standard GenAI), and providing audit trails for compliance.", breaks: "Without governance, agents operate as black boxes — zero telemetry, no request history, uncontrolled data access. In regulated industries, ungoverned agents are not deployable.", players: [
    { name: "LangSmith", type: "Observability", desc: "LangChain's tracing and evaluation platform" },
    { name: "Braintrust", type: "Observability", desc: "AI product evaluation and monitoring" },
    { name: "AgentOps", type: "Observability", desc: "Agent-specific observability and debugging" },
    { name: "Moda", type: "Observability", desc: "Monitoring for agent hallucinations and failures" },
    { name: "Arize Phoenix", type: "Observability", desc: "Open-source AI observability platform" },
    { name: "Helicone", type: "Cost Mgmt", desc: "LLM cost tracking and optimization" },
    { name: "Lasso Security", type: "Security", desc: "MCP gateway + LLM interaction protection" },
    { name: "Prisma AIRS", type: "Security", desc: "Palo Alto's AI lifecycle security platform" },
    { name: "Haize Labs", type: "Security", desc: "Red-teaming and vulnerability assessment for AI" },
    { name: "IBM ContextForge", type: "Enterprise", desc: "Federated MCP governance with policy-as-code" },
  ]},
];

const TC = {"Open Source":"#2E2E38","Commercial":"#2E2E38","Specialized":"#747480","Code Sandbox":"#2E2E38","Browser Env":"#747480","Desktop/OS":"#747480","Agent Filesystem":"#2E2E38","Agent Database":"#2E2E38","Agent OS":"#747480","Memory Platform":"#2E2E38","Vector DB":"#747480","Platform-Native":"#999","Agent-Native":"#2E2E38","Incumbent":"#747480","MCP-Native":"#747480","DB-Native":"#999","MCP Gateway":"#2E2E38","Tool Platform":"#747480","Standards":"#999","Multi-Agent":"#2E2E38","Durable Execution":"#747480","Platform":"#999","Observability":"#2E2E38","Cost Mgmt":"#747480","Security":"#2E2E38","Enterprise":"#747480","Context Mgmt":"#999"};

export default function App() {
  const [activeLayer, setActiveLayer] = useState(null);
  const [view, setView] = useState("overview");
  const refs = useRef({});
  useEffect(() => { const l = document.createElement("link"); l.href = "https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;0,900;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&display=swap"; l.rel = "stylesheet"; document.head.appendChild(l); }, []);
  const go = (n) => { setView("layers"); setActiveLayer(n); setTimeout(() => refs.current[n]?.scrollIntoView({ behavior: "smooth", block: "start" }), 100); };
  const sans = "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif";
  const serif = "'Source Serif 4', Georgia, serif";

  return (
    <div style={{ fontFamily: sans, background: "#fff", color: "#2E2E38", minHeight: "100vh" }}>
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "#2E2E38", padding: "0 32px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 52 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => setView("overview")}>
            <div style={{ width: 24, height: 3, background: "#FFE600", borderRadius: 1 }} />
            <span style={{ fontSize: 14, fontWeight: 700, color: "#fff", letterSpacing: "0.01em" }}>Agent Infrastructure Layer</span>
          </div>
          <div style={{ display: "flex", gap: 2 }}>
            {[["overview","Overview"],["layers","Layer Deep Dives"]].map(([v,label]) => (
              <button key={v} onClick={() => setView(v)} style={{ padding: "6px 16px", borderRadius: 0, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: sans, background: view === v ? "rgba(255,230,0,0.15)" : "transparent", color: view === v ? "#FFE600" : "rgba(255,255,255,0.7)", transition: "all 0.2s", borderBottom: view === v ? "2px solid #FFE600" : "2px solid transparent" }}>{label}</button>
            ))}
          </div>
        </div>
      </nav>
      <div style={{ height: 4, background: "#FFE600" }} />

      {view === "overview" && (
        <div>
          <div style={{ background: "#2E2E38", padding: "64px 32px 72px" }}>
            <div style={{ maxWidth: 1120, margin: "0 auto" }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: "#FFE600", textTransform: "uppercase", marginBottom: 20 }}>Thought Leadership · March 2026</div>
              <h1 style={{ fontFamily: serif, fontSize: 48, fontWeight: 700, lineHeight: 1.12, color: "#fff", letterSpacing: "-0.01em", margin: "0 0 20px", maxWidth: 680 }}>The software layer between models and agents</h1>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", margin: "0 0 36px", maxWidth: 580 }}>Defining and segmenting the emerging infrastructure stack that turns AI models into autonomous systems.</p>
              <button onClick={() => setView("layers")} style={{ padding: "12px 28px", border: "2px solid #FFE600", borderRadius: 0, cursor: "pointer", fontSize: 14, fontWeight: 700, fontFamily: sans, background: "transparent", color: "#FFE600", transition: "all 0.2s", letterSpacing: "0.02em" }} onMouseEnter={e => { e.currentTarget.style.background = "#FFE600"; e.currentTarget.style.color = "#2E2E38"; }} onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#FFE600"; }}>Explore the eight layers</button>
            </div>
          </div>
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "56px 32px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#747480", textTransform: "uppercase", marginBottom: 28 }}>Key market signals</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#E0E0E0" }}>
              {[{ stat: "60%", label: "of enterprises piloting agent deployments" },{ stat: "97M+", label: "monthly MCP SDK downloads" },{ stat: "$740M", label: "CrowdStrike paid for SGNL (59 employees)" },{ stat: "20–30×", label: "token consumption vs. standard GenAI" },{ stat: "88%", label: "of Fortune 100 using E2B sandboxes" },{ stat: "4 of 5", label: "Neon databases created by code, not humans" }].map((item, i) => (
                <div key={i} style={{ padding: "28px 24px", background: "#fff" }}>
                  <div style={{ fontFamily: serif, fontSize: 36, fontWeight: 700, color: "#2E2E38", letterSpacing: "-0.02em" }}>{item.stat}</div>
                  <div style={{ fontSize: 14, color: "#747480", marginTop: 8, lineHeight: 1.5 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#F6F6FA", padding: "56px 32px" }}>
            <div style={{ maxWidth: 1120, margin: "0 auto" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#747480", textTransform: "uppercase", marginBottom: 28 }}>The eight-layer stack</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {[...LAYERS].reverse().map((layer) => (
                  <div key={layer.num} onClick={() => go(layer.num)} style={{ display: "flex", alignItems: "center", gap: 20, padding: "16px 20px", cursor: "pointer", background: "#fff", transition: "all 0.15s", borderLeft: "4px solid transparent" }} onMouseEnter={e => { e.currentTarget.style.borderLeftColor = "#FFE600"; e.currentTarget.style.background = "#FFFDE6"; }} onMouseLeave={e => { e.currentTarget.style.borderLeftColor = "transparent"; e.currentTarget.style.background = "#fff"; }}>
                    <div style={{ width: 28, height: 28, background: "#2E2E38", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#FFE600", flexShrink: 0 }}>{layer.num}</div>
                    <div style={{ flex: 1 }}><div style={{ fontSize: 15, fontWeight: 700, color: "#2E2E38" }}>{layer.name}</div><div style={{ fontSize: 13, color: "#747480", marginTop: 2 }}>{layer.tagline}</div></div>
                    <div style={{ fontSize: 12, color: "#999", flexShrink: 0 }}>{layer.players.length} companies →</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "64px 32px" }}>
            <div style={{ maxWidth: 640, borderLeft: "4px solid #FFE600", paddingLeft: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#747480", textTransform: "uppercase", marginBottom: 16 }}>Central thesis</div>
              <p style={{ fontFamily: serif, fontSize: 22, fontWeight: 400, fontStyle: "italic", lineHeight: 1.6, color: "#2E2E38", margin: 0 }}>The companies that provide the primitives agents depend on — sandboxes, filesystems, memory, auth, tool gateways, governance — will be to the agentic era what AWS, Stripe, and Twilio were to the cloud era.</p>
            </div>
          </div>
        </div>
      )}

      {view === "layers" && (
        <div>
          <div style={{ position: "sticky", top: 56, zIndex: 40, background: "#fff", borderBottom: "1px solid #E0E0E0", padding: "0 32px" }}>
            <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", gap: 0, overflowX: "auto", paddingTop: 8 }}>
              {LAYERS.map(l => (
                <button key={l.num} onClick={() => go(l.num)} style={{ padding: "8px 14px 10px", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: sans, background: "transparent", color: activeLayer === l.num ? "#2E2E38" : "#999", borderBottom: activeLayer === l.num ? "3px solid #FFE600" : "3px solid transparent", transition: "all 0.15s", whiteSpace: "nowrap" }}>{l.num}. {l.name}</button>
              ))}
            </div>
          </div>
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 32px 80px" }}>
            {LAYERS.map(layer => (
              <div key={layer.num} ref={el => refs.current[layer.num] = el} style={{ marginBottom: 72, scrollMarginTop: 120 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}>
                  <span style={{ fontFamily: serif, fontSize: 48, fontWeight: 700, color: "#FFE600", lineHeight: 1 }}>{layer.num}</span>
                  <h2 style={{ fontFamily: serif, fontSize: 32, fontWeight: 700, color: "#2E2E38", margin: 0 }}>{layer.name}</h2>
                </div>
                <div style={{ fontSize: 15, color: "#747480", marginBottom: 28 }}>{layer.tagline}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, marginBottom: 36, border: "1px solid #E0E0E0" }}>
                  <div style={{ padding: "24px 28px", borderRight: "1px solid #E0E0E0" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#747480", textTransform: "uppercase", marginBottom: 10 }}>What it is</div>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: "#2E2E38", margin: 0 }}>{layer.description}</p>
                  </div>
                  <div style={{ padding: "24px 28px", background: "#FFFDE6" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#996600", textTransform: "uppercase", marginBottom: 10 }}>What breaks without it</div>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: "#2E2E38", margin: 0 }}>{layer.breaks}</p>
                  </div>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#747480", textTransform: "uppercase", marginBottom: 16 }}>Sector map · {layer.players.length} companies</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 0, border: "1px solid #E0E0E0" }}>
                  {layer.players.map((player, i) => (
                    <div key={i} style={{ padding: "14px 18px", borderBottom: "1px solid #E0E0E0", borderRight: "1px solid #E0E0E0", display: "flex", flexDirection: "column", gap: 3, transition: "background 0.15s", background: "#fff" }} onMouseEnter={e => { e.currentTarget.style.background = "#FFFDE6"; }} onMouseLeave={e => { e.currentTarget.style.background = "#fff"; }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                        <span style={{ fontSize: 14, fontWeight: 700, color: "#2E2E38" }}>{player.name}</span>
                        <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", background: "#F6F6FA", color: TC[player.type] || "#747480", letterSpacing: "0.03em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{player.type}</span>
                      </div>
                      <div style={{ fontSize: 13, color: "#747480", lineHeight: 1.45 }}>{player.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ height: 4, background: "#FFE600" }} />
      <footer style={{ background: "#2E2E38", padding: "28px 32px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Agent Infrastructure Layer · Conceptual Framework · March 2026</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Research & analysis for informational purposes</div>
        </div>
      </footer>
    </div>
  );
}
