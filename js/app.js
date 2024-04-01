var mobileMenu = document.querySelector(".mobileMenu");
var mobileMenuOpened = document.querySelector(".mobileMenuOpened");

mobileMenu.addEventListener("click", function () {
  if (!mobileMenuOpened.classList.contains("visible")) {
    mobileMenuOpened.classList.add("visible");
    document.body.classList.add("overflowHidden");
  } else {
    mobileMenuOpened.classList.remove("visible");
    document.body.classList.remove("overflowHidden");
  }
});
