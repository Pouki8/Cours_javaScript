console.log("_________Les fonctions_________________")

const ageInput = document.querySelector(".age");
const paysInput = document.querySelector(".pays");
const result = document.getElementById("result");
const resultA = "Vous pouvez conduire";
const resultB = "Vous ne pouvez pas conduire";

function canDrive() {
    const age = parseInt(ageInput.value);
    const pays = paysInput.value.toLowerCase();
    if (
        (age >= 18 && pays === "france") ||
        (age >= 16 && pays === "usa")
    ) {
        return result.innerText = resultA;
    } else {
        return result.innerText = resultB;
    }

}
document.getElementById("calcul").addEventListener("click", canDrive);


function add(a, b) {
    return a + b
}
console.log(add(5, 4));


// On crée un nombre entre 0 et 10
// 3 essaie pour deviner le mot
// isRight(n)
// guess()

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1))
}
const solution = getRandomInt(10)
console.log(solution)


function isRight(n) {
    return solution === n
}

console.log("______________________exercice devine le nombre________________")

function guess() {
    const number = prompt(`Entrez un chiffre : `) * 1
    return isRight(number)
}
for (i = 0; i < 3; i++) {
    if (guess()) {
        console.log("Bravo")

        break;
    } else if (i === 2) {
        console.log("Vous avez perdu")

    }
}



console.log("___________exercice nombre paire_____________________")

function isPremier(n) {
    if (n < 2) {
        return false
    }
    for (let i = n - 1; i > 1; i--) {
        // console.log(i)
        if (n % i === 0) {
            return false
        }
    }
    return true
}
console.log("0 est " + isPremier(0))
console.log("1 est " + isPremier(1))
console.log("2 est " + isPremier(2))
console.log("3 est " + isPremier(3))
console.log("11 est " + isPremier(11))
console.log("12 est " + isPremier(12))


