import Link from "next/link";


export default function CardExames() {
    return (


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
            <Link href="exames_projeto.html"><button type="button">Enviar</button></Link>
            <Link href="home_projeto.html"><button type="button">Voltar para a tela home</button></Link>
        </div>
    </form>
</div>

    )
}