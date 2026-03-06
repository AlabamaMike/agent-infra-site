import { frameworkContent } from "../content/framework";
import {
  Hero,
  InsightCallout,
  LayerCard,
  LayerJumpNav,
  SectionHeader,
} from "../components/Editorial";

export function FrameworkPage() {
  return (
    <>
      <Hero
        eyebrow="Eight-Layer Framework"
        title="The eight layers of agent infrastructure"
        subtitle="A guided explainer for the core primitives required to move from models to autonomous systems."
        actions={[{ label: "Read the deep dives", to: "/deep-dives" }]}
      />

      <section className="section section--white">
        <div className="container">
          <SectionHeader
            eyebrow="Quick Navigation"
            body="Use the layer bar to move quickly through the stack and jump into the promoted deep dives where available."
          />
          <LayerJumpNav layers={frameworkContent.layers} />
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <InsightCallout
            eyebrow="What Breaks In Production"
            title="Each layer exists because a different failure mode becomes existential at scale"
            body="The framework is most useful when read as a map of production failure points: safety, persistence, memory, identity, interoperability, coordination, and governance."
          />
          <div className="layer-list">
            {frameworkContent.layers.map((layer) => (
              <LayerCard key={layer.slug} layer={layer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
