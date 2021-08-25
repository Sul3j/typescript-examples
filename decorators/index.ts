function assignId<T extends { new (...args: any[]): {}}>(classToDecorate: T) {
    return class extends classToDecorate {
        id: number;

        constructor(...args: any[]) {
            super(...args);
            this.id = Math.random();
        }
    }
}

@assignId
class Person {
    constructor(public firstname: string, public lastname: string) {}
}

const person = new Person("Jan", "Kowalski");


function minValue(value: number) {
    return function (
      target: Object,
      property: string,
      descriptor: PropertyDescriptor
    ) {
      console.log(target, property, descriptor);
  
      const orginalFunction = descriptor.value;
      const newFunction = function (this: Object, ...args: any[]) {
        console.log("Przekazano następujące parametry: " + args);
        if (args.some((coords) => coords < 0)) {
          return console.log("Błędne koordynaty dla punktu");
        }
  
        orginalFunction.apply(this, args);
      };
  
      descriptor.value = newFunction;
  
      return descriptor;
    };
  }
  
  function protectMethod() {
    return function (
      target: Object,
      property: string,
      descriptor: PropertyDescriptor
    ) {
      console.log(`Metoda: ${property} jest zabezpieczona przed nadpisaniem`);
      descriptor.writable = false;
  
      return descriptor;
    };
  }
  
  class Point {
    constructor(public x: number, public y: number) {}
  
    @protectMethod()
    @minValue(0)
    setPoint(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  
    showPoints() {
      console.log(`x: ${this.x}, y: ${this.y}`);
    }
  }
  
  const point = new Point(5, 9);
  // point.setPoint = function () {
  //   console.log('Zrobiłem kuku :)');
  // }
  point.setPoint(4, 6);
  point.showPoints();
  