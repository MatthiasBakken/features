let apples: number = 5;

let speed: string = "fast";

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = [ 'red', 'green', 'blue' ];

let numbersArr: number[] = [ 1, 2, 3 ];

let booleans: boolean[] = [ true, true, false ];

// Classes
class Car1 {

}

let car: Car1 = new Car1();

// Object Literal
let point: { x: number; y: number; } = {
  x: 10,
  y: 20
};

// Function --- void because we are not returning anything
const logNumber: (i: number) => void = ( i ) => {
  console.log( i );
};

// When to use Annotations
// 1) Function that returns the 'any' type
const json = '[{"x": 10, "y": 20}, {"x": 3, "y": 6}, {"x": 2, "y": 9}, {"x": 22, "y": 32}]';
const coordinates: [{ x: number; y: number }] = JSON.parse( json );
console.log( coordinates );

// 2) When we declare a var on one line and initialize it on another
let words = [ 'red', 'green', 'blue' ];
let foundWord: boolean;

for ( let i = 0; i < words.length; i++ ) {
  if ( words[ i ] === 'green' ) {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [ -10, -1, 12 ];
let numberAboveZero: boolean | number = false;

for ( let i = 0; i < numbers.length; i++ ) {
  if ( numbers[ i ] > 0 ) {
    numberAboveZero = numbers[ i ];
  };
};

