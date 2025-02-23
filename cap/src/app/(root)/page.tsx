import Image from "next/image";
import React from 'react';
import { signIn } from "../auth";
import images from "../../../constants/images";
import icons from "../../../constants/icons";

const SignIn = () => {
  return(
    <form action = {async () => {
      "use server";
      await signIn('google')
    }}><button className="text-lg bg-blue rounded-lg font-rubik text-white text-center mt-12"
     type = "submit"> 
     <Image src={icons.google} alt="Google Icon" width={20} height={20} /> 
     Continue with Google
     </button>
    </form>
  );
};

export default function Home() {
  return (
     <div>
      <Image src={images.loginImage} alt="logo" className="h-30 w-20 justify-cetner items-center" />
      <h1 className="font-bold text-xl text-black flex items-center justify-center">Welcome to Caring Assistance for People ( C. A. P. )</h1>
      <SignIn />
     </div>
  );
}
