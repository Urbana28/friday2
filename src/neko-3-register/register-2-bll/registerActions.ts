export const SET_REGISTER_RES = 'SET_REGISTER_RES';

export interface IRegistrationResponse {
    success?: boolean
    error?: string

}

interface ISomeAction {
    type: typeof SET_REGISTER_RES,
    response: IRegistrationResponse
}

export type IRegisterActions = ISomeAction;

