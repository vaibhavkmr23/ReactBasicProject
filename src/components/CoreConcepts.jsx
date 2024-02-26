import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => {
          return <CoreConcept key={conceptItem.title} {...conceptItem} />;
        })}
      </ul>
    </Section>
  );
}
