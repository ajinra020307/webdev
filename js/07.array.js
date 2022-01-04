
let a = [1,2,3,4,5,6]

// to get the length of the array.

let l = a.length

// delete last element

a.pop()

// delete first element

a.shift()

// add element to last 

a.push('fsd')

// add element to first 

a.unshift('hello')

// get a particular value using index.

a[1]

a[0] = 'jjjj'

// Looping an array;

for(let i=0;i<a.length;i++){

    let arrayvalue = a[i]
    // console.log(arrayvalue)

}

// joining two or more array

let b = ['d','df']
let bb = [3,4,5]

let c = a.concat(b,bb)



// splice
// add or remove multiple elements from array

let dd = [1,2,3,4,5,6,7,8]

// Deleting
// dd.splice(2,3)

dd.splice(3,0,'fs','fss','fsss')


// slice
// cutting a part of array.

let newArray = dd.slice(1,6)

