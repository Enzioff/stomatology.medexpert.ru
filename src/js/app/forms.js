import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-form]");

  if (elements) {
    elements.forEach((item) => {
      new Form(item);
    });
  }
});

class Form {
  constructor(el) {
    this.el = el;
    this.url = this.el.getAttribute("action");
    this.agreement = this.el.querySelector("[data-check-agreement]");
    this.button = this.el.querySelector("[data-form-submit]");
    this.successModal = document.getElementById("success");
    this.setListeners();
  }

  setListeners() {
    if (this.agreement) {
      this.agreement.addEventListener("click", () => {
        if (this.agreement.checked) {
          this.disable(false);
        } else if (!this.agreement.checked) {
          this.disable(true);
        }
      });
    }
    this.el.addEventListener("submit", (e) => {
      e.preventDefault();
      this.submit();
    });
  }

  getData() {
    const els = [
      ...this.el.querySelectorAll("input"),
      ...this.el.querySelectorAll("textarea"),
      ...this.el.querySelectorAll("select")
    ];
    const data = new FormData();

    els.forEach((item) => {
      if (item.type === "file") {
        data.append(item.name, item.files[0]);
      } else if (item.type === "radio" || item.type === "checkbox") {
        if (item.checked) {
          data.append(item.name, "Y");
        } else if (!item.checked) {
          data.append(item.name, "N");
        }
      } else {
        data.append(item.name, item.value);
      }
    });

    return data;
  }

  disable(state) {
    if (state) {
      this.button.setAttribute("disabled", "disabled");
    } else {
      this.button.removeAttribute("disabled");
    }
  }

  submit() {
    this.disable(true);
    this.button.innerText = "Отправка...";

    axios
      .post(this.url, this.getData())
      .then((response) => {
        console.log(response);
        this.button.innerText = "Отправлено!";
        this.successModal.removeAttribute("hidden");
      })
      .catch((error) => {
        console.error(error);
        this.button.innerText = "Ошибка";
      })
      .finally(() => {
        setTimeout(() => {
          this.button.innerText = "Отправить";
          this.successModal.setAttribute("hidden", "hidden");
          this.disable(false);
        }, 3000);
      });
  }
}
