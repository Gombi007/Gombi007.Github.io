function modify() {
    let delContent = document.getElementById("simpleText");
    let btnLabel = document.getElementById("del");


    if (delContent.style.display === "none") {
        delContent.style.display = "block";
    } else {
        delContent.style.display = "none";
    }
}


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