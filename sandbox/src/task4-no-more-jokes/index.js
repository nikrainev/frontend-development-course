/**
 * Валидирует операнды и возвращает их сумму
 * 
 * @param {unknown} leftOperand Левый операнд
 * @param {unknown} rightOperand Правый операнд
 * @returns {Number} Сумма операндов
 */
export const sum = (leftOperand, rightOperand) => {
    if (isNaN(leftOperand) && isNaN(rightOperand)) {
        throw new Error('Operands are not numbers')
    }

    if (isNaN(leftOperand)) {
        throw new Error('The left operand is not number')
    }

    if (isNaN(rightOperand)) {
        throw new Error('The right operand is not number')
    }

    return +leftOperand + +rightOperand;
};
