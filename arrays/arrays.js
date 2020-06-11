const readline = require ('readlinesync')


//EJERCICIOS 1 Y 2//


const ej1 = () => {
  let aux = 0

  for( let i = 0 ; i<5; i++) {
    let nro = Number(readline.question('ingrese un nro'));
    aux = aux + Number(nro);
  }
  return (aux)
}

const ej2 = () => {
  let aux = 0

    for( let i = 0 ; i<5; i++) {
        let nro = Number(readline.question('ingrese un nro'));
        if (nro > aux) {
          aux = nro
        }
      }
  return (aux)
  }

  const ej3 = () => {
    let arr = [] ;
  
      for( let i = 0 ; i<5; i++) {
          let nro = Number(readline.question('ingrese un nro'));
          arr = push(nro)
        }
    return (arr)
    }

const ej4 = () => {
  let arr = [] ;

    while( arr.length < 5) {
        let nro = Math.floor(Math.random()*10);
        if(arr.includes(nro)){ 
            arr = push(nro)
        }
      }
  return (arr)
  }

  const ej5 = char => {
    let arr = ['a', 'b', 'c','d','e'] ;

    for( let i = 0 ; i<3 ; i++) {
      let char = readline.question('ingrese una letra');
      return arr.includes[char]
    }
  }
      
      

const result1 = ej1() ;
console.log(result1);

const result2 = ej2() ;
console.log(result2);

const result3 = ej3() ;
console.log(result3);

const result4 = ej4() ;
console.log(result4);

const result5 = ej5() ;
console.log(result5);
/*
let numeros = [1,8,6,4,5]
let suma = 0
let max = 0


for (let index = 0; index < numeros.length; index++) {
    suma = suma + numeros[index]
    if (numeros[index]>max) {
        max = numeros[index]
    }
    max
    
}
console.log('la suma es:')
console.log(suma)
console.log('el mayor número es:')
console.log(max)

//EJERCICIO 3 //

let ingresos = []

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

for (let i = 0; i < 5; i++) {
    

rl.question('ingrese un nro ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`ud ingreso: ${answer}`);
    ingresos.push(answer)
  
});
rl.close();   
}

// EJERCICIO 4 //

let arreglo = []


for (i = 0; i < 5; i++) {
    arreglo[i] = Math.random() 
    while (instanceof(arreglo[i]) != -1) {
    arreglo[i] = Math.random()
    }
}
*/
