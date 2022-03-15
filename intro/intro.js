console.log("\n**********Variables**********\n");
var numero1 = 4;
var numlet = "4";
var numero2 = 6;
console.log("Numero 1: " + numero1 + " Numero 2: " + numero2);

console.log("\n**********Cadenas**********\n");
var frase1 = "Ejemplo Comillas dobles";
var frase2 = "Ejemplo Comillas simples";
var frase3 = `Ejemplo Comillas ${numero2} invertidas`;

console.log(frase1 + "\n" + frase2 + "\n" + frase3);
console.log("\n**********Condicionales**********\n");
console.log(numero1 != numero2);
console.log(numero1 === numlet);
console.log(numero1 == numlet);
console.log((numero1 = numlet));
console.log(numero1 > numlet);

console.log("\n**********Operador Lógico AND**********\n");
console.log(true && false);
console.log("\n**********Operador Lógico OR**********\n");
console.log(true || false);

console.log("\n**********Arreglos(Vectores)**********\n");
let listaDeNumeros = [2, 3, 5, 7, 11, 234];

console.log(listaDeNumeros[5]);

listaDeNumeros.push(16);
listaDeNumeros.push(939);
console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

let listaDePalabras = ["Explorer", "MisionCommander", "LaunchX", "Innovaccion"];
console.log(listaDePalabras);
console.log(listaDePalabras.length);

let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);

console.log("\n**********Objetos**********\n");
let explorer = {
  nombre: "Nombre del Explorer",
  email: "Email@innovaccion.mx",
  numReg: 12345,
  mision: "FrontEnd",
  proyectos: ["Abogabot", "Pasteleria", "Taqueria", "Vacunacion"],
  proPer: {
    escolar: "tareas",
    profesional: "trabajo",
    personal: "negocio",
  },
};
console.log(explorer);
console.log(explorer.email);
console.log(explorer.proPer);

/* flujo condicional */
let number1 = 4;
let number2 = 2;
console.log("\n********** if / else **********\n");
if (number1 > number2) {
  console.log("El numero 1 es mayor que numero 2");
} else if (number1 == number2) {
  console.log("Los numeros son iguales");
} else {
  console.log("El numero 2 es mayor que numero 1");
}
/* ciclo condicional */
console.log("\n********** while **********\n");
let numberWhile = 0;
while (numberWhile <= 12) {
  console.log(numberWhile);
  numberWhile = numberWhile + 2;
}
console.log("Aqui ya salio del while " + numberWhile);

/* Ciclo condicional de una iteracion minimo */
console.log("\n********** Do while **********\n");
let numeroDowhile = 22;
do {
  numeroDowhile = numeroDowhile + 2;
  console.log(numeroDowhile);
} while (numeroDowhile < 20);
console.log("Aqui ya salio del Do while " + numeroDowhile);

/* ciclo dor con iteracion controlada */
console.log("\n********** For **********\n");
let numeroFor = 0;
for (numeroFor; numeroFor <= 12; numeroFor = numeroFor + 1) {
  console.log(numeroFor);
}
console.log("aqui salimos de FOR " + numeroFor);

/* Opcopnes para evitar anidar condicionales */
console.log("\n********** Switch **********\n");
switch (prompt("¿Como esta el clima?")) {
  case "lluvioso":
    console.log("no te vayas a mojar");
    break;
  case "soleado":
    console.log("ponte bloqueador");
    break;
  case "nublado":
    console.log("tapate bien");
    break;
  default:
    console.log("no se como esta el clima");
    break;
}
console.log("salimos del switch");
