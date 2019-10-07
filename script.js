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
let pNum = 4;

for(i = 2; i <= pNum; i++) {
    if (pNum === 2) {
        console.log('Простое число');
        break;
    }
    if(pNum % i === 0) {
        console.log('Не простое число');
    } else {
        console.log('Простое число');
    } break;
}

//3
//4
let fac = 5;
let n = 1;

for (i = 1; i <= fac; i++) {
    n *= i;
}
console.log(n);

//5 
let numVar = 576;
let strNum = numVar.toString();
let numSum = 0;

for (i = 0; i < strNum.length; i++) {
    numSum += Number(strNum[i]);
}
console.log(numSum);

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
let minNum = [5, 15, 40, 80, 17, 3];

for (i = 0; i < minNum.length; i++) {
    if(minNum[i] < minNum[0]){
        minNum[0] = minNum[i];
    }
}
console.log(minNum[0]);

//2
let maxNum = [5, 7, 40, 80, 17, 3];

for (i = 0; i < maxNum.length; i++) {
    if(maxNum[i] > maxNum[0]){
        maxNum[0] = maxNum[i];
    }
}
console.log(maxNum[0]);

//3
let minIndex = [5, 15, 40, 80, 17, 3];
let findMinIndex = 0;

for (i = 0; i < minIndex.length; i++) {
    if(minIndex[i] < minIndex[0]){
        findMinIndex = i;
    }
}
console.log(findMinIndex);

//4
let maxIndex = [5, 15, 40, 80, 17, 3];
let findMaxIndex = 0;

for (i = 0; i < maxIndex.length; i++) {
    if(maxIndex[i] > maxIndex[0]){
        findMaxIndex = i - 1;
    }
}
console.log(findMaxIndex);

//5
let arr1 = [5, 15, 40, 80, 17, 3];
let arrOddSum = 0;

for (i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2) {
        arrOddSum = arrOddSum + arr1[i];
    }
}
console.log(arrOddSum);

//6
let arr2 = [5, 15, 40, 80, 17, 3];
let arrRev = [];

for (i = 0; i < arr2.length; i++) {
    arrRev[i] = arr2[(arr2.length - i) - 1];
}
console.log(arrRev);

//7
let arr3 = [5, 15, 40, 80, 17, 3];
let arrOddIndex = 0;

for (i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2) {
        ++arrOddIndex;
    }
}
console.log(arrOddIndex + ' нечетных элементов в массиве');

//8
let arr4 = [1, 2, 3, 4];
let arrCenter = arr4.length / 2;
let arrPartFirst = [];
let arrPartSecond = [];

for (i = 0; i < arr4.length; i++) {
    if (arrCenter <= i) {
        arrPartFirst[i - arrCenter] = arr4[i];
    } else {
        arrPartSecond[i] = arr4[i];
    }
}
console.log(arrPartFirst.concat(arrPartSecond));

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