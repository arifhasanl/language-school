import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase.config";
import { createContext, useEffect, useState } from "react";
import { setLogLevel } from "firebase/app";


export const AuthContext=createContext(null)


const auth=getAuth(app)



const AuthProvider = ({children}) => {
 const [user,setUser]=useState(null);
 const [loading,setLoding]=useState(true)
const createUser=(email,password)=>{
    setLoding(true )
    return createUserWithEmailAndPassword(auth,email,password)
}

const upDateUser=(name,photo)=>{
    setLoding(true)
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
}
useEffect(()=>{
    const subscrib=onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
    setLoding(false)
    })
    return ()=>{
        return subscrib();
    }
},[])
const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut=()=>{
   return signOut(auth)
}
    const authInfo={
            user,
            createUser,
            upDateUser,
            loginUser,
            logOut
        }
    
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;

