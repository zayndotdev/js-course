const a = 10;
const b = 20;

// const getData = async () => {
//   const userData = await fetch("https://jsonplaceholder.typicode.com/users");
//   const res = await userData.json();
//   console.log(res);
// };
// getData();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => {
//     const res = data.json();
//     console.log(res);
//   })
//   .catch((err) => console.log(err));
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((res) => {
    console.log(res); // ✅ This logs actual user data
  })
  .catch((err) => console.log(err));

// console.log(userData);
const result = a + b;
console.log(result);
