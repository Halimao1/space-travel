import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.content}>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
