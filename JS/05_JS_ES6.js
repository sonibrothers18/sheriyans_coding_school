//! Arrow funs 3 types =
//? basic arrow fnc
//? arrow fnc with one parameter
//? arrow fnc with implicit return

// var a = ()=>{
//     console.log("hello");
// };
// a();

// var b = (par)=>{
//     console.log(par);
// };
// b(50);

// var c = ()=> 112; //! return without using return keyword
// console.log(c());

//! Template Literals backtick (``)
// console.log(`hey ${2+2} and ${8-6}`);

//! Default parameters
// function abcd(a, b=2, c=10){
//     console.log(a,b,c);
// }
// abcd(2,5);

//! Spread and Rest =
//? Both have same symbol i.e. (...)

//todo Spread = use hota for copy create karne ke liye
// var a = [10,20,30,40];
// var b = [...a];

//todo Rest = use hota h tab aapko bache huye values ek variable me daalne ho
// function abcd(a, b, c, ...d){
//     console.log(a,b,c,d);
// }
// abcd(1,2,3,4,5,6,7,8,9);

//! Destructuring
//? arrays and objects se data ko bahar nikalna in a variables
// var a = [1,2,3,];
// var [b,,c] = a;
// console.log(`b ${b}, c ${c}`);

// var obj = {name: "mayur", age: 20};
// var {age} = obj; //! can use keyname only(name, age) not a random name(a, x, etc)
// console.log(age);

//! Try and Catch
//? if error occur, display that error in console and continue the flow of program by executing further code
console.log("hey1");
try{
    console.log(hey2);
}
catch(err){
    console.log(err);
}
console.log("hey3");