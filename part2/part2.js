console.log("=============== Funciones ===============");
console.log("********* Funcion cuadrado ***********");
const cuadrado = function (x) {
  return x * x;
};
console.log(cuadrado(12));
console.log("********* Funcion ruido ***********");
const ruido = function () {
  console.log("kataplum!");
};

ruido();

console.log("********* Funcion exponencial ***********");
const exponencial = function (base, exponente) {
  let resultado = 1;
  for (let i = 0; i < exponente; i++) {
    resultado *= base;
  }
  return resultado;
};
console.log(exponencial(3, 3));
console.log("********* Funcion sumar ***********");
console.log(sumar(2, 2));
function sumar(x, y) {
  return x + y;
}
console.log("********* Funcion restar ***********");
const restar = (a, b) => {
  return a - b;
};
console.log(restar(4, 8));
console.log("********* Funcion saludar ***********");
function saludar(quien) {
  console.log("hola " + quien);
}
saludar("explorer");
console.log("bye");

//Excepciones
console.log("********* Excepciones ***********");
function preguntaDireccion(pregunta) {
  let result = prompt(pregunta);
  if (result.toLowerCase() == "izquierda") return "I";
  if (result.toLowerCase() == "derecha") return "D";
  throw new Error("Direccion invalida: " + result);
}

function mirar() {
  if (preguntaDireccion("a que lado?") == "I") {
    return "una casa";
  } else {
    return "dos osos molestos";
  }
}

try {
  console.log("Mira a ", mirar());
} catch (error) {
  console.log("hubo un error: " + error);
}
