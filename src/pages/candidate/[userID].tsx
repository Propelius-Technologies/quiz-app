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
    // console.log({ Bodydata });
    const data: any = await fetchApplicant(Bodydata);
    setUserData(data);
  };

  useEffect(() => {
    if (router.isReady) {
      getUserData();
    }
  }, [router.isReady]);

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    // console.log({ provider });
    const response = await signInWithPopup(firebaseAuth, provider).catch(
      (err) => {
        // console.log({ err });
        router.push("/404");
        return err;
      }
    );
    // console.log({ response });
    if (response.code && response.code === "auth/popup-closed-by-user") {
      // console.log("close");
      setIsLoading(false);
    } else {
      if (router.isReady) {
        // console.log("1");
        if (response.user?.email === userData?.email) {
          // console.log("yes");
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
          router.push("/404");
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
