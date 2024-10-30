
/**
 * Глобальный переключатель стилей
 * 
 * @param {String} className Название класса
 */

const ACTIVE_SUFFIX = '_active';

export const globalToggle = (className) => {
    const elems = document.querySelectorAll(`.${className}, .${className}${ACTIVE_SUFFIX}`)

    if (elems.length === 0) {
        return;
    }

    elems.forEach((e) => {
        if (e.className.includes(ACTIVE_SUFFIX)) {
            e.className = className;
        } else {
            e.className = `${className}${ACTIVE_SUFFIX}`;
        }
    });
};
