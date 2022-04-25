

function playMusic(selector) {

    const element = document.querySelector(selector); 

    // element sozinho no parâmetro de if é o mesmo que element === null 
    if(element && element.localName === 'audio'){
        element.play()
        console.log("It's work")

    }else{
        console.log('Could not find the element required. Please verify if your input is valid')
    }

   
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
