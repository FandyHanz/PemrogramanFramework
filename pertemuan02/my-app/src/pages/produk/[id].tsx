import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";
import DetailProdukView from "@/views/DetailProduk";
import { ProductType } from "@/types/Product.types";

export default function DetailProdukPage (){
  // const Router = useRouter();
  // console.log(Router);
    const { query } = useRouter();
    const {data, error, isLoading} = useSWR(`/api/produk/${query.id}`,fetcher);

  return (
    <div>
      <DetailProdukView products={isLoading ? [] : data.data} />
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/produk');
  const data = await res.json();

  const paths = data.data.map((produk: any) => ({
    params: { id: produk.id },
  }));

  return { paths, fallback: false };
  
}

export async function getStaticProps({params} : {params: {id: string}}) {
  const res = await fetch(`http://localhost:3000/api/produk/${params.id}`);
  const response : {data: ProductType} = await res.json();

  return {
    props: {
      product: response.data
    }
  }
}
