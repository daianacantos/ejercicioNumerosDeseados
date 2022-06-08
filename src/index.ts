/*Estructuras de Datos – Arreglos
Ejercicio – Números Deseados
• Construya un algoritmo que tenga un arreglo de
dimensión 5 y llénelo con los números que el usuario
desee
• Muestre los números del arreglo al usuario*/

let numerosDeseados: number[] = new Array(5);
let i = 0;
for (i = 0; i < numerosDeseados.length; i++) {
  numerosDeseados[i] = Number(prompt(" ingrese numeros deseados"));

  console.log("los numeros del arreglo son:" + numerosDeseados[i]);
}
