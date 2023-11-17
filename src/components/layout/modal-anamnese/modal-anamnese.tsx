import styles from '@/styles/anamnese-modal.module.css'
import { FichaIcon } from '../icons/ficha-icon/ficha-icon'

export const ModalAnamnese = () => {
    return (
        <div>
            <div className={styles["bloco-form"]}>
                <form action="" className={styles['form']}>
                    <div className={styles.titulo} style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                        <FichaIcon /><h1>Ficha de Anamnese</h1>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3" id={styles['linha']}>
                        <input type="text" placeholder='Paciente' className={styles["entrada"]} />
                        <input type="text" placeholder='Podólogo(a)' className={styles["entrada"]} />
                        <div className="grid grid-cols-2 gap-2">
                            <input type="date" placeholder='Data de Nascimento' className={styles["entrada"]} />
                            <input type="text" placeholder='N.º Ficha' className={styles["entrada"]} />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3" id={styles['linha']}>
                        <input type="text" placeholder='Endereço' className={styles["entrada"]} />
                        <input type="text" placeholder='Cidade' className={styles["entrada"]} />
                        <input type="text" placeholder='CEP' className={styles["entrada"]} />
                    </div>
                    <div className="grid grid-cols-3 gap-3" id={styles['linha']}>
                        <label htmlFor="estado_civil">
                            <select name="estado_civil" id="estado_civil" style={{ width: '100%' }} className={styles["entrada"]}>
                                <option value="Estado Civíl" disabled selected>Estado Civíl</option>
                                <option value="solteiro">Solteiro</option>
                                <option value="casado">Casado</option>
                                <option value="viuvo">Viúvo</option>
                                <option value="demasiado">Demasiado</option>
                            </select>
                        </label>
                        <input type="tel" placeholder='Posição em que trabalha' className={styles["entrada"]} />
                        <input type="text" placeholder='Profissão' className={styles["entrada"]} />
                    </div>
                    <div className="grid grid-cols-3 gap-3" id={styles['linha']}>
                        <input type="text" placeholder='Posição em que trabalha' className={styles["entrada"]} />
                        <input type="text" placeholder='Tipo de meia que faz mais uso' className={styles["entrada"]} />
                        <input type="text" placeholder='Tipo de calçado que faz mais uso' className={styles["entrada"]} />
                    </div>
                    <div className="grid grid-cols-4 gap-4" id={styles['linha']}>
                        <div>
                            <label htmlFor="tabagista" className={styles["label-check"]}>Tabagista
                                <input type="checkbox" style={{ width: '30px', margin: '10px' }} name='tabagista' className={styles["entrada"]} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="estilista" className={styles["label-check"]}>Estilista
                                <input type="checkbox" style={{ width: '30px', margin: '10px' }} name='estilista' className={styles["entrada"]} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="gestante" className={styles["label-check"]}>Gestante
                                <input type="checkbox" style={{ width: '30px', margin: '10px' }} name='gestante' className={styles["entrada"]} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="varizes" className={styles["label-check"]}>Varizes
                                <input type="checkbox" style={{ width: '30px', margin: '10px' }} name='varizes' className={styles["entrada"]} />
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2" id={styles['linha']}>
                        <div className="grid grid-cols-2 gap-2">
                            <input type="text" placeholder='Pratica algum esporte?' className={styles["entrada"]} />
                            <input type="text" placeholder='Hábitos alimentares' className={styles["entrada"]} />
                        </div>
                        <input type="text" placeholder='Toma algum medicamento de uso contínuo?' className={styles["entrada"]} />
                    </div>
                    <div className="grid grid-cols-5 gap-5" id={styles['linha']}>
                        <input type="text" placeholder='Estatura' className={styles["entrada"]} />
                        <input type="text" placeholder='Peso' className={styles["entrada"]} />
                        <input type="text" placeholder='Pressão arterial' className={styles["entrada"]} />
                        <input type="text" placeholder='Glicemia' className={styles["entrada"]} />
                        <input type="text" placeholder='Tipagem sanguínea' className={styles["entrada"]} />
                    </div>
                    <div className="grid grid-cols-2 gap-2" id={styles['linha']}>
                        <input type="text" placeholder='Doenças pré-existentes, quais?' className={styles["entrada"]} />
                        <input type="text" placeholder='Possui alguma alergia, quais?' className={styles["entrada"]} />
                    </div>
                    <div className="grid grid-cols-2 gap-2" id={styles['linha']}>
                        <input type="text" placeholder='Já fez algum tratamento podológico, quais?' className={styles["entrada"]} />
                        <input type="text" placeholder='Já fez alguma cirurgia nos membros inferiores, quais?' className={styles["entrada"]} />
                    </div>
                    <div className="grid grid-cols-2 gap-2" id={styles['linha']}>
                        <input type="text" placeholder='Amputações, quais?' className={styles["entrada"]} />
                        <input type="text" placeholder='Perfusões, PD e PE, quais?' className={styles["entrada"]} />
                    </div>
                    <div className="grid grid-cols-2 gap-2" id={styles['linha']}>
                        <input type="number" placeholder='Especificando sua dor de 1 a 10' className={styles["entrada"]} />
                        <input type="text" placeholder='Portador de pinos ou marcapasso, quais?' className={styles["entrada"]} />
                    </div>
                    <div className="grid grid-cols-3 gap-5" id={styles['linha']}>
                        <div className="grid grid-cols-1 gap-1">
                            <label htmlFor="digito-pressao">Digito de pressão</label>
                            <div className="grid grid-cols-2 gap-2">
                                <input type="text" placeholder='Pé direito em segundos' className={styles["entrada"]} />
                                <input type="text" placeholder='Pé esquerdo em segundos' className={styles["entrada"]} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                            <label htmlFor="formato-unha">Formato das unhas</label>
                            <div className="grid grid-cols-2 gap-2">
                                <input type="text" placeholder='Pé direito' className={styles["entrada"]} />
                                <input type="text" placeholder='Pé esquerdo' className={styles["entrada"]} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                            <label htmlFor="formato-pe">Formato dos pés</label>
                            <div className="grid grid-cols-2 gap-2">
                                <input type="text" placeholder='Pé direito' className={styles["entrada"]} />
                                <input type="text" placeholder='Pé esquerdo' className={styles["entrada"]} />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2" id={styles['linha']}>
                        <div className="">
                            <label htmlFor="">Teste com monofilo mento</label>
                            <h3>PD:</h3>
                            <div className="">
                                <label htmlFor="" className={styles["label-check"]}>
                                    C/S<input type="checkbox" style={{ width: '30px', margin: '10px' }} name='' className={styles["entrada"]} />
                                    S/S<input type="checkbox" style={{ width: '30px', margin: '10px' }} name='' className={styles["entrada"]} />
                                </label>
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="">Teste com monofilo mento</label>
                            <h3>PD:</h3>
                            <div className="">
                                <label htmlFor="" className={styles["label-check"]}>
                                    C/S<input type="checkbox" style={{ width: '30px', margin: '10px' }} name='' className={styles["entrada"]} />
                                    S/S<input type="checkbox" style={{ width: '30px', margin: '10px' }} name='' className={styles["entrada"]} />
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
                <div style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
                    <button style={{margin: '10px'}}>Enviar Ficha</button>
                    <button style={{margin: '10px'}}>Agendar Sem Ficha</button>
                </div>
            </div>
        </div>
    )
}