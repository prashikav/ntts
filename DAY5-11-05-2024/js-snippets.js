let a = {};
let b = { key: "b" };
let c = { key: "c" };
// console.log(a)

a[b] = 123;
// console.log(a)
a[c] = 456;

console.log(a[b]);
JSON.stringify(a)
console.log(a)
// console.log(a)

// object1= {}
// object1["prop1"] = "first"
// object1["prop2"] = "second"
// console.log(object1)

// 2
let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key);

// 3
const obj = {
    a: "foo",
    b: function () {
      console.log(this.a);
    },
  };
  
  const c1 = obj.b;
  obj.b();
  c1();

//   5
const arr = [1, 2, 3, 4, 5];

arr.forEach(function (element) {
  console.log(element);
})

let x = 1;

if (function f() {}) {
  x += typeof f;
 console.log( typeof(f))
}

console.log(x);

function check(){
    x=typeof(x)+1
    console.log(x)
    var x=1
}
console.log(typeof(check))
check()

let x1 = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x1 == y);
console.log(x1 === y);
console.log(z == y);
console.log(z == x1);

//  12
let num = 0;

function test() {
  var num = 1;
  return num;
}

console.log(test());
console.log(num);

// 13
let obj11 = { name: "John", age: 25 };
let newObj = { age: 30,...obj11};

console.log(obj11.age);
console.log(newObj.age);

const array = [1,2,3]
const [a2,b2,c2] = array
console.log(c2)


function sortArray(array){
array.sort()
console.log(array)
}

sortArray(["falafal","Banana","dragonfruits","guava","kiwi","pirhana"])

function removeVowel(word){
    var consonent=""
     for (let i = 0; i < word.length; i++) {
        if(word[i]=="a"||word[i]=="e"||word[i]=="i"||word[i]=="o"||word[i]=="u"){
           
        }
        else{
            consonent+=word[i]
        }        
    }
    console.log(consonent)
}

removeVowel("koerskjgsjd")

function secondHighest(array1,whichOne){

array1.sort()
return array1[array1.length-whichOne]
}
console.log(secondHighest([5,6,43,9,88,4,5,4,4,555,65],2))

function removeDuplicate(duplicate){
    
    for(let i =0;i<duplicate.length;i++){
        for(let j=i+1;j<duplicate.length;j++){
           if(duplicate[i]==duplicate[j]){
            duplicate[j]=duplicate[j+1]
            duplicate.length--
           }
        }
    }
    console.log(duplicate)    
}

removeDuplicate([1,1,3,4,5,6,3,4,7,8,9])


// object destructuring
const object = {
    a:5,
    b:6,
    c:9
}

const {n,m,c:destructure} = object
console.log(destructure)
 
// console.log(sum(4,6,8,10).value)
// console.log(sum(4)(6)(8)(10).value)



