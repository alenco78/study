//
// sort es nlogn
// Cuando se compara desde el 2do elemento de un array, usar en el for i=1; i<arr.length
// Cuando es desde cero, usar i=0; i< arr.length-1 

// Para la suma de todos los numeros hasta n =
// ( n * (n+1)) / 2

// sort array of numbers
// arr.sort((a,b) =: a-b)

// sort intervals 
// intervals.sort((a,b) => a[0]- b[0])

// binary search for log(n) complexity

// bFs recorre o busca nodos de un grafo

// Pattern: Sliding window
/*
let start = string[0]
let end = string[0]
let soFar = 0;
let Max = 0;

========
El objetivo es ahorrarse la suma previa conforme se avanza en el array
let currSum = 0;
let maxSeen = -Infinity;


*/

// subarray is a contiguous non-empty sequence of elements within an array
// substring is contiguos chars 'pwwkew' -> 'wke'
// subsequence es salteado 'pwwkew' -> 'pwke'

// const map = new Map() ------> Conserva el orden en el que se insertan las llaves valor
// this.map.get(key) -------> Obtienen una llave
// this.map.delete(key) ----> Borra una llave
// this.map.set(key, value)-> Agrega llave-valor al final
// this.map.size

// En una matriz bidimensional cuadrada:
// matrix rows = matrix.length
// matrix cols = matrix[0].length

// Para crear una tabla vacía:
// let result = Array.from({ length: rows }, () => Array(cols).fill(0));

// Cuando sorted array, pensar en binary search

// Cuando los valores de un array [1-n]
// se puede usar el valor apuntando al idx del arr
// cambiar el value a negativo y si se vuelve a scanear,
// el value es duplicado


// Cuando sea un array [1,n], pensar en que cada value apunta a un indice
// Cambiar los values a negativo y así se sabe que es negativo
// Se pueden usar los values para keep track of things



// Para saber el # de elementos de una matrix bidimensional,
// Multiplicar rows * cols

// Given a 2D matrix represented as matrix, you can access an element at position [i][j] by converting a 1D index to 2D using the following formula:

// Row index i: Math.floor(index / cols)
// Column index j: index % cols





// ============ Javascript === Math, Number, Chars in str, Hash ====================
/*
El mínimo entre 2 valores Math.min(height[left], height[right])
El máximo entre 2 valores Math.max(-10, -1)
Math.pow(2, 31) => Math.pow(base, exponent)

Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(99999999999999999999999); // true
Borrar espacios en string = '    asdkajwdk  asdf asd  '.replace(/\s/g, '');    ==> 'asdkajwdkasdfasd'

array.reverse()


*/

// ======= Hash en JS ======

/*
Acceder a un valor usando una clave
console.log(hash["key1"]); // Salida: "value1"

Agregar una nueva clave-valor
hash["key4"] = "value4";

Eliminar una clave-valor
delete hash["key2"];

// Verificar si una clave existe
console.log("key3" in hash); // Salida: true

// Recorrer todas las claves y valores
for (let key in hash) {
    console.log(key + ": " + hash[key]);
}


const str = "Geeks";
for (const char of str) {
    console.log(char);
};


Palyndromes
odd or even
aba or bddb


Cuando se quiere detectar un número faltante/repetido contando hasta n
Usar la fórmula de (n*n+1) /2
*/


/*

Para convertir str de numeros a array:
let digitsArr = digits.split('').map(Number);
resultado = [1, 2, 3, 4, 8, 7, 6];


Para hacer las combinaciones de elementos de arrays en JS:

const charSet = [["A", "B"],["C", "D", "E"],["F", "G", "H", "I"]];
console.log(charSet.reduce((a,b)=>a.flatMap(x=>b.map(y=>x+y)),['']))
resultado =
[
  "ACF","ACG","ACH","ACI","ADF","ADG","ADH","ADI","AEF","AEG","AEH","AEI",
  "BCF","BCG","BCH","BCI","BDF","BDG","BDH","BDI","BEF","BEG","BEH","BEI"
]
*/


// ============ Data Structures ====================

// Most common Data Structures
// arrary, linked-list, hashMap(clave: valor), binary trees, graphs 

// En una linked list
// Si es addition, substraction, insertion or deletion
// Intentar usar un dummy node al principio de la linked list para tener un elemento anterior al primero
// Y en el último elemento apuntar a null


// ============ Algorithms =========================

/*
Permutations, State Space Tree, All possible solutions, subsets, combinations ====> Backtracking

Floyd Warshall All Pairs Shortest Path Algorithm


*/



// ============ Leetcode ==========================

/*

48. Rotate Image
Medium
Topics
Companies
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Solution:
Col <-> Rows and reverse rows



73. Set matrix zeroes
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Solution:
Recorrer todo el array, fixear position de zero y recorrer rows y cols fixeando y cambiar zeros


189. Rotate array 
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Solution:
1) Rotate array
2) Rotate to k index
3) Rotate rest


287. Find the duplicate number ====> gSum = ((n-1)*(n)) / 2;  nSum = nums.reduce((acc+el) => acc + el, 0); result = nSum - gSum;

796. Rotate string ===> duplicar string y buscar con includes 'abcde'.includes('abc')


977. Squares of sorted array
En orden ascendente, regresar arr de los squares en orden ascendente


*/