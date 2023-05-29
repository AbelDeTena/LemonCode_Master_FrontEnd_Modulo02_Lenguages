//Tail
const tail = document.getElementById("tailButton");
const tailResult = document.getElementById("tailResult");
const cleanTail = document.getElementById("cleanTail");

tail.addEventListener("click", function (event) {
  event.preventDefault();

  const elementsInput = document.getElementById("tailElements");
  const myArray = elementsInput.value
    ? elementsInput.value.split(",")
    : ["1", "2", "3"];
  const [first, ...others] = myArray;
  tailResult.value = others;
  console.log(
    `Ejercicio 1-2: Array original:${myArray}, resultado tail => ${others}`
  );  
});

cleanTail.addEventListener("click", function (event) {
  event.preventDefault();

  const tailElementsInput = document.getElementById("tailElements");
  tailElementsInput.value = "";
  tailResult.value = "";
});
