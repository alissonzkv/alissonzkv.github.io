import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import styles from './Navbar.module.css';
import fotoAlisson from './../../img/fotoalisson.jpg'; // ajuste a extensão conforme necessário
import { FaLinkedin, FaUserGraduate } from 'react-icons/fa';
import { SiResearchgate, SiOrcid, SiGooglescholar } from 'react-icons/si';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.profile}>
                    <Link to="/">
                        <img src={fotoAlisson} alt="Prof. Dr. Alisson Barbosa de Souza" className={styles.foto} />
                    </Link>
                    <div className={styles.nome}>
                        <h3>Prof. Dr. Alisson Barbosa de Souza</h3>
                        
                        <p className={styles.info}> Federal University of Ceará <br />
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
                    <ul>
                    <li>  <FaLinkedin /> <a  href="https://www.linkedin.com/in/alissonbs/" target="_blank" rel="noopener noreferrer">LinkedIn</a> </li>
                    <li> <FaUserGraduate /> <a href="http://lattes.cnpq.br/6255476538629622" target="_blank" rel="noopener noreferrer">Lattes </a> </li>
                    <li> <SiGooglescholar /> <a href="https://scholar.google.com/citations?user=FmrLLGgAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a> </li>
                    <li>  <SiOrcid /> <a href="https://orcid.org/0000-0002-6099-011X" target="_blank" rel="noopener noreferrer">ORCID</a> </li>
                   <li> <SiResearchgate /> <a href="https://www.researchgate.net/profile/Alisson-Souza-3" target="_blank" rel="noopener noreferrer">ResearchGate</a> </li>
                                 
                  
                   </ul>
                </div>

        
                <ul className={styles.lista}>
                    <li className={styles.item}><Link to="/"></Link></li>
                    
                </ul>
               
            </Container>
        </nav>
    );
}

export default Navbar;
