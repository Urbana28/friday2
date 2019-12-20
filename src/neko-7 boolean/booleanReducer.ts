import {booleanInitialState} from "./booleanInitialState";
import {IBooleanActions} from "./booleanActions";


export const booleanReducer = (state = booleanInitialState, action: IBooleanActions) => {
    switch (action.type) {
        case "SET_LOADING_PROGRESS":
            return {
                ...state,
                loading: action.loading
            };
        case "SET_ERROR":
            return {
                ...state,
                error: action.error
            };
        case "SET_SUCCESS":
            return {
                ...state,
                success: action.success
            };
        default:
        {return state}
    }
};