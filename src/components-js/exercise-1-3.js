//Init
const init = document.getElementById("initButton");
const initResult = document.getElementById("initResult");
const cleanInit = document.getElementById("cleanInit");

init.addEventListener("click", function (event) {
  event.preventDefault();

  const elementsInput = document.getElementById("initElements");
  const myArray = elementsInput.value
    ? elementsInput.value.split(",")
    : ["1", "2", "3"];
  const init = myArray.slice(0, -1);
  initResult.value = init;
  console.log(
    `Ejercicio 1-3: Array original:${myArray}, resultado init => ${init}`
  );
});

cleanInit.addEventListener("click", function (event) {
  event.preventDefault();

  const initElementsInput = document.getElementById("initElements");
  initElementsInput.value = "";
  initResult.value = "";
});
