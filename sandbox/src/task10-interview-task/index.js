
/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */
export const solutionFn = (num) => {
    if (num / 10 < 1) {
        return num;
    }

    return solutionFn(num
        .toString()
        .split('')
        .map((n) => +n)
        .reduce((acc, cur) => acc * cur, 1))
};
