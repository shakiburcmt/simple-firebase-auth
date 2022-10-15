import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch(error => {
        console.error('error: ', error);
      })
  }

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch()
  }

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
    })
  }

  return (
    <div className="App">
      {/* Ternary operator e duita condition at a time dewa jay tai ekadhik dite chaile div diye dite hobe ar div na dile <></> evabe fragment koreo dewa jay */}
      {user.uid ? <button onClick={handleGoogleSignOut}>Sign out</button>
        :
        <>
          <button onClick={handleGoogleSignIn}>Sign in with Google</button>
          <button onClick={handleGitHubSignIn}>Sign in with GitHub</button>
        </>
      }
      {/* oneksomoy email na dekhale condition kaj korbe na tai ekta unique kichu use korte hobe ejonno uid unique tai eti use kora hoyehe */}
      {user.uid && <div>
        <h3>Use Name: {user.displayName}</h3>
        <h3>Use Email: {user.email}</h3>
        <img src={user.photoURL} alt="" />
      </div>}
    </div>
  );
}

export default App;
