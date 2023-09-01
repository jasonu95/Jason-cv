//MENU PARA  TELÉFONO CELULAR
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

//cerrar menu movil cuando se elija una opción
const menuLinks = document.querySelectorAll(".menu a[href^=\"#\"]");

const options = {
  root: null,
  rootMargin: '-70% 0px -30% 0px', //no puedo cambiar el root margin (no encuentro el problema)
  threshold: '1' //medida temporal mientras encuentro el problema del root margin
};

//Observer para que el menu siga al contenido
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href=\"#${id}\"]`);

      if (entry.isIntersecting) {
        /* document.querySelector(".menu a.selected").classList.remove("selected"); */
        menuLink.classList.add("selected");
      } else {
        menuLink.classList.remove("selected");
      }
    });
  },
  options
);


menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function() {
    menu.classList.remove("menu_opened") //cierra el menu
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});


//COMPORTAMIENTO DEL NAV AL HACER SCROLL
const header = document.querySelector('.topheader');

window.addEventListener('scroll', () => {
  if (window.scrollY > 90) { 
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


