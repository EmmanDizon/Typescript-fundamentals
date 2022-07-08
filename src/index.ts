let sales = 123_456_789;
let course = "TypeScript";
let is_published  = true;
let level;

function render(document: any) {
    console.log(document);
}
//arrays
let numbers: number[]  = [1, 2, 3];

//tuples
let user: [number, string] = [1, "Mosh"];

//enums

const enum Size {
    Small =1 , Medium, Large
}

let mySize: Size = Size.Medium;

//function

function calculateTax(income: number, taxYear = 2022): number {
    if(taxYear < 2022)
        return income * 1.2;

    return income * 1.3;    
}

calculateTax(50000, 2022);

//Object

//1. Messy way
let employee1: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = { id: 1, name: "Emman", retire:(date: Date)=> {
    console.log(date);
}}

//2. Refactor -> Better way
//- TYpe alias

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = { id: 1, name: "Emman", retire:(date: Date)=> {
    console.log(date);
}}

//- Union Type

function kgToLbs(weight: number | string): number {
    //narrowing

    if(typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;    
}

// type intersection

type Draggable = {
    drag:() => void,
}

type Resizable ={
    resize: () => void,
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {

    },
    resize:() => {

    }
}

//literal types (exact, specific)
type Quantity = 50 | 100;

let quantity: Quantity = 100;

// nullable types, you can turn off settings & accept null on tsconfig.json -> strictNullChecks": false,  
function greet(name: string | null | undefined) {
    if(name)
        console.log(name.toUpperCase());
    console.log("Hello !");    
}

greet(null);

//optional chaining

type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0);

console.log(customer?.birthday);

// optional element access operator
//customer?.[0]

//optional call
let log: any = null;

log?.("a");

//nullish coalescing operation

let speed: number | null = null;

let ride  = {
    speed: speed ?? 30
}

// the unkown
function renderUnknown(document: unknown) {
    //narrowing
    if(typeof document === "string") {
        document.toUpperCase();
    }

}

//never type
function processEvents(): never {
    while(true) {
        //read message from a queue
    }
}

processEvents();
console.log("Hello world");