import React from 'react';
import Forgot from './Forgot';
import {forgotTC} from "../forgot-2-bll/forgotThunks";
import {connect} from "react-redux";


const ForgotContainer: React.FC = (props: any) => {


    const forgotEmail = () => {
        props.forgotTC(props.email);
    };

    return (
        <Forgot email={props.email} forgotEmail={forgotEmail}/>
    );
};

const mapStateToProps = (state: any) => {
    return {
        email: state.forgot.email
    }
};

const Container = connect(mapStateToProps, {forgotTC})(ForgotContainer);

export default Container;
