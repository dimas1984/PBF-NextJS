import Link from "next/link";
import { useRouter } from "next/router";
// import styles from './login.module.css';
import styles from "./login.module.scss";

const TampilanLogin = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    // logic login disini
    push("/produk");
    console.log("Berhasil Login" );
  };
  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold text-blue-600 ">Halaman Login</h1>
      <button onClick={() => handleLogin()}>Login</button> <br />
      <h1
        style={{
          color: "red",
          border: "1px solid red",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        {" "}
        belum punya akun
      </h1>
      <Link href={"/auth/register"}>Ke Halaman Register</Link>
    </div>
  );
};

export default TampilanLogin;
