import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("[data-container]");
    if (container) {
        new LoadMore(container);
    }
});

class LoadMore {
    constructor(container) {
        this.container = container;
        this.button = this.container.querySelector(".show-more");
        this.url = this.button.getAttribute('data-url')

        this.init();
    }

    init() {
        this.button.addEventListener('click', this.send.bind(this));
    }

    send() {
        axios.get(this.url)
            .then(response => response.data)
            .then(data => {
                const parser = new DOMParser()
                const parseData = parser.parseFromString(data, "text/html");
                const newItems = parseData.querySelectorAll('[data-load-item]')
                const newButton = parseData.querySelector('.show-more')
                const newURL = newButton.getAttribute('data-url')
                newItems.forEach(el => {
                    this.container.appendChild(el)
                })
                this.button.setAttribute('data-url', newURL)
                this.url = newURL;
                if (newItems.length < this.container.getAttribute('data-loading-count')) {
                    newButton.style.display = 'none'
                }
                window.scrollTo(window.pageYOffset, 0)
            })
            .catch(error => console.error(error));
    }
}
