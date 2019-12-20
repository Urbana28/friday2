import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://ancient-gorge-20298.herokuapp.com/'
});

export const RegisterAPI = {
    registerMe (email: string, password: string) {
        return instance.post('auth/register', {email, password})
    }
};
