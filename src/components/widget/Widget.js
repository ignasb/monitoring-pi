import Dropdown from "../dropdown/Dropdown";
import Table from "../table/Table";
import styles from "./Widget.module.css";
import * as React from "react";

const Widget = ({ views, data }) => {
  const availableViews = [
    {label: "Table", value: "table"},
    {label: "Line Chart", value: "lineChart"},
    {label: "Bar Chart", value: "barChart"},
  ];
  const [view, setView] = React.useState(availableViews[0]);
  const handleViewChange = (selectedView) => {
    setView(selectedView);
  };

  return (
    <div className={styles.widget}>
      <div className={styles.widgetToolbar}>
        <Dropdown 
          title={'Change view'}
          items={availableViews}
          selectedItem={view}
          handleSelect={handleViewChange}
        />
      </div>
      <div className={styles.widgetContent}>
          {view.value === "table" &&
            <Table {...data} />
          }
          {view.value === "lineChart" &&
            "Line Chart not implemented"
          }
          {view.value === "barChart" &&
            "Bar Chart not implemented"
          }
      </div>
    </div>
  );
}

export default Widget;
