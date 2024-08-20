// Boucle while
let i = 0;

while (i < 10) {
    console.log("bonjour")
    i = i + 1
}

console.log("_________Exemple suivant boucle for___________")
// Boucle for
const notes = [12, 13, 16, 8]
console.log("const notes = [12, 13, 16, 8]")

for (let n = 0; n < notes.length; n++) {
    console.log("length (emplacement) => [n] = " + [n]);
}
for (let n = 0; n < notes.length; n++) {
    console.log("la note => notes[n] =  " + notes[n]);
}

console.log("_________Exemple suivant___________")

console.log("const note = {a: 1,b: 2}");
// autre exemple
const note = {
    a: 1,
    b: 2
}
for (let d in note) {
    console.log("l'emplacement => d = " + d);
}
for (let d in note) {
    console.log("les notes => note[d] = " + note[d])
}

console.log("_____________exemple for of uniquement les tableaux______________")
console.log('const person = {firstName: "John",lastName: "Doe"}')
const person = {
    firstName: "John",
    lastName: "Doe"
}

for (let note of notes) {
    console.log(note)
}
console.log("____________________________")
const greeting = "Bonjour"
for (let letter of greeting) {
    console.log("chaque lettre : " + letter)
}
for (let letter in greeting) {
    console.log("emplacement des lettres : " + letter)
}

let chiffre = prompt("Entrez un chiffre :")
if (chiffre > 10 || chiffre < 0) {
    console.log("Le nombre n'est pas entre 0 et 10")
} else {
    while (chiffre >= 0) {
        console.log(`${chiffre} est entre 0 et 10`)
        chiffre--
    }
}

let nombre = prompt("Entrez un nombre : ")
if (nombre > 10 || nombre < 0) {
    console.log("Le nombre n'est pas entre 0 et 10")
} else {
    for (let i = nombre; i >= 0; i--) {
        console.log(i)
    }
}

console.log("_______________")
let guess = 8;
let devine
while (devine !== guess) {
    devine = prompt('Saisissez un chiffre : ') * 1
    if (devine < guess) {
        console.log("c'est plus !")
    } else if (devine > guess) {
        console.log("c'est moins !")
    }
}
console.log("c'est gagné !")

console.log("_______________")
let mystere = 8;
let devinette
while (true) {
    devinette = prompt('Saisissez un chiffre : ') * 1
    if (devinette < guess) {
        console.log("c'est plus !")
    } else if (devinette > guess) {
        console.log("c'est moins !")
    } else {
        break
    }
}
console.log("c'est gagné !")