import React from 'react';
import {
    MDBContainer
}
    from 'mdb-react-ui-kit';
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
    return (
        <div>
            <MDBContainer fluid>
                <div className="p-5 bg-image" style={{background:"green", height: '350px',textAlign: 'center'}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/fir-2c9ce.appspot.com/o/Money-Lover---Logo.png?alt=media&token=01ddbb3b-dddb-4e07-b494-c4b4cdde884d"
                         style={{width: '350px'}}
                         alt="" fluid/>
                </div>
                <div style={{marginTop: '-125px'}}>
                <RegisterForm />
                </div>
            </MDBContainer>
        </div>
    );
};

export default RegisterPage;