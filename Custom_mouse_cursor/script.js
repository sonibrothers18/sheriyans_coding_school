var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function(dets){
    //! Give details about the mouse cursor movement
    console.log(dets);
    console.log(`X axis ${dets.x}`);
    console.log(`Y axis ${dets.y}`);

    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})