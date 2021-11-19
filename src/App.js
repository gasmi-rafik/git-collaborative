import logo from './logo.svg';
import './App.css';
import Rafik from "./Rafik"
import Hakim from './Hakim'
import Gassen from './Gassen';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Rafik />
        <Gassen />
        <p>hello this is my tag hakim </p>
        <p>hello this is my tag rafik</p>
        <p> hello this is my tag ghassen</p>
      </header>
      <Hakim />
    </div>
  );
}

export default App;
