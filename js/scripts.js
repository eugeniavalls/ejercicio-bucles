// Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.

const number = 10;
for (let i = number; i >= 0; i--) {
  console.log(i);
}

// Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const sumArray = numbers => {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result = result + numbers[i];
  }
  console.log(result);
};

sumArray([5, 6, 7, 8, 9, 10]);

// Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

//   4 x 0 = 0
//   4 x 1 = 4
//   4 x 2 = 8
//   4 x 3 = 12
//   4 x 4 = 16
//   4 x 5 = 20
//   4 x 6 = 24
//   4 x 7 = 28
//   4 x 8 = 32
//   4 x 9 = 36
//   4 x 10 = 40

const multiplyNumber = number => {
  for (let i = 0; i <= 10; i++) {
    console.log(number + ' x ' + i + ' = ' + number * i);
  }
};

multiplyNumber(4);

// Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

//   4 x 10 = 40
//   4 x 9 = 36
//   4 x 8 = 32
//   4 x 7 = 28
//   4 x 6 = 24
//   4 x 5 = 20
//   4 x 4 = 16
//   4 x 3 = 12
//   4 x 2 = 8
//   4 x 1 = 4
//   4 x 0 = 0

const inverseMultiplication = number => {
  for (let i = 10; i >= 0; i--) {
    console.log(number + ' x ' + i + ' = ' + number * i);
  }
};

inverseMultiplication(4);

// Crea una función que reciba el año actual y tu edad, la función debe imprimir:

//   - "naciste en el año X"
//   - "En el año X cumpliste 1 año"
//   - "En el año X cumpliste 2 años"
//   - "En el año X cumpliste 3 años"
//     ....

const year = (year, age) => {
  console.log('Naciste en el año ' + (year - age));
  console.log('En el año ' + (year - age + 1) + ' cumpliste ' + 1 + ' año');
  for (let i = age - 2; i >= 0; i--) {
    console.log(
      'En el año ' + (year - i) + ' cumpliste ' + (age - i) + ' años'
    );
  }
};

year(2023, 23);

// Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

const pairNumbers = (number1, number2) => {
  for (let i = number1; i <= number2; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

pairNumbers(2, 12);

// Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.

const randomNumbers = () => {
  const array1 = [];
  const array2 = [];
  for (let i = 0; i < 5; i++) {
    const random1 = Math.floor(Math.random() * 5);
    const random2 = Math.floor(Math.random() * 5);
    array1.push(random1);
    array2.push(random2);

    if (random1 === random2) {
      console.log('El número ' + random1 + ' se repite');
    }
  }
  console.log(array1);
  console.log(array2);
};

randomNumbers();

// Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo

const primeNumber = number => {
  let isPrime = true;
  for (let i = number - 1; i >= 2; i--) {
    if (number % i === 0) {
      isPrime = false;
    }
  }

  if (isPrime) {
    console.log('El número es primo');
  } else {
    console.log('El número no es primo');
  }
};

primeNumber(21);

// Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".
//   Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)

const powNumber = numbers => {
  for (let i = 0; i <= 9; i++) {
    const squareNumbers = Math.pow(numbers[i], 2);
    const cubeNumbers = Math.pow(numbers[i], 3);

    console.log(
      'Número: ' +
        numbers[i] +
        ' - Cuadrado: ' +
        squareNumbers +
        ' - Cubo: ' +
        cubeNumbers
    );
  }
};

powNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
