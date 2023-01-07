const navbarToggle = document.querySelector(".header__link--toggle");
const navbar = document.querySelector(".header__navbar");
navbar.style.display = "none";

navbarToggle.addEventListener("click", () => {
  displayNavbar();
});

const navbarLinks = document.querySelectorAll(".header__navbar .header__link");

navbarLinks.forEach((element) => {
  element.addEventListener("click", () => {
    displayNavbar();
  });
});

function displayNavbar() {
  let display = navbar.style.display;
  if (display == "" || display == "none") {
    display = "flex";
  } else {
    display = "none";
  }
  navbar.style.display = display;
}
