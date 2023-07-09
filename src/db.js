import firebase from 'firebase';

//web app's Firebase configuration
const firebaseConfig = {
    apiKey: "<YOUR API KEY>",
    authDomain: "<YOUR DOMAIN>",
    projectId: "<YOUR PROJECT ID>",
    storageBucket: "<STORAGE BUCKET>",
    messagingSenderId: "<YOUR MESSAGING SENDER ID>",
    appId: "<YOUR APP ID>"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();