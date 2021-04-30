import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAOzRnOBzQzpdEsZuXfht8NdTGJ5iv1t_I',
  authDomain: 'airbnb-colne.firebaseapp.com',
  projectId: 'airbnb-colne',
  storageBucket: 'airbnb-colne.appspot.com',
  messagingSenderId: '838886722671',
  appId: '1:838886722671:web:5e1f27e63b7bb9f85b919a',
  measurementId: 'G-WG1PX94SV6',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()
var storageRef = firebase.storage().ref()

export { auth, db, storageRef }
