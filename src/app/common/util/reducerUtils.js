export const createReducer = (initailState, fnMap) => {
    return (state = initailState, {type, payload}) => {
        const handler = fnMap[type]
        return handler ? handler(state, payload) : state
    }
}