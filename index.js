
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        sound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
    document.addEventListener("keydown", function (event) {

        sound(event.key);
        buttonAnimation(event.key);
        

    });

}
function sound(key) {
    switch (key) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            //document.querySelector(".w").classList.add("pressed");
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            //document.querySelector(".a").classList.add("pressed");
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            //document.querySelector(".s").classList.add("pressed");
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            //document.querySelector(".d").classList.add("pressed");
            break;
        case 'j':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            document.querySelector(".j").classList.add("pressed");
            break;
        case 'k':

            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            //document.querySelector(".k").classList.add("pressed");
            break;
        case 'l':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            //document.querySelector(".l").classList.add("pressed");
            break;
        default:
        // console.log(alert("error"));
    }
}
function buttonAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");
    //  document.querySelector("."+key).classList.remove("pressed");
    // document.querySelector("." + key).style.animationDuration = "3s";
    setTimeout(function(){    document.querySelector("." + key).classList.remove("pressed");}, 100);
}




