var rect = document.querySelector("#center");
console.log(rect.getBoundingClientRect()); //! gives the position details about rect

rect.addEventListener("mousemove", function(dets){
    var rectangleLocation = rect.getBoundingClientRect();
    console.log(dets.x - rectangleLocation.left);
    var insideRecVal = dets.x - rectangleLocation.left;

    if(insideRecVal < rectangleLocation.width/2){
        console.log("left");
    }
    else{
        console.log("right");
    }

})