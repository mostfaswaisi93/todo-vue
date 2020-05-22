import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBFx7ET03grGSGhXdeNajlhIk25URPhMIA",
    authDomain: "todos-c2ed8.firebaseapp.com",
    databaseURL: "https://todos-c2ed8.firebaseio.com",
    projectId: "todos-c2ed8",
    storageBucket: "todos-c2ed8.appspot.com",
    messagingSenderId: "804459135610",
    appId: "1:804459135610:web:f89b4a077064f5addff1c3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore