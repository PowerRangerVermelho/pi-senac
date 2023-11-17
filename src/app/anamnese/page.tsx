'use client'

import SideBar from "@/components/layout/sidebar/sidebar"
import { Whatsapp } from "@/components/layout/whatsapp/whatsapp"
import { Fragment } from "react"
import styles from '@/styles/anamnese.module.css'
import { BlocoAnamnese } from "@/components/layout/bloco-anamnese/bloco-anamnese"

function FichaAnamnese () {
    return(
        <Fragment>
            <div style={{display: 'flex'}}>
                <div style={{width: '240px'}}>
                    <SideBar />
                </div>
                <div style={{width: 'calc(100% - 240px)'}}>
                    <BlocoAnamnese />
                    <Whatsapp />
                </div>
            </div>
        </Fragment>
    )
}
export default FichaAnamnese