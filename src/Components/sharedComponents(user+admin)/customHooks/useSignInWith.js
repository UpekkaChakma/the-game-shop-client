import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from 'react-router';
import { useContext } from "react";
import { UserContext } from '../../../App';
import { failedAlert } from "../UI/Alert";
import { app } from "../Config/firebase.config";
import useGetJwtToken from "../../Admin/customHooks/useGetJwtToken";

const useSignInWith = (method) => {
    let history = useHistory();
    const { setLoggedInUser } = useContext(UserContext);
    const { getJwtToken } = useGetJwtToken();

    const handleSignIn = async () => {
        let provider;
        method === 'google' ? provider = new firebase.auth.GoogleAuthProvider() : provider = new firebase.auth.FacebookAuthProvider()

        try {
            const userCredentials = await app.auth().signInWithPopup(provider);
            const token = await getJwtToken(userCredentials.user.email)
            const newUser = {
                name: userCredentials.user.displayName,
                email: userCredentials.user.email,
                photo: userCredentials.user.photoURL,
                token: token.data
            }
            setLoggedInUser(newUser);
            history.goBack();

        } catch (error) {
            failedAlert(error.message);
        }
    }
    return { handleSignIn }
}

export default useSignInWith