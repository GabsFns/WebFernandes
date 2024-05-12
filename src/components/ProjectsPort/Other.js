import Styles from "../../css/Projects.module.css"
import { motion } from "framer-motion"
function Other (){
    const projects = [
        { title: "Projeto 1", description: "Descrição 1", imageUrl: "https://via.placeholder.com/300" },
        { title: "Projeto 2", description: "Descrição 2", imageUrl: "https://via.placeholder.com/300" },
        { title: "Projeto 3", description: "Descrição 3", imageUrl: "https://via.placeholder.com/300" },
        { title: "Projeto 4", description: "Descrição 4", imageUrl: "https://via.placeholder.com/300" }
      ];


    return (
        <motion.div
        initial={{
          opacity: 0,
          x: -20
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.2, duration: 0.5 }
        }}
        exit={{
          opacity: 0,
          x: 30,
          transition: { duration: 0.2 }
        }}
  >
    <h1 className={Styles.TitleProjects}>Other Projects</h1>
    {projects.map((project, index) => (
      <section key={index} className={Styles.LayoutElementSection}>
        <aside className={Styles.LayoutElementAside}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </aside>
        <aside className={Styles.LayoutElementAside}>
          <img src={project.imageUrl} alt={project.title} />
          <button>View More</button>
        </aside>

      </section>
      
    ))}
  </motion.div>
  );
}
    

export default Other