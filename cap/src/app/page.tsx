import Image from "next/image";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import KommunicateChat from './chat'

export default function Home() {
  Kommunicate.init("12b433f074c24d6b911d3dbc2509ab1", {
    automaticChatOpenOnNavigation: true,
    popupWidget: true,
  });
  return (
    <h1>Welcome to Home Page</h1>
  );
}
