// function checkPositive(number: number): boolean {
//   var x = 10;
//   if (number > 0) {
//     return true;
//   }
//   return false;
// }
//console.log(checkPositive(10));
// checkPositive(10);

// tsconfig : "allowUnreachableCode": true,
// "noImplicitReturns": true, it needs to return
function example(flag: boolean): string {
  if (flag) {
    return "Flag is true";
  } else {
    return "Flag is false";
  }

  // Unreachable code after a return statement
  console.log("This code is unreachable");
}

// tsconfig :
//Without noImplicitAny-----

// function examplee(value) {
//   return value * 2; // 'value' as 'any'
// }

// console.log(examplee(5));

// With noImplicitAny---------

function examples(value: number): number {
  return value * 2; // 'value' is a number
}

console.log(examples(5)); // 10

//"exactOptionalPropertyTypes": true ----------
interface Example {
  name?: string;
  age?: number; //OptionalProperty
}

const person: Example = {
  name: "John",
  // age is not specified
};

console.log(person.name); //John
console.log(person.age); //undefined

//"noFallthroughCasesInSwitch": true ---------------
const a: number = 6;

switch (a) {
  case 0:
    //Fallthrough case in switch.
    console.log("even");
  case 1:
    console.log("odd");
    break;
}

// "noUnusedLocals": true, "noUnusedParameters": true  ---------

const createKeyboard = (modelID: number) => {
  const defaultModelID = 23;
  //'defaultModelID' is declared but its value is never read.
  return { type: "string" };
};
