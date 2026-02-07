import { useRouter } from "next/router";
import Navbar from "../navbar";


const disableNavbar = ['/auth/login', '/auth/register'];

/*
Mendefinisikan tipe props menggunakan TypeScript
children:
 - Properti bawaan React
 - Bertipe React.ReactNode
 - Berisi elemen JSX yang dibungkus oleh AppShell
*/
type AppShellProps = {
    children: React.ReactNode;
}

/*
const AppShell = (props:AppShellProps) => {
  - Membuat functional component
  - Menerima props bertipe AppShellProps
  - Menggunakan arrow function
*/
const AppShell = (props:AppShellProps) => {
  
  
  /*
  const { children } = props;
  - Mengambil nilai children dari props
  - Memudahkan pemanggilan tanpa menulis props.children
  */
  const { children } = props;
  const {pathname} = useRouter();
  // const router = useRouter();
  // console.log(router);
  return (
  <main>
    {!disableNavbar.includes(pathname) && <Navbar />}
    {children}
 
  </main>

    );
};

/* 
    {children} → konten halaman yang berubah-ubah */
export default AppShell;

