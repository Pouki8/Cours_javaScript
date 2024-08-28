const date = new Date();
// donne la date et l'heure actuelle
console.log(date)

const nouvelAn = new Date(2025, 0, 1, 0, 0, 0).toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'long' })
console.log(nouvelAn)
const nouvelAn2 = new Date(2025, 0, 1, 0, 0, 1).toUTCString()
console.log(nouvelAn2)
const nouvelAn3 = new Date(2025, 0, 1, 0, 0, 2)
console.log(nouvelAn3)


console.log("__________date + 1 jour____________")

function addDays(date, days) {
    const newDate = new Date(date.getTime())
    newDate.setDate(newDate.getDate() + days)
    return newDate
}
const today = new Date();
const tomorrow = addDays(today, 1)
console.log(today)
console.log(tomorrow)


console.log("__________date dans 2 ans mois___________")

const MONTHS = 1
const DAYS = 2
const YEARS = 0
const HOURS = 3
const MINUTES = 4
const SECONDS = 5

function addInterval(date, n, unit) {
    const parts = [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ]
    parts[unit] += n

    return new Date(...parts)
}
const dates = new Date();
const future = addInterval(dates, 1, MONTHS)
console.log(dates)
console.log(future)





console.log("__________compte à rebours_______________")
// const now = new Date().getTime();
// const countDownDate = new Date('september 1, 2024 19:00:00').getTime();
// console.log(now, countDownDate)

const text = document.querySelector("h2");

// const distanceBase = countDownDate - now;

// const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
// console.log(days)
// const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// console.log(hours)
// const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
// console.log(minutes)
// const secondes = Math.floor((distanceBase % (1000 * 60)) / (1000));
// console.log(secondes)
// console.log(days, hours, minutes, secondes);

// text.innerText = `${days}J ${hours}H ${minutes}M ${secondes}S`;

function getChrono() {
    const now = new Date().getTime();
    const countDownDate = new Date('september 1, 2024 19:00:00').getTime();
    console.log(now, countDownDate)

    const distanceBase = countDownDate - now;

    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
    console.log(days)
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours)
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minutes)
    const secondes = Math.floor((distanceBase % (1000 * 60)) / (1000));
    console.log(secondes)
    console.log(days, hours, minutes, secondes);

    text.innerText = `${days}J ${hours}H ${minutes}M ${secondes}S`;
}
getChrono()

const countDownInterval = setInterval(() => {
    getChrono()
}, 1000);
