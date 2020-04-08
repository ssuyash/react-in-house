//IIFE - immediate invoke functions //used to create module befor ES6
(function () {
    console.log("this is from IIFE")
})()


let a = 10


//function statement
function add(a, b) {
    console.log(a + b)
}



//function expression
let sub = function (a, b) {
    return a - b
}




//arrow function
let mul = (a, b) => {
    return a * b
}


let sqr = num => {
    return num * num
}

let cube = num => num * num * num


console.log(cube(3))



//Constructor function  -- used to create objects(class) before ES6
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.dispYob = () => {
        return 2020 - this.age
    }
}
let p1 = new Person("suyash", 25)
console.log(p1.dispYob())




//parameters



//default parameter
let newAdd = (a, b = 0) => {
    return a + b
}
let ans = newAdd(3)
console.log(ans)



//rest parameter
let newMultiplication = (a, b, ...c) => {
    console.log(c)
    return a * b
}

console.log(newMultiplication(10, 20, 5, 3))


//make a add function  
let addd = (...params) => {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        sum += params[i]
    }
    return sum
}

console.log(addd())
console.log(addd(1, 3))
console.log(addd(1, 2, 3))



//object
