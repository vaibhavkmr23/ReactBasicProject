import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/coreConcept";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  let handleSelect = (selectedButton) => {
    // selected btns "components, props, state, jsx"
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  };

  let tabContent = <p>Please Select a Topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  console.log("App Component rendered");
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => {
              return <CoreConcept key={conceptItem.title} {...conceptItem} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => {
                handleSelect("components");
              }}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => {
                handleSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => {
                handleSelect("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {tabContent}

          {/* Conditional Rendering on Click */}

          {/* {!selectedTopic ? <p>Please Select a Topic</p> : null}
          {selectedTopic? <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div> 
          : null} */}

          {/* OR */}

          {/* {!selectedTopic? <p>Please Select a Topic</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>} */}

          {/*OR */}

          {/* {!selectedTopic && <p>Please Select a Topic</p> }
          {selectedTopic && <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div> } */}
        </section>
      </main>
    </div>
  );
}

export default App;
