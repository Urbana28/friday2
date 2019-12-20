import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://ancient-gorge-20298.herokuapp.com/'
});

export const ForgotAPI = {
    forgot(email: string) {
        return instance.post(`auth/forgot`, {email})
    }
};
