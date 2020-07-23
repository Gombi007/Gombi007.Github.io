
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
    showOrder(amountNumber,amount);
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

function weatherWidget(){
    const day = document.querySelector('#day').value;
    const tempDiv = document.querySelector('#tempDiv');
    tempDiv.innerHTML = temps[day] + '&deg;C';
    for (let i = 0; i < tempsUpper.length; i++){
        if (temps[day] <= tempsUpper[i]){
            tempDiv.innerHTML += '<br><span class="offer">' + offers[i] + '</span>';
            break;
        }
    }
}
