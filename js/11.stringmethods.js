
let s = "helo and hello adn"

// split

let splittedWords = s.split("o");

// slice

let newWord = s.slice(3,12)
let ss = s.substring(3,12)
let sss = s.substr(3,5)

// replace

let d = s.replace('h','X')


// upperCase

let capitalMethod = s.toUpperCase()
let lowerCase = s.toLowerCase()

// concat

let a = "fdfd"
let b = "    fsdfs  "

let c = a.concat(b)


// trim

let t = b.trim()

// padstart

let xx = "Hello ww"

let xxx = xx.padStart(10,'x')
let xxxx = xx.padEnd(10,'x')

console.log(xxxx)



