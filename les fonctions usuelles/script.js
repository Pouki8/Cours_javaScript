console.log("________________les fonctions usuelles_______________________")
console.log("Les tableaux (Array)")

// Le .filter permet de récupérer les notes égal ou supérieur à 10 par exemple (dans cet exemple)
const notes = [12, 17, 18, 2, 10];
const goodNotes = notes.filter((note) => note >= 10);
console.log(goodNotes);
// ou récupérer les mots qui ont plus de 6 lettres par exemple
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);

// Le .find permet de récupérer le premier élément qui correspond à la condition :
//  en dessous de 10 par exemple
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found);
// ou
const mots = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const found2 = mots.find((element) => element.length > 6);
console.log(found2)

// La méthode findIndex() renvoie l'index du premier élément du tableau
// qui satisfait une condition donnée par une fonction.
const array2 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
//  ou
const mots2 = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const foundIndex = mots.findIndex((element) => element.length > 6);
console.log(foundIndex)

//  Il existe aussi de findLas() et le findLastIndex() en partant de la fin

// Concaténation
const array4 = ['a', 'b', 'c'];
const array5 = ['d', 'e', 'f'];
const array6 = array4.concat(array5);
console.log(array6);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

// .from()
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

// include() Est-ce bien inclu dans le tableau ?
const array7 = [1, 2, 3];
console.log(array1.includes(2));
// Expected output: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// Expected output: true
console.log(pets.includes('at'));
// Expected output: false

// .join() permet de mettre un caractère de liaison
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// Expected output: "Fire,Air,Water"
console.log(elements.join(''));
// Expected output: "FireAirWater"
console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

//  .map((x) => x * 2) permet de créer un nouveau tableau avec les résultats de 
// l'appel d'une fonction fournie sur chaque élément du tableau appelant
const array8 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array8.map((x) => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]

const persons = [
    { firstname: "John", lastname: "Doe" },
    { firstname: "Jane", lastname: "Doe" },
    { firstname: "Marc", lastname: "Doe" },
    { firstname: "Manon", lastname: "Doe" },
]
console.log(
    persons.map((p) => p.firstname + " " + p.lastname)
        .join("\n")
)

// .pop() supprime le dernier élément
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants)
console.log(plants.pop());
// Expected output: "tomato"
console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

// .push permet d'ajouter un nouvelle élément dans le tableau
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]
animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

// .reduce()
const notes2 = [12, 17, 18, 2, 10];
console.log(
    notes2.reduce((acc, note) => {
        return acc + note
    }, 0)
)

// .slice() permet de consservé le tableau d'origine sans le modifier
const animals2 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals2.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]
console.log(animals2.slice(2, 4));
// Expected output: Array ["camel", "duck"]
console.log(animals2.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals2.slice(-2));
// Expected output: Array ["duck", "elephant"]
console.log(animals2.slice(2, -1));
// Expected output: Array ["camel", "duck"]
console.log(animals2.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//  .splice permet d'ajouter ou de modifier un tableau en choisissant l'emplacement
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// .unshift permet d'ajouter des éléments comme .push() mais au début du tableau
const array9 = [1, 2, 3];
console.log(array9.unshift(4, 5));
// Expected output: 5
console.log(array9);
// Expected output: Array [4, 5, 1, 2, 3]

// .keys et .values
const person = { firstname: 'John', lastname: 'Doe' };
console.log(Object.values(person));
console.log(Object.keys(person));

// .apply()
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
console.log(max);
// Expected output: 7
const min = Math.min.apply(null, numbers);
console.log(min);
// Expected output: 2

// .call()
function Product(name, price) {
    this.name = name;
    this.price = price;
}
function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}
console.log(new Food('cheese', 5).name);
// Expected output: "cheese"
