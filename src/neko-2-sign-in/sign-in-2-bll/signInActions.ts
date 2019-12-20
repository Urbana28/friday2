const SET_USER = 'SET_USER';
const IS_FETCHING_PRELOAD = 'IS_FETCHING_PRELOAD';

interface ISameAction {
    type: typeof SET_USER,
    data: IData
}

interface IPreloadAction {
    type: typeof IS_FETCHING_PRELOAD,
    isFetching: boolean
}

interface IData {
    email: string,
    token: string,
    error: string | undefined
}

export type ISignInActions = ISameAction | IPreloadAction;

export let setUser = (userData: IData): ISignInActions => {
    return {type: SET_USER, data: userData}
};


export let isFetchingPreload = (isFetching: boolean):IPreloadAction => {
    return {type: IS_FETCHING_PRELOAD, isFetching}
}