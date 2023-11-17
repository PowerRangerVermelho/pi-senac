'use client'
import styles from '@/styles/historico.module.css'
import { HistIcon } from '../icons/hist-icon/hist-icon'

export const BlocoHistorico = () => {
    return (
        <div className={styles['bloco-historico']}>
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Data Nasc</th>
                        <th>Descrição</th>
                        <th className={styles['col-icone']}>Ver Hist.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>244</td>
                        <td>Carlos Bezerra</td>
                        <td>29/08/2005</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td className={styles['col-icone']}><div className={styles['icone-hist']}><HistIcon /></div></td>
                    </tr>
                    <tr>
                        <td>245</td>
                        <td>Miguel Venturin</td>
                        <td>08/02/2004</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td className={styles['col-icone']}><div className={styles['icone-hist']}><HistIcon /></div></td>
                    </tr>

                    <tr>
                        <td>244</td>
                        <td>Carlos Bezerra</td>
                        <td>29/08/2005</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td className={styles['col-icone']}><div className={styles['icone-hist']}><HistIcon /></div></td>
                    </tr>
                    <tr>
                        <td>245</td>
                        <td>Miguel Venturin</td>
                        <td>08/02/2004</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td className={styles['col-icone']}><div className={styles['icone-hist']}><HistIcon /></div></td>
                    </tr>
                </tbody>
            </table>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button className='m-10'>Alterar Historico</button>
                <button className='m-10'>Excluir Historico</button>
            </div>
        </div>
    )
}