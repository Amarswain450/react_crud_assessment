import {combineReducers} from "redux";
import { 
    createFormReducer, 
    deleteJobDetailsReducer, 
    getFirstFormDataReducer, 
    getSingleJobDetailReducer, 
    jobDetailsReducer,
    updateJobDetailReducer
} from "./createJobReducer";

const rootReducer = combineReducers({
    firstFormReducer: getFirstFormDataReducer,
    createJob: createFormReducer,
    jobDeatils: jobDetailsReducer,
    deleteReducer: deleteJobDetailsReducer,
    singleJobReducer: getSingleJobDetailReducer,
    updateJobReducer: updateJobDetailReducer
});

export default rootReducer;