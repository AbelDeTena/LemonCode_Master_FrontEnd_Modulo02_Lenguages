//optional concat
const concatOptional = document.getElementById("concatOptionalButton");
const concatOptionalResult = document.getElementById("concatOptionalResult");
const cleanConcatOptional = document.getElementById("cleanConcatOptional");

concatOptional.addEventListener("click", function (event) {
  event.preventDefault();

  const elementsInput1 = document.getElementById("concatOptionalElements1");
  const myArray1 = elementsInput1.value
    ? elementsInput1.value.split(",")
    : ["1", "2", "3"];
  const elementsInput2 = document.getElementById("concatOptionalElements2");
  const myArray2 = elementsInput2.value
    ? elementsInput2.value.split(",")
    : ["1", "2", "3"];
  const elementsInput3 = document.getElementById("concatOptionalElements3");
  const myArray3 = elementsInput2.value
    ? elementsInput3.value.split(",")
    : ["1", "2", "3"];

  const optionalConcat = (...arrays) =>
    arrays.reduce((acc, currentValue) => [...acc, ...currentValue], []);
  const result = optionalConcat(myArray1, myArray2, myArray3);
  concatOptionalResult.value = result;
  console.log(
    `Ejercicio 2-1: Arrays originales:${myArray1}, ${myArray2}, ${myArray3} resultado concatOptional => ${result}`
  );
});

cleanConcatOptional.addEventListener("click", function (event) {
  event.preventDefault();

  const concatOptionalElementsInput = document.getElementById("lastElements");
  concatOptionalElementsInput.value = "";
  concatOptionalResult.value = "";
});
