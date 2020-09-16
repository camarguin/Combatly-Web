import React, { useState } from 'react';
import './App.css';
import { auth } from './firebase/firebase.util';
import { signInWithGoogle } from '../src/firebase/firebase.util';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Map from './img/Map.jpg';
import LoginSignIn from './components/LoginSignIn';
import video from './video/BackgroundVideo.mp4';
import Logo from './components/Logo';

function App() {
  // console.log(process.env.REACT_APP_apiKey);
  // const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="App">
      <video className="videoBackground" autoPlay="autoplay" loop="loop" disablePictureInPicture muted>
        <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
      {/* <button type="submit" onClick={signInWithGoogle}>Test</button>
      <img src={Map} width='80%'></img> */}
      <Logo></Logo>
      <LoginSignIn></LoginSignIn>
      <a href="something" className="startBtn">Start</a>

    </div>
  );
}

export default App;
