import Link from "next/link";
import styles from "@/styles/404.module.scss";
export default function Custom404(){
    return(
        <div className={styles.error}>
            <img height= "200px" width="200px" src="/page-not-found.svg" alt="404" className={styles.error_image} />
        <h1 className={styles.error_title}>404-Halaman tidak ditemukan</h1>
        <p className={styles.error_description}>Maaf, Halaman yang anda cari tidak ada</p>
        <Link href="/" className={styles.error_button}>
                Kembali ke Home
        </Link>
        </div>
    )
}