import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyAtr2aWhKGACeg7EKzOdyDfxoyv-Ca3rF0",
    authDomain: "crwn-clothing-8460f.firebaseapp.com",
    projectId: "crwn-clothing-8460f",
    storageBucket: "crwn-clothing-8460f.appspot.com",
    messagingSenderId: "206228643652",
    appId: "1:206228643652:web:d1bb6158f7804b1d37c111",
    measurementId: "G-0JRH9B4PNM"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;