const add = ( a: number, b: number ): number => {
  return a + b;
};


// even though the return is inferred, if you return the wrong value
// typescript will not let you know. So always annotate the return value
const subtract = ( a: number, b: number ) => {
  return a - b;
};

function divide ( a: number, b: number ): number {
  return a / b;
};

const multiply = function ( a: number, b: number ): number {
  return a * b;
};

// this is a function that does not return anything.
// A void function can return null and undefined.
const logger = ( message: string ): void => {
  console.log( message );
};

// this function will never complete completely and will never
// return anything ever
const throwError = ( message: string ): never => {
  throw new Error( message );
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ( { date, weather }: { date: Date, weather: string; } ): void => {
  console.log( date );
  console.log( weather );
};

logWeather( forecast );