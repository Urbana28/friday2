
const SET_LOADING_PROGRESS = 'SET_LOADING_PROGRESS';
const SET_ERROR = 'SET_ERROR';
const SET_SUCCESS = 'SET_SUCCESS';

interface ISetLoadingProgress {
    type: typeof SET_LOADING_PROGRESS,
    loading: boolean
}
interface ISetError {
    type: typeof SET_ERROR,
    error: boolean
}
interface ISetSuccess {
    type: typeof SET_SUCCESS,
    success: boolean
}

export type IBooleanActions = ISetLoadingProgress | ISetError | ISetSuccess

export let setLoadingInProgress = (loading: boolean) => {
    return {type: SET_LOADING_PROGRESS, loading}
};
export let setError = (error: boolean) => {
    return {type: SET_ERROR, error}
};
export let setSuccess = (success: boolean) => {
    return {type: SET_SUCCESS, success}
};