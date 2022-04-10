
const initState = {
    converterType: 'size',

}

const ReducerConverter = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_CONVERTER':
        return {
            ... state,
            converterType: action.newType
        }
        default:
            return state
    }
}

export default ReducerConverter;