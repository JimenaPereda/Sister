import React, { Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import { Button} from 'react-bootstrap';
import *as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase';
import "./index.css";

/* hola */

const firebaseApp = firebase.initializeApp(firebaseConfig);
class Login extends Component{
    render(){
        const {user,signOut, signInWithGoogle,} = this.props;
        return(
            <div>
                {
                    user ?
                    <p className="googText">Hello, {user.displayName}</p>
                    :<p className="googText">Please sign in</p>
                }
                {
                    user ?<div className="googleCol"> <button className="googleBtn" onClick={signOut}>Sign out</button> </div>
                    :<div className="googleCol"><button className="googleBtn" onClick={signInWithGoogle}>Sign in with Google</button> </div>
                }
            </div>
        );
    }
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),

};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);