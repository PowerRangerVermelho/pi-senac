'use client'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import '../../styles/home.css'
import Link from 'next/link'


export default function Home() {
  const [formattedDateTime, setFormatterdDateTime] = useState('')
  useEffect(() => {
    updateDateTime()
  }, [])
  function updateDateTime() {
    // Cria um novo objeto de data, representando o momento atual
    const agora = new Date();

    // Define opções de formatação para a data e hora
    const options:Intl.DateTimeFormatOptions = {
      year: 'numeric',   // Formato de ano numérico (ex: 2023)
      month: 'numeric',  // Formato de mês numérico (ex: 08)
      day: 'numeric',    // Formato de dia numérico (ex: 07)
      hour: '2-digit',   // Formato de hora com dois dígitos (ex: 20)
      minute: '2-digit', // Formato de minuto com dois dígitos (ex: 05)
      second: '2-digit', // Formato de segundo com dois dígitos (ex: 23)
      hour12: false      // Utiliza formato de 24 horas (false) em vez de 12 horas (true)
    };

    // Formata a data e hora atual de acordo com as opções definidas
    const formattedDateTime = agora.toLocaleDateString('pt-BR', options);

    // Atualiza o conteúdo do elemento HTML com o id 'datetime' com a data e hora formatadas
    setFormatterdDateTime(formattedDateTime)
    setInterval(updateDateTime, 1000);

  }
  return (
    <Fragment>
      <div className='bg-orange-500 w-auto h-auto text-black'><p>Estou aqui</p></div>
      {/* <div className="menu-lateral">
        <div className="divisao-menu">
          <div className="logo"></div>
        </div>
        <div className="inputs">
          <ul className='mt-5'>
            <li className='p-2'><Link className='' href="#"><i className="fa-solid fa-house"></i>Início</Link></li>
            <li className='p-2'><Link href="/agendamento"><i className="fa-solid fa-calendar-days"></i>Agendamento</Link></li>
            <li className='p-2'><Link href="/historico"><i className="fa-solid fa-book-medical"></i>Histórico</Link></li>
            <li className='p-2'><Link href="/perfil" className="perfil2"><i className="fa-solid fa-user"></i>Perfil</Link></li>
          </ul>
        </div>
      </div>
      <section className=''>
        <div className="img-fundo">
          <img src="https://amigoedu-blog-uploads.s3.amazonaws.com/uploads/2023/02/Podologia-saiba-tudo-sobre-esse-curso.png" alt="..." />
          <div className="bloco-imagem">
            <h1>Bem Vindo Carlos</h1>
            <h2>{formattedDateTime}</h2>
            <h3><span></span></h3>
          </div>
        </div>
      </section>
      <hr />
      <section>  
        <div className='conteudo-card'>
          <div className="card">
            <img src="https://www.unicesumar.edu.br/blog/wp-content/uploads/2018/12/podologia-800x533.jpg" className="card-img-top" alt="Formação" />
            <div className="card-body">
              <h5 className="card-title">6 áreas de atuação para quem se forma em Podologia.</h5>
              <p className="card-text">Seus pés precisam da Podologia. Para aguentar o dia inteiro, eles precisam estar saudáveis — e não apenas bonitos. Sabe por quê?</p>
              <Link href="https://www.unicesumar.edu.br/blog/areas-podologia/" className="btn">Visitar</Link>
            </div>
          </div>
          <div className="card">
            <img src="https://ww3.ms.senac.br/Portals/0/Cursos/53089/Anexo_53089_133190658289652415.jpg?w=360" className="card-img-top" alt="Formação" />
            <div className="card-body">
              <h5 className="card-title">Técnico Em Podologia - Senac</h5>
              <p className="card-text">Objetivo geral: Formar profissionais com competências para atuar e intervir em seu campo de trabalho, com foco em resultados. </p>
              <Link href="https://ww3.ms.senac.br/Curso/Detalhe/53089" className="btn">Visitar</Link>
            </div>
          </div>
          <div className="card">
            <img src="https://ww3.ms.senac.br/Portals/0/Cursos/00.jpg?w=360" className="card-img-top" alt="Formação" />
            <div className="card-body">
              <h5 className="card-title">Dê um up na sua carreira com o Senac</h5>
              <p className="card-text">Escolha o curso perfeito para você e turbine seus conhecimentos</p>
              <Link href="https://ww3.ms.senac.br/" className="btn">Visitar</Link>
            </div>
          </div>
        </div>
      </section>

      <div className='whatsapp'>
          <Link className="whatsapp-link" href="https://web.whatsapp.com/send?phone=5567999774271" target="_blank">SAC</Link>
      </div> */}
    </Fragment>
  )
}
