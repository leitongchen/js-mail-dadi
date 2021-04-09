//genero un numero random per umano
var userNum = Math.ceil(Math.random() * 6);

//genero un numero random per il computer
var aiNum = Math.ceil(Math.random() * 6);

console.log("Questo è il numero random generato per te umano " + userNum);
console.log("Questo è il numero random generato da e per il computer " + userNum);


//condizioni di vittoria 

if (userNum > aiNum) {
    console.log("Umano hai vinto il gioco! Il tuo numero è " + userNum + " mentre il computer ha ottenuto un " + aiNum + ".");

} else if (userNum = aiNum) {
    console.log("Tu e il computer avete pareggiato.");

}
 else {
    console.log("Umano hai perso il gioco! Il tuo numero è " + userNum + " mentre il computer ha ottenuto un " + aiNum);

}
