// Code JavaScript pour gérer l'accordéon

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let body = document.querySelector('body');
let div = document.getElementById('.panel');
let span = document.getElementsByClassName('span'); 
console.log(span);
let burgicon = document.getElementById('.burgicon');
let panel = document.querySelector('.panel1', '.panel2', ".panel3");
let h2 = document.querySelector('h2');
let accordion = document.querySelector('.accordion');


//changement de couleur de thème

button1.addEventListener ('click', () => {
  body.style.backgroundColor= '#2e2e2e';
  accordion.style.backgroundColor= '#2e2e2e';
  p1.style.color="white";
  p2.style.color="white";                         //pour mettre dark theme
  p3.style.color="white";
  h2.style.color="white";
 accordion.style.color="white";                   //pour mettre dark themepackage com.example.
  console.log(p1);                                //pour afficher dans la console
  console.log(body);
  console.log(p2);
  console.log(p3);
  console.log(h2);
  console.log(accordion);
});

button2.addEventListener ('click', () =>{
  accordion.style.backgroundColor="white";
  span.color="black";
  p1.style.color="black";   
  p2.style.color="black";                      //pour mettre white theme
  p3.style.color="black";                      //pour mettre white theme
  h2.style.color="black";
  accordion.style.color="black";                   //pour mettre dark themepackage com.example.
  document.body.style.backgroundColor='white';
  console.log(p1);                                //pour afficher dans la console
  console.log(body);
  console.log(p2);
  console.log(p3);
  console.log(h2);
  console.log(accordion);
  
});
// Code JavaScript pour gérer le menu burger

let burger = document.querySelector("#burger");
let navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
