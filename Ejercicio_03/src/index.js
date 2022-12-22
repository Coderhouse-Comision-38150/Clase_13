"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Importar libreria de operaciones */
const operaciones_1 = require("./lib/operaciones");
/* Instanciar constantes numericas */
const num1 = 10;
const num2 = 5;
/* Mostar nuestros resultados */
console.log(`La suma de ${num1} y ${num2} es: ${(0, operaciones_1.sumar)(num1, num2)}`);
console.log(`La resta de ${num1} y ${num2} es: ${(0, operaciones_1.restar)(num1, num2)}`);
console.log(`La multiplicación de ${num1} y ${num2} es: ${(0, operaciones_1.multiplicar)(num1, num2)}`);
console.log(`La division de ${num1} y ${num2} es: ${(0, operaciones_1.dividir)(num1, num2)}`);
