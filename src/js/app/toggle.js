document.addEventListener("DOMContentLoaded", () => {
  const toggleElements = document.querySelectorAll("[data-toggle]");
  if (toggleElements) {
    toggleElements.forEach(el => {
      const toggleEl = new Toggle(el);
    });
  }
});

class Toggle {
  constructor(el) {
    this.el = el;
    this.switchEl = this.el.querySelector("[data-toggle-switch]");
    
    this.init();
  }
  
  init() {
    this.switchEl.addEventListener("click", this.toggleSwitch.bind(this));
  }
  
  toggleSwitch() {
    this.el.classList.toggle("active");
  }
}