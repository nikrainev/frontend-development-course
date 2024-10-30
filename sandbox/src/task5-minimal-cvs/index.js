
/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit 
 * @returns {Object}
 */
export const getMinimalCVS = (initialCommit = []) => {
    const _state = [initialCommit];

    return {
        head: () => {
            return _state[_state.length - 1]
        },
        history: () => _state,
        push: (el) => {
            _state.push([..._state[_state.length - 1], el])
        },
        pop: () => {
            const lastVersion = [..._state[_state.length - 1]]
            const lastElem = lastVersion.pop();
            _state.push(lastVersion);
            return lastElem
        }
    }
};
