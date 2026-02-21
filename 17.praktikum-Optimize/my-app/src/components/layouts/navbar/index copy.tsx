import syles from './navbar.module.css';
import { signIn, signOut, useSession } from "next-auth/react"

const Navbar = () => {
  const {data}:any = useSession()
  //const { data: session } = useSession()
  // console.log("session", session)
  return (
  <div className={syles.navbar}>
    <div className="big">
      Navbar
    </div> 
    <div>
      {data ? (
        <div>
          <p>Welcome, {data.user.fullname}</p>
        </div>
      ) : (
        <div>
          <p>Not signed in</p>
        </div>
      )}
    </div>
    {data ? (
      <button onClick={() => signOut()}>Sign Out</button>
    ) : (
      <button onClick={() => signIn()}>Sign In</button>
    )}
       </div>
    );
};

export default Navbar;

