
let a = [1, 2, 3, 4, 5, 22, 6, 7, 8, 10, 15]

// Foreach

function hello(value, index) {

    // console.log(value, index)

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


let ff = bb.map(function (value, index) {
    return value * 10
}).filter(function (value, index) {
    if (value > 50) {
        return true
    } else {
        return false
    }
})

// copywithin

let x = [1,2,3,4,5,6,7];

x.copyWithin(3,0,2)


// Every
// if every element match the condition return true else return false
let ages = [0,23,33,148,22,22]

function g(value){

    if(value >18){
        return true
    }
}

let greater = ages.every(g)


// fill
// fill array with a value

let filledArray = a.fill('x',0,3)

// find
// find first matching element

let val = ages.find(function(value){
    if(value>3) return true
})

// find index;
// return the first element index which match the given condition

let index = ages.findIndex(function(value){
    if(value>3) return true
})

// from

let ss = 'dfjksdfjk kh ks jksh ksjd js jks'

let aaaa = Array.from(ss)

// includes
// check whether an element is in an array

let valuePresent = aaaa.includes('z')

// indexof
// returns the first index of the matching element


let ii = aaaa.indexOf('k')


// is array
// check if a variable is an array

let v2 = 44

let result = Array.isArray(v2)

// join
// join array to string

let ssssss =aaaa.join("")


// lastindexof

let lastindex = aaaa.lastIndexOf('k')

// reverse
// reverse an array element

let rev = aaaa.reverse()

// some
// returns true if any one of the lement in the array match the condition.

let match = aaaa.some(function(value){
    if(value=='k'){
        return true
    }
})

// sort
// order the array;

let ssx = [1,3,4,5,2,1,2,3]

ssx.sort(function(a,b){
    return b-a // descending
    return a-b // ascending

})


// array to string;

ssx.toString()