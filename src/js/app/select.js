document.addEventListener("DOMContentLoaded", () => {
  let selects = document.querySelectorAll("[data-select]");

  selects?.forEach(function(select, index) {
    new customSelect(select);
  });
});

class customSelect {
  constructor(select) {
    this.select = select;
    this.trigger = select.querySelector("[data-select-trigger]");
    this.content = select.querySelector("[data-select-menu]");

    this.setListeners();
  }

  setListeners() {
    this.initSelect();
  }

  initSelect() {
    this.trigger?.addEventListener("click", (event) => {
      this.trigger.classList.toggle("active");
      this.content.classList.toggle("active");
    });
  }
}