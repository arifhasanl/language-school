import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase.config";
import { createContext, useEffect, useState } from "react";
import { setLogLevel } from "firebase/app";
import axios from "axios";


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
    if(currentUser){
        axios.post('http://localhost:5000/jwt', {email: currentUser.email})
        .then(data=>{
            // console.log(data.data.token);
            localStorage.setItem('access-token',data.data.token)

        })
    }
    else{
        localStorage.removeItem('access-token')
    }
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

