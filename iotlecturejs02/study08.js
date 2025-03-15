// control statement (condition/selection) Ep.2
// คำสั่งควบคุมในกลุ่มต้องมีการพิสูจน์ตรวจสอบก่อนทำงานใดๆ
//------------------------------
// 3. if-else-if พิสูจน์หลายครั้ง
let score = 60
if (score >= 80) {
    console.log('A')
}
else if (score >= 70) {
    console.log('B')
}
else if (score >= 60) {
    console.log('C')
}
else if (score >= 50) {
    console.log('D')
}
else {
    console.log('F')
}

// 4. switch-case พิสูจน์หลายครั้ง (แต่ใช้มากกว้า น้อยกว่าไม่ได้) 
let busno = 25
switch (busno) {
    case 84:
        console.log('รถเมล์สาย 84')
        break
    case 25:
        console.log('รถเมล์สาย 25')
        break
    default:
        console.log('รถเมล์อื่นๆ')
        break
}
