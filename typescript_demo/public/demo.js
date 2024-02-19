"use strict";
function example(value) {
    if (value > 0) {
        return "Value is positive";
    }
    else if (value < 0) {
        return "Value is negative";
    }
    else {
        console.log("This code is unreachable");
        return "Value is zero";
    }
    console.log("This code is unreachable");
}
function examples(value) {
    return value * 2;
}
console.log(examples(5));
const person = {
    name: "John",
};
console.log(person.name);
console.log(person.age);
