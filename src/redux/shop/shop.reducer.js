const INITIAL_STATE = {
    collections: {}
};

const shopDataReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'UPDATE_COLLECTION':
            return{
                ...state,
                collections : action.payload
            }
        default:
            return state
    }
}

export default shopDataReducer;
