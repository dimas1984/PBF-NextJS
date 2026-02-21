import { useRouter } from "next/router";
import Navbar from "../navbar";
import { Roboto } from "next/font/google";
// import dynamic from "next/dynamic";

// const Navbar = dynamic(() => import("../navbar"));

const disableNavbar = ['/auth/login', '/auth/register','/404'];

type AppShellProps = {
    children: React.ReactNode;
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const AppShell = (props:AppShellProps) => {
  
  const { children } = props;
  const {pathname} = useRouter();

  return (
  <main className={roboto.className}>
    {!disableNavbar.includes(pathname) && <Navbar />}
    {children}
 
  </main>

    );
};

export default AppShell;

