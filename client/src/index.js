import "./index.css"
import { createGrid } from './utils/createGrid'




window.addEventListener("load", function () {
  const rootEl = document.getElementById("root");

  createGrid(rootEl)
});
