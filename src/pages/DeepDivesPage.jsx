import { deepDiveContent } from "../content/deepDives";
import { DeepDiveCard, Hero, SectionHeader } from "../components/Editorial";

export function DeepDivesPage() {
  return (
    <>
      <Hero
        eyebrow="Curated Research Library"
        title="Deep dives into the most consequential layers"
        subtitle="These briefings extend the core framework into the categories with the clearest implications for client strategy and investment planning."
        actions={[{ label: "Return to the framework", to: "/framework", variant: "secondary" }]}
      />

      <section className="section section--white">
        <div className="container">
          <SectionHeader
            eyebrow="Editorial Selection"
            title="Why these three first"
            body="Memory, identity, and tool connectivity sit at the center of the current production debate. Together, they reveal where real control points may emerge in the stack."
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
