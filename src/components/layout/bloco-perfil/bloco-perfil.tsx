import styles from '@/styles/perfil.module.css'

export const BlocoPerfil = () => {
    return (
        <div className={styles.bloco}>
            <div className='flex'>
                <div className='flex-auto w-50'>
                    <div className={styles["foto-perfil"]}>
                        <label className={styles["picture"]} htmlFor="picture__input">
                            <span className={styles["picture__image"]}>Foto Perfil</span>
                        </label>

                        <input type="file" name="picture__input" id={styles["picture__input"]} />
                    </div>
                </div>
                <div className='flex-auto w-50'>
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>244</td>
                                <td>Carlos</td>
                                <td>Bezerra</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>Idade</th>
                                <th>E-mail</th>
                                <th>Endereço</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>18</td>
                                <td>carlosmiguelcm820@gmail.com</td>
                                <td>Bairro Água boa, Rua Bela Vista</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Login</th>
                                <th>Senha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>carlosm</td>
                                <td>############</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{
                        display: 'flex', justifyContent: 'center'
                    }}>
                        <button className='m-5'>Alterar Login</button>
                        <button className='m-5'>Alterar Senha</button>
                        <button className='m-5'>Alterar Foto</button>
                    </div>
                </div>
            </div>
        </div>
    )
}