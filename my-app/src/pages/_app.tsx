import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/layouts/Navbar";
import Sheell from "@/components/layouts/Shell";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <div>
    //   <Navbar/>
    <Sheell>
      <Component {...pageProps} />
    </Sheell>

    // </div>
  );
}
