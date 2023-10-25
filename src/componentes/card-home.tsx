import Link from "next/link";

export default function CardHome () {
    return (
        
<div className="home-container">
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

    )
}