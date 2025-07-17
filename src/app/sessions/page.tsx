import React from "react";

export default function SessionsPage() {
  return (
    <main style={{ maxWidth: 700, margin: '0 auto', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <section>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Upcoming Sessions</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          Stay tuned for our upcoming events! We’ll be posting topics and dates here soon.
        </p>
        <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, paddingLeft: '1.2rem', color: '#888' }}>
          <li>[Sample Session] How to Ace Your First Tech Interview – Date TBA</li>
          <li>[Sample Session] Building Your First Portfolio Project – Date TBA</li>
        </ul>
      </section>
    </main>
  );
} 