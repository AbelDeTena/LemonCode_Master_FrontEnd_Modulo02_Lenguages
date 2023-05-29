//Last
const last = document.getElementById("lastButton");
const lastResult = document.getElementById("lastResult");
const cleanLast = document.getElementById("cleanLast");

last.addEventListener("click", function (event) {
  event.preventDefault();

  const elementsInput = document.getElementById("lastElements");
  const myArray = elementsInput.value
    ? elementsInput.value.split(",")
    : ["1", "2", "3"];
  const last = myArray.slice(-1);
  lastResult.value = last;
  console.log(
    `Ejercicio 1-4: Array original:${myArray}, resultado last => ${last}`
  );
});

cleanLast.addEventListener("click", function (event) {
  event.preventDefault();

  const lastElementsInput = document.getElementById("lastElements");
  lastElementsInput.value = "";
  lastResult.value = "";
});
