/*1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.*/
 

let num=prompt('Ingrese un numero ')

function espar( num ){
if(num %2==0){
    console.log('es par')

} else {
    console.log('Es imPar')
}
}

console.log(espar(num))


/*2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales. */

let num1= prompt('ingrese el primer numero')
let num2=prompt('ingrese el segundo numero')

function IgualoMayor(num1,num2){
    if(num1>num2){
    console.log(num1 + ' es mayor')
    }
    else if (num2>num1){
     console.log(num2 + ' es mayor')

    }else{ num1==num2
        console.log( 'son iguales')
    }


}
console.log(IgualoMayor(num1,num2))



/*3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.*/

let esMultiplo= prompt('ingrese un numero')

function esMultiplode5(esMultiplo){
  if(esMultiplo % 5 == 0) {
    console.log('Es  multiplo de 5 el numero :' + esMultiplo)
  } else{
  console.log('No es multiplo de 5')
}
}
console.log(esMultiplode5(esMultiplo))


/*4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.*/


let numero=prompt('Ingrese un numero')


function  Todoslosnumeros( ){

for (let index = 0; index <= numero; index++) {
  
    console.log(index)
    
}
}
console.log(Todoslosnumeros(numero))

/*5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.*/ 

let num21=prompt('Ingrese el numero ')
let nombrenum21=prompt('ingrese en palabra el numero')


function palabraCantidad(num21, nombrenum21){
    console.log(num21 +' '+ nombrenum21)

}
console.log(palabraCantidad(num21,nombrenum21)) 


/* 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.


*/
let miarray= ["Apple", "Orange","hola"];

function valoresArray( miarray){

    console.log(miarray)


}

console.log(valoresArray(miarray))


/*7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".*/

let arraynum1= ["0", "1"," 2","3", "4"," 5","6", "7"," 8","9", "10"]

function imprimirArraymenos5ta( arraynum){
    
    for (let index = 0; index < arraynum1[4]; index++) {
        if (arraynum1[index] ??= arraynum1[4]) {
          console.log(arraynum1[index]);  
        }
        
       
    }
    
     
}
console.log(imprimirArraymenos5ta(arraynum1))

/*8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
*/

let arraynum= ["0", "1"," 2","3", "4"," 5","6", "7"," 8","9", "10"]
const num3=2
function imprimirArraymenos5ta(arraynum, num3){
    
    for (let index = 0; index <=arraynum[10]; index++) {
        console.log(arraynum[index]*num3);
       
    }
    
     
}
console.log(imprimirArraymenos5ta(arraynum,num3))



