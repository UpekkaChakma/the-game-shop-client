import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebaseConfig from './firebase.config';
import { Link } from 'react-router-dom';
import './Login.css';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        errorMessage: '',
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    //<============================================================================>

    //<=========================== google sign in===================================>
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    name: displayName,
                    email,
                    photoURL: photoURL
                }
                setLoggedInUser(signedInUser);
                history.replace(from);

            }).catch((error) => {
                const errorMsg = error.message;
                const newUser = { ...user };
                newUser.errorMessage = errorMsg;
                setUser(newUser);
            });
    }

    //<================================================================================>


    return (
        <Row>
            <Col sm={9} md={7} lg={5} className="mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">Sign In</h5>
                        <form className="form-signin">

                            <div className="form-label-group">
                                <input name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                                <label htmlFor="inputEmail">Email address</label>
                            </div>

                            <div className="form-label-group">
                                <input name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required autoFocus />
                                <label htmlFor="inputPassword">Password</label>
                            </div>

                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                <div style={{ color: 'red' }}>{user.errorMessage}</div>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign In</button>
                            <p className="mt-4 ml-5" >New here? <Link to="#">SignUp</Link></p>
                        </form>
                            <hr className="my-4" />
                            <button onClick={handleGoogleSignIn} 
                                className="btn btn-md btn-google btn-block text-uppercase form-signin" type="submit" >
                                <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
                            </button>
                            <button className="btn btn-md btn-facebook btn-block text-uppercase form-signin" type="submit" >
                                <FontAwesomeIcon icon={faFacebook} /> Sign in with Facebook
                                </button>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Login;