/* Importar libreria de operaciones */
import {sumar, dividir, multiplicar, restar} from "./lib/operaciones";

/* Instanciar constantes numericas */
const num1 = 10;
const num2 = 5;

/* Mostar nuestros resultados */
console.log(`La suma de ${num1} y ${num2} es: ${sumar(num1, num2)}`);
console.log(`La resta de ${num1} y ${num2} es: ${restar(num1, num2)}`);
console.log(`La multiplicación de ${num1} y ${num2} es: ${multiplicar(num1, num2)}`);
console.log(`La division de ${num1} y ${num2} es: ${dividir(num1, num2)}`);