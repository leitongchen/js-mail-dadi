// utente inserisce la sua mail
var userMail = prompt("Gentile membro della famiglia Simpson, inserisci qui la tua mail").toLowerCase();
userMail 
var accessPermitted = ["homer@mail.com", "marge@mail.com", "lisa@mail.com", "bart@mail.com", "maggie@mail.com"];

// console.log("La mail inserita è " + userMail + ". L'accesso è permesso ai seguenti utenti " + accessPermitted);


if (userMail === "" || userMail === null) {
    console.log("Non hai inserito nulla.");

} else {

    var mailExist = false;
    
    for (var i = 0 ; i < accessPermitted.length ; i++) {
        
        var singleMail = accessPermitted[i];
    
        if (userMail === singleMail) {
    
            mailExist = true;
    
            console.log(userMail + " hai avuto accesso alla tua mail. Eri il nr " + (i + 1) + " in lista.")
        }
    }
    if (!mailExist) {
        console.log("La mail che hai inserito non è presente nel database. Inserire una delle seguenti opzioni " + accessPermitted.join(", "));
    }

}
