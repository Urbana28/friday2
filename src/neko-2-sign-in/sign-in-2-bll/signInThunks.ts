import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {isFetchingPreload, ISignInActions, setUser} from "./signInActions";
import {INekoActions} from "../../neko-6-neko/neko-2-bll/nekoActions";
import { SignInAPI } from "../sign-in-3-dal/SignInAPI";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const signIn = (email:string, password:string, rememberMe:boolean): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions | INekoActions>, getStore: IGetStore) => {
    dispatch(isFetchingPreload(true))
    let result = await SignInAPI.signIn(email, password, rememberMe);
    dispatch(isFetchingPreload(false))
    dispatch(setUser(result.data))
    };
