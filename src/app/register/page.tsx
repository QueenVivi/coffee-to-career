import React from "react";

export default function RegisterPage() {
  return (
    <main style={{ maxWidth: 700, margin: '0 auto', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <section>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Register to Attend</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          Ready to join our next session? Fill out the form below to reserve your spot. We can’t wait to meet you!
        </p>
      </section>
      <section>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>Event Registration</h2>
        <div style={{ background: '#f5f5f5', padding: '2rem', borderRadius: 8, textAlign: 'center', color: '#888' }}>
          [Event registration form coming soon]
        </div>
      </section>
    </main>
  );
} 