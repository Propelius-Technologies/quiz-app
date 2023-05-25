import Authentication from "@/src/sections/Authentication";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fireBaseApp } from "../../../firebase.config";
import { GetServerSideProps } from "next";
import useStore from "@/src/zustand-store";

interface GoogleAuthProps {
  handleGoogleAuth: () => void;
}
const GoogleAuth = () => {
  const firebaseAuth = getAuth(fireBaseApp);
  const provider = new GoogleAuthProvider();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const fetchApplicant = useStore((state) => state.fetchApplicant);
  const setUserData = useStore((state) => state.setUserData);

  const getAccesstoken = useStore((state) => state.getAccesstoken);

  const userData = useStore((state) => state.userData);

  let Bodydata = {
    candidateId: "8d41cfa5-b894-4067-9339-00054751d826",
  };

  const getUserData = async () => {
    let data: any = await fetchApplicant(Bodydata);
    setUserData(data);
  };

  // const getUserTokenData = async () => {
  //   let tokenData: any = await getAccesstoken(data);
  // };

  useEffect(() => {
    getUserData();
  }, []);

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
      if (response.user?.email === userData?.email) {
        setIsLoading(false);
        console.log("true email");

        let data = {
          candidateId: "8d41cfa5-b894-4067-9339-00054751d826",
          guid: response.user.uid,
          token: await response.user.getIdToken(),
        };

        let tokenData: any = await getAccesstoken(data);

        console.log("tokenData", tokenData);

        // router.push("/user");
      } else {
        console.log("Invalid email id");
        console.log("response", await response.user.getIdToken());
      }
    }
  };
  console.log("fetchApplicant", userData);

  return (
    <>
      <Authentication
        handleGoogleAuth={handleGoogleAuth}
        isLoading={isLoading}
      />
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const selectedMovieData = await getMovieApi();

//   return {
//     props: { movie: selectedMovieData },
//   };
// };

export default GoogleAuth;
