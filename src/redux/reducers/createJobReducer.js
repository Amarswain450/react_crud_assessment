import {
    CREATE_JOB_FAILED,
    CREATE_JOB_REQUEST,
    CREATE_JOB_SUCCESS,
    DELETE_JOB_DETAILS_FAILED,
    DELETE_JOB_DETAILS_REQUEST,
    DELETE_JOB_DETAILS_SUCCESS,
    GET_FIRST_FORM_DATA,
    GET_JOB_DETAILS_FAILED,
    GET_JOB_DETAILS_REQUEST,
    GET_JOB_DETAILS_SUCCESS,
    GET_SINGLE_JOB_DETAIL_FAILED,
    GET_SINGLE_JOB_DETAIL_REQUEST,
    GET_SINGLE_JOB_DETAIL_SUCCESS,
    UPDATE_JOB_DETAIL_FAILED,
    UPDATE_JOB_DETAIL_REQUEST,
    UPDATE_JOB_DETAIL_SUCCESS
} from "../types";

const initialState = {
    firstFormJobData: {},
    loading: false,
    responseData: undefined,
    errorMessage: "",
    jobDeatilDatas: [],
    isDeleted: "",
    getSingleJobData: {},
    updateResponse: {}
}

export const getFirstFormDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FIRST_FORM_DATA:
            return {
                ...state,
                firstFormJobData: action.payload
            }
        default:
            return state;
    }
}

export const createFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_JOB_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case CREATE_JOB_SUCCESS:
            return {
                ...state,
                loading: false,
                responseData: action.payload,
            }

        case CREATE_JOB_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }

        case GET_JOB_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                jobDeatilDatas: action.payload
            }

        default:
            return state;
    }
}

export const jobDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOB_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_JOB_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                jobDeatilDatas: action.payload
            }

        case GET_JOB_DETAILS_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}

export const deleteJobDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_JOB_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_JOB_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case DELETE_JOB_DETAILS_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }

        case GET_JOB_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                jobDeatilDatas: action.payload
            };

        default:
            return state;
    }
}

export const getSingleJobDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SINGLE_JOB_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_SINGLE_JOB_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                getSingleJobData: action.payload
            }

        case GET_SINGLE_JOB_DETAIL_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}

export const updateJobDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_JOB_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_JOB_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                updateResponse: action.payload
            }

        case UPDATE_JOB_DETAIL_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }

        case GET_JOB_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                jobDeatilDatas: action.payload
            };

        default:
            return state;
    }
}