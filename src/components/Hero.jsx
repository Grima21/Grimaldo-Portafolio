import styles from "./Hero.module.css";

function Hero() {
  const scrollToProject = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>GrimaldoS</div>
          <div className={styles.navLinks}>
            <a href="#home" className={styles.navLinkActive}>
              Home
            </a>
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
            <a href="#about" className={styles.navLink}>
              About
            </a>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/Grima21"
              rel="noopener noreferrer"
              target="_blank"
              className={styles.socialLink}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.greeting}>
            Hola, soy <span className={styles.wave}>👋</span>
          </p>
          <h1 className={styles.title}>
            <span className={styles.titlePrimary}>Grimaldo</span>
            <span className={styles.titleSecundary}>Sánchez</span>
          </h1>
          <p className={styles.description}>
            Desarrollador Front-end enfocado en crear experiencias web modernas,
            limpias y funcionales.
          </p>
          <div className={styles.buttons}>
            <button onClick={scrollToContact} className={styles.primaryButton}>
              Contactar
            </button>
            <button
              onClick={scrollToProject}
              className={styles.secundaryButton}
            >
              ver Proyectos
            </button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img
                src="./src/assets/GrimaldoPhotoProfile.jpg"
                alt="Grimaldo Sanchez"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.decorDot1}></div>
            <div className={styles.decorDot2}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
