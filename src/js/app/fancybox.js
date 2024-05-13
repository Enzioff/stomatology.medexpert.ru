import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


document.addEventListener("DOMContentLoaded", () => {
  Fancybox.bind("[data-fancybox]", {});

  const modalClose = document.querySelectorAll("[data-modal-close]");
  modalClose.forEach((item) => {
    item.addEventListener("click", () => {
      Fancybox.close();
    });
  });
});
