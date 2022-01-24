
let a = [1, 2, 3, 4, 5, 22, 6, 7, 8, 10, 15]

// Foreach

function hello(value, index) {

    console.log(value, index)

}

a.forEach(hello)

// map

function m(value, index) {

    return value + 2

}

let b = a.map(m)

// filter

function f(value, index) {

    if (value > 7) {
        return true
    } else {
        return false
    }

}

let aa = a.filter(f)

// reduce

function s(prevValue, currentValue) {

    return prevValue * currentValue

}

let sum = a.reduce(s, 1)


// map + filter;;

let bb = [3, 4, 5, 6, 7, 8, 84, 3]

// let as = bb.map(function(value,index){
//     return value * 10
// })

// let ff = as.filter(function(value,index){
//     if(value>50){
//         return true
//     }else{
//         return false
//     }
// })

// let ff = bb.map(function (value, index) {
//     return value * 10
// }).filter(function (value, index) {
//     if (value > 50) {
//         return true
//     } else {
//         return false
//     }
// })

// let ff = bb.map(value=>value*10).filter(value=>value>50).reduce((prev,curr)=>prev+curr,0)

console.log(ff)