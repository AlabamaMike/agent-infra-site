export const deepDiveContent = [
  {
    slug: "memory",
    shortTitle: "Memory & Context",
    title: "Teaching Agents to Remember",
    subtitle: "Why memory is the least solved and most consequential layer in the agent infrastructure stack.",
    summary:
      "Memory is the barrier between agents that impress in demos and agents that compound value in production. The core market debate is whether memory should be automatic infrastructure, explicit runtime state, or simply well-managed context.",
    strategicFrame:
      "Investors should treat memory as an architectural wedge into multi-model agent stacks, but remain alert to platform-native commoditization and the filesystem-vs-memory debate.",
    sections: [
      {
        heading: "Problem Definition",
        body:
          "An agent without memory is a perpetual first-day employee. It cannot retain user preferences, learn from failures, or maintain continuity across multi-day workflows. The hard part is not storage alone, but deciding what to remember, how to retrieve it, and how to govern it across time.",
      },
      {
        heading: "Architectural Patterns",
        body:
          "Three approaches are emerging: memory-as-a-service APIs like Mem0 that automatically extract salient facts; self-editing runtimes like Letta that expose memory as explicit agent state; and temporal graph models like Zep that emphasize evolving facts and relationships. A fourth counter-pattern treats the filesystem itself as the memory interface and uses search plus summarization instead of a dedicated memory product.",
      },
      {
        heading: "Market Landscape",
        body:
          "Mem0 currently has the clearest go-to-market momentum, Letta owns a strong research and white-box control narrative, and Zep has differentiated around temporal knowledge graphs. Platform-native memories from OpenAI, Anthropic, and Microsoft create the main competitive pressure at the simple personalization layer.",
      },
    ],
    marketMap: [
      { name: "Mem0", note: "Automatic extraction, strong enterprise distribution, AWS Strands signal." },
      { name: "Letta", note: "Research-driven, explicit memory tiers, white-box debugging." },
      { name: "Zep", note: "Temporal knowledge graph for changing context over time." },
      { name: "Anthropic / OpenAI / MS Foundry", note: "Platform-native memories that may commoditize baseline use cases." },
    ],
    watchItems: [
      "Whether third-party memory stays differentiated as platform-native offerings improve.",
      "Whether filesystem-based context management outperforms specialized memory products in real production tasks.",
      "Whether any vendor cracks procedural memory rather than just fact retrieval.",
    ],
    investorTakeaways: [
      "The winning product may be the one that spans memory, governance, and multi-model portability rather than pure retrieval quality.",
      "Enterprise memory moats will likely come from compliance, auditability, and control over salience extraction.",
    ],
  },
  {
    slug: "auth",
    shortTitle: "Auth & Identity",
    title: "The Auth Problem",
    subtitle: "How delegated identity for agents could reshape the identity security market.",
    summary:
      "Auth is the hidden gatekeeper for every other agent capability. Without delegated, scoped, revocable identity, sandboxes, tools, and orchestration never become production-safe systems.",
    strategicFrame:
      "The most important lens is not just OAuth abstraction. It is whether a vendor becomes the trusted broker for agent identity, governance, and reliable action execution across many services.",
    sections: [
      {
        heading: "Problem Definition",
        body:
          "OAuth was built for humans clicking consent screens, not autonomous systems acting on a user’s behalf at 3 a.m. Agent deployments therefore break on token lifecycle management, scope creep, and multi-tenant credential sprawl long before they break on model quality.",
      },
      {
        heading: "Architectural Patterns",
        body:
          "The strongest pattern is brokered credentials: the agent never directly handles raw tokens. A secure intermediary manages authorization flows, vaulting, refresh, revocation, and task-level policy. The best systems layer granular governance and reliable execution on top of managed authentication rather than treating auth as a thin connector problem.",
      },
      {
        heading: "Market Landscape",
        body:
          "Composio has the clearest convergence story across auth, tools, and execution. Nango is well-positioned with developer-controlled infrastructure, while newer entrants like Arcade, Scalekit, and Prefactor are pushing execution-time permissions and MCP-native identity. Incumbent identity vendors remain the biggest strategic threat once the category proves demand.",
      },
    ],
    marketMap: [
      { name: "Composio", note: "Auth-to-action platform with broad integration coverage." },
      { name: "Nango", note: "Open-source and self-hostable, appealing to infrastructure-conscious teams." },
      { name: "Arcade", note: "Just-in-time permissions and execution-aware authorization." },
      { name: "Scalekit / Prefactor", note: "Early MCP-native identity bets." },
    ],
    watchItems: [
      "Whether auth vendors expand from token management into the default control plane for agent actions.",
      "Whether incumbents like Okta/Auth0 or CrowdStrike bundle agent identity capabilities aggressively.",
      "Whether MCP-native identity becomes its own durable subcategory or gets absorbed by broader gateways.",
    ],
    investorTakeaways: [
      "Agent identity is likely to be a control point category, not a feature. Ownership of delegated trust can expand horizontally into governance and execution.",
      "The most defensible vendors will reduce deployment friction while satisfying enterprise security and audit requirements from day one.",
    ],
  },
  {
    slug: "mcp",
    shortTitle: "Tool Integration & MCP",
    title: "The MCP Ecosystem",
    subtitle: "Why standardized tool connectivity is becoming the control plane for agent action.",
    summary:
      "MCP shifts tool use from custom integration work toward a common protocol layer. That transition matters because the economic value in agents depends on action, not just reasoning.",
    strategicFrame:
      "The key question is whether value accrues to open protocol adoption, managed gateways, or the vendors that bundle discovery, governance, and identity around the tool plane.",
    sections: [
      {
        heading: "Problem Definition",
        body:
          "An agent that cannot act on the world is just a chatbot with better rhetoric. Historically, every tool connection required bespoke prompting, custom schemas, and brittle per-API error handling. MCP is the market’s attempt to standardize the contract between agents and tools.",
      },
      {
        heading: "Architectural Patterns",
        body:
          "The ecosystem is splitting into protocol providers, managed gateways, hosted tool platforms, and governance layers. Managed gateways increasingly matter because enterprise buyers want not just interoperability but policy enforcement, observability, and integration lifecycle management.",
      },
      {
        heading: "Market Landscape",
        body:
          "Composio, Portkey, TrueFoundry, and MintMCP are converging on the gateway layer. Docker and Zapier bring distribution advantages on the tool side, while AAIF and adjacent standards efforts influence whether the ecosystem remains open or fragments by platform.",
      },
    ],
    marketMap: [
      { name: "Composio", note: "Gateway plus auth plus managed integrations." },
      { name: "Portkey", note: "Control-plane framing across models and MCP traffic." },
      { name: "Docker MCP", note: "Tool packaging and verification leverage." },
      { name: "Zapier MCP", note: "Massive connector footprint for long-tail workflows." },
    ],
    watchItems: [
      "Whether gateways become the default place to enforce tool policy and approvals.",
      "Whether MCP remains a broadly open standard or gets pulled into platform-specific ecosystems.",
      "Whether discovery, trust, and verification become more valuable than raw connector count.",
    ],
    investorTakeaways: [
      "The gateway layer may become the control plane for agent action in the same way API gateways became control points for service architectures.",
      "Distribution and governance matter as much as protocol compliance because enterprise adoption depends on trust, not just interoperability.",
    ],
  },
];

export function getDeepDiveBySlug(slug) {
  return deepDiveContent.find((entry) => entry.slug === slug);
}
