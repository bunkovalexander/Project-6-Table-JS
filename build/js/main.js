let tableHeader = document.getElementById("tableHeader");
let tBody = tableHeader.parentElement;
let rows = document.querySelectorAll(".row");
let inputPrice = document.getElementsByName("price");

tBody.addEventListener("click", function (e) {
  let target = e.target;
  let targetParent = e.target.parentElement;
  let targetGrParent = targetParent.parentElement;

  let rowInd = targetGrParent.rowIndex;

  if (target.classList.contains("create") && rows.length < 10) {
    inputPrice = document.getElementsByName("price");

    let clone = targetGrParent.cloneNode(true);
    let ch = targetGrParent.querySelector(".name");

    function insertAfter(referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    insertAfter(targetGrParent, clone);

    rows = document.querySelectorAll(".row");
  } else if (
    target.classList.contains("delete") &&
    rows.length < 11 &&
    rows.length > 1
  ) {
    targetGrParent.remove();
    rows = document.querySelectorAll(".row");
  } else if (
    target.classList.contains("up") &&
    rows.length < 11 &&
    rows.length > 1 &&
    rowInd != 1
  ) {
    rowInd = targetGrParent.rowIndex;

    let rowDown = rows[rowInd - 2];

    rows = document.querySelectorAll(".row");
    let cloneElement = targetGrParent.cloneNode(true);

    function insertAfter(referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    insertAfter(targetGrParent, rowDown);

    rows = document.querySelectorAll(".row");

    rows = document.querySelectorAll(".row");
  } else if (
    target.classList.contains("down") &&
    rows.length < 11 &&
    rows.length > 1 &&
    rowInd !== rows.length
  ) {
    let rowInd = targetGrParent.rowIndex;

    cloneElement = targetGrParent.cloneNode(true);

    function insertAfter(referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    let rowUp = rows[rowInd];
    insertAfter(rowUp, cloneElement);

    rows = document.querySelectorAll(".row");

    targetGrParent.remove();
    rows = document.querySelectorAll(".row");
  } else {
    return;
  }
});

let priceValue;
let quantityValue;
let quantityRowIndex;
let priceRowIndex;
let table = document.getElementById("table");

table.addEventListener("input", function name(e) {
  let inputGrParent = e.target.parentElement.parentElement;
  let inRowNumber = inputGrParent.rowIndex;
  let inputResult = inputGrParent.querySelector(".result");
  let resultGrParent = inputResult.parentElement.parentElement;
  let resultRowNumber = resultGrParent.rowIndex;

  let result = quantityValue * priceValue;

  if (e.target.classList.contains("price")) {
    priceValue = e.target.value;
    quantityValue = inputGrParent.querySelector(".quantity").value;

    inRowNumber = inputGrParent.rowIndex;
    result = quantityValue * priceValue;
    if (isNaN(result) == false && result != 0) {
      inputResult.value = result;
    }
  } else if (e.target.classList.contains("quantity")) {
    quantityValue = e.target.value;

    quantityValue = e.target.value;
    priceValue = inputGrParent.querySelector(".price").value;
    result = quantityValue * priceValue;
    if (isNaN(result) == false && result != 0) {
      inputResult.value = result;
    }
  }
});

function total() {
  let inputTotal = document.getElementById("total");
  let result = document.getElementsByClassName("result");
  let numbers = [];

  for (let i = 0; i < result.length; i++) {
    numbers.push(result[i].value);
  }
  inputTotal.value = sumArr(numbers) + " " + "руб.";
  function sumArr(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
      x += +arr[i];
    }
    return x;
  }
}
table.addEventListener("input", total);
table.addEventListener("click", total);
window.addEventListener("load", total);
