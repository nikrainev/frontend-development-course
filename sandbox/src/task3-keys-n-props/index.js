/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */
export const solutionFn = (obj) => {
    const resultObj = {};

    for (let key in obj) {
        const typeName = typeof obj[key];
        resultObj[typeName] = (resultObj[typeName] || 0) + 1;
    }

    return resultObj;
};
