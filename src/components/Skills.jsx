import styles from "./Skills.module.css";

function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "⚛️" },
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "Vite", icon: "⚡" },
      ],
    },
    {
      category: "Herramientas",
      items: [
        { name: "Git", icon: "📝" },
        { name: "GitHub", icon: "🐙" },
        { name: "VSCode", icon: "💻" },
      ],
    },
    {
      category: "Diseño",
      items: [
        { name: "Figma", icon: "🎨" },
        { name: "CSS Modules", icon: "📦" },
      ],
    },
  ];

  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Skills & <span className={styles.accent}>Tecnologías</span>
          </h2>
          <p className={styles.subtitle}>
            Herramienta y tecnologias que uso para crear experiencia web
            excepcionales
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((category, index) => (
            <div key={index} className={styles.skillsCategory}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillsList}>
                {category.items.map((skills, skillsIndex) => (
                  <div key={skillsIndex} className={styles.skillsItem}>
                    <span className={styles.skillsIcon}>{skills.icon}</span>
                    <span className={styles.skillsName}>{skills.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
