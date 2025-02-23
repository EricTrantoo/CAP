import Image from "next/image";
import { signIn } from "../auth";

export default function Home() {
  return (
    <form action = {async () => {
      "use server";
      await signIn('google')
    }}>
      {/* compile */}
      <button type = "submit">Sign In with Google</button>
    </form>
  );
}
