
let buttons = document.getElementsByClassName("key");

window.addEventListener('keydown', onKeyPress);

function playAudio(target){
    const audio = document.querySelector(`audio[data-key = "${target}"]`)
    audio.currentTime = 0;
    audio.play();
}

function onKeyPress(event){

    const key = document.querySelector(`.key[data-key = "${event.keyCode}"]`)
    playAudio(event.keyCode);

    key.classList.add('playing');
    setTimeout(() => {
        key.classList.remove("playing");
    }, 200);
    
}


function clickFunction(event){
    let element = event.currentTarget;
    const ch = event.srcElement.innerText;
    console.log(ch.charCodeAt(0))
    console.log(event.srcElement.innerText);

    playAudio(ch.charCodeAt(0));

    console.log(element.classList.add('playing'));
    setTimeout(() => {
        element.classList.remove("playing");
    }, 200);

}

for(let i = 0; i < buttons.length; i++){

    buttons[i].addEventListener("click", clickFunction);

}
