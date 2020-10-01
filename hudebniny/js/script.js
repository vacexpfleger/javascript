document.getElementById("synthPopup").addEventListener("click", function() {
  window.alert("Upozornění: Michal David chce znát vaši současnou lokaci.");
});

var message = ["Špatný vozka, který neumí obrátit!\n-- české přísloví",
"Líbám, tedy žiji.\n-- Heine",
"Bolest druhých nám pomáhá nést naši vlastní.\n-- Goethe"];
var a = Math.floor(Math.random() * message.length);

document.getElementById("moudro").addEventListener("click", function() {
  window.alert(message[a]);
});

var navbar = document.getElementById("navbar");
var title = document.getElementById("title");
var footer = document.getElementById("footer");

function darkMode(){
  navbar.classList.remove("navbar-light");
  navbar.classList.remove("bg-light");
  navbar.classList.add("navbar-dark");
  navbar.classList.add("bg-dark");
  footer.classList.remove("bg-light");
  footer.classList.add("bg-dark");
  document.body.style.background = "#6C757D";
  title.style.color = "white";
  footer.style.color = "white";
}

function lightMode(){
  navbar.classList.remove("navbar-dark");
  navbar.classList.remove("bg-dark");
  navbar.classList.add("navbar-light");
  navbar.classList.add("bg-light");
  document.body.style.background = "white";
  title.style.color = "black";
}
