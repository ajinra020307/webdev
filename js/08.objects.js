
// creating objects

let mobileDetails = {
    height:'5. inches',
    "weight": '200gms',
    updates: [1,2,3,4,5],
    otherDetails: {
        a:{
            b:{
                hello:"dfsdklfjklsjdfls"
            }
        }
    },
    call: function(){
        console.log('hello')
    },
}

// accessing values

console.log(mobileDetails.weight)
console.log(mobileDetails['weight'])


// changing values

mobileDetails.height = '444'
mobileDetails.color = 'red'

console.log(mobileDetails)

mobileDetails.call()