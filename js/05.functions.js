

function add(a, b) {

    console.log(a + b)
}

add(4, 5)

// return


function add2(a, b) {

    return a + b


}

let sum = add2(45, 454)


// callback functions

function one(callback) {

    console.log('one')
    callback()

}

function two() {

    console.log('two')

}

one(two)

// different way of writign functions

let three = function(){



}
