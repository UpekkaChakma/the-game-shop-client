import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './SignUpAndLogInForm.css'

const SignUpAndLogInForm = ({ email, password, confirmPassword, handleGoogleSignIn, handleFacebookSignIn, submit, shouldConfirmPassword }) => {

    return (
        <div className="card rounded-xl pb-3 px-3 my-5">
            <div className="card-body">
                <h5 className="card-title text-center font-600 text-secondary text-uppercase mb-4">
                    {shouldConfirmPassword ?
                        'Sign Up'
                        :
                        'LOG IN'
                    }
                </h5>

                <form
                    onSubmit={submit}
                >
                    <input ref={email}
                        className="form-control text__P border rounded-pill mb-4 form-input"
                        name="email"
                        type="email"
                        id="inputEmail"
                        placeholder="Email address"
                        required
                    />
                    <input ref={password}
                        className="form-control border rounded-pill mb-4 form-input"
                        name="password"
                        type="password"
                        id="inputPassword"
                        placeholder="Password"
                        required
                    />
                    {
                        shouldConfirmPassword &&
                        <input ref={confirmPassword}
                            className="form-control border rounded-pill form-input"
                            name="confirmPassword"
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            required
                        />
                    }

                    <div className="my-4">
                        <button className="btn btn-md btn-primary btn-block rounded-pill mb-4" type="submit">
                            {shouldConfirmPassword ?
                                'Sign Up'
                                :
                                'Log In'
                            }
                        </button>
                    </div>
                </form>

                <div className='my-4'>
                    {shouldConfirmPassword ?
                        <span> Already have an account? <Link to="/login">Log in</Link></span>
                        :
                        <span> New here? <Link to="/signUp">Sign Up</Link></span>
                    }
                </div>

                <button onClick={handleGoogleSignIn}
                    className="btn btn-md btn-google btn-block text__p font-300 d-flex align-items-center justify-content-center" >
                    <FontAwesomeIcon icon={faGoogle} className="mr-2 text__p" />
                    log in with Google
                </button>

                <button onClick={handleFacebookSignIn}
                    className="btn btn-md btn-facebook btn-block text__p font-300 d-flex align-items-center justify-content-center" >
                    <FontAwesomeIcon icon={faFacebook} className="mr-2 text__p" />
                    Log in with Facebook
                </button>

            </div>
        </div >
    );

}

export default SignUpAndLogInForm