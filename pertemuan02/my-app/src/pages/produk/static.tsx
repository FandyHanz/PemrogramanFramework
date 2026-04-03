import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/Product.types";

export default function HalamanprodukStatic (props:{products:ProductType[]}){
    const { products } = props;

    return(
        <div>
            <h1>Halaman Produk Statik</h1>
            <TampilanProduk products={products}/>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/produk');
    // const products: ProductType[] = await res.json();
    const response : {data: ProductType[]} = await res.json();
    return {
        props: {
            products: response.data
        },
    }
}