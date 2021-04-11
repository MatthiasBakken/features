interface IReportable {
  summary (): string;
}

interface IVehicle extends IReportable {
  model: string;
  date: Date;
  broken: boolean;
}

interface IDrink extends IReportable {
  color: string;
  carbonated: boolean;
  sugar: number;
};

const oldCivic = {
  model: 'civic',
  date: new Date(),
  broken: true,
  summary (): string {
    return `Model: ${this.model}`
  }
};

const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary (): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// function using an interface
const printVehicle2 = ( vehicle: IVehicle ): void => {
  console.log( `Model: ${vehicle.model}` );
  console.log( `Year: ${vehicle.date}` );
  console.log( `Broken: ${vehicle.broken}` );
  console.log( vehicle.summary() );
};

printVehicle2( oldCivic );

// function taking an object without an interface
const printVehicle = ( vehicle: { model: string, date: Date, broken: boolean; summary (): string; } ): void => {
  console.log( `Model: ${vehicle.model}` );
  console.log( `Year: ${vehicle.date}` );
  console.log( `Broken: ${vehicle.broken}` );
  console.log( vehicle.summary() );
};

printVehicle( oldCivic );

const printDrink = ( drink: IDrink ): void => {
  console.log( `Color: ${drink.color}` );
  console.log( `Carbonated: ${drink.carbonated}` );
  console.log( `Sugar: ${drink.sugar}` );
  console.log( drink.summary() );
};

printDrink( drink2 );

const printSummary = ( summary: IReportable ): void => {
  console.log( summary.summary() );
};

printSummary( drink2 );
printSummary( oldCivic );