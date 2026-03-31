import TampilanProduk from "../views/produk";
import { ProductType } from "../types/Product.types";


export default function halamanProdukServer (props: { products: ProductType[] }) {
    const { products } = props;
    return(
        <div>
        <h1>Halaman Produk Server</h1>
        <TampilanProduk products={products}  />
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/produk');
    const respone = await res.json();

    return {
        props: {
            products: respone.data, 
        }
    };
}