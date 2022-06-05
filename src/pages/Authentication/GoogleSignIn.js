import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const GoogleSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div className="w-full max-w-xs flex flex-col items-center mx-auto">
      <div className="divider">OR</div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn bg-white text-black uppercase text-center"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
