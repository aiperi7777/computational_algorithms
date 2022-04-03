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
/*for (let i = 0; i < uravnenie.length; i++) {
    for (let j = i; j < uravnenie.length; j++) {
        // let a = uravnenie[j][j];
        //console.log("a", a);
        //uravnenie[i][j] = uravnenie[i][j] / a;
        console.log(uravnenie[i][j]);
    }
}*/
// если первый элемент матрицы = 0, то меняем первую строку с любой строкой, где первый эл-т не равен 0
/**
 * проверка каждого элемента на 0, кроме элементов главной диагонали
 *
 */

for (let i = 0; i < uravnenie.length; i++) {
    if (uravnenie[i][i] != 1) {
        let a = uravnenie[i][i];
        for (let j = i; j < uravnenie.length; j++) {
            uravnenie[i][j] = uravnenie[i][j] / a;
            console.log(uravnenie[i][j]);
        }
        //} else {
        // for (let j = i; j < uravnenie.length; j++) {

        //}
    }

}


for (let i = 0; i < uravnenie.length; i++) {
    step1A(uravnenie[i], i);
}

function step1A(stroka, koef) {
    let newStroka = [];
    for (let i = 0; i < stroka.length; i++) {
        newStroka.push(stroka[i] / stroka[koef]);
        //console.log(stroka[i] / stroka[koef]);
    }

    stroka = newStroka;
    for (let i = 1; i < uravnenie.length; i++) {
        step1B(uravnenie[i], stroka, i - 1); // вот тут передаем строку
    }
}

function step1B(stroka, mainStroka, j) {
    let newStroka = [];
    for (let i = 0; i < stroka.length; i++) {
        newStroka.push(mainStroka[i] * stroka[j] - stroka[i]);
    }
    // console.log(newStroka);
}