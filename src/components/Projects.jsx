import styles from "./projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Generador de Frases",
      description:
        "App que muestra frases aleatorias y permite guardarlas para inspiración diaria.",
      image: "./src/assets/Miscontactos.png",
      technologies: ["React", "CSS Modules", "Local Storage"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Dashboard Moderno",
      description:
        "Panel de control con gráficos interactivos y diseño responsive.",
      image: "./src/assets/Miscontactos.png",
      technologies: ["React", "Chart.js", "Tailwind CSS"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Landing Page",
      description:
        "Página de aterrizaje moderna con animaciones y diseño atractivo.",
      image: "./src/assets/Miscontactos.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Proyectos <span className={styles.titleAccent}>Destacados</span>
          </h2>
          <p className={styles.subtitle}>
            Una selección de mis trabajos más recientes y proyectos personales
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img
                  src={project.image || "./src/assets/Miscontactos.png"}
                  alt={project.title}
                  className={styles.image}
                />
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.technologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectButtons}>
                  <a href={project.demoUrl} className={styles.demoButton}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m18 13 6-6-6-6" />
                      <path d="M2 5h12" />
                    </svg>
                    Demo
                  </a>
                  <a href={project.codeUrl} className={styles.codeButton}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
