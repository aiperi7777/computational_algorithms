let koefValueChisl = [];
let koefValueZnam = [];
let chisloLength;
let znamLength;
let testInps = document.getElementById('test');
let testInps2 = document.getElementById('test1');
let getN = document.getElementById('getN');
let inpChisl = document.getElementById('inp_koefV');
let inpZnam = document.getElementById('inp_koefN');
let sum = 0;
let k = 1;
let res = 1;

function exp(s, k, res) {
    let newRes;
    if (Math.abs(res) > 0.00000001) {
        sum += res;
        newRes = (s / k) * res;
        k++;
        exp(s, k, newRes);
    }
    return sum.toFixed(10);
}
let sumSin = 0;

function findSin(x, k, result) {
    let newRes;
    if (Math.abs(result) > 0.00000001) {
        sumSin += result;
        newRes = (-(x * x) / (2 * k * (2 * k + 1))) * result;
        k++;
        findSin(x, k, newRes);
    }
    return sumSin.toFixed(10);
}
let newRes;

function getPt(res, x, a, n, k) {
    if (k < n) {
        newRes = res * x + a[k + 1];
        k++;
        getPt(newRes, x, a, n, k);
    }
    return Number(newRes);
}
findRes.addEventListener('click', () => {
    koefValueChisl = [];
    koefValueZnam = [];
    let t = Number(document.getElementById('inp_t').value);
    let x = Number(document.getElementById('inp_x').value);
    let a = Number(document.getElementById('inp_a').value);
    let result = x;
    let sin = findSin(x, k, result);

    document.getElementById('res_sin').value = sin;
    document.getElementById('res_e').value = exp(0.25, k, res);
    document.getElementById('res_sindr').value = (a / sin).toFixed(8);
    getValueInp();
    let res1 = getPt(
        koefValueChisl[0],
        t,
        koefValueChisl,
        koefValueChisl.length - 1,
        0
    );
    document.getElementById('res_V').value = res1.toFixed(8);

    let res2 = getPt(
        koefValueZnam[0],
        t,
        koefValueZnam,
        koefValueZnam.length - 1,
        0
    );
    document.getElementById('res_N').value = res2.toFixed(8);
    let R = res1 / res2;
    document.getElementById('res_R').value = R.toFixed(8);
});

getN.addEventListener('click', () => {
    generateInps(inpChisl.value, testInps, 'ch');
    chisloLength = Number(inpChisl.value);
    generateInps(inpZnam.value, testInps2, 'zn');
    znamLength = Number(inpZnam.value);
});

function generateInps(n, cont, tagId) {
    for (let i = 0; i < n; i++) {
        let newElem = document.createElement('input');
        newElem.type = 'number';
        newElem.id = `inp${i}${tagId}`;
        cont.appendChild(newElem);
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