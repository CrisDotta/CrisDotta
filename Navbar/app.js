let menu = document.getElementById("menu");
let btn = document.getElementById("bars");
btn.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    btn.style.color = "black";
    btn.style.transform = "rotate(0deg)";
  } else {
    menu.style.display = "block";
    btn.style.transform = "rotate(90deg)";
    btn.style.color = "hsl(205, 78%, 60%)";
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 800) {
    menu.style.display = "block";
    btn.style.transform = "rotate(90deg)";
    btn.style.color = "hsl(205, 78%, 60%)";
  } else {
    menu.style.display = "none";
    btn.style.color = "black";
    btn.style.transform = "rotate(0deg)";
  }
});

