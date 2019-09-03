import axios from 'axios'
export const getfeature = () => dispatch => {
    dispatch({
        type: "LOADING_FEATURE"
    })
    axios
        .get("/api/features")
        .then(res => dispatch({
            type: "GET_FEATURE",
            payload: res.data
        })).catch(err => console.log(err))

}