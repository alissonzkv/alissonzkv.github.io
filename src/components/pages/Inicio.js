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
              title: "Advanced Topics in Computer Networks", 
              content: "Cloud Computing; DevOps; Internet of Things (IoT); New Technologies for Computer Networks (Network Function Virtualization, etc.).",
              mainTextbook: "Tanenbaum, Andrew S. Computer networks. Pearson, 2010." 
            },
            { 
              title: "Cloud Computing", 
              content: "Introduction to Cloud Computing, Principles of Cloud Computing, Cloud Computing Architecture, Service Models: Infrastructure as a Service, Platform as a Service and Software as a Service, Cloud Data Management, Middlewares for Cloud Computing, Cloud Management and Monitoring, Application Migration to the Cloud.",
              mainTextbook: "Wittig, Andreas, and Michael Wittig. Amazon Web Services in Action: An in-depth guide to AWS. Simon and Schuster, 2023." 
            },
            { 
              title: "Computer Networks", 
              content: "Organization of computer networks. OSI and TCP/IP reference models. Network standards. Physical transmission media. Media access protocols. Network interconnection. Routing algorithms and protocols. Network protocols. TCP and UDP transport protocols. Application protocols. Network design and sizing.",
              mainTextbook: "Kurose, James F., and Keith W. Ross. Computer networking: A top-down approach edition. Pearson (2020)." 
            },
            { 
              title: "Concurrent Software Development", 
              content: "Introduction, Primitives, Critical Section Problem, Liveness and Safety, Classical Problems, Threaded Programming, Object Sharing and Composition, Concurrent Programming in Java, High-Level Concurrent Objects, Concurrent Software Lifecycle Management, Advanced Topics in Concurrent Programming in Java.",
              mainTextbook: "Ben-Ari, Mordechai. Principles of concurrent and distributed programming. Pearson Education, 2006." 
            },
            { 
              title: "Distributed Systems", 
              content: "Characterization; distributed applications; basic objectives (transparency, openness, scalability). Models: client/server systems; peer-to-peer systems. Distributed objects: interface versus implementation; remote objects; remote method calls (RMI). Processes and threads. Synchronization and Coordination: time; consensus; distributed mutual exclusion; election.",
              mainTextbook: "Tanenbaum, Andrew S., and Maarten Van Steen. Distributed systems. CreateSpace Independent Publishing Platform, 2017." 
            },
            { 
              title: "Internet and TCP/IP Architecture", 
              content: "WANs and devices. TCP/IP architecture. Application, transport and network layer protocols. Network interconnection and segmentation, addressing, subnet masks. Routing algorithms. Protocols and programs for troubleshooting: telnet, ping, traceroute, ipconfig, arp, netstat, among others. Quality of service in TCP/IP networks. IP version 6 (IPV6). Packet analysis with sniffers: WireShark. Router simulator.",
              mainTextbook: "Filippetti, M. CCNA 6.0: guia completo de estudo. (2019)." 
            },
            { 
              title: "Mobile and Wireless Networks", 
              content: "Modulation Types (ASK, FSK, PSK, PCM, DSSS, FHSS, QAM, OFDM), Multiple Access Types (FDMA, TDMA, CDMA), Wireless Local Area Networks (802.11), CSMA/CA, CSMA/CD, Personal Area Networks (Bluetooth), Cellular Systems (AMPS, GSM, GPRS, EDGE, UMTS, SDPA/HSDPA+, 4G LTE, 5G), IP Mobility (micromobility and macromobility), AdHoc Networks (MANETs, ​​VANETs and FANETs), Wireless Sensor Networks, Satellite Networks (GPS).",
              mainTextbook: "Hassan, Mahbub. Wireless and mobile networking. CRC Press, 2022." 
            },    
            { 
              title: "Programming Fundamentals", 
              content: "Algorithms, Fundamental Programming Concepts, Expressions, Flow Controls, Functions and Procedures, Pointers, Vectors and Matrices, Character Strings, Dynamic Allocation, Structured Types and Files.",
              mainTextbook: "Davis, Stephen R. Beginning programming with C++ for dummies. John Wiley & Sons, 2014." 
            },                    
            { 
              title: "Script Programming", 
              content: "Review of basic commands for Linux and Windows environments. Command interpreter. Regular expressions. Advanced commands. I/O redirection. Environment variables. Control and iteration structures. Log analysis tools. Advanced text processing. Startup and scheduled execution scripts.",
              mainTextbook: "Blum, Richard. Linux command line and shell scripting bible. Vol. 481. John Wiley & Sons, 2008." 
            },            
            { 
              title: "Service Oriented Architecture", 
              content: "Motivation, definitions, advantages and challenges; Characteristics: the provider, consumer and registry; Component Oriented Programming; Web Services: description, communication, discovery and composition; Platforms for development, deployment and consumption of web services; Main technologies involving web services: XML, WSDL, SOAP and UDDI. Interoperability; .NET and J2EE technology. SOA governance.",
              mainTextbook: "Hurwitz, Judith S., et al. Service oriented architecture (SOA) for dummies. John Wiley & Sons, 2009." 
            },            
            { 
              title: "Windows Operating System Administration", 
              content: "Different editions of Windows Server, Domain Administration with Active Directory, User Maintenance in Active Directory, Group Administration Techniques, Organizational Units, Administrative Delegation, Modular Policy Administration, Remote Administration, Console Customization, Access Control Lists (ACLs), Network Resource Sharing, Resource Mapping, Shadow Copies, Auditing, Quota Control, Security Policies.",
              mainTextbook: "Panek, William. Microsoft Certified Associate Windows Server Hybrid Administrator - Complete Study Guide. John Wiley & Sons, 2023." 
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
