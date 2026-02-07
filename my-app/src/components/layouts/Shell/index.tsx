import { escape } from "node:querystring";
import Navbar from "../Navbar";

type ShellProps = {
    children: React.ReactNode;
}

const Sheell = (props:ShellProps) => {
    const {children} = props;
  return (
    <main>
        <Navbar/>
        {children}
    </main>
  );
}

export default Sheell;