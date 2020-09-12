import React, { useState } from 'react';
import './App.css';
import { auth } from './firebase/firebase.util';
import { signInWithGoogle } from '../src/firebase/firebase.util';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Map from './img/Map.jpg';
import LoginSignIn from './components/LoginSignIn';

function App() {
  // console.log(process.env.REACT_APP_apiKey);
  // const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="App">
      {/* <button type="submit" onClick={signInWithGoogle}>Test</button>
      <img src={Map} width='80%'></img> */}
      <LoginSignIn></LoginSignIn>

    </div>
  );
}

export default App;
