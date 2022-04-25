alert("Hello world");

function playMusic(idMusicKeyboard) {
    document.querySelector(idMusicKeyboard).play();
    console.log("It's work")

}


const listOfKeyboards = document.querySelectorAll('.tecla');

//precio criar um evento de click que pegue dinamicamente o id do teclado e reproduza o som 



for(let counter = 0;  counter < listOfKeyboards.length; counter++){
// \counter vai ter escopo local/

    const keyboardKey = listOfKeyboards[counter];
    const instrument  = keyboardKey.classList[1];
    const idAudio = `#som_${instrument}`;  //template string


    // console.log(instrument)
    // console.log(idAudio)

    keyboardKey.onclick = function (){
        playMusic(idAudio);
    }

        keyboardKey.onkeydown = function(event) {
            console.log(event.code)
            if(event.code === 'Space' || event.code === 'Enter'){
                keyboardKey.classList.add('ativa')
            }
        } 
    
    keyboardKey.onkeyup = function() {
        keyboardKey.classList.remove('ativa')
    }

}
