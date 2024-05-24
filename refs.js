// export const refs = {
//   buttonIncrement: document.querySelector(`button[data-action='increment']`),
//   buttonValue: document.querySelector(".counter-value"),
//   buttonDecrement: document.querySelector(`button[data-action='decrement']`),
// };
const fetchUsers = async () => {
  const response = await axios.get(
    "<https://jsonplaceholder.typicode.com/users>"
  );
  return response.data;
};

fetchUsers().then((users) => console.log(users));
