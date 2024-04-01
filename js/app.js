var mobileMenu = document.querySelector(".mobileMenu");
var mobileMenuOpened = document.querySelector(".mobileMenuOpened");

console.log(mobileMenuOpened);
mobileMenu.addEventListener("click", function () {
  // var menu = document.createElement("div");
  // menu.innerText = "text";
  // mobileMenuOpened.append(menu);
  mobileMenuOpened.classList.add("visible");
});
