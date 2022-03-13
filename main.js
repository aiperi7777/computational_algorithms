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

function sinx(x, k, res) {
    let newRes;
    if (Math.abs(res) > 0.0001) {
        sumSin += res;
        newRes = (-(x * x) / (2 * k * (2 * k + 1))) * res
        k++
        console.log(newRes.toFixed(4))
        sinx(x, k, newRes)
    }
    console.log("sumSin=", Number(sumSin.toFixed(4)))
}
// sinx(0.41714, 1, 0.41714)


function getRt() {
    console.log(getPt(2, [1, 2, 3, 4], 3, 0) / getPt(1, [1, 1, 1, 1], 3, 0))
}
getRt()

function getPt(x, a, n, k) {
    if (k + 1 < n) {
        return getPt(x, a, n, k + 1) * x + a[k]
    } else return a[n] * x + a[k]
}
let res = getPt(2, [1, 2, 3, 4], 3, 0)
console.log(res)