'use client'
import { BlocoHistorico } from "@/components/layout/historico/bloco-historico"
import SideBar from "@/components/layout/sidebar/sidebar"
import { Whatsapp } from "@/components/layout/whatsapp/whatsapp"
import { Fragment } from "react"

function Historico() {
    return (
        <Fragment>
            <div style={{display: 'flex'}}>
                <div style={{width: '240px'}}>
                    <SideBar />
                </div>
                <div style={{width: 'calc(100% - 240px)'}}>
                    <BlocoHistorico />
                </div>
            </div>
            <Whatsapp />
        </Fragment>
    )
}
export default Historico