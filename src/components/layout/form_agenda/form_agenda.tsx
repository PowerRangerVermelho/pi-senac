import styles from '@/styles/agendamento.module.css'
import { AgendaIcon } from '../icons/agenda-icon/agenda-icon'
export const FormAgenda = () => {
    return (
        <div className={styles.bloco}>
            <div className={styles.titulo} style={{ display: 'flex', alignItems: 'center' }}>
                <AgendaIcon /><h1>Agendamento</h1>
            </div>
            <form className={styles['bloco-form']}>
                <div className={styles['divisao-form']}>
                    <input className={styles.entradas} placeholder='Nome do paciente' type="text" name="paciente" id="paciente" />

                    <input className={styles.entradas} placeholder='Nome do podólogo(a)' type="text" name="podologo" id="podologo" />
                </div>

                <div className={styles['divisao-form']}>
                    <input className={styles.entradas} type="date" name="data" id="data" />

                    <input className={styles.entradas} placeholder='Hora' type="time" name="hora" id="hora" />
                </div>

                <div className={styles['divisao-form']}>
                    <input className={styles.entradas} placeholder='Descrição' type="text" name="Descrição" id="Descrição" />


                </div>

                <div className={styles['divisao-form']}>
                    <input className={styles.entradas} type="file" name="ficha" id="ficha" />

                    <select value='confirmada' className={styles.entradas} name="situacao">
                        <option value=''>Situação da consulta</option>
                        <option value="agendada">Agendada</option>
                        <option value="confirmada">Confirmada</option>
                        <option value="cancelada">Cancelada</option>
                    </select>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button style={{ width: '20%' }}>Agendar</button>
                </div>
            </form>
        </div>
    )
}