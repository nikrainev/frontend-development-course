function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const getRandomArbitrary = ({
    min,
    max,
}) => {
    return Math.floor(Math.random() * (max - min) + min);
};

/**
 * Бей или беги
 * 
 * @param {Number} a Левая граница
 * @param {Number} b Правая граница
 * @returns {('hit' | 'run')}
 */
export const hitOrRun = (a, b) => {
    if (isPrime(getRandomArbitrary({
        min: a,
        max: b
    }))) {
        return 'run'
    }
    return 'hit'
};
