import Header from "@/components/header";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
    </>
  );
}