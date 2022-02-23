//Far visualizzare con un alert 5 numeri casuali
const randomNumbers = [];
//dichiaro un array che verrà riempito con i numeri inseriti dall'utente
const userNumbers = [];
const correctNumbers = [];
let time = 30;
let clock;
//inserisco un numero random nell'array finche la sua lunghezza è < 5
do{
    let numbersToPush = Math.floor(Math.random() * 100);
    console.log(numbersToPush);
    if(!randomNumbers.includes(numbersToPush)){
        randomNumbers.push(numbersToPush);
    }  
}while(randomNumbers.length < 5);

//stampo i 5 numeri in pagina con un alert come da richiesta
// alert(randomNumbers);

/*Sostituisco l'alert, e salvo in una variabile lo span "display-random-numbers" cosi da stampare
in quest'ultimo i numeri random generati dal ciclo */
const displayRandomNumbers = document.querySelector('.display-random-numbers');
console.log(displayRandomNumbers);
displayRandomNumbers.innerHTML = randomNumbers.join(' , ');
//mi salvo il bottone dal DOM
const startButton = document.querySelector('.btn');
console.log(startButton);
//salvo lo span "time"
const displaySeconds = document.querySelector('.time');
// console.log(displaySeconds.innerHTML);
//salvo il titolo in una variabile
const title = document.querySelector('.subtitle');
console.log(title)
//salvo gli input
const inputNumber1 = document.getElementById('number1');
const inputNumber2 = document.getElementById('number2');
const inputNumber3 = document.getElementById('number3');
const inputNumber4 = document.getElementById('number4');
const inputNumber5 = document.getElementById('number5');
//Salvo in una variabile l'elemento che serve a stampare il risultato
const result = document.querySelector('.result');
//Salvo il container per poter modificare classe e far cambiare colore in caso di vittoria o perdita
const numbersContainer = document.querySelector('.numbers');

const inputAction = document.querySelector('.input-action');
//salvo il bottone che inserisce gli input
const inputActionButton = document.querySelector('.input-btn');
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
    inputAction.classList.add('active');
    inputActionButton.addEventListener('click',addUserNumber);
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

function addUserNumber(){
    //prendo i valori degli input e li inserisco in un array
    const input1 = parseInt(inputNumber1.value);
    const input2 = parseInt(inputNumber2.value);
    const input3 = parseInt(inputNumber3.value);
    const input4 = parseInt(inputNumber4.value);
    const input5 = parseInt(inputNumber5.value);
    //Faccio un ciclo che riempie l'array dell'utente e fa dei controlli
    do{
        if(!userNumbers.includes(input1,input2,input3,input4,input5) && 
        !isNaN(input1,input2,input3,input4,input5)){
            userNumbers.push(input1,input2,input3,input4,input5);
        }else{
            alert(`Forse hai già inserito uno di questi numeri, oppure il numero non è valido poiché non è un numero o perché è maggiore di 100`);
        }        
    }while(userNumbers.length < 5);
    console.log(userNumbers);

    //eseguo un ciclo per controllare quali numeri inseriti sono corretti
    randomNumbers.forEach((number) => {
        if(userNumbers.includes(number)){
            correctNumbers.push(number);
            console.log(number);
        }
    });
    inputActionButton.removeEventListener('click',addUserNumber);

    inputAction.classList.remove('active');
    result.classList.add('active');

    if(correctNumbers.length === randomNumbers.length){
        result.innerHTML = `Hai indovinato tutti i numeri !!`
        numbersContainer.classList.add('green');
    }else if(correctNumbers.length > 0 && correctNumbers.length < randomNumbers.length){
        result.innerHTML = `Hai indovinato solo questi numeri: 
                                ${correctNumbers.join(', ')} !!`
        numbersContainer.classList.add('red');
    }else{
        result.innerHTML = `Non hai indovinato nessun numero !!`
        numbersContainer.classList.add('red');
    }
}