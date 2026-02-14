import TampilanProduk from "../../views/product";
import { ProductType } from "../../types/Product.type";



const halamanProdukStatic = (props:{products:ProductType[]}) => {
    const { products } = props;
    return (
        <div>
            <h1>Halaman Produk static</h1>
        <TampilanProduk products={products} />
                
        </div>
    );
};
export default halamanProdukStatic;

export async function getStaticProps() {
    const res = await fetch('http://127.0.0.1:3000/api/produk');
    // const response: ProductType[] = await res.json();       
    const response: { data: ProductType[] } = await res.json();

    // console.log("Data produk yang diambil dari API:", response); 
    return {
        props: {
            products: response.data,
        }                                   
    }   
}
// import { getProdukData } from "@/lib/produk";

// export async function getStaticProps() {
//   const data = await getProdukData();

//   return {
//     props: {
//       products: data,
//     },
//   };
// }
