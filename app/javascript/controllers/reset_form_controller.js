import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input"];
  connect() {}

  clearInput() {
    this.inputTarget.value = "";
  }
}