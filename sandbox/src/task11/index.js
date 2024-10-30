/**
 * Останавливает время на определённое количество миллисекунд
 *
 * @param {Number} ms - количество миллисекунд, на которое необходимо остановить время
 */
function theWorld(ms) {
    return new Promise((resolve) => {
        let seconds = Math.ceil(ms / 1000);

        const interval = setInterval(() => {
            --seconds;
            console.log(`Time will continue running in ${seconds}`)
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            resolve();
        }, ms);
    })
}
