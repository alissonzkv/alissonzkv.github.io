import React from 'react';
import styles from './Inicio.module.css';

function Inicio() {
  return (
    <div className={styles.inicioContainer}>
      {/* Card para "Research Interests" */}
      <div className={styles.card}>
        <h1>Research Interests</h1>
        <p className={styles.texto}>
          Lista dos interesses de pesquisa aqui. Exemplo: Visão Computacional, Processamento de Imagens, Redes Neurais, Aprendizado de Máquina, Inteligência Artificial, etc.
        </p>
      </div>

      {/* Seção "Teaching" com múltiplos cards */}
      <div className={styles.teachingSection}>
        <h1>Teaching</h1>
        <div className={styles.teachingCards}>
          {[
            { title: "Disciplina 1", content: "Descrição da disciplina 1. Livro recomendado: Livro 1." },
            { title: "Disciplina 2", content: "Descrição da disciplina 2. Livro recomendado: Livro 2." },
            { title: "Disciplina 3", content: "Descrição da disciplina 3. Livro recomendado: Livro 3." },
            // Continue adicionando as disciplinas até chegar a 12
          ].map((disciplina, index) => (
            <div key={index} className={styles.card}>
              <h2>{disciplina.title}</h2>
              <p>{disciplina.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Inicio;
