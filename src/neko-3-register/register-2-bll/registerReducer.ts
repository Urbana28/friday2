import {registerInitialState} from "./registerInitialState";
import {IRegisterActions, IRegistrationResponse, SET_REGISTER_RES} from "./registerActions";

export const registerReducer = (state = registerInitialState, action: IRegisterActions) => {
    switch (action.type) {
        case "SET_REGISTER_RES":
        return {
            ...state,
            ...action.response
        }
        default: return state
    }
};


export const setRegisterResponse = (response: IRegistrationResponse):IRegisterActions => {
    return {
        type: SET_REGISTER_RES,
        response
    }
}
