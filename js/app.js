//Far visualizzare con un alert 5 numeri casuali
const randomNumbers = [];
//inserisco un numero random nell'array finche la sua lunghezza è < 5
do{
    let numbersToPush = Math.floor(Math.random() * 100);
    console.log(numbersToPush);
    randomNumbers.push(numbersToPush);
}while(randomNumbers.length < 5);
//stampo i 5 numeri in pagina con un alert come da richiesta
alert(randomNumbers);


//dichiaro un array che verrà riempito con i numeri inseriti dall'utente
const userNumbers = [];
const correctNumbers = [];
//adesso faccio partire una funzione che chiede i numeri all'utente, con un ritardo di 30sec.
function askNumbers(){
    do{
        let userNumbersToPush = parseInt(prompt('Vediamo se ti ricordi i 5 numeri che ti ho mostrato:'));
        console.log(userNumbersToPush);
        userNumbers.push(userNumbersToPush);
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
//uso un timeout per far invocare la funzione in ritardo
setTimeout(askNumbers, 300);


