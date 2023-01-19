import React, { useContext, useRef } from 'react';
import { useHistory } from 'react-router';
import { Container, Col, Row } from 'react-bootstrap';
import { app } from "../Config/firebase.config";
import SignUpAndLogInForm from '../UI/SignUpAndLogInForm/SignUpAndLogInForm';
import { UserContext } from '../../../App';
import useSignInWith from '../customHooks/useSignInWith';
import useGetJwtToken from '../../Admin/customHooks/useGetJwtToken';
import { failedAlert } from '../UI/Alert';

const Login = () => {
    let history = useHistory();
    const { setLoggedInUser } = useContext(UserContext);
    const { getJwtToken } = useGetJwtToken();

    const email = useRef();
    const password = useRef();


    const submit = async (e) => {
        e.preventDefault();
        try {
            const userCredentials = await app.auth().signInWithEmailAndPassword(email.current.value, password.current.value);
            const token = await getJwtToken(userCredentials.user.email)
            const newUser = {
                name: userCredentials.user.displayName || 'user',
                email: userCredentials.user.email,
                photo: userCredentials.user.photoURL || 'https://lh4.googleusercontent.com/-Bt_0NORCvw8/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckq6PN0bfARfUbZ5bcvCRrPeBUdKg/s96-c/photo.jpg',
                token: token.data
            }
            setLoggedInUser(newUser)
            history.goBack();
        } catch (error) {
            error.message ? failedAlert(error.message) : failedAlert("please try again")
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