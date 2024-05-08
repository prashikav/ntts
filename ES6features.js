//  Arrow function
let functionSum=(a,b)=>{return a+b}
console.log(functionSum(10,90))

//multiline String
let statement = `I am currently learning on NTTS platform
                  Hopefully I will complete
                   the tasks in given time`

console.log(statement)

//Default Parameter of ES6
var BMI = function(height=170,weight=60){

}
//Default Parameter of ES6
var BMI = function(height,weight){
height=height||40;
weight=weight||60;
}
// blocked scoped variables cannot be redeclared


// template literals
firstName="Prashik"
lastName = "kamble"

function fullname(){
   console.log(`My name is ${firstName} ${lastName}`)
}

fullname()


// Array Destructuring
let fruits = ["Apple","Banana"]
let [a,b]= fruits
console.log(a)
// Object destructuring
let person = {
    name1: "Peter", 
    age: "30"
}

let {name1,age}=person
console.log(name1,age)

function getMobile(manufacturer,model,year){

    return{
        manufacturer,
        model,
        year
    }

}

console.log(getMobile("Blackberry","thunderbolt","1993"))

// Promises - was introduced to avoid callback hell
var asyncCall = new Promise((resolve,reject)=>{

}).then(()=>{

})

// classes

class UserProfile{
    constructor(firstName,lastName){
        this.lastName=lastName
        this.firstName=firstName
    }

    getName(){
        console.log(`The Full-Name is ${this.firstName} ${this.lastName}`)
    }

}

let obj = new UserProfile("John","Smith");
obj.getName();

// 2pm- 5pm
// try catch finally

// nested try catch
try{
    try{
       throw new Error('my error')
    }catch(err){
        console.log("inner", err.message);
        throw err;
    } finally {
        console.log('inner finally')
    }
}catch(err){
    console.log('outer',err.message);
}

// try-catch-finally
function trfincatch(file){
    try {
        
        openFile(file);
        readFile(file)
    } catch(err){
        console.error(err.message)
    } finally{
        closeFile(file)
    }
}

trfincatch('texxt.txt')

// function expression and function declaration
// function doStuff(){}
// const dostuff = function(){}
// const doStuff = () =>{}



var foo;
console.log(foo)
foo='foo';
console.log(foo);

// fhjgjkhkjhkjhkjh



