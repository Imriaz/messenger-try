import Image from "next/image";
import styles from "./page.module.css";
import MessengerChat from "@/components/messenger-chat";

export default function Home() {
  return (
    <div style={{ background: "skyblue", textAlign: "center" }}>
      <h1>Welcome to Messenger Chat</h1>
      <h2>Welcome</h2>
      <MessengerChat />
    </div>
  );
}
