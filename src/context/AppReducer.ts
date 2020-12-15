const AppReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {
                ...state,
                watchLater: [action.payload, ...state.watchLater]
            }
        default:
            return state;
    }
}

export default AppReducer