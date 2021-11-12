import logo from './logo.svg';
import './App.css';
import Rafik from "./Rafik"
import Hakim from './Hakim'
import Amel from './Amel'
import Nidhal from './Nidhal'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Rafik />

        <p>hello this is my tag hakim </p>
        <p>hello this is my tag rafik</p>

        <h3>hello this is my tag amel</h3>
      
     
     
        <h1> hello this is my tag nidhal</h1>
      </header>
      <Hakim />
      <Amel />
      <Nidhal />
     

    </div>
  );
}

export default App;
