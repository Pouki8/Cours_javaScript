const moyenne = (notes) => {
    let sum = 0
    // Par chaque notes
    for (let note of notes) {
        // faire la somme
        sum = sum + note
    }
    // puis diviser par le nombre de notes
    return sum / notes.length
}

// Faire une class comme dans typeScript d'Angular
class Student {
    ecole = "Jules Ferry"


    // le constructeur qui établie les données de l'étudiant (nom et prénom de l'étudiant)
    constructor(firstname, lastname) {
        this.firsname = firstname
        this.lastname = lastname
    }

    // Faire un set pour utiliser notes dans une méthode
    setNotes(notes) {
        this.notes = notes
    }

    // Faire un get pour pouvoir récupérer le nom et prénom de l'élève uniquement
    get name() {
        return `${this.firsname} ${this.lastname}`
    }


    static moyenne = 10    // On récupère cette valeur avec un Student.moyenne
    // Méthode pour la moyenne est supérieur à 10 avec le Student.moyenne ainsi que
    //  this.notes du setNotes
    canPass() {
        return moyenne(this.notes) >= Student.moyenne
    }

}

// Permet d'avoir une extension de la class Student et de modifier des paramètre 
// ou méthode comme canPass, du coup john passe même si il n'a pas la moyenne
class SuperStudent extends Student {

    constructor(firsname, lastname, notes) {
        // utilisation de super pour récupérer les données de Student
        super(firsname, lastname)
        // ajout de notes en récupérant notes de Student = notes (nouvelle donnée)
        this.notes = notes
    }

    get name() {
        return "Super " + super.name  // super permet de reprendre les données du parent class Student
    }

    canPass() {
        return true
    }
}

// Ajouter un étudiant de cette façon avec le nom et prénom du constructeur
const john = new SuperStudent("John", "Doe", [1, 0, 3, 11, 2])
const jane = new Student("Jane", "Doe")
// 2 façon d'écrire des tableau de notes du setNotes
// john.notes = [19]
jane.setNotes([10, 9, 8, 11])
// console.log pour récupérer les données des élèves
console.log(john, jane)
// Afficher si ils ont la moyenne ou pas
console.log("john : " + john.canPass() + " et jane : " + jane.canPass())
// Afficher les noms et prénoms de l'élève grâce au get
console.log(john.name)
console.log(jane.name)

