import { useSession } from "next-auth/react";

export default function HalamanProfile() {
    const {data}:any = useSession();
    return(
        <div>
            <h1>Halaman profile</h1> <br />
            <h1>Selamat datang {data?.user?.name}</h1>
        </div>
    )
}