import Authentication from "@/src/sections/Authentication";
import { getAuth,GoogleAuthProvider,signInWithPopup} from "@firebase/auth";
import {useState} from "react";
import {useRouter} from "next/router";
import {fireBaseApp} from "../../firebase.config";


interface GoogleAuthProps  {
    handleGoogleAuth : () => void
}
const GoogleAuth = () =>{
    const firebaseAuth = getAuth(fireBaseApp)
    const provider = new GoogleAuthProvider();
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
 
        const handleGoogleAuth = async () => {
        setIsLoading(true)
            try {
                const response = await signInWithPopup(firebaseAuth, provider);
               if(response){
                   if(response.user.email === 'monika.tiwari@propelius.tech'){
                       setIsLoading(false)
                       router.push('/user')
                   }
               }
                else {
                  console.log('invalid email id')
                }
            } catch (error) {
                console.log(error);
            }
        }
    
    return (
        <>
          <Authentication handleGoogleAuth={handleGoogleAuth} isLoading={isLoading}/>
        </>
    )
}

export default GoogleAuth