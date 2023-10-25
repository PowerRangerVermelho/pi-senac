'use client'
import Link from "next/link";
import { Component, ReactNode } from "react";
import styles from '../../../../styles/home.module.css'
import Homesvg from './assets/home.svg'
import { HomeIcon } from "../icons/home-icon/home-icon";
import { AgendaIcon } from "../icons/agenda-icon/agenda-icon";
import { HistIcon } from "../icons/hist-icon/hist-icon";
import { PerfilIcon } from "../icons/perfil-icon/perfil-icon";
const SideBar = () => {
  return (
    <div className={styles['menu-lateral']}>
      <div className={styles["divisao-menu"]}>
        <img className={styles.logo} src="https://vestibular.sc.senac.br/img/brand/logo-ext-white.png" alt="..." />
      </div>
      <div className={styles.inputs}>
        <ul className='mt-5'>
          <li className='p-2'>
            <Link className='' href="/"><HomeIcon />Início</Link>
          </li>

          <li className='p-2'>
            <Link href="/agendamento"><AgendaIcon />Agendamento</Link>
          </li>

          <li className='p-2'>
            <Link href="/historico"><HistIcon />Histórico</Link>
          </li>

          <li className='p-2'>
            <Link href="/perfil"><PerfilIcon />Perfil</Link>
          </li>
        </ul>
      </div>
    </div>);
}
export default SideBar
export class SideBar2 extends Component {
  render(): ReactNode {
    return (
      <div className="menu-lateral">
        <div className="divisao-menu">
          <img className='logo' src="https://vestibular.sc.senac.br/img/brand/logo-ext-white.png" alt="..." />
        </div>
        <div className="inputs">
          <ul className='mt-5'>
            <li className='p-2'>
              <Link className='' href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 m-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>Início</Link></li>
            <li className='p-2'><Link href="/agendamento"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 m-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
              Agendamento</Link></li>
            <li className='p-2'><Link href="/historico"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="m-2 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>

              Histórico</Link></li>
            <li className='p-2'><Link href="/perfil" className="perfil2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 m-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
              Perfil</Link></li>
          </ul>
        </div>
      </div>
    )
  }
} 