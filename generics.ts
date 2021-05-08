class ArrayOfNumbers {
  constructor( public collection: number[] ) { };

  get ( index: number ): number {
    return this.collection[ index ];
  }
};

class ArrayOfStrings {
  constructor( public collection: string[] ) { };

  get ( index: number ): string {
    return this.collection[ index ];
  }
};

// Generic Class
class ArrayOfAnything<T> {
  constructor( public collection: T[] ) { };

  get ( index: number ): T {
    return this.collection[ index ];
  }
};
// assigning type to generic class when instanciating
const arr = new ArrayOfAnything<string>( [ 'a', 'b', 'c' ] );


function printStrings (arr: string[]):void {
  for ( let i = 0; i < arr.length; i++ ) {
    console.log( arr[ i ] );
  };
};

function printNumbers (arr: number[]): void {
  for ( let i = 0; i < arr.length; i++ ) {
    console.log( arr[ i ] );
  };
};
// using a generic here allows me to do both the above print funcs
// with a single function. We can choose the type on use
function printAnything<T> ( arr: T[] ): void {
  for ( let i = 0; i < arr.length; i++ ) {
    console.log( arr[ i ] );
  };
};
// typescript can infer what type it is, but it is best practice to
// explicitely give the type to the generic on instanciation
printAnything<string>( [ 'a', 'b', 'c' ] );


class House {
  print () {
    console.log( 'I am a house' );
  };
};

interface Printable {
  print (): void;
}

// using the interface and then extending T with it, is giving 
// the function a promise that whatever we pass to it, will
// indeed have a print function. Otherwise it would give an error
function printHousesOrCars<T extends Printable> ( arr: T[] ): void {
  for ( let i = 0; i < arr.length; i++ ) {
    arr[ i ].print();
  };
};

printHousesOrCars<House>( [ new House(), new House() ] );