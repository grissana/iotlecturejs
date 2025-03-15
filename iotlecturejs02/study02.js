// variable ตัวแปร
// เป็นชื่อที่ตั้งเอง ใช้เก็บข้อมูล
// การใช้งานตัวแปร คือ เอาค่าไปเก็บในตัวแปร หรือ เอาค่าในตัวแปรมาใช้
//------------------------------
// var ไม่จำเป็นต้องกำหนดค่าแต่แรก สามารถเปลี่ยนค่าได้ เป็นตัวแปรแบบ Global
var aa
var bb = 10

// let ไม่จำเป็นต้องกำหนดค่าแต่แรก สามารถเปลี่ยนค่าได้ เป็นตัวแปรแบบ Local
let cc
let dd = 20

// const ต้องกำหนดค่าแต่แรก ไม่สามารถเปลี่ยนค่าได้ เป็นตัวแปรแบบ Local
const ee = 30
const ff = 30

//------------------------------
var a1 = 10
let b1 = 20
const c1 = 30
{
    var a2 = 100
    let b2 = 200
    const c2 = 300
    {
        var a3 = 1000
        let b3 = 2000
        const c3 = 3000
        console.log(a1, b1, c1)
        console.log(a2, b2, c2)
        console.log(a3, b3, c3)
    }
    console.log(a1, b1, c1)
    console.log(a2, b2, c2)
    console.log(a3, b3, c3)

}
console.log(a1, b1, c1)
console.log(a2, b2, c2)
console.log(a3, b3, c3)