import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6R15C1s789V457jyIFC3NT96Po5V_pfg",
  authDomain: "upex-city-travellers.firebaseapp.com",
  projectId: "upex-city-travellers",
  storageBucket: "upex-city-travellers.appspot.com",
  messagingSenderId: "770397916402",
  appId: "1:770397916402:web:9a273c5259bc2b7dbe546b"
};
export default firebaseConfig;
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}
export { app }
