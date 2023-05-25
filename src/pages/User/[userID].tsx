import Authentication from "@/src/sections/Authentication";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import { fireBaseApp } from "../../../firebase.config";

interface GoogleAuthProps {
  handleGoogleAuth: () => void;
}
const GoogleAuth = () => {
  const firebaseAuth = getAuth(fireBaseApp);
  const provider = new GoogleAuthProvider();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    const response = await signInWithPopup(firebaseAuth, provider).catch(
      (err) => {
        return err;
      }
    );
    if (response.code && response.code === "auth/popup-closed-by-user") {
      setIsLoading(false);
    } else {
      if (response.user?.email === "monika.tiwari@propelius.tech") {
        setIsLoading(false);
        router.push("/");
      } else {
        console.log("Invalid email id");
      }
    }
  };

  return (
    <>
      <Authentication
        handleGoogleAuth={handleGoogleAuth}
        isLoading={isLoading}
      />
    </>
  );
};

export default GoogleAuth;
