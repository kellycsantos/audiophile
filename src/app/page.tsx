import { Banner, Bento, CardCategories, AboutUs } from "@components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <Banner />
      </header>
      <main className={styles.main}>
        <CardCategories />
        <Bento />
        <AboutUs />
      </main>
    </div>
  );
}
