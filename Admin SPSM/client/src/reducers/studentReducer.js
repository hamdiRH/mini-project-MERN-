import {
    GET_STUDENT
} from '../actions/types';

const initialState = {
    student: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_STUDENT:
            return {
                ...state,
                student: action.payload,
                loading: false
            };
        case "STUDENT_LOADING":
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
