

console.log("____________exercice 1 les erreurs___________________")
class Rectangle {
    constructor(hauteur, largeur) {
        // Pour générer une réponse d'erreur
        if (hauteur <= 0 || largeur <= 0) {
            let e = new Error("Impossible d'avoir une forme avec des dimensions négatives")
            throw e
        }
        this.name = "Rectangle";
        this.hauteur = hauteur;
        this.largeur = largeur;
    }

    get perimeter() {
        return (this.hauteur + this.largeur) * 2
    }

    get isValid() {
        return this.largeur > 0 && this.hauteur > 0
    }

    isBiggerThan(shape) {
        return this.perimeter > shape.perimeter
    }

}

class Square extends Rectangle {
    constructor(largeur) {
        super(largeur, largeur)
    }
}

function promptRectangle() { }

// Prendre en charge les erreurs :
try {
    const largeur = parseInt(prompt("largeur : "), 10)
    const hauteur = parseInt(prompt("hauteur : "), 10)
    const r3 = new Rectangle(largeur, hauteur)
    console.log(r.perimeter)
} catch (e) {
    console.log("Impossible d'avoir des dimenssions négatives")
}





const r = new Rectangle(10, 20);
console.log(r.perimeter) // 60
console.log(r.isValid) // true


const c = new Square(10);
console.log(c.perimeter) // 40
console.log(r.isBiggerThan(c)) // true


