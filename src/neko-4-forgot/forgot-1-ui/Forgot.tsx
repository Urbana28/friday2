import React from 'react';

interface ForgotProps {
    email: string,
    forgotEmail: () => void
}

const Forgot: React.FC<ForgotProps> = ({email, forgotEmail}) => {

    return (
        <div style={{
            display: 'flex',
            flexFlow: 'column',
            margin: "150px",
            alignItems: 'center',

        }}>
            <span>error</span>
            <input type={"text"}
                   placeholder={'Email'}
                   value={email}/>
            <button onClick={forgotEmail}>send email</button>
        </div>
    );
};

export default Forgot;
