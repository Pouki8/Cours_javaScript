const p = new Promise((resolve, reject) => {
    resolve(4)
})

p
    .then((n) => {
        console.log("le nombre", n)
        return 5
    })
    .then((n) => console.log("le nombre 2", n))
    .catch((e) => {
        console.log("echec", e)
    })
    .finally(() => console.log("aaa"))




function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration)
        }, duration)
    })
}

function waitAndFail(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(duration)
        }, duration)
    })
}

wait(2000)
    .then(() => {
        console.log("Attente 2s")
        return wait(1000)
    })
    .then(() => {
        console.log("Attente 1s")
        return waitAndFail(1000)
    }).catch(() => null)


async function main() {
    /*ajout du try*/
    try { /* pour le try ajouté */
        await waitAndFail(2000)
        await wait(2000)
        console.log("Bonjour")
        await wait(1000)
        console.log("Hello")
        /*En plus pour l'erreur*/
    } catch (e) {
        console.log("Erreur")
    } /*s'arrête là*/
}

main()