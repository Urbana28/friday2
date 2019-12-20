export interface IBooleanState {
    loading: boolean
    error: boolean
    success: boolean
}

export const booleanInitialState: IBooleanState = {
    loading: false,
    error: false,
    success: false
};