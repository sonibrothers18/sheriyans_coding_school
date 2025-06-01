//! var let const

//! Hoisting -> variable ko use karna before initialization
// console.log(a);
// var a = 10;

//! Reference([] () {}) and Primitive
// var arr = [10,20];
// var arr_copy = arr; // Reference

// console.log(arr);
// arr_copy.pop();
// console.log(arr);

//! Array -> push, pop, shift, unshift
// var arr_check = [10,20,30,40,50];
// console.log(arr_check);
// arr_check.pop();
// arr_check.push(100);
// arr_check.shift();
// arr_check.unshift(200);
// console.log(arr_check);
// arr_check.splice(2,2);
// console.log(arr_check);

//! Objects -> It means holding a details of single person in a key value pair
//todo ek se jaada bande ki baat ki to hua array, ek bande ke baare mein saari baat ki to hua object
//? blank object
// var table = {};

//? filled object
// var clock = {
//     brand: "citizen", //! property
//     type: "manual",
//     digital: false,
//     year: 2000,
//     working: function(){} //! method
// }

// console.log(clock.brand);
// console.log(clock.year);
// clock.year = 1985;
// console.log(clock.year);