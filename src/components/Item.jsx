const Item = ({ item, handleToggle }) => {
  return (
    <label className="item flex">
      <input type="checkbox" id={item} onChange={() => handleToggle(item)} />
      {item}
    </label>
  );
};

export default Item;
