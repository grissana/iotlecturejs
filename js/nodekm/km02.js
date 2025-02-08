// variable ตัวแปร มีหน้าที่เก็บข้อมูล ตั้งชื่อตัวแปรให้สื่อความหมาย
// variable ถือเป็น expression ที่เป็นค่า หรือ ตัวแปร หรือ ตัวดำเนินการ นิพจน์
let x = 10;
let y = 20;
let z = x + y;
console.log(z);
 
var a = 10; //เปลี่ยนค่าได้ เป็นตัวแปรที่ใช้ในระดับ global ใช้ที่ไหนก็ได้
let b = 20; //เปลี่ยนค่าได้ เป็นตัวแปรที่ใช้ในระดับ local ใช้ได้เฉพาะใน {} ที่ประกาศ
const c = 30; //เปลี่ยนค่าไม่ได้ เป็นตัวแปรที่ใช้ในระดับ local ใช้ได้เฉพาะใน {} ที่ประกาศ

{
    var d = 40;
    let e = 50;
    const f = 60;
    console.log(a);
    console.log(b);//
    console.log(c);//
    console.log(d);
    console.log(e);
    console.log(f);
}
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);