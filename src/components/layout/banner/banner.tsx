import { useEffect, useState } from "react";
import styles from '@/styles/banner.module.css'

export default function Banner () {
    const [formattedDateTime, setFormatterdDateTime] = useState('')
    useEffect(() => {
      updateDateTime()
    }, [])
    function updateDateTime() {
      // Cria um novo objeto de data, representando o momento atual
      const agora = new Date();
  
      // Define opções de formatação para a data e hora
      const options: Intl.DateTimeFormatOptions = {
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
        <section className=''>
        <div className={styles["img-fundo"]}>
          <img src="https://amigoedu-blog-uploads.s3.amazonaws.com/uploads/2023/02/Podologia-saiba-tudo-sobre-esse-curso.png" alt="..." />
          <div className={styles["bloco-imagem"]}>
            <h1>Bem Vindo Carlos</h1>
            <h2>{formattedDateTime}</h2>
            <h3 className={styles["frase"]}><span></span></h3>
          </div>
        </div>
      </section>
    )
    
}