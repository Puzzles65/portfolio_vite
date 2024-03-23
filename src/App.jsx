import {
  Navbar,
  Home,
  About,
  Contact,
  Projects,
  Skills,
  Sidebar,
} from "./components";
import styles from "./style.js";
import ScrollTop from "./components/ScrollTop.jsx";

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

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Projects />
          <Skills />
          <About />
          <Contact />
        </div>
      </div>
      <Sidebar />
      <ScrollTop />
    </div>
  );
}

export default App;
