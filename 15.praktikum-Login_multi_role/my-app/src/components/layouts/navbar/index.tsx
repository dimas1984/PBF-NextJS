import styles from './navbar.module.css';
import { signIn, signOut, useSession } from "next-auth/react"

const Navbar = () => {
  const {data}:any = useSession()
  //const { data: session } = useSession()
  // console.log("session", session)
return (
  <div className={styles.navbar}>
    <div className={styles.navbar__brand}>
      MyApp
    </div>

    <div className={styles.navbar__right}>
      {data ? (
        <>
          <div className={styles.navbar__user}>
            Welcome, {data.user?.fullname}
          </div>
          <button
            className={`${styles.navbar__button} ${styles["navbar__button--danger"]}`}
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </>
      ) : (
        <button
          className={`${styles.navbar__button} ${styles["navbar__button--primary"]}`}
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </div>
  </div>
);
};

export default Navbar;

