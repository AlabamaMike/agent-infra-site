import { Link, Navigate, useParams } from "react-router-dom";

import { BulletPanel, Hero, InsightCallout, MemoSection, SectionHeader } from "../components/Editorial";
import { getDeepDiveBySlug } from "../content/deepDives";

export function DeepDivePage() {
  const { slug } = useParams();
  const dive = getDeepDiveBySlug(slug);

  if (!dive) {
    return <Navigate to="/deep-dives" replace />;
  }

  return (
    <>
      <Hero
        eyebrow={`Deep Dive | ${dive.shortTitle}`}
        title={dive.title}
        subtitle={dive.subtitle}
        actions={[
          { label: "Back to deep dives", to: "/deep-dives", variant: "secondary" },
          { label: "Return to framework", to: "/framework" },
        ]}
      />

      <section className="section section--white">
        <div className="container layout-split">
          <div>
            <SectionHeader eyebrow="Executive Summary" title={dive.shortTitle} body={dive.summary} />
            <div className="memo-stack">
              {dive.sections.map((section) => (
                <MemoSection key={section.heading} heading={section.heading} body={section.body} />
              ))}
            </div>
          </div>
          <div className="sticky-rail">
            <InsightCallout
              eyebrow="Strategic Implications"
              title="Investment lens"
              body={dive.strategicFrame}
            />
            <div className="rail-card">
              <p className="eyebrow">Cross-Reference</p>
              <Link to="/framework" className="text-link">
                Revisit the eight-layer framework
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--slate">
        <div className="container layout-three">
          <BulletPanel
            title="Market Landscape"
            items={dive.marketMap.map((item) => `${item.name}: ${item.note}`)}
          />
          <BulletPanel title="What To Watch" items={dive.watchItems} />
          <BulletPanel title="Strategic Implications" items={dive.investorTakeaways} />
        </div>
      </section>
    </>
  );
}
