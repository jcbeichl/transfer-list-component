const Actions = ({ moveItemsRight, moveItemsLeft }) => {
  return (
    <div className="actions flex">
      <button onClick={moveItemsRight}>&gt;</button>
      <button onClick={moveItemsLeft}>&lt;</button>
    </div>
  );
};

export default Actions;
