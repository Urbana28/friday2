import React from 'react';
import Register from './Register';
import {useDispatch, useSelector} from "react-redux";
import { register } from '../register-2-bll/registerThunks';
import {IAppStore} from "../../neko-1-main/main-2-bll/store";

const RegisterContainer: React.FC = () => {

    const {success, error} = useSelector((state: IAppStore) => {
        return {
            success: state.register.success,
            error: state.register.error
        }
    });
    const dispatch = useDispatch();

    const registerMe = (email: string, password: string) => {
        dispatch(register(email, password))
    };

    return (
        <Register error={error} success={success} registerMe={registerMe}/>
    );
};

export default RegisterContainer;
