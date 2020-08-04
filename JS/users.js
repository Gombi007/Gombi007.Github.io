let users = [
    {
        username: "Berger Whitney",
        email: "test@js.com",
        passwd: "xCHGfd213"
    },

    {
        username: "Nagy Árpi",
        email: "test@nagyarpi.com",
        passwd: "xCHGffdfdf"
    },

    {
        username: "Rostás Márió",
        email: "rostas@mario.com",
        passwd: "xCHGf5345"
    }

];
// Select table tbody and create td
let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

// Create two buttons in a div
let createButtonGroup = parent => {
    let group = document.createElement("div");

    let btnModify = document.createElement("button");
    btnModify.className = "btn userBtn";
    btnModify.innerHTML = "Modify";

    let btnDel = document.createElement("button");
    btnDel.className = "btn userBtn";
    btnDel.innerHTML = "Delete";

    group.appendChild(btnModify);
    group.appendChild(btnDel);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);

}

// Create table rows there is data and create id.
for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k) + 1, tr);
    for (let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);

}