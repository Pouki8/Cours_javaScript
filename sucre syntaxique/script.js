console.log("_____________________sucre syntaxique________________________")

let i = 0;
console.log("i : " + i);

let a = i++;
console.log("a = i++ : " + a) // = 0 car les ++ sont après le i donc i donnera 1 après?Z
let b = ++i;
console.log("b = ++i : " + b) // = 2 car les ++ sont écrit avant le i donc i + i d'avance
let c = i++;
console.log("c = i++ : " + c) // ça donne 2 comme pour le a quand les ++ sont écrit après le i


// Pour écrire une fonstion, on peut l'écrire comme ceci
function multiplierParDeux(n) {
    return n * 2
}
console.log(multiplierParDeux(2))
// ou comme cela
const double = n => n * 2; // ou const double = (n) => n * 2
console.log(double(2))

// 
const x = 3;
const y = x || 5;
console.log(y); // la réponse est 3 car true, si x = 0 alors la réponse retourné serait 5 car 0 est 
// considéré comme false

/* On met un point d'interrogation si le job est défini dans cet exemple */
const person = { firstname: "John", job: { name: "Boulanger" } }
console.log(person.job?.name)
const person2 = { firstname: "John", lastname: "Doe", age: 8 }
console.log(person2?.age?.toString())

const notes = [12, 17, 18]
const firstNote = notes[0];
const twoNote = notes[1];
console.log(firstNote, twoNote)
/* ou */ const [premiereNote, secondeNote] = [12, 17, 18]
console.log(premiereNote, secondeNote);
/* ou */ const [premierNote, ...autreNotes] = [12, 17, 18, 19]
console.log(premierNote, autreNotes)
// exemple d'une person
const { firstname: prenom } = {
    firstname: "John",
    lastname: "Doe",
    age: 18
}
console.log(prenom);
// ou
const { firstname, lastname } = {
    firstname: "Jane",
    lastname: "Doe",
    age: 18
}
console.log(firstname, lastname)
// ou
const { firstName, ...rest } = {
    firstName: "Emma",
    lastName: "Doe",
    age: 16
}
console.log(firstName, rest)
// Mettre des valeur par défaut, exemple power
function pow(n, power = 2) {
    return n * power
}
pow(3);
console.log(pow(3)); // réponse 6
console.log(pow(3, 5)); // réponse 15

const age = 18;
let message
if (age >= 18) {
    message = "majeur"
} else {
    message = "mineur"
}
console.log(age + " ans, la personne est " + message)
// ou Pour faire une condition "?" alors ":" sinon
const year = 18;
console.log(year >= 18 ? "majeur" : "mineur")
