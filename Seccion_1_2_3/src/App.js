import "./App.css";
import { HelloWorld } from "./components/HelloWorld/HelloWorld";
import { Counter } from "./components/Counter/Counter";
import { AsyncList } from "./components/AsyncList/AsyncList";

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
          <AsyncList />
        </section>
      </header>
    </div>
  );
}

export default App;
