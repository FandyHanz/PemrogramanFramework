import styles from "./produk.module.scss";
import Link from "next/link"; // 1. WAJIB IMPORT INI!

type ProductType = {
  id: string;
  name: string;
  price: number;
  images: string;
  category: string;
};

const TampilanProduk = ({ products = [] }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title} data-testid="title">
        Daftar Produk
      </h1>
      <div className={styles.produk__content}>

        {products?.length > 0 ? (
          products.map((product) => (
            /* 2. BUNGKUS PAKE LINK DI SINI */
            <Link
              href={`/produk/${product.id}`}
              key={product.id}
              className={styles.produk__content__item}
              data-testid="product-item"
            >
              <div className={styles.produk__content__item__image}>
                <img
                  src={product.images}
                  alt={product.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/200";
                  }}
                />
              </div>
              <h4 className={styles.produk__content__item__name}>{product.name}</h4>
              <p className={styles.produk__content__item__category}>{product.category}</p>
              <p className={styles.produk__content__item__price}>
                Rp {Number(product.price).toLocaleString("id-ID")}
              </p>
            </Link>
          ))
        ) : (
          /* Skeleton loading tetap pake div biasa */
          [1, 2, 3].map((item) => (
            <div key={item} className={styles.produk__content__skeleton} data-testid="product-skeleton">
              <div className={styles.produk__content__skeleton__image}></div>
              {/* ... sisa skeleton ... */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;