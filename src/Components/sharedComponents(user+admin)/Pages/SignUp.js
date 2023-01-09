import React, { useContext, useRef } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Config/firebase.config';
import useSignInWith from '../customHooks/useSignInWith';
import SignUpAndLogInForm from '../UI/SignUpAndLogInForm/SignUpAndLogInForm';
import { alert, successAlert } from '../UI/Alert';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [setLoggedInUser] = useContext(UserContext);

    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();


    const submit = async (e) => {
        e.preventDefault();

        if (password.current.value !== confirmPassword.current.value) {
            alert("password and confirm password does not match");
            return
        } else if (password.current.value.length <= 8) {
            alert("password must be 8 characters length");
            return
        }

        let userCredentials = await firebase.auth().createUserWithEmailAndPassword(email.current.value, password.current.value);
        alert("A verification link has sent to your email to verify")
        await userCredentials.user.sendEmailVerification();

        let interval = setInterval(async () => {
            if (userCredentials.user.emailVerified) {
                successAlert("account created successfully");
                clearInterval(interval);
                const newUser = {
                    name: userCredentials.user.displayName,
                    email: userCredentials.user.email,
                    photo: userCredentials.user.photoURL
                };
                setLoggedInUser(newUser)
                history.replace(from);
            }
            await userCredentials.user.reload();
        }, 2000);
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
                        confirmPassword={confirmPassword}
                        submit={submit}
                        handleGoogleSignIn={handleGoogleSignIn}
                        handleFacebookSignIn={handleFacebookSignIn}
                        shouldConfirmPassword={true}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;