//! Sync matlab ek ke baad dusra hoga, jab tak ek command complete naa ho, dusra shuru nahi hoga
//! Async matlab saare kaam ek saath shuru kardo, jiska answer pahle aajaye uska jawaab de dena

//! kai baar aapka final code depended hota hai kisi aur ke server par, is case mein humein nahi pata hota ki answer uske server se kab laut kar aayega, to hum kya nahi kr skte is writing sync code, isse nipatne ke liye hum log async code likh dete hai taaki blocking naa ho and jab bhi answer aaye humara answer ke respect mein chalne waala coderchal jaaye

//! async code ka main motive hota hai ki un cases mein jinmein hume pata nahi code ka answer kitni der mein aayega to jab bhi answer aa jaaye uske answer ke respect mein koi particular code chala dena

//! facebook se photo laao aur jab photo aajaaye show kar dena

//! Sync commands directly goes to MS(main stack) and Async first goes to SS(side stack) and after the completion goes to MS
//! At first, all MS commands will run and than SS commands starts shifting to the MS

//! JS is Sync

//! callback fnc ek essa fnc hota h jo async code ke completion hone ke bad chalta h

//! Async code likhne ke liye =
//? fetch
//? XMLHttpRequest
//? axios
//? Promise
//? setTimeout
//? setInterval

//! Async code ka ans chalane ke liye =
//? callbacks
//? then catch
//? async await

//! Promise have 3 states =
//? Pending 
//? Resolved
//? Reject
//! Promise always takes a function

//! if promise is resolved it goes to then, if rejected it goes to catch

// var ans = new Promise((resolve, reject) => {
//     if(true){
//         return resolve();
//     }
//     else{
//         return reject();
//     }
// })

// ans.then(function(){
//     console.log("Resolve hogaya tha");
// })
// .catch(function(){
//     console.log("Reject hua tha");
// })
//? ------------------------------------------------------------

// var ans = new Promise((resolve, reject) => {
//         var n = Math.floor(Math.random()*10);
//         console.log(n);
//         if(n<5){
//             return resolve();
//         }
//         else{
//             return reject();
//         }
//     })

// ans.then(function(){
//     console.log("Below");
// })
// .catch(function(){
//     console.log("Above");
// })
//? ------------------------------------------------------------

//! Promise Chaining
// var p1 = new Promise((resolve, reject) => {
//     return resolve("1. Sabse pahele ghar jao");
// })

// var p2 = p1.then(function(data){
//     console.log(data);
//     return new Promise((resolve, reject) => {
//         return resolve("2. Gate kholo");
//     })
// })

// var p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise((resolve, reject) => {
//         return resolve("3. Khana khao");
//     })
// })

// p3.then(function(data){
//     console.log(data);
// })

//! Async Await =
//? koi bhi esa function jisme aap async code likhege, kyoki async code hai to aap promises ka istemaal kar sakte hai, jab uska answer aayega aapko then lagana padega, us then ko lagaane se bachne ke liye, aap async await ka istemaal kar sakte hai.

//! It does not like nested if else it is a chain(if one of the then is rejected it goes to catch directly)
// function abcd(){
//     fetch(`https://randomuser.me/api/`)
//         .then(function(raw){
//             return raw.json(); //! convert data into readable format
//         })
//         .then(function(data){
//             console.log(data);
//         })
//         .catch(function(){
//             console.log("Server se data nahi aaya, Problem h");
//         })
// }
// abcd();

//? jab bhi koi code async hai to aapko uske liye wait karna padta hai kyoki humein nahi pata uska answer kab aayega

//todo "then" is replaced by await and make our code short
async function abcd(){
    let raw = await fetch(`https://randomuser.me/api/`);
    let ans = await raw.json(); //! await is used because raw is waiting for data, so after getting data this line should be run. If not used await, give "Promise Pending" in console
    console.log(ans); //! this line won't execute as ans is in SS(side stack) and waiting for ans and than it will run
}
abcd();
