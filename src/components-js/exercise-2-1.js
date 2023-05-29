//Concat
const concat = document.getElementById("concatButton");
const concatResult = document.getElementById("concatResult");
const cleanConcat = document.getElementById("cleanConcat");

concat.addEventListener("click", function (event) {
  event.preventDefault();

  const elementsInput1 = document.getElementById("concatElements1");
  const myArray1 = elementsInput1.value
    ? elementsInput1.value.split(",")
    : ["1", "2", "3"];
  const elementsInput2 = document.getElementById("concatElements2");
  const myArray2 = elementsInput2.value
    ? elementsInput2.value.split(",")
    : ["1", "2", "3"];

  const concat = (a, b) => [...a, ...b];
  const result = concat(myArray1, myArray2);
  concatResult.value = result;
  console.log(
    `Ejercicio 2-1: Arrays originales:${myArray1}, ${myArray2}, resultado concat => ${result}`
  );
});

cleanConcat.addEventListener("click", function (event) {
  event.preventDefault();

  const concatElementsInput = document.getElementById("lastElements");
  concatElementsInput.value = "";
  concatResult.value = "";
});
