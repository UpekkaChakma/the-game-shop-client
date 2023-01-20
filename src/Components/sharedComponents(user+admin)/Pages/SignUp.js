import React, { useContext, useRef } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { app } from "../Config/firebase.config";
import { UserContext } from '../../../App';
import useSignInWith from '../customHooks/useSignInWith';
import SignUpAndLogInForm from '../UI/SignUpAndLogInForm/SignUpAndLogInForm';
import { alert, successAlert } from '../UI/Alert';
import useGetJwtToken from '../../Admin/customHooks/useGetJwtToken';


const Login = () => {
    let history = useHistory();
    const { setLoggedInUser } = useContext(UserContext);
    const { getJwtToken } = useGetJwtToken();

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
        try {
            let userCredentials = await app.auth().createUserWithEmailAndPassword(email.current.value, password.current.value);
            alert("A verification link has sent to your email")
            await userCredentials.user.sendEmailVerification();

            let interval = setInterval(async () => {
                if (userCredentials.user.emailVerified) {
                    successAlert("account created successfully");
                    clearInterval(interval);
                    const token = await getJwtToken(userCredentials.user.email)
                    const newUser = {
                        name: userCredentials.user.displayName || 'user',
                        email: userCredentials.user.email,
                        photo: userCredentials.user.photoURL || 'https://lh4.googleusercontent.com/-Bt_0NORCvw8/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckq6PN0bfARfUbZ5bcvCRrPeBUdKg/s96-c/photo.jpg',
                        token: token.data
                    }
                    setLoggedInUser(newUser)
                    history.goBack();
                }
                await userCredentials.user.reload();
            }, 2000);
        } catch (error) {
            error.message ? alert(error.message) : alert('please try again')
        }

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