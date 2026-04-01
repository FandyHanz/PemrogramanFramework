import Link from "next/link";
import styles from "./register.module.css";

export default function TampilanRegister(){
    return (
        <div className={styles.register}>
            <h1 className={styles.title}>Halaman Register</h1>
            <p>Silahkan buat akun baru Anda.</p>
            <Link href="/auth/login">Sudah punya akun? Login di sini</Link>
        </div>
    );
};

