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
    }}><button className="text-lg bg-blue rounded-full w-64 py-3 text-white flex text-center justify-center items-center mt-5"
     type = "submit"> 
     <Image src={icons.google} alt="Google Icon" width={24} height={24} /> 
     <span className="pl-3"> Continue with Google </span>
     </button>
    </form>
  );
};

export default function Home() {
  return (
     <div className="flex flex-col min-h-screen text-center justify-center items-center">
      <Image src={images.loginImage} alt="logo" className="w-1/5 h-4/6 ml-2 justify-center items-center" />
      <h1 className="font-bold text-3xl mt-2 text-red flex items-center justify-center">Welcome to Caring Assistance for People ( C. A. P. )</h1>
      <SignIn />
     </div>
  );
}

