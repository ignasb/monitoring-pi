import * as React from "react";
import styles from "./Dropdown.module.css";

import Button from "../button/Button";

const Dropdown = ({ items, title, selectedItem, handleSelect }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const handleToggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };
  const handleItemClick = (item) => {
    setIsExpanded(false);
    handleSelect(item);
  };

  return (
    <div className={styles.dropdown}>
      <Button title={title} onClickHandler={(e) => handleToggleDropdown()} />
      <ul className={`${styles.selection} ${isExpanded ? styles.visible : styles.hidden}`}>
        {items.map((item, i) => <li key={i}
          className={selectedItem.value === item.value ? styles.selectionActive : null}
          onClick={(e) => handleItemClick(item)}>{item.label}</li>)
        }
      </ul>
    </div>
  );
};

export default Dropdown;
