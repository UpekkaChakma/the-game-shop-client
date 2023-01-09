import React, { useContext, useRef } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Config/firebase.config';
import useSignInWith from '../customHooks/useSignInWith';
import SignUpAndLogInForm from '../UI/SignUpAndLogInForm/SignUpAndLogInForm';
import { successAlert } from '../UI/Alert';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [setLoggedInUser] = useContext(UserContext);

    const email = useRef();
    const password = useRef();


    const submit = async (e) => {
        e.preventDefault();
        const userCredentials = await firebase.auth.signInWithEmailAndPassword(email, password);
        successAlert("Log In successful");
        const newUser = {
            name: userCredentials.user.displayName,
            email: userCredentials.user.email,
            photo: userCredentials.user.photoURL
        };
        setLoggedInUser(newUser)
        history.replace(from);
    }

    const { handleSignIn: handleGoogleSignIn } = useSignInWith('google');
    const { handleSignIn: handleFacebookSignIn } = useSignInWith('facebook');

    return (
        <Container fluid>
            <Row>
                <Col md="5" className="mx-auto ">
                    <SignUpAndLogInForm
                        email={email}
                        password={password}
                        submit={submit}
                        handleGoogleSignIn={handleGoogleSignIn}
                        handleFacebookSignIn={handleFacebookSignIn}
                        shouldConfirmPassword={false}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;