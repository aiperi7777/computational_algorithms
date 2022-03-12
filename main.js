let u = 1;

function test(s, k, res) {
    let newRes;
    if (Math.abs(res) > 0, 00000001) {
        console.log(res)
        newRes = (s / k) * res
        k++
        test(s, k, newRes)
    } else return
}
test(1 / 4, 1, 1)