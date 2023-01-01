import logo from './logo.svg';
import './App.css';
import * as React from 'react';

function App() {
  const fetchPiUsageData = () => {
    fetch('http://192.168.50.11:9000/testAPI')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    fetchPiUsageData();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
