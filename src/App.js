import logo from './logo.svg';
import './App.css';
import toCelsius from './celsius'
import { square, round, day } from './utilModules'
const cel=(toCelsius(100));
const group=(day)
const sq = square(9);
const rnd = round(2.9);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          It's {cel} deg Celsius and the day is {group}. Square is {sq} to reload it takes {rnd} seconds. 
        </p>
        <a
          className="App-link"
          href="https://xhamster.com"
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
