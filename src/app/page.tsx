import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <h1>Olá mundo!</h1>
      <h2>Olá mundo!</h2>
      <h3>Olá mundo!</h3>
      <h4>Olá mundo!</h4>
      <h5>Olá mundo!</h5>
      <h6>Olá mundo!</h6>
      <p className="overline">Olá mundo!</p>
      </main>
    </div>
  );
}
