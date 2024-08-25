//1. Array Operations
const array = ["Aarti", 29, true];

//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
const head = ([first]) => {
  return first;
};
console.log(head(array));

//Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
const tail = ([_first, ...others]) => {
  return others;
};
console.log(tail(array));

//Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
const init = (array) => {
  return array.slice(0, -1);
};

console.log(init(array));

//Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
const last = (array) => {
  return array.slice(-1);
};

console.log(last(array));

//2.Concat

//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const concat = (a, b) => {
  return [...a, ...b];
};

console.log(concat(array1, array2));

//Opcional
const array3 = ["hola", "mi", "nombre", "es"];
const array4 = [10, "Aarti", 11, 12];

const concatMulti = (...arrays) => {
  return arrays.reduce((result, array) => [...result, ...array], []);
};
console.log(concatMulti(array1, array2, array3, array4, [6, 8, 9]));

//3. Clone Merge

//Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
function clone(source) {
  return [...source];
}

const original = ["one", "two", "three"];
const copy = clone(original);

console.log(original);
console.log(copy);

//Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
function merge(source, target) {
  return { ...source, ...target };
}

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

const rslt = merge(b, a);

console.log(rslt);

//4. Read Books

//Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
function isBookRead(books, titleToSearch) {
  const book = books.find((book) => book.title === titleToSearch);
  return book ? book.isRead : false;
}

var books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

//5.Slot Machine

class SlothMachine {
  constructor() {
    this.coins = 0;
  }

  randomBoolean() {
    return Math.random() >= 0.5;
  }

  play() {
    this.coins++;

    const bool1 = this.randomBoolean();
    const bool2 = this.randomBoolean();
    const bool3 = this.randomBoolean();

    if (bool1 && bool2 && bool3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
machine1.play();
