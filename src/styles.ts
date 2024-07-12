import { css } from "lit";

export const modalStyles = css`
  dialog {
    background: none;
    border: none;
    opacity: 0;
    transition: opacity 0.3s, display 0.3s allow-discrete,
      overlay 0.3s allow-discrete;
    width: 100%;
  }
  dialog[open] {
    opacity: 1;
  }
  /* delete me to fix the issue */
  @starting-style {
    dialog[open] {
      opacity: 0;
    }
  }
  dialog::backdrop {
    background-color: rgb(0 0 0 / 0);
    border: 10px inset #f00;
    transition: background-color 0.3s, display 0.3s allow-discrete,
      overlay 0.3s allow-discrete;
  }
  dialog[open]::backdrop {
    background-color: rgb(0 0 0 / 0.8);
  }
  #content {
    background: white;
    padding: 3rem;
  }
`;
