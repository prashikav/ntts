const array = [1,3,6,3,4,8,9,6]

for (const element of array){
    console.log(element)
}

const object = {
    property1: "flexibility",
    property2: "Attentivity",
    property3: "Affordibility",
    property4: "Integrity",
    property5: "Honesty"
}
for ( const element in object){
    console.log(`${element}: ${object[element]}`)
}


// recursive function
function factorial(n){
    if(n === 0 ||  n == 1){
        return 1
    }
    else{
        return n * factorial(n-1)
    }
}
console.log(factorial(5));

// sum of argument
function sumOfArgument(array){
    var sum =0
    for(const element of array){
        sum = sum+element
    }

    console.log(sum)
}
sumOfArgument([1,2,4])
function sumOfArgumentSpread(array1,array2){
    var sum =0
    const array = [...array1,...array2]
    for(const element of array){
        sum = sum+element
    }

    console.log(sum)
}
sumOfArgumentSpread([1,2,3],[2,3,4])





