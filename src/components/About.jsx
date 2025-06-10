import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Sobre <span className={styles.titleAccent}>Mí</span>
          </h2>
        </div>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              Soy un desarrollador frontend autodidacta con base técnica en
              <span className={styles.highlight}>
                {" "}
                Programación y Análisis de Sistemas
              </span>
              . Me gusta crear soluciones funcionales, modernas y atractivas.
            </p>
            <p className={styles.paragraph}>
              Siempre estoy aprendiendo y busco desafíos donde pueda crecer
              profesionalmente. Mi enfoque está en crear experiencias de usuario
              excepcionales con código limpio y eficiente.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>2+</div>
                <div className={styles.statLabel}>Años Aprendiendo</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Proyectos Completados</div>
              </div>
            </div>
          </div>

          <div className={styles.visualContent}>
            <div className={styles.developerCard}>
              <div className={styles.cardIcon}>💻</div>
              <div className={styles.cardTitle}>Desarrollador</div>
              <div className={styles.cardSubtitle}>Frontend</div>
            </div>
            <div className={styles.decorCircle1}></div>
            <div className={styles.decorCircle2}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
