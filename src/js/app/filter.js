document.addEventListener('DOMContentLoaded', () => {
  const filterForm = document.querySelector('[data-filter]')
  if (filterForm) {
    new Filter(filterForm)
  }
})

class Filter {
  constructor(form) {
    this.mainForm = form;
    this.queryParams = new URLSearchParams(window.location.search);
    this.url = form.getAttribute('action');
    this.els = this.getEls()
    this.filterParams = this.els.map(el => el.name)
    this.init()
  }

  init() {
    this.checkParams()
    this.filterSettingUp()
  }

  getEls() {
    return [...this.mainForm.querySelectorAll('input'), ...this.mainForm.querySelectorAll('select')]
  }

  checkParams() {
    return this.filterParams.filter(el => this.getQueryParam(el))
  }

  filterSettingUp() {
    this.els.forEach(element => {
      switch(element.name) {
        case 'NAME':
          element.value = this.getQueryParam(element.name)
          break;
        case 'JOB':
          this.setupOptions(element, this.getQueryParam(element.name))
          break;
        case 'CLINICS':
          this.setupOptions(element, this.getQueryParam(element.name))
          break;
        case 'DEPARTURE':
          element.checked = this.getQueryParam(element.name)
          break;
        case 'CHILD':
          element.checked = this.getQueryParam(element.name)
          break;
      }
    })
  }

  getQueryParam(name) {
    return this.queryParams.get(name)
  }

  setupOptions(parentElement, filterType) {
    const options = parentElement.querySelectorAll('option');
    const currentOption = Array.from(options).filter(option => option.value === filterType)[0]
    currentOption ? currentOption.selected = true : ''
  }
}
