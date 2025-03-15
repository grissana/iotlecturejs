// type conversion การแปลงชนิดข้อมูล
// คือ การเปลี่ยนชนิดข้อมูลจากชนิดหนึ่งเป็นอีกชนิดหนึ่ง
//------------------------------
// string conversion
let aa = 10
let bb = '20.56'
let gg = 'hello'
console.log(Boolean(gg)) // true
console.log(Number(gg)) // NaN not a number
console.log(parseInt(gg)) // NaN 
console.log(parseFloat(gg)) // NaN
console.log(String(gg)) // 'hello'
console.log(aa + bb) // 1020.56
console.log(aa + Number(bb)) // 30.56
console.log(aa + parseInt(bb)) // 30
console.log(aa + parseFloat(bb)) // 30.56
console.log(aa + String(bb)) // 1020.56
console.log(aa + bb.toString()) // 1020.56

// number conversion
let cc = 45.45345
console.log(String(cc) + 10) // '45.45345'
console.log(cc.toString() + 10) // '45.45345'
console.log(cc.toFixed(2)) // '45.45'
console.log(Boolean(99)) // true

// boolean conversion
let dd = true
let ee = false
console.log(Number(dd)) // 1
console.log(Number(ee)) // 0
console.log(String(dd)) // 'true'
console.log(String(ee)) // 'false'
console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log(Boolean('')) // false
console.log(Boolean(' ')) // true
console.log(Boolean('0')) // true
console.log(Boolean('1')) // true
console.log(Boolean('false')) // true
console.log(Boolean('true')) // true
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean(Infinity)) // true
console.log(Boolean(-Infinity)) // true
console.log(Boolean(-1)) // true
console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log(Boolean(-0)) // false
console.log(Boolean(0n)) // false
console.log(Boolean(-0n)) // false
console.log(Boolean(1n)) // true
console.log(Boolean(-1n)) // true
console.log(Boolean(0.0)) // false
console.log(Boolean(-0.0)) // false
console.log(Boolean(0.1)) // true
console.log(Boolean(-0.1)) // true

let ff = [10, 20, 30]
console.log(Boolean(ff)) // true
let hh = { name: 'John', age: 20 }
console.log(Boolean(hh)) // false
let ii = []
let jj = {}
let kk
let ll = null
let mm = 'hello' / 200
console.log(mm)
console.log("-----------------")
console.log(Boolean(ii)) // false
console.log(Boolean(jj)) // false
console.log(Boolean(kk)) // false
console.log(Boolean(ll)) // false
console.log(Boolean(mm)) // false
console.log("-----------------")
