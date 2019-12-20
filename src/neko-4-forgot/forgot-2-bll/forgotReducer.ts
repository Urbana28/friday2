import {forgotInitialState} from "./forgotInitialState";
import {IForgotActions} from "./forgotActions";

export const SET_EMAIL_FORGOT = "forgot-2-bll/SET_EMAIL_FORGOT";

export const forgotReducer = (state = forgotInitialState,
                              action: IForgotActions) => {
    switch (action.type) {
        case SET_EMAIL_FORGOT:
            return {
                ...state,
                email: action.payload
            };
        default: {
            return state;
        }
    }
};
