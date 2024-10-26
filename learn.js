
// const person = {
//     "a b": 1,
//     temp: 36.6,
//     a_b: 3
// }

// console.log(person["a b"])
// console.log(person.a_b)


// let a = {
//     name: 'Elbek',
// }


let a = [1, 2, 3]

console.log(a[2]);
console.log(a.at(-3));

const b = [1, 2, 3]

b.push(4)
b.push(() => {})

console.log(b);

function outer () {
    return function() {
        console.log('ыыы)))')
    }
}

// outer()()

const returnedFn = outer()
returnedFn()

// каррирование 
// https://learn.javascript.ru/currying-partials

const arr = [10, 20, 30, 40, 50]
console.log(arr.slice(-2))
console.log(arr);

console.log(arr.splice(3, 1, 100, 200))

console.log(arr);


const nums = [1, 2, 3, 4, 5, 6]

const squares = []

for(let num of nums) {
    squares.push(num * num)
}

console.log(squares);

const cubesCreatedByMapFn = nums.map(num => num ** 3)

console.log(cubesCreatedByMapFn);

const boldNumbers = nums.map(num => `<b>${num}</b>`)
console.log(boldNumbers)

boldNumbers.forEach(boldNumberElem => document.body.insertAdjacentHTML('beforeend', boldNumberElem))

const numsAsObjects = nums.map(num => ({value: num}))

console.log(numsAsObjects);

const cubesCreatedByForEachFn2 = []
nums.forEach(num => {
    cubesCreatedByForEachFn2.push(num ** 3)
})

console.log(cubesCreatedByForEachFn2);

// 22.10.2024
console.log(localStorage.getItem('dateNow'))
localStorage.setItem('myBirthDate', '31.03.1999')

const phoneNumbers = ['998990008877', '76543332211']
localStorage.setItem('phoneNumbers', phoneNumbers)

const myData = {
    age: 25,
    sex: 'male',
    pets: ['Freya']
}

localStorage.setItem('myData', JSON.stringify(myData))


const m = Math
const elbek = JSON

console.log(elbek.stringify({name: 'Lololo'}))

localStorage.setItem('a', 1)
localStorage.setItem('a', 2)

localStorage.removeItem('a')
console.log(localStorage.length);
// localStorage.clear()

console.log(localStorage.key(0))
console.log(localStorage.key(1))
console.log(localStorage.key(2))

console.log(Object.keys(localStorage));
console.log(Object.values(localStorage));
console.log(Object.entries(localStorage));





// const print = console.log

// for(let elem of [1, 2, 3]) {
//     console.log(elem)
// }

// let arr = [10, 20, 30]

// for(let i = 0; i < arr.length; i++) {
//     print(arr[i])
// }

// [100, 200, 300].forEach((num) => {
//     print(num)
// })

// const studentName = 'Ayubkhan'

// const strikeElementString = `<s>${studentName}</s>`

// print(strikeElementString)

// document.body.insertAdjacentHTML('beforeend', strikeElementString)

// const marqueeElement = document.createElement('marquee')

// marqueeElement.textContent = studentName

// document.body.append(marqueeElement)