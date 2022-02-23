function validateForm() {
    let x = document.forms["registrationForm"]["eMail"].value;
    if (x.search(/@/i) === -1) {
      alert("Die E-Mail-Adresse muss ein \"@\" enthalten.");
      return false;
    }
    submitSend();
}

function submitSend(){
    let gender = document.getElementById("gender").value
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let eMail = document.getElementById("eMail").value;
    let age = document.getElementById("age").value;
    let organisation = document.getElementById("organisation").value;
    let colorPicker = document.getElementById("colorPicker").value;
    let personality = document.getElementById("personality").value;

    sessionStorage.setItem("gender", `${gender}`);
    sessionStorage.setItem("firstName", `${firstName}`);
    sessionStorage.setItem("lastName", `${lastName}`);
    sessionStorage.setItem("eMail", `${eMail}`);
    sessionStorage.setItem("age", `${age}`);
    sessionStorage.setItem("organisation", `${organisation}`);
    sessionStorage.setItem("colorPicker", `${colorPicker}`);
    sessionStorage.setItem("personality", `${personality}`);
}

function clearData(){
    document.getElementById("registrationForm").reset();
    sessionStorage.clear();
}

// zurück zu Schritt 1. Alle Daten werden aus 

function fillForm(){

    window.open("index.html", "_self")
}

function sendData() {
    window.open("index.html", "_self")
    alert("Vielen Dank für deine Registrierung!")
    sessionStorage.clear();
}

// random data generator

let genName;

function regGen() {

    // pre-set data array

    let regGenArr = [
        ["Tim", "John", "Bill", "Linus", "Janus", "Liam", "Linus", "Felix", "Rainer"],
        ["Ana", "Tina", "Jill", "Ramona", "Nala", "Emily", "Amelie", "Marie"],
        ["Smith", "Meier", "Gates", "Schneider", "Schulz", "Fischer", "Habluetzel", "Zufall"],
        ["calm", "wild"]
    ]

    // random values ermitteln

    if(Math.floor(Math.random() * 2)===0) {
        document.getElementById("gender").value = "Herr"
        document.getElementById("firstName").value = regGenArr[0][Math.floor(Math.random() * regGenArr[0].length)];
    }   
    else {
        document.getElementById("gender").value = "Frau"
        document.getElementById("firstName").value = regGenArr[1][Math.floor(Math.random() * regGenArr[1].length)];
    }

    document.getElementById("lastName").value = regGenArr[2][Math.floor(Math.random() * regGenArr[2].length)];

    document.getElementById("eMail").value  = (document.getElementById("firstName").value+"."+document.getElementById("lastName").value+"@epost.de").toLowerCase();

    document.getElementById("age").value = Math.floor(Math.random() * 79+21);

    document.getElementById("colorPicker").value = getRandomColor();

    document.getElementById("personality").value = regGenArr[3][Math.floor(Math.random() * 2)];


}

// InsertConfirmationData

let test3 = window.location.href;
let test1 = test3.search("confirmation");
console.log(test1);

if (test1 > -1){

document.getElementById("confirmationData-name").innerHTML = `${sessionStorage.getItem("gender")} ${sessionStorage.getItem("firstName")} ${sessionStorage.getItem("lastName")}`;

document.getElementById("confirmationData-age").innerHTML = `${sessionStorage.getItem("age")}`;

document.getElementById("confirmationData-eMail").innerHTML = `${sessionStorage.getItem("eMail")}`;

document.getElementById("confirmationData-organisation").innerHTML = `${sessionStorage.getItem("organisation")}`;

}

let test4 = window.location.href;
let test5 = test4.search("index");
console.log(test5);

if (test5 > -1){

// InsertRegistrationData

if(sessionStorage.getItem("gender")){
document.getElementById("gender").value = `${sessionStorage.getItem("gender")}`;
}

if(sessionStorage.getItem("firstName")){
document.getElementById("firstName").value = `${sessionStorage.getItem("firstName")}`;
}

if(sessionStorage.getItem("lastName")){
document.getElementById("lastName").value = `${sessionStorage.getItem("lastName")}`;
}

if(sessionStorage.getItem("eMail")){
document.getElementById("eMail").value = `${sessionStorage.getItem("eMail")}`;
}

if(sessionStorage.getItem("age")){
document.getElementById("age").value = `${sessionStorage.getItem("age")}`;
}

if(sessionStorage.getItem("organisation")){
document.getElementById("organisation").value = `${sessionStorage.getItem("organisation")}`;
}

if(sessionStorage.getItem("colorPicker")){
    document.getElementById("colorPicker").value = `${sessionStorage.getItem("colorPicker")}`;
}

if(sessionStorage.getItem("personality")){
    document.getElementById("personality").value = `${sessionStorage.getItem("personality")}`;
}

// profile wild

}

function profileWild(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.lineWidth = 4;

    // headband horizontal

    ctx.beginPath();
    ctx.rect(15, 20, 15, 90);
    ctx.fillStyle = sessionStorage.getItem("colorPicker");
    ctx.stroke(); 
    ctx.fill()

    // face outline

    ctx.beginPath();
    ctx.arc(60, 55, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.stroke();
    ctx.fill()

    // headband vertical

    ctx.beginPath();
    ctx.rect(14, 20, 92, 15);
    ctx.fillStyle = sessionStorage.getItem("colorPicker");
    ctx.stroke(); 
    ctx.fill()

    // left eye
    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.stroke();
    ctx.fill()

    // right eye

    ctx.beginPath();
    ctx.arc(70, 50, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.stroke();
    ctx.fill()

    // mouth
    ctx.beginPath();
    ctx.arc(65, 80, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.stroke();
    ctx.fill()

    // left pupil

    ctx.beginPath();
    ctx.arc(56, 50, 2, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.stroke();
    ctx.fill()

    // right pupil

    ctx.beginPath();
    ctx.arc(65, 50, 2, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.stroke();
    ctx.fill()

    // scratch1-4

    ctx.beginPath();
    ctx.moveTo(40, 70);
    ctx.lineTo(30, 80);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(35, 65);
    ctx.lineTo(25, 75);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(85, 70);
    ctx.lineTo(95, 80);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(90, 65);
    ctx.lineTo(100, 75);
    ctx.stroke();
}

// profile calm

function profileCalm(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.lineWidth = 4;

     // face outline

    ctx.beginPath();
    ctx.arc(60, 55, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.stroke();
    ctx.fill()

    // left eye
    ctx.beginPath();
    ctx.arc(40, 50, 10, 0, 1 * Math.PI);
    ctx.fillStyle = "white";
    ctx.stroke();
    ctx.fill()

    // left eye
    ctx.beginPath();
    ctx.arc(70, 50, 10, 0, 1 * Math.PI);
    ctx.fillStyle = "white";
    ctx.stroke();
    ctx.fill()

    // mouth
    ctx.beginPath();
    ctx.arc(65, 85, 7, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.stroke();
    ctx.fill();

    // nimbus (heiligenschein)

    ctx.beginPath();
    ctx.ellipse(60, 15, 50, 20, Math.PI / 40, 0, 2 * Math.PI);
    ctx.lineWidth = 10;
    ctx.strokeStyle = (sessionStorage.getItem("colorPicker"));
    ctx.stroke();
}

// Profilauswahl

if(sessionStorage.getItem("personality") === "wild" || sessionStorage.getItem("personality") === "") profileWild();
else profileCalm();

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }










