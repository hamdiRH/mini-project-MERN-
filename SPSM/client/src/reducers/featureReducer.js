const initialState = { feature: [], isloading: false }
export default (state = initialState, action) => {
    if (action.type === "GET_FEATURE") {
        return { feature: action.payload, isloading: false }
    }
    else if (action.type === "LOADING_FEATURE") {
        return { ...state, isloading: true }
    }
    return state

}
