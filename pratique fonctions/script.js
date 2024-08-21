console.log("________________exercice 1_____________________")
function isPalindrome(word) {
    const reversedWord = word
        .split("")
        .reverse()
        .join("")
    return word.toUpperCase() === reversedWord.toUpperCase()

}

console.log("Bonjour")

// const words = {
//     kayak: true,
//     SOS: true,
//     Kayak: true,
//     Bonjour: false,
// }

console.log(isPalindrome('kayak')) // true
console.log(isPalindrome('SOS')) // true
console.log(isPalindrome('Kayak')) // true
console.log(isPalindrome('Bonjour')) // false

console.log("________________exercice 2_____________________")
const students = [
    {
        name: 'John',
        notes: [1, 20, 18, 19, 12]
    },
    {
        name: 'Jane',
        notes: [17, 18, 20, 13, 15]
    },
    {
        name: 'Sophie',
        notes: [17, 12, 14, 15, 13]
    },
    {
        name: 'Marc',
        notes: [2, 3, 5, 8, 9]
    },
    {
        name: 'Manon',
        notes: [18, 17, 18, 19, 12]
    }
]

//  fonction pour faire la moyenne de chaque étudiant
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

// Comapraison de la moyenne de chaque étudiant
const compareStudent = (a, b) => {
    return b.moyenne - a.moyenne
}
// pour chaque étudiant, la moyenne étudiant est égal à la (fonction :) moyenne de notes de chaque étudiant
for (let student of students) {
    student.moyenne = moyenne(student.notes)
    student.worst = Math.min(...student.notes)
    student.best = Math.max(...student.notes)
}

students.sort(compareStudent)

const formatStudent = (student) => {
    return `${student.name} avec une moyenne de : ${student.moyenne}, sa meilleure note est : ${student.best} et sa pire notes est : ${student.worst}`
}

console.log(`Top 3 étudiant 1 : ${formatStudent(students[0])}
2 : ${formatStudent(students[1])}
3 : ${formatStudent(students[2])}`)

console.log("_______________exercice 3_______________________")
const phrase = `Demain, dès l'aube, à l'heure où blanchit la campagne,
Je partirai. Vois-tu, je sais que tu m'attends.
J'irai par la forêt, j'irai par la montagne.
Je ne puis demeurer loin de toi plus longtemps.

Je marcherai les yeux fixés sur mes pensées,
Sans rien voir au dehors, sans entendre aucun bruit,
Seul, inconnu, le dos courbé, les mains croisées,
Triste, et le jour pour moi sera comme la nuit.

Je ne regarderai ni l'or du soir qui tombe,
Ni les voiles au loin descendant vers Harfleur,
Et quand j'arriverai, je mettrai sur ta tombe
Un bouquet de houx vert et de bruyère en fleur.`

const frequencies = {}
const words = phrase
    .toLowerCase()
    .split(" ")
for (let word of words) {
    if (word !== "" && word.length >= 3) {
        if (frequencies[word]) {
            frequencies[word]++
        } else {
            frequencies[word] = 1
        }
    }
}
const frequenciesArray = []
for (let k in frequencies) {
    frequenciesArray.push({
        word: k,
        count: frequencies[k]
    })
}

frequenciesArray.sort((a, b) => b.count - a.count)


console.log(phrase)
console.log(words)
console.log(frequencies)
console.log(frequenciesArray)
console.log(`Les mots les plus fréquents sont "${frequenciesArray[0].word}" ${frequenciesArray[0].count} fois`)