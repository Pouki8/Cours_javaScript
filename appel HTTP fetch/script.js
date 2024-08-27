console.log("______________appel http Récupérer les infos de json_______________")
/* Récupération du json */
fetch('https://jsonplaceholder.typicode.com/users/?_limit=8')
    .then(r => r.json())
    .then(body => console.log(body))

console.log("_________appel http Récupérer les infos de json fonction asynchrone____________")
/* fonction asynchrone */
async function fetchUsers() {
    const r = await fetch('https://jsonplaceholder.typicode.com/users?_limit=7', {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    })
    if (r.ok === true) {
        return r.json();
    }
    throw new error("Impossible de contacter le serveur")
}
fetchUsers().then(users => console.log(users))

console.log("______________________Ajouter__________________________")
async function fetchUsersAdd() {
    const r = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: "Mon premier article" })
    })
    if (r.ok === true) {
        return r.json();
    }
    throw new error("Impossible de contacter le serveur")
}
fetchUsersAdd().then(users => console.log(users))

console.log("_________Limit à 5 articles____________")
/* Récupérer 5 articles */
async function fetchUsersLimit() {
    const r = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5', {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    })
    if (r.ok === true) {
        return r.json();
    }
    throw new error("Impossible de contacter le serveur")
}
fetchUsersLimit().then(users => console.log(users))


// Comprends pas
const a = new AbortController()
Promise.race([
    fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5&_delay=3000', {
        signal: a.signal
    }),
    fetch('https://jsonplaceholder.typicode.com/users/?_limit=3', {
        signal: a.signal
    })
]).then(r => r.json()).then(body => {
    a.abort()
    console.log(body)
})

setTimeout(() => {
    console.log("_________Test________________")
}, 3000);

function fetchTest() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(body => console.log(body))
}
console.log(fetchTest())
console.log(setTimeout(fetchTest, 4000))