import { CSSResultGroup, LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { modalStyles } from "./styles";

@customElement("lit-modal")
export class LitModal extends LitElement {
  static styles: CSSResultGroup = modalStyles;

  @property({ type: Object })
  content = {
    close: "Close",
  };

  @property({ type: Boolean })
  isOpen = true;

  get #dialog() {
    return this.renderRoot?.querySelector("dialog") ?? null;
  }

  updated() {
    if (this.isOpen && !this.#dialog?.open) {
      this.#dialog?.showModal();
    }
    if (!this.isOpen && this.#dialog?.open) {
      this.#dialog?.close();
    }
  }

  show() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  render() {
    return html`
      <dialog>
        <div id="content">
          <h2>Modal Content</h2>
        </div>
      </dialog>
    `;
  }
}
