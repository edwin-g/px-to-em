// Inputs DOM
let basePxInput = document.getElementById("basePxInput");
let pxInput = document.getElementById("pxInput");
let emInput = document.getElementById("emInput");

// Set initial value for basePxInput
basePxInput.value = 16;

let pxToEm = (basePx, px) => {
  let em = px / basePx;
  return em.toFixed(3);
};

let emToPx = (basePx, em) => {
  let px = em * basePx;
  return px;
};

// Reset em and px input if base input value change
basePxInput.addEventListener("input", () => {
  pxInput.value = "";
  emInput.value = "";
});

// Trigger pxToEm() on every changement of px the input
pxInput.addEventListener("input", () => {
  if (pxInput.value != "" && basePxInput.value != "") {
    emInput.value = pxToEm(basePxInput.value, pxInput.value);
  }
  // Reset input if empty
  if (pxInput.value == "") {
    emInput.value = "";
  }
});

// Trigger emToPx() on every changement of em the input
emInput.addEventListener("input", () => {
  if (emInput.value != "" && basePxInput.value != "") {
    pxInput.value = emToPx(basePxInput.value, emInput.value);
  }
  // Reset input if empty
  if (emInput.value == "") {
    pxInput.value = "";
  }
});
