import logo from './logo.svg';
import './App.css';
import toCelsius from './celsius'
import { square, round, day } from './utilModules'
console.log(toCelsius(100));
console.log(square(9),round(2.9),day)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span id="hook"></span>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}



export default App;
