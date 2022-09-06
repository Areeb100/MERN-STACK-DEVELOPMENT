// Objects are used to store key value pairs.

let user = { name : 'Raju', age: 25, email : 'raju@mail.com', 'enroll-no' : 'A-121'};
let key = 'enroll-no';

console.log(user.email);
console.log(user['enroll-no']);
console.log(user[key]);

console.log(user['name']);

console.log(user);

console.log(user.address);
user.address = 'Lucknow - 226001';
console.log(user);

user.name = 'shamu';
console.log(user);

let brand = 'Samsung';
let model = 'Galaxy S22';
let colors = ['White', 'Black', 'Gray'];
let price = 60000;

// 1.passing object as an argument to a function
let smartphone = {brand, model, colors, price};
console.log(smartphone);
console.log(smartphone.colors[1]);
// console.log();

// 2. passing object as an argument to a function
const printDetails = ({brand, model}) => {
      console.log(brand);
      console.log(model);
}

printDetails(smartphone);
// printDetails(); this will throw error

let myorders = [
    { id : 23456, name : 'T-shirt', price : 500 },
    {id :  68486, name : 'Tie', price : 400},
    {id :  19535, name : 'Trouser', price : 1100},
];

console.log(myorders);
console.log(myorders[1].name);

// WAP to filter the orders which are less than 1000

const filOrders = myorders.filter( (obj) => {return obj.price<1000} );
console.log(filOrders);