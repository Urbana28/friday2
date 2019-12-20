import axios from 'axios';
import {baseURL} from "../../base-url";

const instance = axios.create({
    baseURL
});

export const SignInAPI = {
    signIn (email: string, password: string, rememberMe: boolean) {
        return instance.post('/auth/login', {email, password, rememberMe})
    }
};
/*export const apiLogin = {
    login(email, password,rememberMe) {
        return instance.post('/auth/login',{email, password,rememberMe})
    },
    logout(){
        return instance.delete('/auth/login')
    }
};*/
