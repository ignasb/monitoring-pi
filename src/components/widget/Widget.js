import Table from '../Table';
import styles from './Widget.module.css';
import * as React from 'react';

const Widget = ({ views, data }) => {
  const availableViews = {
    table: 'Table',
    lineChart: 'Line Chart',
    barChart: 'Bar Chart',
  };
  const [view, setView] = React.useState(Object.keys(availableViews)[0]);
  const handleViewChange = (selectedView) => {
    setView(selectedView);
  };
  
  return (
    <div className={styles.widget}>
      <div className={styles.widgetToolbar}>
        <select onChange={(e) => handleViewChange(e.target.value)}>
          {Object.keys(availableViews)
            .map((k, i) => <option key={i} value={k}>{availableViews[k]}</option>)
          }
        </select>
      </div>
      <div className={styles.widgetContent}>
          {view === 'table' &&
            <Table {...data} />
          }
          {view === 'lineChart' &&
            'Line Chart not implemented'
          }
          {view === 'barChart' &&
            'Bar Chart not implemented'
          }
      </div>
    </div>
  );
}

export default Widget;
