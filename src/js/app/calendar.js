import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

const app = {};

document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll("[data-calendar]");

  if (els.length) app.calendars = [];

  els.forEach((item) => {
    app.calendars.push(
      new AirDatepicker(item.querySelector(".calendar__field"), {
        container: item.querySelector(".calendar__container"),
        visible: true,
        range: false,
        inline: true,
        multipleDatesSeparator: "-",
        buttons: ["today", "clear"],
        onSelect() {

        }
      })
    );
  });
});
