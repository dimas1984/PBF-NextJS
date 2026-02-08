import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const produk = () => {

// untuk redirect ke login jika belum login
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    } 
    },[]);

  return (
  <div>Produk User Page</div>
  );
};

export default produk;
