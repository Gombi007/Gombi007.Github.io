
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

/*Order */
function order() {
    let price = 1200;
    let amountInput = document.querySelector("input[name='quantity']").value;
    let total = document.querySelector("span.total");
    let extra = document.querySelector("input[name='extra']:checked").value;
    let amount = 0;
    let amountNumber = parseInt(amountInput);
    /* What the hack is this? :) */
    let sauceE = document.getElementById("sauce");
    let sauce = sauceE.options[sauceE.selectedIndex].value;

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
   
    if (amountNumber > 10) {
        alert("You can buy 10 products maximum.");        
    } else if (amountNumber < 1) {
        alert("You must buy 1 product minimum.");
    } else {
        amount = (parseInt(sauce) + parseInt(extra) + price) * parseInt(amountInput);
        total.innerHTML = amount;
    }
}

