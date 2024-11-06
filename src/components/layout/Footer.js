import { FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a 
                        href="https://www.linkedin.com/in/alissonbs/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.social_link}
                    >
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Alisson Barbosa de Sousa</span>
            </p>
        </footer>
    );
}

export default Footer;