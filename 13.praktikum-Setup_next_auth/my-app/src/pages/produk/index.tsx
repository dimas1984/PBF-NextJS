import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../../views/product";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";



// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const kategori = () => {
  // const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();
  const [products, setProducts] = useState([]);
  // console.log("products:", products);
  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  //   },[]);

  // useEffect(() => {
  //   fetch("/api/produk")
  //     .then((response) => response.json())
  //     .then((responsedata) => {
  //       setProducts(responsedata.data);
  //       // console.log("Data produk:", responsedata.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching produk:", error);
  //     });
  // }, []);
  
  const { data, error,isLoading } = useSWR("/api/produk", fetcher);
  //cek apakah data, error, dan isLoading sudah benar
  // console.log("data:", data);
  // console.log("error:", error);
  // console.log("isLoading:", isLoading);


  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data.data} />
    </div>
  );
};

export default kategori;
