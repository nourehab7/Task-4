const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("closeBtn");

menuBtn.onclick = function () { showMenu() };
function showMenu() {
    menu.style.left = 0;
}

closeBtn.onclick = function () { hideMenu() };
function hideMenu() {
    menu.style.left = "-100%";
}