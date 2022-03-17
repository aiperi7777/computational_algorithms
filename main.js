let koefValueChisl = [];
let koefValueZnam = [];
let testInps = document.getElementById('test');
let testInps2 = document.getElementById('test1');
let getN = document.getElementById('getN');
let inpChisl = document.getElementById('inp_koefV');
let inpZnam = document.getElementById('inp_koefN');
let znamLength;
let chisloLength;
//-------------— вычисление экспоненты —----------------------------—
// встроенные методы
let e = Math.exp(1 / 4);
// console.log(e.toFixed(8)); //1.28402542
// с помощью формул
let sum = 0;
let k = 1;
let res = 1; //u0
function exp(s, k, res) {
    let newRes;

    if (Math.abs(res) > 0.00000001) {
        // console.log(res.toFixed(8));
        sum += res;
        newRes = (s / k) * res;
        k++;
        exp(s, k, newRes);
    }
    return sum.toFixed(8);
}
// console.log('e^(1/4) = ', exp(0.25, k, res));
//---------------— вычисление синуса —----------------—
// встроенные методы
// let x = document.getElementById('inp_x').value;
//let x = 0.45838;
// let sin = Math.sin(x);
// let result = x;
// console.log(sin.toFixed(8)); //0.40514735
// с помощью формул
let sumSin = 0;

function findSin(x, k, result) {
    let newRes;
    if (Math.abs(result) > 0.00000001) {
        sumSin += result;
        newRes = (-(x * x) / (2 * k * (2 * k + 1))) * result;
        k++;
        // console.log(newRes.toFixed(5));
        findSin(x, k, newRes);
    }
    return sumSin.toFixed(8);
}
//console.log('sin 0.45838 = ', findSin(x, k, result));
// пользователь вводит массив элементов, коэффициенты не целые числа, проверки на ввод корректных данных желательно,
findRes.addEventListener('click', () => {
    getValueInp()
    let t = Number(document.getElementById('inp_t').value);
    let x = Number(document.getElementById('inp_x').value);
    let a = Number(document.getElementById('inp_a').value);
    let result = x;
    let sin = findSin(x, k, result);
    document.getElementById('res_sin').value = sin;
    document.getElementById('res_e').value = exp(0.25, k, res);
    // console.log(a / sin);
    document.getElementById('res_sindr').value = (a / sin).toFixed(8);
    let res1 = getPt(
        koefValueChisl[0],
        t,
        koefValueChisl,
        koefValueChisl.length - 1,
        0
    );
    console.log("res1", res1);
    let resZn = getPt(
        koefValueZnam[0],
        t,
        koefValueZnam,
        koefValueZnam.length - 1,
        0
    );
    // console.log(res2);
    console.log("r(t)=", res1 / resZn)
        /// 7.5 4.76 5.1 0 1 -2.22
        ///1 -3.685 0 2.45
});
let newRes;

function getPt(res, x, a, n, k) {
    if (k <= n) {
        newRes = res * x + a[k + 1]; //p0, менять p и b
        console.log(newRes);
        console.log('a= ', a[k], a[k + 1]);
        k++;
        getPt(newRes, x, a, n, k);
    }
    return newRes.toFixed(8);
}

// let res1 = getPt(7.5, 2, [7.5, 4.76, 5.1, 0, 1, -2.22], 4, 0);

// console.log(res1);
getN.addEventListener('click', () => {
    generateInps(inpChisl.value, testInps, 'ch');
    chisloLength = Number(inpChisl.value);
    generateInps(inpZnam.value, testInps2, 'zn');
    znamLength = Number(inpZnam.value);
});

function generateInps(n, tagId) {
    tagId.innerHTML = '';
    for (let i = 0; i < n; i++) {
        let newElem = document.createElement('input');
        newElem.type = 'number';
        newElem.className = `inp${i}${tagId}`;
        newElem.className = 'test-style';
        tagId.appendChild(newElem);
    }
}

function getValueInp() {
    for (let i = 0; i < chisloLength; i++) {
        koefValueChisl.push(Number(document.getElementById(`inp${i}ch`).value));
    }
    for (let i = 0; i < znamLength; i++) {
        koefValueZnam.push(Number(document.getElementById(`inp${i}zn`).value));
    }
}