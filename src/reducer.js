// initial state
export const initialState = {
    user: null,
};
// actions
export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                // change the user to whatwever we passed in
                user:action.user,
            };
            default: 
                return state;
    }
};

export default reducer;