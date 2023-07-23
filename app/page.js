import Image from "next/image";
import styles from "./page.module.css";
import MessengerChat from "@/components/messenger-chat";
import Script from "next/script";

export default function Home() {
  return (
    <div style={{ background: "skyblue", textAlign: "center" }}>
      <h1>Welcome to Messenger Chat</h1>
      <h2>Welcome</h2>
      {/* <MessengerChat /> */}
      <Script
        id="messenger-tag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.fbAsyncInit = function() {
    FB.init({
      appId            : '238792998887533',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.11'
    });
  };(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));`,
        }}
      ></Script>
      ;<div id="fb-root"></div>
      <div
        className="fb-customerchat"
        page_id="100443455067967"
        minimized="true"
      ></div>
    </div>
  );
}
