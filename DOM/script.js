//! 4 Pillars of DOM(Document Object Model)
//? Selection of an Element
//? Changing HTML
//? Changing CSS
//? Event Listener

// var a = document.querySelector("h1"); //! element selection
// a.addEventListener("click", function(){ //! event listener
//     a.innerHTML = "Me badal gaya hu"; //! change HTML
//     a.style.color = "red"; //! change CSS
//     a.style.backgroundColor = "#000";
// })

//! "innerHTML" will apply the features also like: <h1>Jai</h1>
//! "textContent" will not apply HTML features like: "<h1>jai</h1>" will written exactly like this, not convert to heading

// var bulb = document.querySelector(".bulb");
// var btn = document.querySelector("button");
// var flag = 0;

// btn.addEventListener("click", function(){
//     if(flag == 0){
//         bulb.style.backgroundColor = "yellow";
//         btn.innerHTML = "OFF";
//         flag = 1;
//     }
//     else{
//         bulb.style.backgroundColor = "transparent";
//         btn.innerHTML = "ON";
//         flag = 0;
//     }
// })

//! querySelectorAll
// var h = document.querySelectorAll("h1"); //! if "All" is not used then only first "h1" will be selected
// console.log(h);
// h.forEach(function(e){
//     console.log(e);
// });
