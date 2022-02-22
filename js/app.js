//Far visualizzare con un alert 5 numeri casuali
const randomNumbers = [];
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
//salvo gli input
const inputNumber1 = document.getElementById('number1');
const inputNumber2 = document.getElementById('number2');
const inputNumber3 = document.getElementById('number3');
const inputNumber4 = document.getElementById('number4');
const inputNumber5 = document.getElementById('number5');

const inputAction = document.querySelector('.input-action');
//salvo il bottone che inserisce gli input
const inputActionButton = document.querySelector('.input-btn');

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
    inputActionButton.addEventListener('click',addUserNumber);
    inputAction.classList.add('active');
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
    const input1 = inputNumber1.value;
    const input2 = inputNumber2.value;
    const input3 = inputNumber3.value;
    const input4 = inputNumber4.value;
    const input5 = inputNumber5.value;

    userNumbers.push(input1);
    userNumbers.push(input2);
    userNumbers.push(input3);
    userNumbers.push(input4);
    userNumbers.push(input5);
    // do{
    //     if(!userNumbers.includes(input1,input2,input3,input4,input5) && 
    //     !isNaN(input1,input2,input3,input4,input5)){
    //         userNumbers.push(input1,input2,input3,input4,input5);
    //     }else{
    //         alert(`Forse hai già inserito ${input1}, oppure il numero non è valido poiché non è un numero o perché è maggiore di 100`);
    //     }        
    // }while(userNumbers.length < 5);
    console.log(userNumbers);
    //eseguo un ciclo per controllare quali numeri inseriti sono corretti
    for(let i = 0; i < userNumbers.length; i++){
        console.log(userNumbers[i]);
        console.log(randomNumbers);
        console.log(correctNumbers);
        if(randomNumbers.includes(userNumbers[i])){
            correctNumbers.push(userNumbers[i]);
        }
    };
    // randomNumbers.forEach((number) => {
    //     if(userNumbers.includes(number)){
    //         correctNumbers.push(number);
    //         console.log(number);
    //     }
    // });
    
    console.log('Hai indovinato questi numeri:', correctNumbers);
    inputActionButton.removeEventListener('click',addUserNumber);
}