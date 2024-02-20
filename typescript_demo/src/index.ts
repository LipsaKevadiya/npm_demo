// let age: number = 20;
// let numbers: number[] = [1, 2, 3];
// let numbers = [];

// tuple-----------
// let user: [number, string] = [1, "lipsa"];

//enum--------------------
// enum Size {
//   Small = 1,
//   Medium,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize); //2

//type alises

//Define a type alias for a person with a name and age
type Person = {
  name: string;
  age: number;
};

// Use the Person type alias to declare variables
let person1: Person = {
  name: "Alice",
  age: 25,
};

let person2: Person = {
  name: "Bob",
  age: 30,
};

// using the Person type alias
function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

console.log(greet(person1));
console.log(greet(person2));
/* Hello, Alice! You are 25 years old.
Hello, Bob! You are 30 years old. */

//literal--------------
// String literal type-----
// let status: "success" | "error";
// status = "success";

// Numeric literal type----
// let statusCode: 200 | 404 | 500;
// statusCode = 200;

//function --------------

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// let result = add(10, 20);
// console.log(result); // 30

//factorial
function factorial(n: number): number;
function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const number: number = 5;
const result: number = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
// The factorial of 5 is: 120

// splitArr4 into typescript----------------------------------

function divideArr(arr: number[]): number[][] | [] {
  const countt: { [key: string]: number } = {}; // created empty object to count occurrences of each integer element
  const result: [number[], number[]] = [[], []]; // to store the final divided array

  // to count occurrence of element
  for (const ele of arr) {
    if (countt[ele]) {
      countt[ele] += 1; // increments the value associated with the key ele in countt object by 1
    } else {
      countt[ele] = 1;
    }
    if (countt[ele] > 2) {
      // if count more than twice returns empty array
      return [];
    }
  }

  // Put integers occurring twice in both answer arrays
  for (const ele in countt) {
    if (countt[ele] === 2) {
      result[0].unshift(parseInt(ele)); // add ele at the beginning
      result[1].unshift(parseInt(ele));
    }
  }

  // Put other unique elements in the final array
  let final_ans = 0;
  for (const ele of arr) {
    if (countt[ele] !== 2) {
      result[final_ans].unshift(ele);
      final_ans = 1 - final_ans; // Switch to the other array
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

/* Output:
      [ [ 1, 3, 2 ], [ 4, 3, 2 ] ]
      [ [ 2, 1 ], [ 2, 1 ] ]
      []
  */

// mergeStr6.js into typescript-------------------------------------------------

function mergeStr(s1: string, s2: string): string {
  // Count occurrences of characters in each string
  const countMapS1: Record<string, number> = count(s1);
  console.log(countMapS1);
  const countMapS2: Record<string, number> = count(s2);
  console.log(countMapS2);

  // Merge strings based on the special merge function
  let result = ""; // to store the merged result.
  let i = 0, // iterating through strings s1 and s2.
    j = 0;

  while (i < s1.length || j < s2.length) {
    const charS1: string = i < s1.length ? s1[i] : ""; // assigns char at the current index i in s1 to charS1
    const charS2: string = j < s2.length ? s2[j] : ""; // assigns char at the current index j in s2 to charS2

    // Compare characters based on occurrences or lexicographical order
    if (
      countMapS1[charS1]! < countMapS2[charS2]! ||
      (countMapS1[charS1] === countMapS2[charS2] && charS1 < charS2) // last part checks the lexicographical order
    ) {
      result += charS1;
      i++;
    } else {
      result += charS2;
      j++;
    }
  }

  return result;
}
// to count occurrences of characters in a string s1, s2
function count(str: string): Record<string, number> {
  const countMap: Record<string, number> = {}; // empty object
  //const countMap: { [key: string]: number } = {};// without record

  for (const char of str) {
    countMap[char] = (countMap[char] || 0) + 1;
  }

  return countMap;
}

const s1: string = "dce";
const s2: string = "cccbd";
console.log(mergeStr(s1, s2));

const s3: string = "super";
const s4: string = "tower";
console.log(mergeStr(s3, s4));

/*o/p:  { d: 1, c: 1, e: 1 }
        { c: 3, b: 1, d: 1 }
        dcecccbd
        { s: 1, u: 1, p: 1, e: 1, r: 1 }
        { t: 1, o: 1, w: 1, e: 1, r: 1 }
        stouperwer   */
