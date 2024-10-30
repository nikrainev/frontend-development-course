
/**
 * Case Converter
 * 
 * @param {String} snakeCaseString Строка в snake_case
 * @returns {String} Строка в camelCase
 */
export const solutionFn = (snakeCaseString) => {
    return snakeCaseString
        .split('_')
        .map((w, index) => {
            if (index === 0) {
                return w;
            }

            return `${w.charAt(0).toUpperCase()}${w.slice(1)}`
        })
        .join('')
};
