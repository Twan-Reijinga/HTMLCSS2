//  Zoek de EaterEgg in de website. Succes! //
versie = 1;
footer = document.getElementById('footer');
i = document.getElementById('i');
i.addEventListener("click", roll);

kop = document.getElementById('kop1');

footer.addEventListener("click", telOp);
footer.innerHTML = "&#9400; Twan Reijinga &emsp; | &emsp; Versie 1.1" + versie;
body = document.getElementById("body");

function telOp() {
  versie ++;
  footer.innerHTML = "&#9400; Twan Reijinga &emsp; | &emsp; Versie 1.11." + versie;

  if (versie == 11) {
    kop.innerHTML = "Ik ben";
    i.innerHTML = "l";
  }
}
function roll() {
  body.className += "roll";
}

// leefttijd aanpassen
age = document.getElementById('age');
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
leeftijd = year - 2006;
if (month > 8) {
  if (month == 9){
    if (day >= 8) {
      leeftijd ++;
    }
  } else {
    leeftijd ++;
  }
  
}
console.log(day);
age.innerHTML = leeftijd;
