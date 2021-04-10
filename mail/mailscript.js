// utente inserisce la sua mail
var userMail = prompt("Gentile membro della famiglia Simpson, inserisci qui la tua mail").toLowerCase().trim();


var accessPermitted = ["homer@simpsons.com", "marge@simpsons.com", "lisa@simpsons.com", "bart@simpsons.com", "maggie@simpsons.com"];


var mailId = "@simpsons.com";

var userInputId = userMail.slice(-13);


if (userMail === "" || userMail === null) {
    //alert("Non hai inserito nulla.");

    document.getElementById("box-message").innerHTML = "Non hai inserito nulla."

} else if (Number(userMail)) {
    //alert("Non è valido inserire solo numeri.")

    document.getElementById("box-message").innerHTML = "Non è valido inserire solo numeri."
    

} else if (userInputId !== mailId) {
    //alert("Non hai inserito un indirizzo mail valido. Sono permessi solo indirizzi mail di tipo " + mailId);

    document.getElementById("box-message").innerHTML = "Non hai inserito un indirizzo mail valido. Sono permessi solo indirizzi mail di tipo " + mailId

} else {

    var mailExist = false;
    
    for (var i = 0 ; i < accessPermitted.length ; i++) {
        
        var singleMail = accessPermitted[i];
    
        if (userMail === singleMail) {
    
            mailExist = true;
    
            // console.log(userMail + " hai avuto accesso alla tua mail. Eri il nr " + (i + 1) + " in lista.")

            document.getElementById("box-message").innerHTML = userMail + "<br> hai avuto accesso alla tua mail. Eri il nr " + (i + 1) + " in lista.";

        }
    }
    if (!mailExist) {
        
        // console.log("La mail che hai inserito non è presente nel database. Inserire una delle seguenti opzioni " + accessPermitted.join(", "));

        document.getElementById("box-message").innerHTML = "La mail che hai inserito non è presente nel database. Inserire una delle seguenti opzioni <br>" + accessPermitted.join(", ");
    }

}
