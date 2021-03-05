const initialState = {
    totalCarts: 0
}

function dataCartsReducer(state = initialState, action){
    switch(action.type){
        case 'UPDATE_TOTALCARTS':
            return { totalCarts: action.payload }
        default:
            return state
    }
}

export default dataCartsReducer