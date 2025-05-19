const user = {
  name: "Zayn",
  age: 25,
  idDeveloper: true,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "123456",
  },

  greet: function () {
    // console.log(this);
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

// add properties to the user object
user.favFruits = ["Mango", "Banana", "Apple", "Orange", "Grapes"];

// logging the user object
// console.log(user);

user.greet();

/*
    creating a constrotor function
*/

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.userDetailes = function () {
  console.log(`Name: ${this.name}\nAge: ${this.age}`);
};

const user1 = new User("Ali", 22);
const user2 = new User("Zayn", 25);

console.log(user1);
console.log(user2);
user1.userDetailes();
user2.userDetailes();
