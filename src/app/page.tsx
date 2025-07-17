import Image from "next/image";
import styles from "./page.module.css";
import Welcome from "./components/Welcome";
import Sessions from "./components/Sessions";
import Speaker from "./components/Speaker";
import Community from "./components/Community";

export default function Home() {
  return (
    <main style={{
      maxWidth: 700,
      margin: '6rem auto',
      padding: '3rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
    }}>
      <section>
       <Welcome />
       <Sessions />
       <Speaker />
       <Community />
      </section>
    </main>
  );
}
