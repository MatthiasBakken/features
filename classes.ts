class Vehicle {
  constructor(public color: string) {}

  protected drive (): void {
    console.log( 'chugga chugga' );
  };
  public honk (): void {
    console.log( 'beep' );
  };
};

const vehicle = new Vehicle('orange');
console.log( vehicle.color );

class Car extends Vehicle {
  constructor( public wheels: number, color: string ) {
    super( color );
  };
  // overriding methods of parent class
  drive (): void {
    console.log( 'vroom' );
  };

  private swerve (): void {
    console.log( 'Car starts swerving all over the road' );
  };

  startSwerving (): void {
    this.swerve();
  };
};

const ford = new Car( 4, 'white' );
console.log( ford.color );
ford.drive();
ford.honk();
ford.startSwerving();