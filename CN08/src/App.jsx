import { useState } from "react";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

import Home from "./components/Home";
import GithubIcon from "./assets/github-icon.svg";

import "./styles/app.css";

function App() {
  const [userDetails, setUserDetails] = useState({ token: "", username: "", displayName: "" });

  const handleGithubLogin = async () => {
    const provider = new GithubAuthProvider();
    const auth = getAuth();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      const displayName = user.displayName;
      const username = user?.reloadUserInfo?.screenName;

      setUserDetails({ username, token, displayName });
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log({ errorCode, errorMessage, credential, email });
    }
  };

  return (
    <main>
      {userDetails.username === "" ? (
        <button onClick={() => handleGithubLogin()}>
          <img src={GithubIcon} alt="" />
          Login with GitHub
        </button>
      ) : (
        <Home userDetails={userDetails} />
      )}
    </main>
  );
}

export default App;
