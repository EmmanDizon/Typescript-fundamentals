class Account {
 
    constructor(public readonly id: number, 
        public owner: string, 
        public _balance: number) {
     
    } //special function used for initializing object

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        if (value < 0)
            throw new Error("Invalid Value");
        
        this._balance = value;
    }

    deposit(amount: number): void {
        if(amount <= 0) {
            throw new Error("Invalid amount");
        }

        this._balance  += amount;
    }
}

//creating oobject

let account = new Account(1, "Emman", 0);

account.balance = 1000;

console.log(account);


//  index signatures -> add to objects dynamically

class seatAssignment {
 
    [seatNumber: string]: string;
}

let seats = new seatAssignment();

seats.A1 = "Emman";
seats.A2 = "Geraldine";

//static members

class Ride {
   private static _activeRides: number = 0;

   start() {
       Ride._activeRides ++;
   }

   stop() {
       Ride._activeRides --;
   }

   static get activeRides() {
    return Ride._activeRides;
   }

}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

// inheritance
class Person {
    constructor(public firstName: string,
        public lastName: string) {};

        get fullName() {
            return this.firstName + " " + this.lastName;
        }

        walk() {
            console.log("walking");
        }
}

class Student extends Person {
    constructor(public studentId: number,
         firstName: string,
         lastName: string) {
        super(firstName, lastName) //reference based class
    }

    takeTest() {
        console.log("Taking a test");
    }
}

let student = new Student(1, "Emman", "Dizon");

// method overriding

class Teacher extends Person {

   override get fullName() {
        return "Professor " + super.fullName;
    }
}

let teacher = new Teacher("Emman", "Dizon");
console.log(teacher.fullName);

//polymorphism

function printNames(people: Person[]) {
    for(let person of people)
        console.log(person.fullName);
}

printNames([
    new Student(1, "Emman", "Dizon"),
    new Teacher("Geraldine", "Selga")
])

//protected, inherited. private, not

//abstract classes ad methods
abstract class Shape {
    constructor(public color: string){}

    abstract render(): void;
}

 class Circle extends Shape {
    constructor(public radius: number, color: string){
        super(color);
    }

    override render(): void {
        console.log("Rendering a circle");
    }
}

// interfaces -> to define the shape of objects
//abstract class Calendar {
//    constructor(public name: string){}

//    abstract addEvent(): void;
 //   abstract removeEvent(): void;
//}

interface Calendar {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface CloudCalendar extends Calendar{
    sync(): void;
}

class GoogleCalendar implements Calendar {
    constructor(public name: string){}
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }

}
