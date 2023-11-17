import styles from '@/styles/agendamento.module.css'
import { AgendaIcon } from '../icons/agenda-icon/agenda-icon'
import Link from 'next/link'
import { BlocoAnamnese } from '../bloco-anamnese/bloco-anamnese'
import { AlertIcon } from '../icons/alert-icon/alert-icon'
import { ModalAnamnese } from '../modal-anamnese/modal-anamnese'
export const FormAgenda = () => {
    return (
        <div className={styles.bloco}>
            <div>
                <hr style={{ margin: '15px 0px' }} />
                <div className={styles.titulo} style={{ margin: '10px', display: 'flex', alignItems: 'center' }}>
                    <AlertIcon /><h1>Atenção</h1>
                </div>

                <p style={{ margin: '10px', textAlign: 'justify' }}>Após realizar o agendamento,
                    você poderá preencher a ficha de anamnese do paciente ou simplesmente seguir o 
                    <br />agendamento sem ficha. Portanto, logo em seguida ao clique do botão ''agendar'', será iniciada a ficha.</p>
                <hr style={{ margin: '15px 0px' }} />
            </div>
            <div className={styles.titulo} style={{ display: 'flex', alignItems: 'center' }}>
                <AgendaIcon /><h1>Agendamento</h1>
            </div>
            <form autoComplete='off'  className={styles['bloco-form']}>
                <div className={styles['divisao-form']}>
                    <input required className={styles.entradas} placeholder='Nome do paciente' type="text" name="paciente" id="paciente" />

                    <input required className={styles.entradas} placeholder='Nome do podólogo(a)' type="text" name="podologo" id="podologo" />
                </div>

                <div className={styles['divisao-form']}>
                    <input required className={styles.entradas} type="date" name="data" id="data" />

                    <input required className={styles.entradas} placeholder='Hora' type="time" name="hora" id="hora" />
                </div>

                <div className={styles['divisao-form']}>
                    <input required className={styles.entradas} placeholder='Descrição' type="text" name="Descrição" id="Descrição" />


                </div>

                <div className={styles['divisao-form']}>
                    <select required value='confirmada' className={styles.entradas} name="situacao">
                        <option value=''>Situação da consulta</option>
                        <option value="agendada">Agendada</option>
                        <option value="confirmada">Confirmada</option>
                        <option value="cancelada">Cancelada</option>
                    </select>
                </div>


            </form>
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                <a className={styles.links} href="#demo-modal" style={{ width: '20%' }}>Agendar</a>
            </div>
            <div id="demo-modal" className={styles["modal"]}>
                <div className={styles["content"]}>
                    <ModalAnamnese />

                    {/* <div className={styles["footer"]}>
                        <a href="#" className={styles["footer-btn-close"]}> Fechar </a>
                    </div> */}

                    <a href="#" className={styles["close"]}>&times;</a>
                </div>
            </div>
        </div>
    
    )
}