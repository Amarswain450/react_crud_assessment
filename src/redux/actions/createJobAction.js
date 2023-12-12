import axios from "axios";
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
import { toast } from 'react-toastify';

export const getFirstFormDataAction = (firstFormData) => {
    return {
        type: GET_FIRST_FORM_DATA,
        payload: firstFormData
    }
}

export const createJobFormAction = (createJobData) => {
    return async (dispatch) => {
        dispatch({
            type: CREATE_JOB_REQUEST
        });
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const response = await axios.post(`${process.env.REACT_APP_API_URL}`, createJobData, config);
            toast.success(response.statusText, {
                position: "top-right",
                autoClose: 1000,
                theme: "light",
            });
            dispatch({
                type: CREATE_JOB_SUCCESS,
                payload: response.status
            });
            dispatch(getJobDetailsAction());
        } catch (error) {
            dispatch({
                type: CREATE_JOB_FAILED,
                payload:
                    error.message && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    }
}

export const getJobDetailsAction = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_JOB_DETAILS_REQUEST
        });
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}`);
            dispatch({
                type: GET_JOB_DETAILS_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: GET_JOB_DETAILS_FAILED,
                payload:
                    error.message && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            })
        }
    }
}

export const deleteJobDetailsAction = (id) => {
    return async (dispatch) => {
        dispatch({
            type: DELETE_JOB_DETAILS_REQUEST
        });
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/${id}`, config);
            dispatch({
                type: DELETE_JOB_DETAILS_SUCCESS,
                payload: data
            });
            dispatch(getJobDetailsAction());
        } catch (error) {
            dispatch({
                type: DELETE_JOB_DETAILS_FAILED,
                payload:
                    error.message && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    }
}

export const getSingleJobDetailAction = (id) => {
    return async (dispatch) => {
        dispatch({
            type: GET_SINGLE_JOB_DETAIL_REQUEST
        });
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/${id}`);
            dispatch({
                type: GET_SINGLE_JOB_DETAIL_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: GET_SINGLE_JOB_DETAIL_FAILED,
                payload:
                    error.message && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            })
        }
    }
}

export const updateJobDetailAction = (id, updateJobData) => {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_JOB_DETAIL_REQUEST
        });
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const {data} = await axios.put(`${process.env.REACT_APP_API_URL}/${id}`, updateJobData, config);
            dispatch({
                type: UPDATE_JOB_DETAIL_SUCCESS,
                payload: data
            });
            dispatch(getJobDetailsAction());
        } catch (error) {
            dispatch({
                type: UPDATE_JOB_DETAIL_FAILED,
                payload:
                    error.message && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    }
}