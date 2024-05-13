document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector("[data-burger]")
  const mobMenu = document.querySelector("[data-mob-menu]")
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    mobMenu.classList.toggle("active");
  })
})