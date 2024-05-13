document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelectorAll("[data-card-drop]");

  card.forEach((item) => {
    const trigger = item.querySelector("[data-card-trigger]");
    const content = item.querySelector("[data-card-content]");
    trigger.addEventListener("click", () => {
      trigger.classList.toggle("active");
      content.classList.toggle("active");
    });
  });
});
