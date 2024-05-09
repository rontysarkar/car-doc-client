import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.config";
import axios from "axios";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading , setLoading ] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email:userEmail}
            setUser(currentUser)
            setLoading(false)
            console.log('CurrentUser',currentUser)
            if(currentUser){
                
                axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })
            }
            else{
                axios.post('http://localhost:5000/logout',loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })
            }
        })
        

        return ()=>{
            unSubscribe()
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;