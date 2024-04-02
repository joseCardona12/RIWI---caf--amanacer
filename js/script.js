const navbar_nav = document.getElementById("navbar-nav");
const icon_hamburger = document.getElementById("hamburger");

function add_active_menu(){
    navbar_nav.classList.toggle("active");
}

icon_hamburger.addEventListener("click", add_active_menu)