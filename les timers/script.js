// Ne pas faire de cette façon :
// function wait(duration) {
//     const t = Date.now()
//     while (Date.now() - t < duration) {

//     }
// }

// console.log("Bonjour")
// wait(1000)
// console.log("les gens")
// wait(2000)
// console.log("patience")


// Plutôt faire comme ça :
setTimeout(() => {
    console.log("Voici le premier message");
}, 6000);
setTimeout(() => {
    console.log("Voici le second message");
}, 7000);
setTimeout(() => {
    console.log("Voici le troisième message");
}, 8000);

console.log("_________________exercice 1 bonjour 5 fois________________________")
let i = 0;
const t = setInterval(() => {
    i++
    console.log("Bonjour")
    if (i >= 5) {
        clearInterval(t)

    }
}, 1000);

console.log("_________________exercice 2 décompte________________________")
function decompte(n) {
    console.log(n)
    if (n === 0) {
        return
    }
    setTimeout(() => {
        decompte(n - 1)
    }, 1000)
}
decompte(10)