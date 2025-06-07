
function scopeTest() {
    let a = 100
    const b = 200
    var c = 300

    console.log(a) // 100
    console.log(b) // 200
    console.log(c) // 300
}
scopeTest()
// console.log(a) // 10
// console.log(b)
console.log(c)