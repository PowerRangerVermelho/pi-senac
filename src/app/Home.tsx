import { Fragment } from 'react';
import Link from 'next/link';


 function Home() {
  return (
    <Fragment>
      <div className="login-container">
        <i className="fa-solid fa-user"></i>
        <form action="#" method="post">
          <label>Username:</label>
          <input type="text" id="username" name="username" required />
          <br />
          <label>Password:</label>
          <input type="password" id="password" name="password" required />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>

      <div className="p-20 mb-10">
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
      </div>

      <div className="exams-container">
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
            <button type="button" onClick={()=>{}}>Voltar para a tela home</button>
          </div>
        </form>
      </div>


    </Fragment>
  )
}
export default Home
