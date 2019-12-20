import {SET_EMAIL_FORGOT} from './forgotReducer'

interface ISomeAction {
    type: string,
    payload: string
}

export type IForgotActions = ISomeAction;


export const setForGot = (email: string):ISomeAction => ({
    type: SET_EMAIL_FORGOT,
    payload: email
});
