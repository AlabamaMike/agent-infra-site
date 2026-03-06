import { frameworkContent } from "../content/framework";
import { deepDiveContent } from "../content/deepDives";
import {
  DeepDiveCard,
  Hero,
  InsightCallout,
  LayerStack,
  SectionHeader,
  SignalGrid,
} from "../components/Editorial";

export function OverviewPage() {
  return (
    <>
      <Hero
        eyebrow={frameworkContent.eyebrow}
        title={frameworkContent.heroTitle}
        subtitle={frameworkContent.heroSubtitle}
        actions={[
          { label: "Explore the eight-layer framework", to: "/framework" },
          { label: "Read the deep dives", to: "/deep-dives", variant: "secondary" },
        ]}
      />

      <section className="section section--white">
        <div className="container">
          <SectionHeader eyebrow="Key Market Signals" title="Why this category matters now" />
          <SignalGrid items={frameworkContent.marketSignals} />
        </div>
      </section>

      <section className="section section--slate">
        <div className="container layout-split">
          <div>
            <SectionHeader
              eyebrow="Central Thesis"
              title="A new software layer is taking shape"
              body={frameworkContent.summary}
            />
            <InsightCallout
              eyebrow="Investment Lens"
              title="What clients should leave understanding"
              body={frameworkContent.thesis}
            />
          </div>
          <div>
            <SectionHeader eyebrow="The Eight-Layer Stack" title="The mental model" />
            <LayerStack layers={frameworkContent.layers} />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHeader
            eyebrow="Deep Dives"
            title="Three categories shaping strategic attention"
            body="The first release highlights the layers where production readiness, strategic control points, and market structure are moving fastest."
          />
          <div className="deep-dive-grid">
            {deepDiveContent.map((dive) => (
              <DeepDiveCard key={dive.slug} dive={dive} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
