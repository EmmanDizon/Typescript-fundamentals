"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let user = [1, "Mosh"];
let mySize = 2;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(50000, 2022);
let employee1 = { id: 1, name: "Emman", retire: (date) => {
        console.log(date);
    } };
let employee = { id: 1, name: "Emman", retire: (date) => {
        console.log(date);
    } };
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => {
    },
    resize: () => {
    }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    console.log("Hello !");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let log = null;
log === null || log === void 0 ? void 0 : log("a");
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
function renderUnknown(document) {
    if (typeof document === "string") {
        document.toUpperCase();
    }
}
function processEvents() {
    while (true) {
    }
}
processEvents();
console.log("Hello world");
//# sourceMappingURL=index.js.map