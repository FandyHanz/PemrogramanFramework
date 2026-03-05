import Link from "next/link";
import { useRouter } from "next/router";
// import style from './login.module.css';
import style from "./login.module.scss"
 export default function TampilanLogin(){
    const router = useRouter();
    const handlerLogin = () => {
        router.push('/produk')
    }

    return (
        <div className={style.login}>
            <h1 className="text-3xl font-bold text-blue-600">Halaman login</h1>
            <button onClick={()=>handlerLogin()}>Login</button> <br />
            <h1 style={{ color: "red",borderRadius: "5px",padding: "5px",border: "1px solid red"}}>Belum Punya Akun ?</h1>
            <Link href="/auth/register">Ke halaman register</Link>
        </div>
    )
 }