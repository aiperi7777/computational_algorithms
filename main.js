let testInps = document.getElementById('test');
let testInps2 = document.getElementById('test1');
let getN = document.getElementById('getN');
let inpChisl = document.getElementById('inp_koefV');
let inpZnam = document.getElementById('inp_koefN');
//--------------- вычисление экспоненты --------------------------------
// встроенные методы
let e = Math.exp(1 / 4);
//  console.log(e.toFixed(8)); //1.28402542
// с помощью формул
let sum = 0;
let k = 1;
let res = 1; //u0
function exp(s, k, res) {
    let newRes;

    if (Math.abs(res) > 0.00000001) {
        //  console.log(res.toFixed(8));
        sum += res;
        newRes = (s / k) * res;
        k++;
        exp(s, k, newRes);
    }
    return sum.toFixed(8);
}
// console.log('e^(1/4) = ', exp(0.25, k, res));
//----------------- вычисление синуса --------------------
// встроенные методы
let x = document.getElementById('inp_x').value;
// let x = 0.41714;
// let sin = Math.sin(x);
let result = x;
//  console.log(sin.toFixed(8)); //0.40514735
//  с помощью формул
let sumSin = 0;

function findSin(x, k, result) {
    let newRes;
    if (Math.abs(result) > 0.0001) {
        sumSin += result;
        newRes = (-(x * x) / (2 * k * (2 * k + 1))) * result;
        k++;
        //  console.log(newRes.toFixed(5));
        findSin(x, k, newRes);
    }
    return sumSin.toFixed(4);
}
console.log('sin 0.41714 = ', findSin(x, k, result));
// пользователь вводит массив элементов, коэффициенты не целые числа, проверки на ввод корректных данных желательно,
findRes.addEventListener('click', () => {
    let x = document.getElementById('inp_x').value;
    let result = x;
    findSin(x, k, result);
    document.getElementById('res_e').value = exp(0.25, k, res);
});

function getPt(x, a, n, k) {
    if (k + 1 < n) {
        return getPt(x, a, n, k + 1) * x + a[k];
    }
    return a[n] * x + a[k];
}

let res1 = getPt(2, [2, 3, 1, 4, 13], 4, 0);

console.log(res1);
getN.addEventListener('click', () => {
    generateInps(inpChisl.value, testInps);
    generateInps(inpZnam.value, testInps2);
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