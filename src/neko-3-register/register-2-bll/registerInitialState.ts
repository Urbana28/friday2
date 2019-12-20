export interface IRegisterState {
    success: boolean,
    error: string | null
}

export const registerInitialState: IRegisterState = {
    success: false,
    error: null
};
