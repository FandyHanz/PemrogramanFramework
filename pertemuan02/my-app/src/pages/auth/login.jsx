import Link from "next/link";
import { useRouter } from "next/router";

export default function HalamanLogin(){
    const router = useRouter();
    const handlerLogin = () => {
        router.push('/produk')
    }

    return (
        <div>
            <h1>Halaman login</h1>
            <button onClick={handlerLogin}>Login</button> <br />
            <button onClick={()=>router.push('/produk')}>Login</button>  <br />
            <button onClick={()=>handlerLogin()}>Login</button>  <br />
            <Link href="/auth/register">Ke halaman register</Link>
        </div>
    )
}