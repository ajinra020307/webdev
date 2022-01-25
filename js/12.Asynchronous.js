


// for(let i=0; i<100;i++){
//     console.log('loop')
// }

// console.log('loop finished')

function one(callback) {

    setTimeout(function () {
        console.log('run after 2 seonds')
        callback()
    }, 2000)

}

function two() {

    console.log('two finished')

}

// one(two)


// promise
//  3 states ->  pending,fulfuilled, rejected
// creating a promise

let p = new Promise(function (resolve, reject) {

})


function onePromise() {


    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            console.log('run after 2 seonds')
            reject()
        }, 2000)
    })



}

function twoPromise() {

    console.log('two finished')


}

onePromise().then(twoPromise).catch(function(){
    console.log('rejected')
})


// fetch
// different type of requests -> GET,POST,DELETE,PUT etc

let url = 'https://api.github.com/users'

let container = document.querySelector('.container')
fetch(url)
    .then(function(response){

        return response.json()
    })
    .then(function(data){

        data.forEach(function(user){

            let {avatar_url,login} = user;

            let image = document.createElement('img');
            image.src = avatar_url;

            let span = document.createElement('span');
            span.innerText = login;

            let div = document.createElement('div')
            div.appendChild(image)
            div.appendChild(span)

            container.appendChild(div)

        })

    })

