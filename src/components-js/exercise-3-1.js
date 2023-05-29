//clone
const myObject = {
  name: "Abel",
  surName: "De Tena Torres",
};

function clone(source) {
  return { ...source };
}
const myCloneObject = clone(myObject);

const showResult = document.getElementById("clone-button");

showResult.addEventListener("click", function (event) {
  event.preventDefault();
console.log(
    `Ejercicio 3-1: Objeto original: ${JSON.stringify(myObject)}, resultado clone => ${JSON.stringify(myCloneObject)}`);
})