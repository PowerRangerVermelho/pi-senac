import Link from "next/link";



export default function CardCadastro() {
    return (
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

            <div> className="button-contaniner"
                <Link href="ficha_anamnese_projeto.html"><button type="button">Enviar</button></Link>
                <Link href="home_projeto.html"><button type="button">Voltar para a tela home</button></Link>
            </div>    
        </form>
    </div>  
    )
}