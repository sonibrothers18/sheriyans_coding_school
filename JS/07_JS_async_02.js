//! setTimeout -> setTimeout ka code kuch der baad chalta h
// console.log("Hey 1");
// console.log("Hey 2");

// setTimeout(() => {
//     console.log("Hey 3")
// }, 2000);

// console.log("Hey 4");

//! setInterval -> setInterval ka code har interval ke bad chalta h baar baar
// setInterval(() => {
//     console.log("Hello")
// }, 1000);

// var count = 1;
// const intervalCode = setInterval(() => {
//     console.log(count);
//     count++;
//     if(count === 4)
//         //! Used to stop setInterval
//         clearInterval(intervalCode)
// }, 1000);

// ! Fetch API -> ye kisi aur URL par jaa kar kuch data layega, ya data humare paas se us URL par lekar jaayega
// fetch(`https://randomuser.me/api/`) //! fetch data from the URL
// .then(raw => raw.json()) //! converts raw data into readable format
// .then(readable => console.log(readable.results[0].location.country)) //! prints the readable data on console

//! Axios -> same as fetch API but it is developer freindly
//todo no need to use ".then" 2 times
//todo import axios script in html
// axios.get(`https://randomuser.me/api/`)
// .then(result => console.log(result.data.results[0]))

//! Promise
//todo structure-> new Promise(function(resolve, reject){})
// const check = new Promise((resolve, reject)=>{
//     fetch(`https://randomuser.me/api/`)
//     .then(raw=> raw.json())
//     .then(result=>{
//         console.log(result.results[0].gender)
//         if(result.results[0].gender === "male") resolve();
//         else reject();
//     })
// })

// check
// .then(()=> console.log("It is male"))
// .catch(()=> console.log("It is female"))
//? ----------------------------------------------------------------------------

// function dataFetcher(url){
//     const parchi = new Promise(function(resolve, reject) {
//         fetch(url)
//         .then (raw => raw.json())
//         .then (result => {
//             resolve(result);
//         })       
//     })
//     return parchi;
// }

// dataFetcher("https://randomuser.me/api/")
// .then(function(data){
//     console.log(data);
// })

//! Callback
//todo callback ek function hai, jisko pass kiya ho kisi aur funciton mein aur jab wo function chale to aap us pass kiye gaye callback function ko chala paayege
//todo callback functions are usally without name
// function abcd(a, b){
//     b()
// }
// abcd(5, ()=>console.log("hello callback"))
//? ----------------------------------------------------------------------------

// function getData(url, callback){
//     fetch(url)
//     .then(raw=> raw.json())
//     .then(result=> callback(result))
// }

// getData(`https://randomuser.me/api/`, (result)=>{
//     console.log(result.results[0].name.first, result.results[0].gender, result.results[0].email)
// })

//! Async Await
//todo await pauses code execution inside an async function until the Promise is settled.
//todo Code after await will not run until it gets a value or throws an error.
//todo make asynchronus code act like synchronus

async function dataFetcher(url) {
    let data = await fetch(url);
    let result = await data.json();
    return result;
}

async function hh() {
    let data = await dataFetcher("https://randomuser.me/api/");
    console.log(data);
}
hh()

//! Generators
//! Web Workers