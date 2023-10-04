import { useState } from "react";
import Actions from "./components/Actions";
import List from "./components/List";
import { items } from "./data";
import { transferItems, removeItems } from "./util";

const App = () => {
  /* 
    useState 
  */
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  /*  
    transfer only the checked items to the right or left list
  */
  const leftCheckedItems = transferItems(leftItems, checkedItems);
  const rightCheckedItems = transferItems(rightItems, checkedItems);

  /*  
    checks array to see if the item is checked or not 
  */
  const handleToggle = (item) => {
    const currentItems = checkedItems.indexOf(item);
    const newCheckedItem = [...checkedItems];
    /*  
      if currentItems === -1, item is not already checked
    */
    if (currentItems === -1) {
      newCheckedItem.push(item);
      /*  
        if currentItems is already checked take out of checked state
      */
    } else {
      newCheckedItem.splice(currentItems, 1);
    }

    setCheckedItems(newCheckedItem);
  };
  /* 
    moves items from left list to the right list on button click; 
    sorts numbers in order no matter the checked sequence 
  */
  const moveItemsRight = () => {
    setRightItems(rightItems.concat(leftCheckedItems).sort());
    setLeftItems(removeItems(leftItems, leftCheckedItems));
    setCheckedItems(removeItems(checkedItems, leftCheckedItems));
  };
  /*  
    function to move items from right list to the left list on button click
    sorts numbers in order no matter the checked sequence
  */
  const moveItemsLeft = () => {
    setLeftItems(leftItems.concat(rightCheckedItems).sort());
    setRightItems(removeItems(rightItems, rightCheckedItems));
    setCheckedItems(removeItems(checkedItems, rightCheckedItems));
  };

  return (
    <div className="app flex">
      <List items={leftItems} handleToggle={handleToggle} />
      <Actions moveItemsRight={moveItemsRight} moveItemsLeft={moveItemsLeft} />
      <List items={rightItems} handleToggle={handleToggle} />
    </div>
  );
};

export default App;
