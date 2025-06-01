//! For a single element
// var elem1 = document.querySelector("#elem1");
// var elemImage = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", function(dets){
//     elemImage.style.left = dets.x + "px";
//     elemImage.style.top = dets.y + "px";
// })

// elem1.addEventListener("mouseenter", function(){
//     elemImage.style.opacity = 1;
// })
// elem1.addEventListener("mouseleave", function(){
//     elemImage.style.opacity = 0;
// })
//! ------------------------------------------------------------------------------------------

var elem = document.querySelectorAll(".elem");
// console.log(elem);

elem.forEach(function(val){
    // console.log(val);
    console.log(val.childNodes); //! gives data in a alternate form (see in console i.e. garbageText h1 garbageText image)
})

elem.forEach(function(val){
    val.addEventListener("mousemove", function(dets){
        val.childNodes[3].style.left = dets.x + "px";
        // val.childNodes[3].style.top = dets.y + "px"; //! no need of this here
    })
    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = 1;
    })
    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0;
    })
})