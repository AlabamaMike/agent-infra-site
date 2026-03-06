import { Link } from "react-router-dom";

import { playerTypeColors } from "../content/framework";

export function Hero({ eyebrow, title, subtitle, actions = [] }) {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <p className="eyebrow eyebrow--accent">{eyebrow}</p>
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        {actions.length > 0 ? (
          <div className="hero__actions">
            {actions.map((action) =>
              action.to ? (
                <Link
                  key={action.label}
                  to={action.to}
                  className={`button ${action.variant === "secondary" ? "button--secondary" : ""}`}
                >
                  {action.label}
                </Link>
              ) : null,
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, body }) {
  return (
    <div className="section-header">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? <h2 className="section-title">{title}</h2> : null}
      {body ? <p className="section-body">{body}</p> : null}
    </div>
  );
}

export function SignalGrid({ items }) {
  return (
    <div className="signal-grid">
      {items.map((item) => (
        <article key={`${item.stat}-${item.label}`} className="signal-card">
          <div className="signal-card__stat">{item.stat}</div>
          <p>{item.label}</p>
        </article>
      ))}
    </div>
  );
}

export function InsightCallout({ eyebrow, title, body }) {
  return (
    <aside className="callout">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h3>{title}</h3>
      <p>{body}</p>
    </aside>
  );
}

export function LayerStack({ layers }) {
  return (
    <div className="stack-list">
      {[...layers].reverse().map((layer) => (
        <Link key={layer.slug} to={`/framework#${layer.slug}`} className="stack-item">
          <span className="stack-item__num">{layer.num}</span>
          <span className="stack-item__body">
            <strong>{layer.name}</strong>
            <span>{layer.tagline}</span>
          </span>
          <span className="stack-item__meta">{layer.players.length} companies</span>
        </Link>
      ))}
    </div>
  );
}

export function LayerJumpNav({ layers }) {
  return (
    <nav className="jump-nav" aria-label="Layer navigation">
      {layers.map((layer) => (
        <a key={layer.slug} href={`#${layer.slug}`} className="jump-nav__item">
          {layer.num}. {layer.name}
        </a>
      ))}
    </nav>
  );
}

export function LayerCard({ layer }) {
  return (
    <section id={layer.slug} className="layer-card">
      <div className="layer-card__heading">
        <span className="layer-card__num">{layer.num}</span>
        <div>
          <h2>{layer.name}</h2>
          <p>{layer.tagline}</p>
        </div>
      </div>
      <div className="layer-card__panes">
        <div>
          <p className="eyebrow">What It Is</p>
          <p>{layer.description}</p>
        </div>
        <div className="layer-card__risk">
          <p className="eyebrow">What Breaks Without It</p>
          <p>{layer.breaks}</p>
        </div>
      </div>
      <div className="layer-card__footer">
        {layer.deepDiveSlug ? (
          <Link to={`/deep-dives/${layer.deepDiveSlug}`} className="text-link">
            {`Read the ${layer.deepDiveSlug} deep dive`}
          </Link>
        ) : (
          <span className="text-link text-link--muted">Deep dive coming later</span>
        )}
      </div>
      <div className="market-grid">
        {layer.players.map((player) => (
          <article key={player.name} className="market-card">
            <div className="market-card__top">
              <strong>{player.name}</strong>
              <span style={{ color: playerTypeColors[player.type] || "#6b7280" }}>{player.type}</span>
            </div>
            <p>{player.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DeepDiveCard({ dive }) {
  return (
    <article className="deep-dive-card">
      <p className="eyebrow">{dive.shortTitle}</p>
      <h3>{dive.title}</h3>
      <p>{dive.summary}</p>
      <Link to={`/deep-dives/${dive.slug}`} className="text-link">
        Explore the briefing
      </Link>
    </article>
  );
}

export function MemoSection({ heading, body }) {
  return (
    <section className="memo-section">
      <h2>{heading}</h2>
      <p>{body}</p>
    </section>
  );
}

export function BulletPanel({ title, items }) {
  return (
    <section className="bullet-panel">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
