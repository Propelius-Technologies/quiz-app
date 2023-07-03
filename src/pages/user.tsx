import UserDetails from "@/src/sections/userDetails";
import { useEffect } from "react";
import useStore from "../zustand-store";

export default function Home() {
  return (
    <>
      <UserDetails />
    </>
  );
}
