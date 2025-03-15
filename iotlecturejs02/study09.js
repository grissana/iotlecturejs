// control statement (loop/iteration/repetition) Ep.3
// คือ การทำงานเดิมๆ ซ้ำ
//------------------------------
// 1. while พิสูจน์ก่อน เป็นจริงทำ
let i = 1
while (i <= 10) {
    console.log(i + ' Hello While')
    i++
}

// 2. do-while ทำก่อนแล้วพิสูจน์ เป็นจริงกลับไปทำ
let j = 1
do {
    console.log(j + ' Hi Do-While')
    j++
} while (j <= 10)

// 3. for
for (let k = 1; k <= 10; k++) {
    console.log(k + ' Hey For')
}
//------------------------------