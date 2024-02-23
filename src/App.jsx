import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  console.log("App Component rendered");
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
