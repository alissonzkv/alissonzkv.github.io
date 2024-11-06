import React from 'react';
import styles from './Inicio.module.css';

function Inicio() {
  return (
    <div className={styles.inicioContainer}>
      {/* Card para "Research Interests" */}
      <div className={styles.card}>
        <h1 className={styles.titleCentered}>Research Interests</h1>
        <p className={styles.texto}>
            Wireless Networks, Distributed Systems, Data Science, Algorithms, Machine Learning.
        </p>
      </div>

      {/* Card para o título "Teaching" */}
      <div className={styles.card}>
        <h1 className={styles.titleCentered}>Teaching</h1>
      </div>

      {/* Seção "Teaching" com múltiplos cards de disciplinas */}
      <div className={styles.teachingSection}>
        <div className={styles.teachingCards}>
          {[
            { title: "Visão Computacional", content: "Estudo de técnicas para análise de imagens digitais. Livro recomendado: 'Computer Vision: Algorithms and Applications' de Richard Szeliski." },
            { title: "Aprendizado de Máquina", content: "Introdução ao aprendizado supervisionado e não supervisionado. Livro recomendado: 'Pattern Recognition and Machine Learning' de Christopher Bishop." },
            { title: "Redes Neurais", content: "Arquiteturas e treinamento de redes neurais profundas. Livro recomendado: 'Deep Learning' de Ian Goodfellow." },
            { title: "Redes de Computadores", content: "Arquiteturas e treinamento de redes neurais profundas. Livro recomendado: 'Deep Learning' de Ian Goodfellow." },
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
