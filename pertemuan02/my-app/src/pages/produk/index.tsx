import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "@/views/produk"; 
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher"; // Import fetcher eksternal

export default function kategori() {
    // const [isLogin, setIsLogin] = useState(false);
    const { push } = useRouter();
    const [products, setProducts] = useState([]);

    // Gunakan destructuring untuk mengambil fungsi mutate
    const { data, error, isLoading, mutate } = useSWR("/api/produk", fetcher);

    return (
        <div style={{ padding: "20px" }}>
            {/* Tombol Refresh diletakkan di atas daftar produk */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <button 
    onClick={() => {
        // Berikan nilai undefined pada data lokal agar isLoading menjadi true kembali
        mutate(undefined, { revalidate: true });
    }} 
    disabled={isLoading}
    style={{
        padding: "10px 20px",
        backgroundColor: isLoading ? "#ccc" : "#000",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: isLoading ? "not-allowed" : "pointer",
        fontWeight: "bold"
    }}
>
    {isLoading ? "Loading..." : "Refresh Data Barang"}
</button>
            </div>

            <main>
                {/* Logika pengiriman data: jika loading kirim array kosong untuk skeleton */}
              <TampilanProduk products={data?.data ?? []} />
            </main>
        </div>
    );
};

