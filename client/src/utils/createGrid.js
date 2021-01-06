import { gridSize } from "../constants";

export function createGrid(rootEl) {
  for (let x = 1; x <= gridSize; x++) {
    const rowEl = document.createElement("div");

    rowEl.classList.add("row")

    rootEl.appendChild(rowEl)

    for (let x = 1; x <= gridSize; x++) {
      const celEl = document.createElement("div");

      celEl.classList.add("cell")
      rowEl.appendChild(celEl)
    }
  }
}
