// for (let index = 0; index < 5; index++) {
//    console.log(index)
    
// // }

// let index = 0
// for (index = 0; index < 5; index++) {
//     setTimeout(()=>{
//         console.log(index)
//     })
     
//  }

var index=0
// for (index = 0; index < 5; index++) {
//     setTimeout(()=>{ 
//         index= 9  
//         console.log(index)
//     }) 
//  }
//  console.log(1==true)

//  console.log(10!="10")
//  console.log(10!=="10")


//  Demerit points code

function speedCheck(input){
    if(input<=70){
        console.log("ok")
    }
    else{
        let vehicleSpeed = Math.floor(input/5)
        let points = vehicleSpeed-14
        if(points<=12){
            console.log(`points: ${points}`)
        }
        else{
            console.log("suspended")
        }
    }
}

speedCheck(90)

const valueArray = [0,null, undefined, '', 1,2,3];

countTruthyValues(valueArray)

function countTruthyValues(array){

    let count=0
    for(const element in array){
        if(element){
            count++
        }
        
    }
    console.log(count)
}