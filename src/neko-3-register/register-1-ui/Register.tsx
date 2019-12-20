import React from 'react';
import './Register.css'
import useForm from "react-hook-form";
import { Redirect } from 'react-router-dom';
import {SIGN_IN_PATH} from "../../neko-1-main/main-1-ui/Routes";


interface RegisterProps {
    registerMe: (email: string, password: string) => void
    error: string | null
    success: boolean
}

const Register: React.FC<RegisterProps> = ({registerMe, success, error}) => {

    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data: any) => {
        registerMe(data.email, data.password)
    };

    if(success) return <Redirect to={SIGN_IN_PATH} />

    return (
        <div className='register'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Register</h1>
                {
                    (error && <span className='loginError'>{error}</span>) ||
                    (success && <span className='success'>Success</span>)
                }
                <input ref={register((
                    {
                        required: 'Field is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address"
                        }
                    }))} name='email' placeholder='example@mail.com' className={errors.email ? 'input_error' : 'input'}
                       type="text"/>
                {errors.email && errors.email.message && <span className='loginError'>{errors.email.message}</span>}
                <input ref={register({required: true})} name='password' placeholder='password'
                       className={errors.password ? 'input_error' : 'input'} type="password"/>
                {errors.password && <span className='loginError'>Field is required</span>}
                <button type='submit' className='btn'>Register</button>
            </form>
        </div>
    );
};

export default Register;
