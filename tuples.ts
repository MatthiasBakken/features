// object of a drink
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};


// type alias
type Drink = [ string, boolean, number ];
// tuple of pepsi
const pepsi: [ string, boolean, number ] = [ 'brown', true, 40 ];

const sprite: Drink = [ 'clear', true, 40 ];

const tea: Drink = [ 'light brown', false, 0 ];

// why tuples are not used often...what do these numbers mean?
const carSpecs: [ number, number ] = [ 400, 3354 ];
// with an object you can understand at a glance
const carStats = {
  horsepower: 400,
  weight: 3354,
};

// tuples can be more useful if you want information with hidden keys that you have documented outside of the code base