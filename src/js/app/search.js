document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelectorAll("[data-search-btn]");
  const searchForms = document.querySelector("[data-form-search]");
  const searchElement = document.querySelector('[data-search-element]')
  
  searchBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const searchField = el.previousElementSibling;
      searchField.classList.toggle("active");
    });
  });
  
  if (searchForms) {
    searchForms.forEach(form => {
      form.addEventListener("submit", (evt) => {
        const url = form.getAttribute("action");
        const input = form.querySelector("input");
        evt.preventDefault();
        window.location.href = `${url}?q=${input.value}`;
      });
    })
  }
  
  if (searchElement) {
    searchElement.addEventListener('click', () => {
      const url = searchElement.getAttribute('data-action')
      const searchString = searchElement.getAttribute('data-search-element')
      window.location.href = `${url}?q=${searchString}`;
    })
  }
});
