import { Navbar, Home, About, Contact, Projects, Skills, Sidebar } from "./components";
import styles from "./style.js";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>
      <Sidebar />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Projects />
          <Skills />
          <About />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
