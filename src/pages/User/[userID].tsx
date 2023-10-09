import Authentication from "@/src/sections/Authentication";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { useCallback, useEffect, useState } from "react";
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
  const getUserData = async () => {
    let Bodydata = {
      candidateId: router.query.userID,
    };
    // console.log(Bodydata);
    const data: any = await fetchApplicant(Bodydata);
    setUserData(data);
  };

  useEffect(() => {
    if (router.isReady) {
      getUserData();
    }
    // console.log(router.isReady);
  }, [router.isReady]);

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
      if (router.isReady) {
        if (response.user?.email === userData?.email) {
          setIsLoading(false);

          let data = {
            candidateId: router?.query?.userID,
            guid: response.user.uid,
            token: await response.user.getIdToken(),
          };

          let tokenData: any = await getAccesstoken(data);

          localStorage.setItem("access_token", tokenData.accessToken);

          router.push("/user");
        } else {
        }
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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const selectedMovieData = await getMovieApi();

//   return {
//     props: { movie: selectedMovieData },
//   };
// };

export default GoogleAuth;
