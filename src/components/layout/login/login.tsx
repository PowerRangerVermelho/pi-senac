import styles from '@/styles/login.module.css'
import { Fragment } from 'react'

export const LoginBloco = () => {
    return (
        <Fragment>
            <div className="grid grid-cols-2" style={{ height: '100vh' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EB8F33' }}>
                    <img className={styles.logo} src="https://vestibular.sc.senac.br/img/brand/logo-ext-white.png" alt="..." />
                </div>
                <div className='grid grid-col-1 gap-4' id={styles.page}>
                    <form method="POST" className={styles.formLogin}>
                        <h1>Login</h1>
                        <p>Digite os seus dados de acesso no campo abaixo.</p>
                        <label htmlFor="login">Login</label>
                        <input type="login" placeholder="Digite seu Login" />
                        <label htmlFor="password">Senha</label>
                        <input type="password" placeholder="Digite sua Senha" />
                        <a href="/">Esqueci minha senha</a>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <button style={{width: '100%'}}>Acessar</button>
                        </div>
                    </form>
                </div>
            </div>

        </Fragment>
    )
}