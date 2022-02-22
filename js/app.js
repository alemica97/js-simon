//Far visualizzare con un alert 5 numeri casuali
const randomNumbers = [];
//inserisco un numero random nell'array finche la sua lunghezza è < 5
do{
    let numbersToPush = Math.floor(Math.random() * 100);
    console.log(numbersToPush);
    randomNumbers.push(numbersToPush);
}while(randomNumbers.length < 5);

//stampo i 5 numeri in pagina con un alert come da richiesta
// alert(randomNumbers);

/*Sostituisco l'alert, e salvo in una variabile lo span "display-random-numbers" cosi da stampare
in quest'ultimo i numeri random generati dal ciclo */
const displayRandomNumbers = document.querySelector('.display-random-numbers');
console.log(displayRandomNumbers);
displayRandomNumbers.innerHTML = randomNumbers;
//mi salvo il bottone dal DOM
const startButton = document.querySelector('.btn');
console.log(startButton);
//salvo lo span "time"
const displaySeconds = document.querySelector('.time');
// console.log(displaySeconds.innerHTML);
//salvo il titolo in una variabile
const title = document.querySelector('.title');
console.log(title)

//dichiaro un array che verrà riempito con i numeri inseriti dall'utente
const userNumbers = [];
const correctNumbers = [];
let time = 30;
let clock;


//cliccando sul bottone evoco la funzione start che a sua volta evoca le timing function
startButton.addEventListener('click',start);

function start(){

    displayRandomNumbers.classList.add('active');
    title.classList.add('active');
    startButton.classList.add('active');

    clock = setInterval(secondsInterval, 1000);
    //adesso faccio partire una funzione che chiede i numeri all'utente, con un ritardo di 30sec.
    //uso un timeout per far invocare la funzione in ritardo
    setTimeout(askNumbers, 30500);

};

function askNumbers(){
    do{
        let userNumbersToPush = parseInt(prompt('Vediamo se ti ricordi i 5 numeri che ti ho mostrato:'));
        console.log(userNumbersToPush);
        if(!userNumbers.includes(userNumbersToPush) && !isNaN(userNumbersToPush) && userNumbersToPush <= 100){
            userNumbers.push(userNumbersToPush);
        }else{
            alert(`Forse hai già inserito ${userNumbersToPush}, oppure il numero non è valido poiché non è un numero o perché è maggiore di 100`);
        }        
    }while(userNumbers.length < 5);
    console.log(userNumbers);
    //eseguo un ciclo per controllare quali numeri inseriti sono corretti
    randomNumbers.forEach((number) => {
        if(userNumbers.includes(number)){
            correctNumbers.push(number);
        }
    });
    console.log('Hai indovinato questi numeri:', correctNumbers);
};

function secondsInterval(){
    time--;
    if(time === 0){
        clearInterval(clock);
        displaySeconds.classList.add('active');
    }else{
        displaySeconds.innerHTML = time;
    }
};