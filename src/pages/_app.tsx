import "../styles/globals.css";
import type { AppProps } from "next/app";
import splitbee from "@splitbee/web";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect((): void => {
    splitbee.init({
      scriptUrl: "/bee.js",
      apiUrl: "/_hive",
    });
  }, []);

  return (
    <div className="min-h-screen bg-custom-black">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
