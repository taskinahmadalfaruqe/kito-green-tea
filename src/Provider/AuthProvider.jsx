import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//CREATE A CONTEXT
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isUserLoading, setUserLoading] = useState(true);

  // CREATE USER WITH EMAIL AND PASSWORD
  const handelCreateUserWithEmailPassword = async (email, password) => {
    try {
      setUserLoading(true);
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(newUser.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  // SIGN IN USER WITH EMAIL AND PASSWORD
  const handelLoginWithEmailPassword = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // UPDATE USER WITH NAME AND EMAIL
  const handelUpdateUser = (name, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // SIGN OUT USER FROM SITE
  const handelSignOut = () => {
    signOut(auth)
      .then((res) => {
        location.reload();
        if (res) {
          toast.success("Successfully Sign Out.", {
            position: "top-center",
            autoClose: 5000,
            theme: "colored",
          });
        }
      })
      .catch((error) => {
        toast.error(`Something Wrong.${error}`, {
          position: "top-center",
          autoClose: 5000,
          theme: "colored",
        });
      });
  };

  //SET USER
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setUserLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const Value = {
    user,
    isUserLoading,
    handelUpdateUser,
    handelSignOut,
    handelLoginWithEmailPassword,
    handelCreateUserWithEmailPassword,
  };
  return (
    <>
      <AuthContext.Provider value={Value}>{children}</AuthContext.Provider>
      <ToastContainer></ToastContainer>;
    </>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default AuthProvider;
