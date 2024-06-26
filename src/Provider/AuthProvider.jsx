import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"


export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
     
    // ______________User every where___________________//
    const [user,setUser] = useState(null)
    //_________ For Loading_________//
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
// ________________________________________________//
    useEffect( ()=>{
       const unSubscribe =  onAuthStateChanged(auth,createUser=>{
            console.log('user in the state change',createUser)
            setUser(createUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    },[] )

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;