
// normal function

function one(){


}

let two = function(){


}

// Arrow functions

let three = () => {

}

let a = [1,2,3,4,5]

let b = a.filter(function(value){

    if(value>3){
        return true;
    }

})

a.filter((value)=>{
    if(value>3){
        return true;
    }
})

a.filter(value=>{
    return value>3
})

a.filter(value=>value>3)

console.log(b)