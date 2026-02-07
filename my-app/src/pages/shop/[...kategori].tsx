import { useRouter } from "next/router";

const DetailCategory = () => {
     const {query} = useRouter();
    // const router = useRouter();
    // console.log(router);

    return (
        <div>
            <h1> Detail Category Page </h1>
            {/* <p> Product : {query.id_product}</p> */}
            console.log(query.kategori);
        </div>
    );
};

export default DetailCategory;