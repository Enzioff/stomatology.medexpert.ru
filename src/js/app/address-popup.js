document.addEventListener("DOMContentLoaded", () => {
  const articleTrigger = document.querySelectorAll(".article-address__popup-trigger");
  const popups = document.querySelectorAll(".article-address__popup");
  
  articleTrigger.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      
      const article = trigger.closest(".article-address");
      const popup = article.querySelector(".article-address__popup");
      
      if (popup.classList.contains("active")) {
        popups.forEach((el) => {
          el.classList.remove("active");
        });
      } else {
        popups.forEach((el) => {
          el.classList.remove("active");
        });
        popup.classList.add("active");
      }
    });
  });
});
