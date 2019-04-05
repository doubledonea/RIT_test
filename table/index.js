document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".table").addEventListener("click", function(ev) {
    if (ev.target.classList.contains("table__cell")) {
      getCellData(ev.target.firstElementChild);
    } else {
      getCellData(ev.target);
    }
  });

  function getCellData(elem) {
    let cellDataBox = document.querySelector(".cell-content"),
      cellData = elem.cloneNode(true);

    if (cellDataBox.childNodes.length != 0) {
      cellDataBox.removeChild(cellDataBox.firstChild);
      cellDataBox.appendChild(cellData);
    } else {
      cellDataBox.appendChild(cellData);
    }
  }
});
