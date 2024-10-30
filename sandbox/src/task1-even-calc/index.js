/**
 * Возвращает сумму всех чётных чисел в массиве
 * 
 * @param {number[]} numbers Массив чисел
 * @returns {number} Сумма чётных чисел
 */
export const solutionFn = (numbers) => {
    return numbers
        .filter((n) => n % 2 === 0)
        .reduce((acc, curr) => acc + curr, 0);
};
