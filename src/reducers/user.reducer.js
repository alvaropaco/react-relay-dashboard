export default (state={}, action) => {
    switch(action.type) {
        case 'USER_SELECTED':
            return action.payload
        case 'UPDATE_USER':
            return action.payload
        default:
            return state;
    }
}
