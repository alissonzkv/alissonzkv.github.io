import styles from './Inicio.module.css';

function Inicio() {
  return (
    <div className={styles.inicioContainer}>
      <h1>Links</h1>
      <ul className={styles.linkList}>
        <li>
          <a 
            href="http://lattes.cnpq.br/6255476538629622" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.lattesLink}
          >
            Currículo Lattes
          </a>
        </li>
        {/* Adicione mais itens da mesma maneira para futuros links */}
        <h1>Research Interests        </h1>
        <p className = {styles.texto}>Escreva seus interesses aqui</p>
       <h1> Teaching </h1>
       <p className = {styles.texto}>Escreva seus ensinos aqui</p>
      </ul>
    </div>
  );
}

export default Inicio;
