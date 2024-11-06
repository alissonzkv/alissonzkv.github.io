import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import styles from './Navbar.module.css';
import fotoAlisson from './../../img/fotoalisson.jpg'; // ajuste a extensão conforme necessário

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.profile}>
                    <Link to="/">
                        <img src={fotoAlisson} alt="Prof. Dr. Alisson Barbosa de Souza" className={styles.foto} />
                    </Link>
                    <div className={styles.info}>
                        <p>Prof. Dr. Alisson Barbosa de Souza</p>
                        
                        <p> Federal University of Ceará <br />
                            Quixadá Campus <br />
                            José de Freitas Queiroz Avenue, 5003 <br />
                            Quixadá, Ceará, Brazil <br />
                            Zip Code: 63902-580
                        </p>
                        
                        <p className={styles.emailLink}>E-mail: <a href="mailto:alisson@ufc.br">alisson@ufc.br</a></p>
                    </div>
                </div>

                {/* Nova coluna de links à direita */}
                <div className={styles.socialLinks}>
                    <a href="https://www.researchgate.net" target="_blank" rel="noopener noreferrer">ResearchGate</a> <br />
                    <a href="https://lattes.cnpq.br" target="_blank" rel="noopener noreferrer">Lattes</a> <br />
                    <a href="https://orcid.org" target="_blank" rel="noopener noreferrer">ORCID</a> <br />
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> <br />
                    <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">Google Scholar</a> <br />
                </div>

        
                <ul className={styles.lista}>
                    <li className={styles.item}><Link to="/"></Link></li>
                    
                </ul>
               
            </Container>
        </nav>
    );
}

export default Navbar;
