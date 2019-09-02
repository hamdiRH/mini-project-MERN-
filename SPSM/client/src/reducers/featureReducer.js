export default (state = [], action) => {
    if (action.type === "GET_FEATURE") {
        state = action.payload
    }
    return state

}
