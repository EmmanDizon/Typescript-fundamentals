"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(value) {
    return (constructor) => {
        console.log("Component decorator called");
        constructor.prototype.options = value;
        constructor.prototype.unique = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("Component insertInDOM called");
        };
    };
}
function Pipe(constructor) {
    console.log("Pipe decorator called");
    constructor.prototype.pipe = true;
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component({ selector: "#my-profile" }),
    Pipe
], ProfileComponent);
function LogDecorator(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("before");
        original.call(this, ...args);
        console.log("after");
    };
}
class PersonDecorator {
    say(message) {
        console.log(message);
    }
}
__decorate([
    LogDecorator
], PersonDecorator.prototype, "say", null);
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        if (typeof result === "string")
            return result.toUpperCase();
        return result;
    };
}
class AccessorPerson {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], AccessorPerson.prototype, "fullName", null);
let accessorPerson = new AccessorPerson("Emman", "Dizon");
console.log(accessorPerson.fullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() { return value; },
            set(newValue) {
                if (newValue.length < length) {
                    throw new Error(`${propertyName} should be at least ${length} characters long`);
                }
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class UserProperty {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], UserProperty.prototype, "password", void 0);
let useProperty = new UserProperty("123");
console.log(useProperty);
//# sourceMappingURL=decorators.js.map