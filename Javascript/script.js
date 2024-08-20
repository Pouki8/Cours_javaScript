// permet de récupérer dans un input la données saisie dans l'interface
const ageInput = document.getElementById("age");
const result = document.querySelector(".result");
const a = "Film conseillé est Lilo et Stitch.";
const b = "Film conseillé est Matrix.";
const c = "Vous pouvez aller voir Evil Dead."


function verifierAge() {
    const age = parseInt(ageInput.value);
    if (age <= 13) {
        result.innerText = a;
        console.log(a);
    } else if (age >= 18) {
        result.innerText = c;
        console.log(c);
    } else {
        result.innerText = (`La réponse est : ${b}`);
        console.log(b);
    };

}

document.getElementById("calcul").addEventListener("click", verifierAge);

