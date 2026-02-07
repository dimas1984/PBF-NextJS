import { useRouter } from "next/router";

const DetailProdukPage = () => {
     const {query} = useRouter();
    // const router = useRouter();
    // console.log(router);

    return (
        <div>
            <h1> Detail Produk Page </h1>
            <p> Product : {query.id_product}</p>
        </div>
    );
};

export default DetailProdukPage;