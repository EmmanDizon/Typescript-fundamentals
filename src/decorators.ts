type componentOptions = {
    selector: string
}


function Component(value: componentOptions) {
   return (constructor: Function) => {
        console.log("Component decorator called");
        constructor.prototype.options = value;
        constructor.prototype.unique = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("Component insertInDOM called");
        }
    }  
}

function Pipe(constructor: Function) {
    console.log("Pipe decorator called");
    constructor.prototype.pipe = true;
}

@Component({selector: "#my-profile"})
@Pipe
class ProfileComponent {

}

//method decorator
function LogDecorator(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as Function;

    descriptor.value = function(...args: any) {
        console.log("before");
        original.call(this, ...args);
        console.log("after");
    }
}

class PersonDecorator {
    @LogDecorator
    say(message: string) {
        console.log(message);
    }
}

//Accessor decorators 

function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;

    descriptor.get = function() {
       const result = original?.call(this);
       if (typeof result === "string") return result.toUpperCase();
       return result;
    }
}
class AccessorPerson {
    constructor(public firstName: string, public lastName: string){}

    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let accessorPerson = new AccessorPerson("Emman", "Dizon");
console.log(accessorPerson.fullName)

//property decorators
function MinLength(length: number) {
    return (target: any, propertyName: string) => {
        let value: string;

        const descriptor: PropertyDescriptor = {
            get() {return value;},

            set(newValue: string){
                if(newValue.length < length) {
                    throw new Error(`${propertyName} should be at least ${length} characters long`);
                }
                value = newValue;
            }
        }
        Object.defineProperty(target, propertyName, descriptor);
    }

}

class UserProperty {
    @MinLength(4)
    password: string;

    constructor(password: string) {
        this.password = password;
    }
}

let useProperty = new UserProperty("123");
console.log(useProperty);