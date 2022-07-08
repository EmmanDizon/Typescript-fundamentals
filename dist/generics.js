"use strict";
var _a;
class keyValuePAir {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new keyValuePAir("id", 1);
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let number = ArrayUtils.wrapInArray(1);
function fetch(url) {
    return url === "" ? { data: null, error: null } : { data: null, error: null };
}
let result = fetch("url");
(_a = result.data) === null || _a === void 0 ? void 0 : _a.username;
class Persons {
    constructor(name) {
        this.name = name;
    }
}
class Customers extends Persons {
}
function echo(value) {
    return value;
}
echo({ name: "emman" });
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    get objects() {
        return this._objects;
    }
}
class CompressibleStore extends Store {
    compress() { }
}
class SearchableStore extends Store {
    find(name) {
        console.log("XXX", this._objects);
        return this._objects.find(obj => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        if (category)
            return [];
        return [];
    }
}
//# sourceMappingURL=generics.js.map