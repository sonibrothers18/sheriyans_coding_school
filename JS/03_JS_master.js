//! Constructor function
//? normal fnc jismein this ka istemaal ho and aap fnc ko call karte waqt new keyword ka use karein
//? jab aapke paas aisa koi bhi mauka ho ke aapko ek jaisi properties waale abhut saare elements banaane hai us waqt aap constructor fnc use kar sakte ho

// function saanchaOfBiscuit(){
//     this.width = 12;
//     this.height = 22;
//     this.color = "brown";
//     this.taste = "sugary";
// }
// var bis1 = new saanchaOfBiscuit();
// var bis2 = new saanchaOfBiscuit();
// console.log(bis1);

// function remoteButton(color){
//     this.radius = 2;
//     this.color = color;
//     this.icon = false;
//     this.pressable = true;
// }
// var redBtn = new remoteButton("red");
// var greenBtn = new remoteButton("green");
// console.log(redBtn);
// console.log(greenBtn);

//! new Keyword
//? jab bhi new lagta hai humesha ek blank object apne man mein bana lo
// function abcd(){
//     this.age = 12;
// }
// var abcd1 = new abcd;
// console.log(abcd1);

//! iife = immediately invoked function expression
//? iife matlab h function ko turant chalane ki kala, is tareeke se ki hum log koi private variable bana paaye
// (function(){
//     var a = 12;
// })()
// console.log(a); //! console give error, says "a is undefined" because "a" is private

// var ans = (function(){
//     var privateVal = 12;

//     return{
//         getter: function(){ //! By this, we can access private element
//             console.log(privateVal);
//         },
//         setter: function(val){ //! By this, we can change private element
//             privateVal = val;
//         }
//     }
// })()
// ans.getter();
// ans.setter(20);
// ans.getter();

//! Prototype = built-in functions or methods that can be used for our easyness(Ex: .length, etc)

//! Prototype Inheritance
// var human = {
//     canFly: false,
//     canTalk: true,
//     canWalk: true,
//     haveEmotions: true,
//     hasFourLegs: false
// }
// var sheryiansStudent = {
//     canMakeAmazingWebsite: true,
//     canMakeAwesomeAnimations: true,
//     canMakeWorlclassAwwwardedWebsites: true
// }
// sheryiansStudent .__proto__= human;

// console.log(sheryiansStudent.canFly);
// console.log(sheryiansStudent.haveEmotions);

//! this Keyword
//? jab bhi koi cheej {} brackets ke andar nahi hoti to hum use global scope kahte hai
//? koi function agar object ke andar ho to usse method bolte h
// console.log(this); //! print window in console

// function abcd(){
//     console.log(this); //! print window in console
// }
// abcd();

// var a = {
//     name: "mayur",
//     someMethod: function(){
//         console.log(this);
//     }
// }
// a.someMethod(); //! print object
// MORE IN PDF

//! call, apply, bind = agar tumhaare paas koi function hai and koi object hai and tumhe fnc chalana hai aur by default jo this ki value window hai use window naa rakh kar point karwana hai kisi object ki taraf
//? call
// function abcd(){
//     console.log(this);
//     console.log(this.age);
// }
// var obj = {age: 20}
// abcd.call(obj);

// function abcd(val1, val2, val3){
//     console.log(this, val1,val2,val3);
//     console.log(this.age, val1,val2,val3);
// }
// var obj = {age: 20}
// abcd.call(obj,100,200,300);

//? apply = same as call but only difference is that here array is passed
// function abcd(val1, val2, val3){
//     console.log(this, val1,val2,val3);
//     console.log(this.age, val1,val2,val3);
// }
// var obj = {age: 20}
// abcd.call(obj, [100,200,300]);

//? bind = it creates a function and we can use it later anytime
// function abcd(){
//     console.log(this);
//     console.log(this.age);
// }
// var obj = {age: 24}
// // abcd.bind(obj); //! makes the function but don't print
// var bindedFuc = abcd.bind(obj);
// bindedFuc();

//! Pure and Impure functions
//? it should always return same output for same input and does not change global variable

// function abcd(val){ //! Impure function
//     return Math.random()*val;
// }
// var ans1 = abcd(2);
// var ans2 = abcd(2);
// console.log(ans1);
// console.log(ans2);