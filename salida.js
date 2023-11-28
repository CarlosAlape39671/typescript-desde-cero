var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hola mundo");
// types
var myString = "Hola mundo";
myString = 23 + "";
var myNumber = 23;
var myBool = true || false;
var myVar = "Hola";
myVar = false;
// Strings
document.write(myNumber.toString());
// Arrays
var stringArray = ["", "", ""];
var numberArray = [1, 2, 3];
stringArray = [numberArray, 2, true, 1, 3];
console.log(stringArray);
// Tuple
var strNumTuple;
strNumTuple = ["Hola", 23];
strNumTuple = ["Hola2", 24];
strNumTuple = ["Hola2", 24];
// Void, undefined, null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
// Functions
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return "".concat(firstName, " ").concat(lastName);
}
document.write(getName("Carlos", "Alape Hernandez"));
// Otro tipo de funciones
function myVoidFunction() {
    return;
}
// function showTodo(todo: {title: string, text: string}) {
function showTodo(todo) {
    console.log("".concat(todo.title, " - ").concat(todo.text));
}
var myTodo = { title: 'Eat dinner', text: 'lorem' };
showTodo(myTodo);
// Clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log("".concat(this.name, " is registered!"));
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.ageInYears = function () {
        return this.age + " years";
    };
    User.prototype.payInvoice = function () {
        console.log("".concat(this.name, " paid invoice."));
    };
    return User;
}());
var carlos = new User("Carlos", "carlos.alape39671@ucaldas.edu.co", 23);
console.log(carlos.ageInYears());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    Member.prototype.getId = function () {
        return this.id;
    };
    return Member;
}(User));
var usuario = new Member(1, "Enrique", "carlos.alapehernandez@gmail.com", 23);
usuario.payInvoice();
