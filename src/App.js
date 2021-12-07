import logo from './logo.svg';
import './App.css';
import toCelsius from './celsius'
import { square, round, day } from './utilModules'
const cel=(toCelsius(100));
const group=(square(9),round(2.9),day)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit {cel} and save to reload.{group}
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
