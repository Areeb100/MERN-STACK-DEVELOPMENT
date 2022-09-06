const nums = [34, 67, 12, 45, 90, 56, 'nice'];

console.log(nums);
console.log(typeof(nums));


const fruits = ['apple', 'banana', 'mango', 'orange', 'pineapple'];

// indexing - accessing a single element
console.log(fruits[4]);

// slicing - accessing multiple element

console.log(fruits.slice(1, 4));

// this will give all the elements to end
console.log(fruits.slice(1));

// this will give all the elements to end
console.log(fruits.slice(1, 10));

// this will give
console.log(fruits[100]);

// removing elements
fruits.splice(3, 2);
console.log(fruits);

// adding new elements
fruits.push('cherry');
console.log(fruits);

fruits.pop();
console.log(fruits);

// traverse using index
console.log('----traverse using index----');
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// traverse using for-of loop
console.log('----traverse using for-of loop----');
for(let fr of fruits){
    console.log(fr);
}

// traverse using for-each function
console.log('----traverse using for-each function');
fruits.forEach((element) => {
    console.log(element);
});

// MAP

const numbers = [2, 5, 7, 3, 5, 4, 3];

// WAP to square each number in above array and store them in array

let newNums = [];
for(let i of numbers){
    newNums.push(i*i);
}
console.log(newNums);