import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  const buttonsSales = document.querySelectorAll("[data-sales]");
  buttonsSales.forEach((button) => {
    new SalesBlock(button);
  });
});

class SalesBlock {
  constructor(btn) {
    this.button = btn;
    this.buttonID = this.button.getAttribute("data-sales-id");
    this.action = this.button.getAttribute("data-action");
    this.parentBlock = this.button.closest("[data-sales-block]").querySelector("[data-sales-block-inner]");
    this.setListener();
  }

  setListener() {
    this.button.addEventListener("click", (e) => {
      this.button.innerText = "Загрузка...";
      const data = new FormData();
      data.append("id", this.buttonID);
      axios
        .post(this.action, data)
        .then((response) => {
          this.button.setAttribute("data-sales-id", `${this.buttonID++}`);
          this.createCards(response.data.items);
          const totalCount = response.data.count;
          if (this.parentBlock.children.length >= totalCount) {
            this.button.setAttribute("hidden", "hidden");
          }
        })
        .finally(() => {
          this.button.innerText = "Показать еще";
        });
    });
  }

  createCards(arr) {
    arr.forEach((item) => {
      const wrapper = document.createElement("div");
      wrapper.className = "columns__col--6 columns__col-tab--6 columns__col-mob--12";
      const template = `
       <a class="article-img card--bg" target="_blank" href="${item.link}">
          <div class="card--bg__content article-img__content">
            <div class="card__title">${item.name}</div>
            <div class="card__content-bottom">
              <p class="card--bg__link button button--empty">Подробнее</p>
            </div>
          </div>
          <img class="article-img__bg card--bg__bg" src="${item.picture}" alt="${item.name}">
       </a>`;
      wrapper.innerHTML = template;
      this.parentBlock.append(wrapper);
    });
  }
}
