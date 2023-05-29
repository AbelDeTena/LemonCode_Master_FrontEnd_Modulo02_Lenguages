//Head
const head = document.getElementById("headButton");
const headResult = document.getElementById("headResult");
const cleanHead = document.getElementById("cleanHead");

head.addEventListener("click", function (event) {
  event.preventDefault();

  const elementsInput = document.getElementById("headElements");
  const myArray = elementsInput.value
    ? elementsInput.value.split(",")
    : ["1", "2", "3"];
  const [first] = myArray;
  headResult.value = first;
  console.log(`Ejercicio 1-1: Array original:${myArray}, resultado head => ${first}`);
});

cleanHead.addEventListener("click", function (event) {
  event.preventDefault();

  const headElementsInput = document.getElementById("headElements");
  headElementsInput.value = "";
  headResult.value = "";
});