import { useRouter } from "next/router";

export default function HalamanCategory(){
    const Router = useRouter();
    console.log(Router);
    const {query} = useRouter();
    return(
         <div>
            <h1>Halaman Halaman Kategori</h1>
           <ul>
                {query.slug && Array.isArray(query.slug) ? (
                    query.slug.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                ) : (
                    <li>{query.slug}</li>
                )}
            </ul>
            
        </div>
    )
}