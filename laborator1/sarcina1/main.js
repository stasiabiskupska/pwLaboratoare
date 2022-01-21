let result = false;

while (!result) {

    let n = prompt('Введите число. Чтобы выйти введите букву q');

    switch (n) {
        case '0':
            alert('ноль');
            break;
        case '1':
            alert('один');
            break;
        case '2':
            alert('два');
            break;
        case '3':
            alert('три');
            break;
        case '4':
            alert('четыре');
            break;
        case '5':
            alert('пять');
            break;
        case '6':
            alert('шесть');
            break;
        case '7':
            alert('семь!');
            break;
        case '8':
            alert('восемь');
            break;
        case '9':
            alert('девять');
            break;
        case 'Q':
        case 'q':
            result = true;
            break;
        default:
            alert("Нет таких значений");
    }
}