// operator ตัวดำเนินการ Ep.2
// คือ เครื่องหมายที่ใช้ในการดำเนินการกับข้อมูล
//------------------------------
// Assignment Operators = += -= *= /= %=
let a = 10
let b = 20
b = b + a // b+=a
a = a * 100 + b - 3// a*=100  + b-3
console.log(a)
console.log(b)

// Nullish Coalescing Operator __ ?? __ 
// กรณีที่หน้า ?? เป็น null จะได้ค่าหลังเครื่องหมาย ??
// กรณีที่หน้า ?? เป็นใช่ null จะได้ค่านั้นๆ เลย
let aa = null
let bb = 30
console.log(aa ?? 'Hello') // Hello
console.log(bb ?? 555)

// Ternary Conditional Operator __?__:__
// เงื่อนไข ? คำตอบถูก : คำตอบผิด
let cc = 10
let dd = 20
let result = cc > dd ? 'Yes' : 'No'
console.log(result)
console.log(100 < 500 ? 'Hello' : 'Bye')
console.log('Monkey' == 'Money' ? 'Wow' : 'Woo')
console.log('---------------------------------')
// Spread Operator ... จะใช้กับ object และ array
let obj = { name: 'John', age: 20 }
let obj2 =
{
    ...obj
}
console.log(obj)
console.log(obj2)
let obj3 =
{
    ...obj
    , address: 'USA'
}
let obj4 =
{
    obj
    , address: 'THAI'
}
console.log(obj4)
console.log(obj3)
console.log('---------------------------------')
let arr = [1, 2, 3, 4, 5]
let arr2 = [...arr]
console.log(arr)
console.log(arr2)
let arr3 = [10, 20, 30, 40, 50]
let arr4 = [...arr, ...arr3]
console.log(arr4)
let arr5 = [...arr, 100, 200, 300, ...arr3]
console.log(arr5)
console.log('---------------------------------')


