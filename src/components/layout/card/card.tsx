import Link from "next/link"
import styles from '../../../../styles/home.module.css'

export const Card = () => {
    return (
        <section>
        <div className={styles['conteudo-card']}>
          <div className={styles.card}>
            <img src="https://www.unicesumar.edu.br/blog/wp-content/uploads/2018/12/podologia-800x533.jpg" className={styles["card-img-top"]} alt="Formação" />
            <div className={styles["card-body"]}>
              <h5 className={styles["card-title"]}>6 áreas de atuação para quem se forma em Podologia.</h5>
              <p className={styles["card-text"]}>Seus pés precisam da Podologia. Para aguentar o dia inteiro, eles precisam estar saudáveis — e não apenas bonitos. Sabe por quê?</p>
              <button><Link href="https://www.unicesumar.edu.br/blog/areas-podologia/" target='blank'>Visitar</Link></button>
            </div>
          </div>
          <div className={styles.card}>
            <img src="https://ww3.ms.senac.br/Portals/0/Cursos/53089/Anexo_53089_133190658289652415.jpg?w=360" className={styles["card-img-top"]} alt="Formação" />
            <div className={styles["card-body"]}>
              <h5 className={styles["card-title"]}>Técnico Em Podologia - Senac</h5>
              <p className={styles["card-text"]}>Objetivo geral: Formar profissionais com competências para atuar e intervir em seu campo de trabalho, com foco em resultados. </p>
              <button><Link href="https://ww3.ms.senac.br/Curso/Detalhe/53089" target='blank'>Visitar</Link></button>
            </div>
          </div>
          <div className={styles.card}>
            <img src="https://ww3.ms.senac.br/Portals/0/Cursos/00.jpg?w=360" className={styles["card-img-top"]} alt="Formação" />
            <div className={styles["card-body"]}>
              <h5 className={styles["card-title"]}>Dê um up na sua carreira com o Senac</h5>
              <p className={styles["card-text"]}>Escolha o curso perfeito para você e turbine seus conhecimentos</p>
              <button><Link href="https://ww3.ms.senac.br/" target='blank'>Visitar</Link></button>
            </div>
          </div>
        </div>
      </section>
    )
}