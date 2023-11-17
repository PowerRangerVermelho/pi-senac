'use client'

import { BlocoPerfil } from "@/components/layout/bloco-perfil/bloco-perfil"
import SideBar from "@/components/layout/sidebar/sidebar"
import { Whatsapp } from "@/components/layout/whatsapp/whatsapp"
import { Fragment } from "react"

function Perfil() {
    return (
        <Fragment>
            <div style={{display: 'flex'}}>
                <div style={{width: '240px'}}>
                    <SideBar />
                </div>
                <div style={{width: 'calc(100% - 240px)'}}>
                    <BlocoPerfil />
                    <Whatsapp />
                </div>
            </div>
        </Fragment>
    )
}
export default Perfil