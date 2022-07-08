//generics classes
class keyValuePAir<K, V> {
    constructor(public key: K, public value: V) {}
}

let pair = new keyValuePAir("id", 1);

//generic function

class ArrayUtils {
     static wrapInArray<T>(value: T) {
        return[value];
    }
}

let number = ArrayUtils.wrapInArray(1);

//interfaces
//users endpoint & products

interface Result<T> {
    data: T | null,
    error: string | null;
}

function fetch<T>(url: string): Result<T> {
    return url === "" ? {data: null, error: null} : {data: null, error: null}
}

interface User {
    username: string;
}


interface Product {
    title: string;
}

let result = fetch<User>("url");
result.data?.username;

//constraints

class Persons  {
    constructor(public name: string){}
}

class Customers extends Persons {

}

function echo<T extends Persons>(value: T): T {
    return value;
}

echo({name: "emman"})

//extending generic classes
interface IProduct {
    name: string;
    price: number;
}

class Store<T> {
   protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }

    get objects() {
        return this._objects;
    }
}

//passing on the generic type parameter
class CompressibleStore<T> extends Store<T> {
    compress() {}
}

class SearchableStore<T extends {name: string}> extends Store<T> {
    find(name: string): T | undefined {
        console.log("XXX", this._objects)
        return this._objects.find(obj => obj.name === name);
    }
}

class ProductStore extends Store<IProduct> {
    filterByCategory(category: string): IProduct[] {
        if(category)
            return []
        return[]    
    }

}

//keyof operator

