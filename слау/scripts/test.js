let uravnenie = [
    [1, 3, 5],
    [5, 6, 2],
    [2, -3, 7]
];

for (let i = 0; i < uravnenie.length; i++) {
    let arr = [];
    for (let j = 0; j < uravnenie[i].length; j++) {
        arr.push(uravnenie[i][j]);
    }
}
// вывод элементов за главной диагональю
for (let i = 0; i < uravnenie.length; i++) {
    for (let j = i; j < uravnenie.length; j++) {
        let a;
        if (i == j) {
            a = uravnenie[i][j];
        }
        console.log(uravnenie[i][j]);
    }
}
// если первый элемент матрицы = 0, то меняем первую строку с любой строкой, где первый эл-т не равен 0
/**
 * проверка каждого элемента на 0, кроме элементов главной диагонали
 *
 */
for (let i = 0; i < uravnenie.length; i++) {
    step1A(uravnenie[i], i);
}

function step1A(stroka, koef) {
    let newStroka = [];
    for (let i = 0; i < stroka.length; i++) {
        newStroka.push(stroka[i] / stroka[koef]);
    }
    stroka = newStroka;
    console.log(newStroka);
    for (let i = 1; i < uravnenie.length; i++) {
        step1B(uravnenie[i], stroka, i - 1); // вот тут передаем строку
    }
}

function step1B(stroka, mainStroka, j) {
    //получили строку
    let newStroka = [];
    for (let i = 0; i < stroka.length; i++) {
        //элементы строки  элементы 1 строки    коэффициент
        newStroka.push(mainStroka[i] * stroka[j] - stroka[i]);
    }
    console.log(newStroka);
}