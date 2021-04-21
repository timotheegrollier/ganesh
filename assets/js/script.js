const burgerIcon = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile");
const crossIcon = document.getElementById("cross");

// MENU BURGER
burgerIcon.addEventListener("click", () => {
  if (mobileMenu.style.transform == "translateX(-600px)") {
    mobileMenu.style.transform = "translateX(0px)";
    burgerIcon.classList.remove("fa-bars");
    burgerIcon.classList.add("fa-times");
  } else {
    mobileMenu.style.transform = "translateX(-600px)";
    burgerIcon.style.display = "block";
    burgerIcon.classList.remove("fa-times");
    burgerIcon.classList.add("fa-bars");
  }
});
