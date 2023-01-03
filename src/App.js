import logo from './logo.svg';
import styles from './App.module.css';
import * as React from 'react';
import Widget from './components/widget/Widget';

function App() {
  const [temperatureData, setTemperatureData] = React.useState({ title: 'Pi Temperature', headers: [], data: [] });

  const fetchPiUsageData = () => {
    fetch('http://192.168.50.11:9000/metrics/temperature')
      .then(res => res.json())
      .then((data) => {
        const fetchedTempData = {
            ...temperatureData,
            headers: [
                {key: 'ts', title: 'Timestamp'},
                {key: 'value', title: 'Temperature'}
            ],
            data
        };

        setTemperatureData(fetchedTempData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    fetchPiUsageData();
  }, []);

  return (
      <div className={styles.app}>
        <Widget views={['table']} data={temperatureData} />
      </div>
  );
}

export default App;
