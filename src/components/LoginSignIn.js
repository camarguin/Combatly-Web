import React, { Component } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

class LoginSignIn extends Component {
    state = { isSignedIn: false };

    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })
    }


    render() {
        return (
            <div>
                {this.state.isSignedIn ?
                    (
                        <span>
                            <div>Signed In!</div>
                            <button onClick={() => firebase.auth().signOut()}>Sign out</button>
                            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                            <img alt="profile pic" src={firebase.auth().currentUser.photoURL}></img>
                        </span>
                    )
                    :
                    (
                        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                    )
                }

            </div>
        )
    }
}
export default LoginSignIn;
