'use client'
import { Fragment } from "react";
import SideBar from "@/components/layout/sidebar/sidebar";
import { Whatsapp } from "@/components/layout/whatsapp/whatsapp";
import { FormAgenda } from "@/components/layout/form_agenda/form_agenda";
import Banner from "@/components/layout/banner/banner";

function Agendamento() {
    return (
        <Fragment>
            <div style={{ display: 'flex'}}>
                <div style={{ width: '250px'}}>
                    <SideBar />
                </div>
                <div style={{ width: '90%'}}>
                    <FormAgenda />
                    <Whatsapp />
                </div>
            </div>
        </Fragment>
    )
}
export default Agendamento