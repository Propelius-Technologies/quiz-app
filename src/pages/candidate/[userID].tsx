import Authentication from "@/src/sections/Authentication";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fireBaseApp } from "../../../firebase.config";
import { GetServerSideProps } from "next";
import useStore from "@/src/zustand-store";
import { Alert, Snackbar } from "@mui/material";

interface GoogleAuthProps {
  handleGoogleAuth: () => void;
}
const GoogleAuth = () => {
  const firebaseAuth = getAuth(fireBaseApp);
  const provider = new GoogleAuthProvider();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const fetchApplicant = useStore((state) => state.fetchApplicant);
  const setUserData = useStore((state) => state.setUserData);
  const [Msg, setMsg] = useState("");

  const getAccesstoken = useStore((state) => state.getAccesstoken);

  const userData = useStore((state) => state.userData);
  const getUserData = async () => {
    let Bodydata = {
      candidateId: router.query.userID,
    };
    // console.log({ Bodydata });
    const data: any = await fetchApplicant(Bodydata);
    // if (data === "Network Error") {
    //   setIsOpen(true);
    //   setMsg(data);
    // }

    if (data.message) {
      setIsOpen(true);
      setMsg(data.message);
    } else {
      setUserData(data);
    }
    console.log({ data });
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

  console.log({ Msg });

  return (
    <>
      {isOpen && (
        <Snackbar
          open={isOpen}
          autoHideDuration={3000}
          onClose={() => setIsOpen(false)}
        >
          <Alert
            onClose={() => setIsOpen(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            {Msg}
          </Alert>
        </Snackbar>
      )}
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
