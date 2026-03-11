import styles from "./produk.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: number;
  images: string; // Sesuai data JSON API kamu
  category: string;
};

const TampilanProduk = ({ products = [] }: { products: ProductType[] }) => {
  // Tambahkan log ini untuk melihat di Inspect Console (F12) apakah data masuk
  console.log("Daftar produk di komponen:", products);

  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <div className={styles.produk__content}>
        
        {/* Gunakan Optional Chaining ?. agar tidak error saat loading */}
        {products?.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className={styles.produk__content__item}>
              <div className={styles.produk__content__item__image}>
                <img 
                  src={product.images} 
                  alt={product.name} 
                  onError={(e) => {
                    // Fallback jika URL gambar dari Firebase rusak/mati
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/200";
                  }}
                />
              </div>
              <h4 className={styles.produk__content__item__name}>{product.name}</h4>
              <p className={styles.produk__content__item__category}>{product.category}</p>
              <p className={styles.produk__content__item__price}>
                Rp {product.price.toLocaleString("id-ID")}
              </p>
            </div>
          ))
        ) : (
          /* Tampilkan 3 skeleton saat data masih kosong */
          [1, 2, 3].map((item) => (
            <div key={item} className={styles.produk__content__skeleton}>
              <div className={styles.produk__content__skeleton__image}></div>
              <div className={styles.produk__content__skeleton__name}></div>
              <div className={styles.produk__content__skeleton__category}></div>
              <div className={styles.produk__content__skeleton__price}></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;