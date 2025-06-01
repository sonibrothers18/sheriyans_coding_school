//! Differece b/w var, let, const
//? var = used in old js
//?     = function scoped
//?     = adds itself to the window object due to which data leak

//! Window object = js mein kai saare features hai par kuchh features jo hum use karte hai wo features wo nahi hai par fir bhi use kar paate hai kyoki wo features js langauge use kar leti hai window se, aur window hai ek box of features given by browser to use with js

//? let, const = used in new js
//?            = braces scoped
//?            = doesn't adds itself to the window object

// function var_scope(){
//     for(var i=0; i<=10; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// var_scope();

// function let_scope(){
//     for(let i=0; i<=10; i++){
//         console.log(i);
//     }
//     console.log(i); //! give error as let is valid in braces only
// }
// let_scope();

//! Execution Context = execution context matlab jab bhi hum function run karege fnc apna khudka ek imaginary container bana lega jismein uski teen cheeje hogi:
//! 1) variables
//! 2) functions inside that parent fnc
//! 3) lexical environment (use to tell what can be aceess and what not)
//! ye jo imaginary container hai ise hi hum execution context kahte hai

//! Copying reference values
// var arr = [10,20,30,40];
// var arr_copy = [...arr]; //! spread operator

// console.log(arr);
// console.log(arr_copy);
// arr_copy.pop();
// console.log(arr);
// console.log(arr_copy);

//! Copying objects
// var obj = {name: "harsh"};
// var copy_obj = {...obj};

//! Falsy values = 0, false, undefined, null, NaN, document.all
//! Truthy values = all other then falsy values

//! ForEach loop = Works only on array
// var arr = [10,20,30,40,50];

// arr.forEach(function(val){
    //     console.log(val+2);
    // })

//! ForIn loop = Works with objects
// var obj = {
//     name: "Mayur",
//     age: 20,
//     city: "Alwar"
// }

// for(var key in obj){
//     console.log(key, obj[key]);
// }

//! Call Back function

//! First class function = Use function as a value
// var a = function(){console.log("hello");}
// a();
// console.log(a);

// function abcd(a){
//     a();
// }
// abcd(function(){console.log("Mayur");})

//! How arrays are made behind the scene
// var arr = [100,200,300,400]; //! Act as a array but in actual it is object
// console.log(typeof(arr));
// console.log(Array.isArray(arr)); //! For checking it is array or not

//todo behind the scene
//? var arr = {
//?     0:100,
//?     1:200,
//?     2:300,
//?     3:400,
//? }

//todo we can use [-1] aslo
// arr[-2] = 999;
// console.log(arr);

//! Deleting object properties
// var a = {
//     name: "mayur",
//     age: 20
// }

// console.log(a);
// delete a.name;
// console.log(a);