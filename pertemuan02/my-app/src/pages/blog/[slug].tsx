import { useErrorOverlayReducer } from "next/dist/next-devtools/dev-overlay/shared";
import { useRouter } from "next/router";

export default function BlogPages(){
    const Router = useRouter;
    const {query} = useRouter();
    return(
        <div>
            <h1>Ini adalah halaman blog </h1>
        <p>Slug: {query.slug}</p>
        </div>
    )
}