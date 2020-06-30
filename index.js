console.log("index.js is linked to itiswednesday.html");

function getWednesday() {
    let day = new Date().getUTCDay();
    return day;
}

console.log(getWednesday())

let isItWednesday = getWednesday()
if (isItWednesday === 3) {
    alert("It is Wednesday, my dudes.");
} else {
    alert("It is not Wednesday, my dudes.")
}

console.log(isItWednesday)

function navBar() {
    var nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
}