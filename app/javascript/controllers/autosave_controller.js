// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "form", "status" ]

  connect() {
    this.timeout = null
    this.duration = this.data.get("duration") || 1000
  }

  save() {
    clearTimeout(this.timeout)

    this.timeout = setTimeout(() => {
      this.statusTarget.textContent = "Saving..."
      Rails.fire(this.formTarget, 'submit')
    }, this.duration)
  }

  success() {
    this.statusTarget.textContent = "Saved!"

    setTimeout(() => {
      this.statusTarget.textContent = ""
    }, 2000)
  }

  error() {
    this.statusTarget.textContent = "Unable to save!"

    setTimeout(() => {
      this.statusTarget.textContent = ""
    }, 2000)
  }
}
