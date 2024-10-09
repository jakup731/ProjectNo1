const menu = document.querySelector(".menu");
const openmenu = document.getElementById("ul");

menu.addEventListener("click", () => {
  openmenu.classList.toggle("showmenu");
});
