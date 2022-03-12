let sum = 0;

function testExponenta(s, k, res) {
    let newRes;
    if (Math.abs(res) > 0.00000001) {
        console.log(res)
        sum += res
        newRes = (s / k) * res
        k++
        test(s, k, newRes)
    }
    console.log("sum=", Number(sum.toFixed(8)))
}
// test(1 / 4, 1, 1)
let sumSin = 0

function testSin(x, k, res) {
    let newRes;
    if (Math.abs(res) > 0.0001) {
        sumSin += res;
        newRes = (-(x * x) / (2 * k * (2 * k + 1))) * res
        k++
        console.log(newRes.toFixed(4))
        testSin(x, k, newRes)
    }
    console.log("sumSin=", Number(sumSin.toFixed(4)))
}
// testSin(0.41714, 1, 0.41714)