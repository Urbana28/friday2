import React, {SetStateAction, Dispatch} from 'react';
import s from './../.././App.module.css'
import {NavLink, Redirect} from 'react-router-dom';
import {NEKO_PATH, REGISTER_PATH, FORGOT_PATH} from '../../neko-1-main/main-1-ui/Routes';
import Preloader from "./Preloader";
import useForm from "react-hook-form";


interface SignInProps {
    email: string,
    password: string,
    setEmail: Dispatch<SetStateAction<string>>,
    setPassword: Dispatch<SetStateAction<string>>
    setCheck: Dispatch<SetStateAction<boolean>>
    loginMe: (email: string, password: string, rememberMe: boolean) => void
    check: boolean
    error: string | undefined
    token: string | null
    isFetching: boolean
}

const SignIn: React.FC<SignInProps> = ({
                                           token, email, password,
                                           setEmail, setPassword, check, setCheck,
                                           loginMe, error, isFetching
                                       }) => {
    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data: any) => {
        loginMe(data.email, data.password, data.check)
    };


    if (token) return <Redirect to={NEKO_PATH}/>;
    return (
        <div className={s.signIn}>
            {error && <span className={s.error}>{error}</span>}
            {isFetching && <Preloader/>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        ref={register({
                            required: 'Required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid email adress'
                            }
                        })}
                        /*onChange={(e) => setEmail(e.currentTarget.value)}*/
                        type="text"
                        placeholder={'login'} name='email'
                    />
                    {errors.email && errors.email.message && <span className={s.error}>{errors.email.message}</span>}

                </div>
                <div>
                    <input
                        ref={register({required: true})}
                        /*onChange={(e) => setPassword(e.currentTarget.value)}*/ type="password"
                        placeholder={'password'} name='password'
                    />
                    {errors.password && <span className={s.error}>Password is required!</span>}
                </div>

                <div>
                    <button type='submit'>Sign in</button>
                </div>
                <div>
                    <NavLink to={FORGOT_PATH}>forgot password?</NavLink>
                </div>
                <div>

                    <input checked={check} onChange={(e) => setCheck(e.currentTarget.checked)}
                           type="checkbox"/> remember me
                </div>
            </form>

            <NavLink to={REGISTER_PATH}>Registration</NavLink>


        </div>
    );
};

export default SignIn;
