const array = ["aman","naman","raman"]
const object = {
    firstname:"annie",
    department: "cinematography"
}

// 1 using push
// array.push(object)
// console.log(array)

// 2 using splice
function appendUsingSplice( array, object){

    index=array.length
    array.splice(index,object)
    console.log(array)
}

// appendUsingSplice(array,object)


// 3 using spread operator
function appendUsingSpread(array,object){

    array = [...array, object]
    console.log(array)

}
// array.splice(array.length)
 appendUsingSpread(array,object)
// console.log(array)