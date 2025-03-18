import "./App.css";
import { HelloWorld } from "./components/HelloWorld/HelloWorld";
import { Counter } from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {" "}
          Edit <code>src/App.js</code> and save to reload.{" "}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
        <section className="container">
          <HelloWorld />
          <Counter />
        </section>
      </header>
    </div>
  );
}

export default App;
