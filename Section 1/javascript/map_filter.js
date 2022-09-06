// 1. Map is a function of Array
// 2. Map returns a new Array

arr1 = [23, 5, 2, 5, 26, 3];

const newNums = arr1.map( (n) => { return n**2 } );
console.log(newNums);

prices = [100, 99, 4724, 999, 3199];
// prices = ['₹100', '₹99', '₹4724', '₹999', '₹3199']
const newNums2 = prices.map( (x) => { return '₹'+x} );
console.log(newNums2);

const arr2 = [23, 43, 6, 8, 10, 3, 6, 27];
// create a new array where if old element is even divided by 2 and if it is odd multiply it by 2.
// const newNums3 = arr2.map( (p) =>  {
//     if(p%2 == 0){
//         return p/2;
//     }else{
//         return p*2;
//     }
//     })
// console.log(newNums3);

const newNums3 = arr2.map( (p) => (p%2 == 0 ? p/2 : p*2) )
console.log(newNums3);

//  If we put == then it stores even numbers, and if we store != then it stores odd numbers.

const filteredArr2 = arr2.filter( (a) => {return a%2==0} )
console.log(filteredArr2);


