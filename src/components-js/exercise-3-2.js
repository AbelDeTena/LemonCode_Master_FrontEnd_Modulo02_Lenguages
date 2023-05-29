//merge
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  return { ...target, ...source };
}

const result = merge(a, b);
const showResult = document.getElementById("merge-button");

showResult.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(
    `Ejercicio 3-2: Objetos originales: ${JSON.stringify(a)}, ${JSON.stringify(b)}, resultado merge => ${JSON.stringify(result)}`);
 
  })