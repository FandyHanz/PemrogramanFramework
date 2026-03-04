import Link from "next/link";

export default function HalamanRegister(){
    return(
        <div>
            <h1>Halaman Register</h1>
            <Link href= "/auth/login">Ke halaman login</Link>
        </div>
    )
}