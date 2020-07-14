function modify() {
    document.getElementById("simpleText").innerHTML = "";
}

function logins() {
    let user = document.getElementById("user").value;
    if (user == "admin") {
        document.getElementById("wcm").innerHTML = "Welcome back" + "<br>" + user;
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