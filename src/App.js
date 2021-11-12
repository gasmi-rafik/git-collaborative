import logo from './logo.svg';
import './App.css';
import Rafik from "./Rafik"
import Hakim from './Hakim'
import Nidhal from './Nidhal'
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Rafik />

        <p>hello this is my tag hakim </p>
        <p>hello this is my tag rafik</p>
        <h1> hello this is my tag nidhal</h1>
      </header>
      <Hakim />
      <Nidhal />
    </div>
  );
}

export default App;
