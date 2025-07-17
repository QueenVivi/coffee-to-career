import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main style={{
      maxWidth: 700,
      margin: '0 auto',
      padding: '3rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
    }}>
      <section>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Welcome to Coffee to Career!</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
          Coffee to Career is a community-driven meetup designed to empower the next generation of tech professionals. Whether you’re a university student, making a career switch, or just starting out in tech, we’re here to help you become job-ready.
        </p>
      </section>
      <section>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>Who is this for?</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, paddingLeft: '1.2rem' }}>
          <li>University students exploring tech careers</li>
          <li>Career changers looking to break into tech</li>
          <li>Junior professionals wanting to level up</li>
        </ul>
      </section>
      <section>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>What do we do?</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, paddingLeft: '1.2rem' }}>
          <li>Host regular sessions on coding, technical topics, and interview prep</li>
          <li>Bring in speakers from the industry to share real-world advice</li>
          <li>Build a supportive network for learning and growth</li>
        </ul>
      </section>
    </main>
  );
}
