import Link from "next/link";

export default function CardProfissionalProjeto () {
    return (
        <div className="cadastro-container">
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
    </div>
  )
}