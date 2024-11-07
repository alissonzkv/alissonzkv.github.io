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
            { 
              title: "Concurrent Software Development", 
              content: "Introduction, Primitives, Critical Section Problem, Liveness and Safety, Classical Problems, Threaded Programming, Object Sharing and Composition, Concurrent Programming in Java, High-Level Concurrent Objects, Concurrent Software Lifecycle Management, Advanced Topics in Concurrent Programming in Java.",
              mainTextbook: "Recommended Book: 'Concurrent Programming in Java' by Doug Lea." 
            },
            { 
              title: "Aprendizado de Máquina", 
              content: "Introdução ao aprendizado supervisionado e não supervisionado.",
              mainTextbook: "Livro recomendado: 'Pattern Recognition and Machine Learning' de Christopher Bishop." 
            },
            { 
              title: "Redes Neurais", 
              content: "Arquiteturas e treinamento de redes neurais profundas.",
              mainTextbook: "Livro recomendado: 'Deep Learning' de Ian Goodfellow." 
            },
            { 
              title: "Redes de Computadores", 
              content: "Fundamentos de redes de computadores e protocolos.",
              mainTextbook: "Livro recomendado: 'Computer Networking: A Top-Down Approach' de James Kurose e Keith Ross." 
            },
            // Adicione mais disciplinas conforme necessário
          ].map((disciplina, index) => (
            <div key={index} className={styles.card}>
              <h2 className={styles.cardTitle}>{disciplina.title}</h2>
              <div className={styles.contentSection}>
                <p><strong>Content:</strong></p>
                <p>{disciplina.content}</p>
              </div>
              <div className={styles.mainTextbookSection}>
                <p><strong>Main Textbook:</strong> {disciplina.mainTextbook}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Inicio;
