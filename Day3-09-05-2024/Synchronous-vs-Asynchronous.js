// Understanding synchronous and asynchronous codes
// synchronous code example
console.log("hello")
console.log("how you doing")
console.log("you look fully recovered today")


// asynchronous code example
// console.log("hello")
// setTimeout(()=>{
//     console.log("how you doing")
// },5000)
// console.log("you look fully recovered today")

// example of  callback function

function one (){
    console.log("control from function 1")
}

function two(callback) {
     callback()
     console.log("callback called from first function")
}

two(one) 


// iceCreamShop code

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

//  order and production
let order = (fruit_name,productionCall) => {
    // console.log("production started")

    setTimeout(function(){
        console.log(`${stocks.Fruits[fruit_name]} was selected`)
        productionCall()
    },2000)
   

}

let production = () => {
    // console.log("production has started")
     setTimeout(()=>{
        console.log("Production has started")

        setTimeout(()=>{
            console.log("the fruit has been chopped")
           setTimeout(()=>{
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
            setTimeout(()=>{
                console.log("Start the Machine")
                setTimeout(()=>{
                    console.log(`icecreame placed on ${stocks.holder[1]}`)
                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} as toppings`)
                        setTimeout(()=>{
                            console.log("Serve Ice Creame")
                        })
                    },3000)
                },2000)
            },1000)
           },1000) 
        },2000)
     })    
}
// code from line 52 to 73 is like callback hell



// order(0,production)

let isShopOpen = true
let orders=(time,work) =>{
    return new Promise( (resolve, reject )=>{
        if(isShopOpen){
            setTimeout(()=>{
                resolve(work())
            },time)
        }
        else{
            reject(console.log("Icecream parlour is closed"))
        }
    })
}

orders(0,()=>{console.log(`${stocks.Fruits[0]} was selected`)})
.then(()=>{return order(2000,()=>{console.log("the fruit has been chopped")})})
.then(()=>{return order(1000,()=>{console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)})})
.then(()=>{return order(1000,()=>{console.log("Start the Machine")})})
.then(()=>{return order(2000,()=>{console.log(`icecreame placed on ${stocks.holder[1]}`)})})
.then(()=>{return order(3000,()=>{console.log(`${stocks.toppings[0]} as toppings`)})})
.then(()=>{return order(1000,()=>{console.log("Serve Ice Cream")})})


function time(ms){
    return new Promise((resolve, reject)=>{
        if(isShopOpen){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("shop is closed"))
        }
    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)
        
    }
    catch(error){
        console.log("customer left",error)
    }
    finally{
        console.log("Day ended, shop closed")
    }
}

kitchen();




