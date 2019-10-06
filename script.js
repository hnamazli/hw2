// Условные операторы

//1
let a = 11;
let b = 2;

if (a % b) {
    console.log(a + b);
} else {
    console.log(a * b);
}

//2
let x = 5;
let y = -60;

if (x > 0 && y > 0) {
    console.log(1);
} else if (x > 0 && y < 0) {
    console.log(2);
} else if (x < 0 && y > 0) {
    console.log(4);
} else {
    console.log(3);
}

//3
let numArr = [3, 5, 8];
let num = 0;

for (i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0) {
        num += numArr[i];
    }
}

console.log(num);

//4
let num1 = 2;
let num2 = 5;
let num3 = 8;
let max = 0;

if (num1 + num2 + num3 > num1 * num2 * num3) {
    max = num1 + num2 + num3+ 3;  
} else {
    max = num1 * num2 * num3+ 3;
}

console.log(max);

//5
let rai = 98;

if (rai >= 90 && rai <= 100) {
    console.log('A');    
} else if (rai >= 75 && rai <= 89) {
    console.log('B');    
} else if (rai >= 60 && rai <= 74) {
    console.log('C');    
} else if (rai >= 40 && rai <= 59) {
    console.log('D');    
} else if (rai >= 20 && rai <= 39) {
    console.log('E');    
} else if (rai >= 0 && rai <= 19) {
    console.log('F');
} else {
    console.log('Неправильная оценка');
}

//Циклы

//1
let c = 0;

for (i = 1; i < 100; i++) {
    if (!(i%2)) {
        c += i;
    }
}

console.log(c);

//2
//3
//4
let fac = 5;
let n = 1;

for (i = 1; i <= fac; i++) {
    n *= i;
}
console.log(n);

//5 
let numSum = 576;
let tmp = 0;

while (numSum > 0) {
    tmp += numSum % 10;
    numSum = numSum / 10;
    console.log(tmp);
}
console.log(tmp);



//6
let z = 123;
let s = z.toString();
let r = '';

for (i = 0; i < s.length; i++) {
    r = s[i] + r;
}

console.log(r);

//Одномерные массивы

//1
//2
//3
//4
//5
//6
//7
//8
let arr = [1, 2, 3, 4] ;

//9
//10

//Функции

//1
function week(day) {
    let result = '';
    switch(day) {
        case 1:
            result = 'Понедельник';
          break;
        case 2:
            result = 'Вторник';
          break;
        case 3:
            result = 'Среда';
          break;
        case 4:
            result = 'Четверг';
          break;
        case 5:
            result = 'Пятница';
          break;
        case 6:
            result = 'Суббота';
          break;
        case 7:
            result = 'Воскресенье';
          break;
        default:
            result = 'Неправильное число';
      }
    return console.log(result);
}

//2
function name(params) {
    
}