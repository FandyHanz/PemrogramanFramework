import { ProductType } from "../../types/Product.types";
import Image from "next/image";
import styles from "@/views/DetailProduk/Detailproduk.module.scss";

export default function DetailProduk({ products }: { products: ProductType }) {
  return (
    <>
      <h1 className={styles.title}>Detail Produk</h1>
      <div className={styles.produkDetail}>
        <div className={styles.produkDetail__image}>
          <Image
            width={200}
            height={200}
            src={products.images && products.images} alt={products.name}
          />
        </div>

        <div className={styles.produkDetail__info}>
          <h1 className={styles.produkDetail__name}>{products.name}</h1>
          <p className={styles.produkDetail__category}>{products.category}</p>
          <div className={styles.produkDetail__divider} />
          <p className={styles.produkDetail__price}>
            Rp {Number(products.price || 0).toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </>

  );
}