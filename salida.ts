// tst nombre.ts
// tst nombre.ts -w

console.log("Hola mundo");

// types

let myString: string = "Hola mundo";
myString = 23 + "";

let myNumber: number = 23;
let myBool: boolean = true || false;

let myVar: any = "Hola";
myVar = false;

// Strings

document.write(myNumber.toString());

// Arrays

let stringArray: any[] = ["","",""];
let numberArray: number[] = [1,2,3];
stringArray = [numberArray,2,true, 1, 3];
console.log(stringArray);

// Tuple

let strNumTuple: [string, number];
strNumTuple = ["Hola", 23];
strNumTuple = ["Hola2", 24];
strNumTuple = ["Hola2", 24];

// Void, undefined, null

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

// Functions

function getSum(num1: number, num2: number):number { // :number es el tipo de dato que retorna la función
    return num1 + num2;
}

let mySum = function(
    num1: number | string, 
    num2: number | string): number {
        if(typeof num1 == 'string') {
            num1 = parseInt(num1);
        }
        if(typeof num2 == 'string') {
            num2 = parseInt(num2);
        }
        return num1 + num2;
    }

function getName(firstName: string, lastName?: string): string { 
    if(lastName == undefined) {
        return firstName;
    }
    return `${firstName} ${lastName}`;
}

document.write(getName("Carlos", "Alape Hernandez"));

// Otro tipo de funciones

function myVoidFunction():void {
    return;
}

// Interfaces
interface ITodo {
    title: string;
    text: string;
}

// function showTodo(todo: {title: string, text: string}) {
function showTodo(todo: ITodo) {
    console.log(`${todo.title} - ${todo.text}`);   
}

let myTodo: ITodo = { title: 'Eat dinner', text: 'lorem' };

showTodo(myTodo);

// Clases

class User {
    private name: string;
    public email: string;
    protected age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register() {
        console.log(`${this.name} is registered!`);
    }

    showMeAge(): number {
        return this.age;
    }

    public ageInYears(): string {
        return this.age + " years";
    }

    payInvoice() {
        console.log(`${this.name} paid invoice.`);
    }
}

var carlos = new User("Carlos", "carlos.alape39671@ucaldas.edu.co", 23);
console.log(carlos.ageInYears());

class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice(): void {
        super.payInvoice();
    }

    getId(): number {
        return this.id;
    }
}

var usuario = new Member(1, "Enrique", "carlos.alapehernandez@gmail.com", 23);
usuario.payInvoice();