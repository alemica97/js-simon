//Far visualizzare con un alert 5 numeri casuali
const randomNumber = [];
//inserisco un numero random nell'array finche la sua lunghezza è < 5
do{
    let numberToPush = Math.floor(Math.random() * 100);
    console.log(numberToPush);
    randomNumber.push(numberToPush);
}while(randomNumber.length < 5);
//stampo i 5 numeri in pagina con un alert come da richiesta
alert(randomNumber);
