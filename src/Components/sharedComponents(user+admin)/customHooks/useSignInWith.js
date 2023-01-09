import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { useContext } from "react";
import { UserContext } from '../../../App';
import { failedAlert } from "../UI/Alert";

const useSignInWith = (method) => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [setLoggedInUser] = useContext(UserContext);

    const handleSignIn = async () => {
        let provider;
        if (method === 'google') {
            provider = new firebase.auth.GoogleAuthProvider();
        } else if (method === 'facebook') {
            provider = new firebase.auth.FacebookAuthProvider()
        }
        try {
            const userCredentials = await firebase.auth().signInWithPopup(provider)
            const newUser = {
                name: userCredentials.user.displayName,
                email: userCredentials.user.email,
                photo: userCredentials.user.photoURL
            }
            setLoggedInUser(newUser);
            history.replace(from);

        } catch (error) {
            failedAlert();
        }
    }
    return { handleSignIn }
}

export default useSignInWith