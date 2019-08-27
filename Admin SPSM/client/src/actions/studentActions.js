import axios from 'axios';
import { GET_STUDENT } from './types';

import { returnErrors } from './errorActions';

export const getStudent = () => dispatch => {
    dispatch(setStudentLoading());
    axios
        .get('/api/Student')
        .then(res =>
            dispatch({
                type: GET_STUDENT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};
export const setStudentLoading = () => {
    return {
        type: "STUDENT_LOADING"
    };
};
