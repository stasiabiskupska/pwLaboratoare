// TODO 4 Задача №2 - работа со свойствами
//  У нас есть объект, в котором хранятся зарплаты нашей команды:
//     let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//     }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function salarySumma(salaries) {
    console.log(salaries);
    let sum = 0;
    let salArray = Object.values(salaries); // получаем значения свойств объекта в виде массива
    for (let i = 0; i < salArray.length; i++) {
        sum = sum + salArray[i];
    }
    return sum;
}

console.log('Sum of salaries = ', salarySumma(salaries));