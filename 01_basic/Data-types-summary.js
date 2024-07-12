//  Primitive (Stack)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) (Heap)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
1. String --> String
2. integer/float(Number) --> Number
3. Boolean --> Boolean
4.null --> Object
5.undefined --> Undefined
6.BigInteger --> Bigint
7. Symbol --> Symbol

Refrance (Non primitive) Data type
1.Array --> Object
2.Object --> Object
3.Function --> Function

*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive) && Heap (Non-Primitive)
let myYoutubeName = "ManmohanBlogsdotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurmanmohan"
// console.log(myYoutubeName);
// console.log(anotherName);

//heap started
let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "userddd@google.com"

// console.log(userTwo);
console.log(userOne.email);
console.log(userTwo.email);