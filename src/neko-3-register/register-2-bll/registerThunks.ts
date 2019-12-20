import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {IRegisterActions} from "./registerActions";
import { RegisterAPI } from "../register-3-dal/RegisterAPI";
import {setRegisterResponse} from "./registerReducer";


type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const register = (email: string, password: string): ThunkAction<Return, IAppStore, ExtraArgument, IRegisterActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IRegisterActions>, getStore: IGetStore) => {
       let result = await RegisterAPI.registerMe(email, password);
       dispatch(setRegisterResponse(result.data))
    };
