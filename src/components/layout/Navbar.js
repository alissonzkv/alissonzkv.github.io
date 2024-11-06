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
                        
                        <p> Universidade Federal do Ceará (UFC) Campus Quixadá - \\
Av. José de Freitas Queiroz, 5003
Cedro - Quixadá - Ceará
63902-580</p>
                        
                        <p className={styles.emailLink}>E-mail: <a href="mailto:alisson@ufc.br">alisson@ufc.br</a></p>
                    </div>
                </div>
                <ul className={styles.lista}>
                    <li className={styles.item}><Link to="/"></Link></li>
                    
                </ul>
               
            </Container>
        </nav>
    );
}

export default Navbar;
