// annotated because the array is empty on initialization
const carMakers: string[] = [];
// inferred type because we initialize the array with strings
const carMakers2 = [ 'ford', 'toyota', 'chevy' ];

const carsByMakeAnnotated: string[][] = [];

const carsByMakeInferred = [
  [ 'f150' ],
  [ 'corolla' ],
  [ 'camero' ],
];


// Help with inference when extracting values
const car0 = carMakers2[ 0 ];

const myCar = carMakers2.pop();

// Prevent incompatible values
carMakers2.push( 100 );


// Help with 'map'
carMakers2.map( ( car: string ): string => {
  return car;
} );

// Flexible type array

// inferred with multiple types
const importantDates = [ new Date(), '2030-10-10' ];
// annotated because it only is initialized with a date obj
const importantDates2: ( Date | string )[] = [ new Date() ];

