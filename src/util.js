/*
  looks at item and moves to intended list
  depending on which button is clicked
*/
export const transferItems = (a, b) => {
  return a.filter((item) => b.indexOf(item) !== -1);
};
/*
  looks at item in list and removes from list 
*/
export const removeItems = (a, b) => {
  return a.filter((item) => b.indexOf(item) === -1);
};
