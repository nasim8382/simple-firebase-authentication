import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.error('Error', error);
      })
  }

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.error('Error', error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then( () => {
        setUser({});
      })
      .catch( error => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {
        user.displayName ? <button className='sign-in-btn' onClick={handleSignOut}>Sign Out</button> : 
        <>
          <button className='sign-in-btn' onClick={handleGoogleSignIn}>Google Sign In</button>
          <button className='sign-in-btn' onClick={handleGitHubSignIn}>GitHub Sign In</button>
        </>
      } <br/>
      <img src={user.photoURL} alt="" />
      <h2>Name: {user.displayName}</h2>
      <p>I know your email address: {user.email}</p>
    </div>
  );
}

export default App;
