/* When the user scrolls down, hide the weather div. When the user scrolls up, show the weather div 
First jQuerry. Requured <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> all html pages */
$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('#weatherDIV').slideUp()
    }
    else {
        $('#weatherDIV').slideDown();
    }
});

/* Vsible div or not with a button */
function modify() {
    let delContent = document.getElementById("simpleText");
    let btnLabel = document.getElementById("del");
    if (delContent.style.visibility === "hidden") {
        delContent.style.visibility = "visible";
    } else {
        delContent.style.visibility = "hidden";
    }
}

/*Image gallery yes or no content visibility*/
function galleryY() {
    let gD = document.getElementById("galleryDIV");
    let sD = document.getElementById("sorryDIV");
    if (gD.style.display = "none") {
        gD.style.display = "block";
        sD.style.display = "none";
    }
}

function galleryN() {
    let gD = document.getElementById("galleryDIV");
    let sD = document.getElementById("sorryDIV");
    if (sD.style.display = "none") {
        sD.style.display = "block";
        gD.style.display = "none";
    }
}

/*Give order parameters and price */
function calcOrder() {
    let price = 1200;
    let amountInput = document.querySelector("input[name='quantity']").value;
    let extra = document.querySelector("input[name='extra']:checked").value;
    let amount = 0;
    let amountNumber = parseInt(amountInput);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    let sauceE = document.getElementById("sauce");  //Drop-down list selected value 
    let sauce = sauceE.options[sauceE.selectedIndex].value;  //Drop-down list selected value 
    amount = (parseInt(sauce) + parseInt(extra) + price) * parseInt(amountInput);
    showOrder(amountNumber, amount);
}

function showOrder(amountNumber, amount) {
    let total = document.querySelector("span.total");
    let alertInput = document.getElementById("alertInput");
    if (amountNumber > 10) {
        alertInput.innerHTML = "You can buy 10 products maximum.";

    } else if (amountNumber < 1) {
        alertInput.innerHTML = "You must buy 1 product minimum.";
    } else {
        total.innerHTML = amount;
        alertInput.innerHTML = "";
    }
}

//weather widget exercise
let temps = [-11.2, 14.4, 13.0, 17.3, 21.7, 18.2, 28];
let tempsUpper = [0, 15, 18, 22, 29];
offers = ["Today's offer: hot chocolate.", "Today's offer: hot tea.", "Today's offer: delicious cookie.", "Today's offer: ice cream.", "Today's offer: ice-cold lemonade."];

function weatherWidget() {
    const day = document.querySelector('#day').value;
    const tempDiv = document.querySelector('#tempDiv');
    tempDiv.innerHTML = temps[day] + '&deg;C';
    for (let i = 0; i < tempsUpper.length; i++) {
        if (temps[day] <= tempsUpper[i]) {
            offerDiv.innerHTML = offers[i];
            break;
        }
    }
    temp();

}

//min,max,avg temp
function minTemp() {
    let min = temps.length != 0 ? temps[0] : 0;
    for (let i = 1; i < temps.length; i++) {
        if (temps[i] < min) {
            min = temps[i];
        }
    }
    return min;
}

function maxTemp() {
    let max = temps.length != 0 ? temps[0] : 0;
    for (let i = 1; i < temps.length; i++) {
        if (temps[i] > max) {
            max = temps[i];
        }
    }
    return max;
}

function avgTemp() {
    let avg = 0;
    let avgRounded = 0;
    for (let i = 0; i < temps.length; i++) {
        avg += temps[i];
    }
    avgRounded = temps.length != 0 ? avg / temps.length : 0;
    return avgRounded.toFixed(2);

}

function temp() {
    let minT = document.getElementById("minT");
    let maxT = document.getElementById("maxT");
    let avgT = document.getElementById("avgT");

    minT.innerHTML = 'Min. ' + minTemp() + '&deg;C';
    maxT.innerHTML = 'Max. ' + maxTemp() + '&deg;C';
    avgT.innerHTML = 'Avg. ' + avgTemp() + '&deg;C';

}


// Exam countdowner
function timer(){
        // Countdown Timer
        // Set the date we're counting down to
        var countDownDate = new Date("Aug 4, 2020 08:00:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
    }

















//Exercise sum algorithm

let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;
for (i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console - console.log("Sum: ", sum);

//Exercise counting algorithm
let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        db++;
    }
}
console.log("Even numbers: ", db);

//Exercise extreme value algorithm
let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {
        biggest = numericArray[i];
    }
}
console.log("The biggest element: ", biggest);

//Exercise choosing algorithm
let contains = false;
for (let i = 0; i < numericArray.length && contains == false; i++) {
    if (numericArray[i] == 5) {
        contains = true;
    }
}
console.log("Caontains 5? ", contains);

let user = {
    name: "Kiss Ramóna",
    age: 20,
    city: "Bp"

};
console.log(Object.keys(user));

for (let k in user) {
    console.log(k);

}