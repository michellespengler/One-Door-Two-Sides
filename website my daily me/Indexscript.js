//intro video
let introVideo = document.querySelector("#introVideo")
if (introVideo!= null) {
    introVideo.addEventListener("ended",function() {
        introVideo.style.display = "none";
        document.querySelector(".twoDoors").style.display = "grid";
    })
}

// Video going in
document.querySelector(".doorIn").addEventListener("click",function() {
    document.querySelector(".going_inside").style.display = "grid";
    document.querySelector(".going_inside").play();
})
document.querySelector(".going_inside").addEventListener("ended",function() {
    window.location.href = 'Inside.html';
})
// Video going out
document.querySelector(".doorOut").addEventListener("click",function() { //click
    document.querySelector(".going_outside").style.display = "block"; //como se ve
    document.querySelector(".going_outside").play();//video
})
document.querySelector(".going_outside").addEventListener("ended",function() {
    window.location.href = 'outside.html';   
})

