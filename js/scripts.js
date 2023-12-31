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

// Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const vowelsInUpperCase = word => {
  let newWord = '';
  for (const letter of word) {
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      newWord += letter.toUpperCase();
    } else {
      newWord += letter.toLowerCase();
    }
  }
  console.log(newWord);
};
vowelsInUpperCase('ejercicio');

// Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser:
//   a: 3,
//   e: 3,
//   i: 1,
//   o: 1,
//   u: 1
const numbersOfVowels = phrase => {
  let vocalA = 0;
  let vocalE = 0;
  let vocalI = 0;
  let vocalO = 0;
  let vocalU = 0;
  for (const letter of phrase) {
    if (letter === 'a' || letter === 'A') {
      vocalA++;
    } else if (letter === 'e' || letter === 'E') {
      vocalE++;
    } else if (letter === 'i' || letter === 'I') {
      vocalI++;
    } else if (letter === 'o' || letter === 'O') {
      vocalO++;
    } else if (letter === 'u' || letter === 'U') {
      vocalU++;
    }
  }
  console.log('a: ' + vocalA);
  console.log('e: ' + vocalE);
  console.log('i: ' + vocalI);
  console.log('o: ' + vocalO);
  console.log('u: ' + vocalU);
};
numbersOfVowels('Enrique ordeña cabras');

// Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"

const interspersedWords = (word1, word2) => {
  let newWord = '';
  let shortestWord;
  if (word1.length > word2.length) {
    shortestWord = word2;
  } else {
    shortestWord = word1;
  }
  for (let i = 0; i < shortestWord.length; i++) {
    newWord += word1[i] + word2[i];
  }
  console.log(newWord);
};
interspersedWords('hola', 'adios');

// Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM"

const reverseWord = word => {
  let newWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newWord = newWord + word.charAt(i);
  }
  console.log(newWord);
};

reverseWord('Mariposas');

// Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const evenOddNumbers = numbers => {
  let even = [];
  let odd = [];

  for (let i = 0; i < numbers.length; i++) {
    const randomNumber = Math.floor(Math.random() * numbers.length);
    const resultNumber = randomNumber * numbers[i];

    if (resultNumber % 2 === 0) {
      even.push(resultNumber);
    } else {
      odd.push(resultNumber);
    }
  }

  console.log(numbers);
  console.log(even);
  console.log(odd);
};

evenOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']

const firstLastLetters = words => {
  let newArray = [];
  for (let i = 0; i < words.length; i++) {
    newArray.push(
      words[i].charAt(0).toUpperCase(),
      words[i].charAt(words[i].length - 1).toUpperCase()
    );
  }

  console.log(newArray);
};

firstLastLetters(['hola', 'adios', 'gato', 'perro', 'casa']);
