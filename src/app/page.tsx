'use client'
import { Fragment } from 'react';
import Link from 'next/link';
import '@/style/loginprojeto.module.css'
import '@/style/homeprojeto.module.css'
import '@/style/examesprojeto.module.css'
import '@/style/fichaanamneseprojeto.module.css'
import '@/style/cadastroprojeto.module.css'
import '@/style/cadastroprofissionalprojeto.module.css'
import { useRouter } from 'next/router';
import Button from '@/componentes/button';
import CardLogin from '@/componentes/card-login';
import CardHome from '@/componentes/card-home';
import CardExames from '@/componentes/card-exames';
import CardFichaAnamneseProjeto from '@/componentes/card-ficha-anamnese-projeto';
import CardCadastro from '@/componentes/card-cadastro';
import CardProfissionalProjeto from '@/componentes/card-profissional-projeto';

function Home() {

    return (
        <Fragment>
            {/* <div className="login-container">
                <i className="fa-solid fa-user"></i>
                <form action="#" method="post">
                    <label>Username:</label>
                    <input type="text" id="username" name="username" required />
                    <br />
                    <label>Password:</label>
                    <input type="password" id="password" name="password" required />
                    <br />
                    <Link href="home_projeto.html"><button type="button">Home</button></Link>
                    <Link href="cadastro__profissional_projeto.html"><button type="button">Cadastro Profissional</button></Link>
                </form>
            </div> */}
            <CardLogin />

                {/* <div className="cadastro-container">
                <h2>Cadastro do Profissional</h2>
                <form action="#" method="post">
                    <label>Nome Completo:</label>
                    <input type="text" id="nome" name="nome" required />
                    
                    <label>E-mail:</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label>Data de Nascimento:</label>
                    <input type="date" id="data-nascimento" name="data-nascimento" required />
                    
                    <label>Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" required />
                    
                    <label>Endereço:</label>
                    <input type="text" id="endereco" name="endereco" required />
                    
                    <label>CPF:</label>
                    <input type="text" id="cpf" name="cpf" required />
                    
                    <label>Gênero:</label>
                    <select id="genero" name="genero" required>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </select>
                    
                    <label>Login:</label>
                    <input type="password" id="senha" name="senha" required />
                    
                    <label>Senha:</label>
                    <input type="password" id="senha" name="senha" required />
                    
                    <div className="button-container">
                        <Link href="login_projeto.html"><button type="button">Cadastrar Profissional</button></Link>
                        <Link href="login_projeto.html"><button type="button">Voltar </button></Link>
                    </div>
                </form>
                </div> */}
                <CardProfissionalProjeto />

            {/* <div className="home-container">
                <h2>Tela Home</h2>
                <Link href="#"><button>Perfil</button></Link>
                <Link href="exames_projeto.html"><button type="button">Exames</button></Link>
                <Link href="#"><button>Ficha de Evolução</button></Link>
                <Link href="#"><button>Ficha de Prescrição</button></Link>
                <Link href="ficha anamnese_projeto.html"><button type="button">Ficha de Anamnese</button></Link>
                <Link href="relatorio_projeto.html"><button>Relatórios</button></Link>
                <Link href="#"><button>Histórico</button></Link>
                <Link href="cadastro_projeto.html"><button type="button">Cadastrar Paciente</button></Link>

                <Link href="login_projeto.html"><button className="exit-button">SAIR</button></Link>
            </div>*/}
            <CardHome />

            {/* <div className="exams-container">
                    <h2>Tela de Exames</h2>
                    <form action="#" method="post">
                        <label>Nome do Paciente:</label>
                        <input type="text" id="nome" name="nome" required />

                        <label>Celular:</label>
                        <input type="tel" id="celular" name="celular" required />

                        <label>Gênero:</label>
                        <select id="genero" name="genero" required>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outro">Outro</option>
                        </select>

                        <label>Data e Horário:</label>
                        <input type="datetime-local" id="data-horario" name="data-horario" required />

                        <label>Qual Exame?</label>
                        <input type="text" id="exame" name="exame" required />

                        <label>Enviar Arquivo:</label>
                        <input type="file" id="arquivo" name="arquivo" />

                        <label>É Paciente?</label>
                        <input type="checkbox" id="paciente" name="paciente" />

                        <div className="button-container">
                            <button type="submit">Enviar</button>
                            <button type="button" >Voltar para a tela home</button>
                        </div>
                    </form>
                </div> */}
            <CardExames />


            {/* <div className="ficha_anamnese_projeto-container">
                <title>
                <b>
                    Ficha De Anamnese &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <label >Ficha N.º</label>
                    <input type="text" id="numero" />
                </b>
            </title>
            <p>
            </p>



            <label >Nome:</label>
            <input type="text" id="nome" />
            <p>
                <label >Endereço:</label>
                <input type="text" id="ender" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label >N.º</label>
                <input type="text" id="num" />
                <p>
                    <label >Cidade:</label>
                    <input type="text" id="cidade" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label >Cep:</label>
                    <input type="text" id="cep" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label >Data de nascimento:</label>
                    <input type="date" id="data" />
                    <p>

                        Estado civil:
                        &nbsp; &nbsp;
                    </p>
                </p>
                <label >Solteiro(a):</label>
                <input type="checkbox" id="sol" />
                &nbsp;
                <label >Casado(a):</label>
                <input type="checkbox" id="cas" />
                &nbsp;
                <label >Viúvo(a):</label>
                <input type="checkbox" id="viu" />
                &nbsp;
                <label >Demasiado(a):</label>
                <input type="checkbox" id="des" />
                <b>
                    <p>
                        <label >Telefone: </label>
                        <input type="text" id="telefone" className="input-padrao" required placeholder="(xx) xxxxx-xxxx" />
                        &nbsp;
                        <label >Telefone para recado: </label>
                        <input type="text" id="telefonerec" className="input-padrao" required placeholder="(xx) xxxxx-xxxx" />
                        <p>
                            <label >Profissão:</label>
                            <input type="text" id="prof" />
                        </p>
                    </p>
                </b>


                <b>
                    Posição em qual trabalha:
                    &nbsp; &nbsp;
                </b>
                <label >Em pé:</label>
                <input type="checkbox" id="pe" />
                &nbsp;
                <label >Sentado:</label>
                <input type="checkbox" id="sen" />
                &nbsp;
                <label >Andando:</label>
                <input type="checkbox" id="and" />
                &nbsp;
                <p>
                    <b>
                        Estilista?
                        &nbsp; &nbsp;
                    </b>
                    <label >Sim:</label>
                    <input type="checkbox" id="s" />
                    &nbsp;
                    <label >Não:</label>
                    <input type="checkbox" id="n" />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <label htmlFor='tempo'>Há quanto tempo? </label>
                    <input type="text" id="tempo1" />
                </p>

                <b>
                    Tabagista?
                    &nbsp; &nbsp;
                </b>
                <label htmlFor="s1">Sim:</label>
                <input type="checkbox" id="s1" />
                &nbsp;
                <label htmlFor="n1">Não:</label>
                <input type="checkbox" id="n1" />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label htmlFor="tempo2">Há quanto tempo? </label>
                <input type="text" id="tempo2" />
            </p>


            <b>
                Tipo de calçado que faz mais uso:
                &nbsp; &nbsp;
            </b>
            <label htmlFor="aber">Aberto:</label>
            <input type="checkbox" id="aber" />
            &nbsp;
            <label htmlFor="fech">Fechado:</label>
            <input type="checkbox" id="fech" />
            &nbsp; &nbsp; &nbsp;
            <label htmlFor="numcal">N.º do calçado: </label>
            <input type="text" id="numcal" />



            <b>
                Tipo de meia que faz mais uso:
                &nbsp; &nbsp;
            </b>
            <label htmlFor="soc">Social:</label>
            <input type="checkbox" id="soc" />
            &nbsp;
            <label htmlFor="espo">Esportiva:</label>
            <input type="checkbox" id="espo" />
            &nbsp;
            <label htmlFor="alg">Algodão:</label>
            <input type="checkbox" id="alg" />
            <p>



                <b>
                    Pratica algum esporte?
                    &nbsp; &nbsp;
                </b>
                <label htmlFor="s2">Sim:</label>
                <input type="checkbox" id="s2" />
                &nbsp;
                <label htmlFor="n2">Não:</label>
                <input type="checkbox" id="n2" />
                &nbsp; &nbsp;
                <label htmlFor="qual">Qual?</label>
                <input type="text" id="qual" />
            </p>

            <label htmlFor="hali">Habitos alimentares:</label>
            <input type="text" id="hali" />
            <p>
                <b>
                    Toma algum medicamento de uso contínuo?
                </b>
                &nbsp; &nbsp;
                <label htmlFor="meds">Sim:</label>
                <input type="checkbox" id="meds" />
                &nbsp; &nbsp;
                <label htmlFor="medn">Não:</label>
                <input type="checkbox" id="medn" />
            </p>

            <label htmlFor="quais">Quais?</label>
            <input type="text" id="quais" />
            <p>
                <b>
                    <label htmlFor="estatura">Estatura:</label>
                    <input type="text" id="estatura" />
                    <label htmlFor="peso">Peso:</label>
                    <input type="text" id="peso" />
                    <label htmlFor="pa">P.A:</label>
                    <input type="text" id="pa" />
                    <p>

                        <label htmlFor="glicemina">Glicemina:</label>
                        <input type="text" id="glicemina" />
                        <label htmlFor="tipagem">Tipagem sanguínea:</label>
                        <input type="text" id="tipagem" />
                    </p>
                </b>
                <b>
                    Doenças pré-existentes:
                </b>

                <label htmlFor="doençass">Sim:</label>
                <input type="checkbox" id="doençass" />
                &nbsp;
                <label htmlFor="doençasn">Não:</label>
                <input type="checkbox" id="doenças" />
                <p>
                    <label htmlFor="quais2">Quais?</label>
                    <input type="text" id="quais2" />
                </p>

                <b>
                    Já fez algum tratamento podológico:
                </b>

                <label htmlFor="tratas">Sim:</label>
                <input type="checkbox" id="tratas" />
                &nbsp;
                <label htmlFor="tratan">Não:</label>
                <input type="checkbox" id="tratan" />
                <p>
                    <label htmlFor="quais3">Quais?</label>
                    <input type="text" id="quais3" />
                </p>

                <b>
                    Já fez algum cirurgia nos membros inferiores:
                </b>

                <label htmlFor="cirurs">Sim:</label>
                <input type="checkbox" id="cirurs" />
                &nbsp;
                <label htmlFor="cirurn">Não:</label>
                <input type="checkbox" id="cirurn" />
                <p>
                    <label htmlFor="quais4">Quais?</label>
                    <input type="text" id="quais4" />
                </p>

                <b>
                    Possui alguma alergia:
                </b>

                <label htmlFor="alers">Sim:</label>
                <input type="checkbox" id="alers" />
                &nbsp;
                <label htmlFor="alern">Não:</label>
                <input type="checkbox" id="alern" />
                <p>
                    <label htmlFor="quais5">Quais?</label>
                    <input type="text" id="quais5" />
                </p>

                <b>
                    Gestante:
                </b>

                <label htmlFor="gests">Sim:</label>
                <input type="checkbox" id="gests" />
                &nbsp;
                <label htmlFor="gestn">Não:</label>
                <input type="checkbox" id="gestn" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>
                    Lactante:
                </b>

                <label htmlFor="lacts">Sim:</label>
                <input type="checkbox" id="lacts" />
                &nbsp;
                <label htmlFor="lactn">Não:</label>
                <input type="checkbox" id="lactn" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>
                    Varizes:
                </b>

                <label htmlFor="varis">Sim:</label>
                <input type="checkbox" id="varis" />
                &nbsp;
                <label htmlFor="varin">Não:</label>
                <input type="checkbox" id="varin" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>

                    Amputações:
                </b>

                <label htmlFor="amputs">Sim:</label>
                <input type="checkbox" id="amputs" />
                &nbsp;
                <label htmlFor="amputn">Não:</label>
                <input type="checkbox" id="amputn" />
                <p>
                    <label htmlFor="quais6">Quais?</label>
                    <input type="text" id="quais6" />
                    <p>
                        <b>
                            <label htmlFor="dor">Especificando sua dor de 1 a 10:</label>
                            <input type="text" id="dor" />
                        </b>
                    </p>
                </p>

                <b>

                    Portador de pinos ou marcapasso:
                </b>

                <label htmlFor="marcaps">Sim:</label>
                <input type="checkbox" id="marcaps" />
                &nbsp;
                <label htmlFor="marcapn">Não:</label>
                <input type="checkbox" id="marcapn" />
                <p>
                    <label htmlFor="quais7">Quais?</label>
                    <input type="text" id="quais7" />
                </p>

                <b>
                    Perfusão:
                </b>
                &nbsp;&nbsp;&nbsp;
                <label htmlFor="pd">PD:</label>
                <select name="pd">
                    <option value="pd1">Normal</option>
                    <option value="pd2">Pálido</option>
                    <option value="pd3">Cianótico</option>
                    <option value="pd3">C/ edemas</option>
                </select>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor="pe">PE:</label>
                <select name="pe">
                    <option value="pe1">Normal</option>
                    <option value="pe2">Pálido</option>
                    <option value="pe3">Cianótico</option>
                    <option value="pe3">C/ edemas</option>
                </select>
                <p>


                    <b>
                        Digito de pressão:
                    </b>
                </p>

                <label htmlFor="pd">PD &nbsp;</label>
                <input type="text" id="pd" /> &nbsp; segundos.
                <p>
                    <label htmlFor="pe">PE &nbsp;</label>
                    <input type="text" id="pe" /> &nbsp; segundos.
                </p>

                <b>
                    Formato das unhas:
                </b>
                <p>


                    <label htmlFor="fpd">PD:</label>
                    <select name="fpd">
                        <option value="fpd1">Normal</option>
                        <option value="fpd2">Normal com corte incorreto</option>
                        <option value="fpd3">Funil</option>
                        <option value="fpd4">Gancho</option>
                        <option value="fpd5">Involuta</option>
                        <option value="fpd6">Entelha</option>
                        <option value="fpd7">Em torques</option>
                        <option value="fpd8">Em caracol</option>
                    </select>
                </p>

                <label htmlFor="fpe">PE:</label>
                <select name="fpe">
                    <option value="fpe1">Normal</option>
                    <option value="fpe2">Normal com corte incorreto</option>
                    <option value="fpe3">Funil</option>
                    <option value="fpe4">Gancho</option>
                    <option value="fpe5">Involuta</option>
                    <option value="fpe6">Entelha</option>
                    <option value="fpe7">Em torques</option>
                    <option value="fpe8">Em caracol</option>
                </select>
            </p>



            <b>
                Formato dos pés:
            </b>
            <p>


                <label htmlFor="ffpd">PD:</label>
                <select name="ffpd">
                    <option value="ffpd1">Egípcio</option>
                    <option value="ffpd2">Romano</option>
                    <option value="ffpd3">Oriental</option>
                    <option value="ffpd4">Africano</option>
                    <option value="ffpd5">Germânico</option>
                    <option value="ffpd6">Celta</option>
                </select>
            </p>

            <label htmlFor="ffpe">PE:</label>
            <select name="ffpe">
                <option value="ffpe1">Egípcio</option>
                <option value="ffpe2">Romano</option>
                <option value="ffpe3">Oriental</option>
                <option value="ffpe4">Africano</option>
                <option value="ffpe5">Germânico</option>
                <option value="ffpe6">Celta</option>
            </select>
            <p>
                <b>
                    Teste com monofila mento:
                </b>
            </p>
            <b>
                PD:
            </b>
            <label htmlFor="testes">C/S:</label>
            <input type="checkbox" id="testes" />
            &nbsp;
            <label htmlFor="testen">S/S:</label>
            <input type="checkbox" id="testen" />
            <p>

                <b>
                    PE:
                </b>
                <label htmlFor="teste2s">C/S:</label>
                <input type="checkbox" id="teste2s" />
                &nbsp;
                <label htmlFor="teste2n">S/S:</label>
                <input type="checkbox" id="teste2n" />
            </p>
            
            <div className="button-container">
                        <button type="submit">Enviar</button>
                        <button type="button" >Voltar para a tela home</button>
                    </div>

            <div className="cadastro-container">
                <h2>Tela de Cadastro</h2>
                <form action="#" method="post">
                    <label>Nome Completo:</label>
                    <input type="text" id="nome" name="nome" required />
                    
                    <label>E-mail:</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label>Data de Nascimento:</label>
                    <input type="date" id="data-nascimento" name="data-nascimento" required />
                    
                    <label>Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" required />
                    
                    <label>Endereço:</label>
                    <input type="text" id="endereco" name="endereco" required />
                    
                    <label>CPF:</label>
                    <input type="text" id="cpf" name="cpf" required />
                    
                    <label>Gênero:</label>
                    <select id="genero" name="genero" required>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </select>
                        <button type="button">Cadastrar Paciente</button>
                        <Link href="ficha_anamnese_projeto.html"><button type="button">Enviar</button></Link>
                        <Link href="home_projeto.html"><button type="button">Voltar para a tela home</button></Link>

                </form>
            </div> 
            </div> */}
            <CardFichaAnamneseProjeto />


            {/* <div className="cadastro-container">
                <h2>Tela de Cadastro</h2>
                <form action="#" method="post">
                    <label>Nome Completo:</label>
                    <input type="text" id="nome" name="nome" required />
                    
                    <label>E-mail:</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label>Data de Nascimento:</label>
                    <input type="date" id="data-nascimento" name="data-nascimento" required />
                    
                    <label>Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" required />
                    
                    <label>Endereço:</label>
                    <input type="text" id="endereco" name="endereco" required />
                    
                    <label>CPF:</label>
                    <input type="text" id="cpf" name="cpf" required />
                    
                    <label>Gênero:</label>
                    <select id="genero" name="genero" required>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </select>
                        <button type="button">Cadastrar Paciente</button>
                        <Link href="ficha_anamnese_projeto.html"><button type="button">Enviar</button></Link>
                        <Link href="home_projeto.html"><button type="button">Voltar para a tela home</button></Link>

                </form>
            </div>      */}
            <CardCadastro />

        </Fragment>
    )
}
export default Home
