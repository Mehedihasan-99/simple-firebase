import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSignInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log('result', result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log('ERROR', error);
                setUser(null);
            })
    }

    const handleSignInGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log("github", result.user);
                setUser(result.user);
            })
            .catch(error => console.log('github error', error))
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
        })
        .catch(error => console.log("error 37", error))
    }

    return (
        <div>
            {
                user ? <button onClick={handleSignOut} >Sign Out</button> :
                    <div>
                        <button onClick={handleSignInGoogle}>google</button>
                        <button onClick={handleSignInGithub}>github</button>
                    </div>
            }
            {user && <div>
                <h2>Name: {user.displayName} </h2>
                <h4>Email: {user.email}</h4>
                <img src={user.photoURL} alt="" /></div>}
        </div>
    );
};

export default Login;