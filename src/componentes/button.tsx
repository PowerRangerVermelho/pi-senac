
import { useRouter } from "next/navigation";
import { Fragment } from "react";

export default function Button() {
    const router = useRouter() 
    return (
        <Fragment>
            <button type="button" onClick={()=> router.back()}>Voltar para a tela home</button>
        </Fragment>
    )
}