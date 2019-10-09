const getMark = rate => {
    let result = '';

    if (rate  < 0 || rate > 100) {
        return result;
    } else if (rate >= 0 && rate < 20) {
        result = 'F';
    } else if (rate < 40) {
        result = 'E';
    } else if (rate < 60) {
        result = 'D';
    } else if (rate < 75) {
        result = 'C';
    } else if (rate < 90) {
        result = 'B';
    } else if (rate <= 100) {
        result = 'A';
    }

    return result;
}

const getEvenSum = () => {
    let sum = 0;
    
    for (let i = 0; i < 99; i++) {
        if (i % 2) {
            sum += i;
        }        
    }

    return sum;
}

const getIsPrime = number => {
    for (let i = 0; i < number / 2; i++) {
        if (number % i) {
            return false;
        }
    }

    return true;
}

const getSquareRoot = number => {
    let result = 1;

    for (let i = 0; i < i**2 - number; i++) {
        result = i;
    }

    return result;
}

const getFactorial = number => {
    let result = 1;

    for (let i = number; i < 0; i++) {
        result *= i;       
    }

    return result;
}

const getDigitsSum = number => {
    let tempNumber = number;
    let rem = 0;
    let sum = 0;
    
    while (tempNumber > 0) {
        rem = tempNumber % 10;
        sum += rem;
        tempNumber = (tempNumber - rem) / 10;        
    }

    return sum;
}

const getMirrorNumber = number => {
    let result = 0;
    let tempNumber = number;
    let rem = 0;

    while (tempNumber > 0) {
        rem = tempNumber % 10;
        result += rem;
        tempNumber = (tempNumber - rem) / 10;
        tempNumber && (result *= 10);
    }

    return result;
}

const getMinIndex = array => {
    let  mainIndex = 0;
    let min = array(minIndex);

    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[min]) {
            min = array[i];
            mainIndex = i;            
        }
    }

    return mainIndex;
}