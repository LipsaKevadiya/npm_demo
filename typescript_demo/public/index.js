"use strict";
let person1 = {
    name: "Alice",
    age: 25,
};
let person2 = {
    name: "Bob",
    age: 30,
};
function greet(person) {
    return `Hello, ${person.name}! You are ${person.age} years old.`;
}
console.log(greet(person1));
console.log(greet(person2));
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
function divideArr(arr) {
    const countt = {};
    const result = [[], []];
    for (const ele of arr) {
        if (countt[ele]) {
            countt[ele] += 1;
        }
        else {
            countt[ele] = 1;
        }
        if (countt[ele] > 2) {
            return [];
        }
    }
    for (const ele in countt) {
        if (countt[ele] === 2) {
            result[0].unshift(parseInt(ele));
            result[1].unshift(parseInt(ele));
        }
    }
    let final_ans = 0;
    for (const ele of arr) {
        if (countt[ele] !== 2) {
            result[final_ans].unshift(ele);
            final_ans = 1 - final_ans;
        }
    }
    return result;
}
const ans1 = divideArr([2, 1, 2, 3, 3, 4]);
const ans2 = divideArr([1, 2, 2, 1]);
const ans3 = divideArr([2, 2, 3, 3, 2, 2]);
console.log(ans1);
console.log(ans2);
console.log(ans3);
function mergeStr(s1, s2) {
    const countMapS1 = count(s1);
    console.log(countMapS1);
    const countMapS2 = count(s2);
    console.log(countMapS2);
    let result = "";
    let i = 0, j = 0;
    while (i < s1.length || j < s2.length) {
        const charS1 = i < s1.length ? s1[i] : "";
        const charS2 = j < s2.length ? s2[j] : "";
        if (countMapS1[charS1] < countMapS2[charS2] ||
            (countMapS1[charS1] === countMapS2[charS2] && charS1 < charS2)) {
            result += charS1;
            i++;
        }
        else {
            result += charS2;
            j++;
        }
    }
    return result;
}
function count(str) {
    const countMap = {};
    for (const char of str) {
        countMap[char] = (countMap[char] || 0) + 1;
    }
    return countMap;
}
const s1 = "dce";
const s2 = "cccbd";
console.log(mergeStr(s1, s2));
const s3 = "super";
const s4 = "tower";
console.log(mergeStr(s3, s4));
