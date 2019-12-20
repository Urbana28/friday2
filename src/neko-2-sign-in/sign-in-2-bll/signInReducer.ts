import {signInInitialState} from "./signInInitialState";
import {
    ISignInActions
} from "./signInActions";

export const signInReducer = (state = signInInitialState, action: ISignInActions) => {
    switch (action.type) {
        case 'SET_USER':
        return {
            ...state,
            ...action.data
        };
        case 'IS_FETCHING_PRELOAD':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default: {
            return state;
        }
    }
};


