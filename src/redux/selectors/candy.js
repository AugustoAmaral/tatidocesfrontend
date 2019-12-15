export const readCandy = state => ({
  candies: state.candy.entries,
  candiesTableHead: [{ label: "Name", name: "name" }]
});
