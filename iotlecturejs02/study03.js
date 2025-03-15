// data type ชนิดข้อมูล
// คือ ตัวข้อมูล (literal) ที่เก็บไว้ในตัวแปร (variable) หรือที่ทำไปใช้งาน
//------------------------------
// string
let aa = "Hello" // double quote
let bb = 'Hello' // single quote
let cc = `Hello` // backtick
// number
let dd = 10 // integer
let ee = 10.5 // float

// boolean
let ff = true // 1
let gg = false // 0

// array
// มี index number ในการเข้าถึงข้อมูล เริ่มจาก 0
let ii = [10, 20, 30, 40, 50]
let jj = ["apple", "banana", "orange"]
let kk = [true, false, true, true]
let ll = [10, "apple", true, 20.5, { data1: 10, data2: 20, data3: 'hello' }]
console.log(ll[4].data3)
for (let index = 0; index < ll.length; index++) {
    console.log(ll[index])
}
// object
// มี key ในการเข้าถึงข้อมูล 
let hh = {
    // key: value
    name: "Game",
    age: 20,
    gender: "male",
    studentStatus: true,
    address: {
        province: "Bangkok",
        city: "Bangkok",
    },
    food: ["pizza", "burger", "hotdog"],
}
console.log(hh.name)
console.log(hh.address.city)
console.log(hh.food[1])

// undefined ข้อมูล
let mm // undefined
const nn = undefined // undefined
console.log(mm)
console.log(nn)

// null ข้อมูล
let oo = null // null
console.log(oo)

// type checking การตรวจสอบชนิดข้อมูล
console.log(typeof aa)
console.log(typeof hh)