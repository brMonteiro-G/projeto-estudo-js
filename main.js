alert("Hello world");

function playMusic(idMusicKeyboard) {
    document.querySelector(idMusicKeyboard).play();

}


const listOfKeyboards = document.querySelectorAll('.tecla');

//precio criar um evento de click que pegue dinamicamente o id do teclado e reproduza o som 

let counter = 0; 

while(counter < listOfKeyboards.length){

    const keyboardKey = listOfKeyboards[counter];
    const instrument  = keyboardKey.classList[1];
    //template string
    const idAudio = `#som_${instrument}`;


    console.log(instrument)
    console.log(idAudio)

    keyboardKey.onclick = function (){
        playMusic(idAudio);
    }

    counter = counter + 1;

}