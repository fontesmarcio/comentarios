import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAC4ViLf7qNLqbL6aVyPzzvbbq77GLjda8",
    authDomain: "reactjs-dacdf.firebaseapp.com",
    databaseURL: "https://reactjs-dacdf.firebaseio.com",
    projectId: "reactjs-dacdf",
    storageBucket: "reactjs-dacdf.appspot.com",
    messagingSenderId: "424659736935"
})

const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base