const hamburgerButton = document.querySelector("#hamburger");
const megaMenu = document.querySelector("#megamenu");

hamburgerButton.addEventListener("click", () => {
  megaMenu.classList.add("show");

  document.querySelector("#closeButton").addEventListener("click", () => {
    megaMenu.classList.remove("show");
  });
});
