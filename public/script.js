let text = document.getElementById('myText');
let usName = document.getElementById('usName');
let usEmail = document.getElementById('usEmail');
let usPassword = document.getElementById('usPassword');

function getVal() {
    fetch("/addName", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: usName.value, email: usEmail.value, password: usPassword.value})
    })
}
