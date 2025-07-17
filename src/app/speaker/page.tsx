import React from "react";

const iconStyle = {
  width: 20,
  height: 20,
  verticalAlign: 'middle',
  marginRight: 6,
  marginBottom: 2,
};

export default function SpeakerPage() {
  return (
    <main style={{ maxWidth: 700, margin: '0 auto', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <section>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Become a Speaker</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          Are you passionate about helping others grow in tech? We’re always looking for speakers—whether you’re a subject matter expert in coding, or you have insights on soft skills and career development.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginTop: '2rem', fontWeight: 600 }}>
          Interested in speaking? Contact the founders directly:
        </p>
        <div
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '2.5rem',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}
        >
          <div style={{ minWidth: 220, flex: 1 }}>
            <div style={{ fontWeight: 600 }}>Vivian Xu</div>
            <a href="https://www.linkedin.com/in/vivian-xu-fullstack/" target="_blank" rel="noopener noreferrer" style={{ color: '#0072b1', textDecoration: 'underline', display: 'flex', alignItems: 'center', margin: '6px 0' }}>
              <img src="/linkedin.svg" alt="LinkedIn" style={iconStyle} />LinkedIn
            </a>
            <span style={{ display: 'flex', alignItems: 'center', margin: '6px 0' }}>
              <a href="mailto:hi@vivianxu.com" style={{ color: '#0072b1', textDecoration: 'underline', display: 'flex', alignItems: 'center' }}>
                <img src="/email.svg" alt="Email" style={iconStyle} />hi@vivianxu.com
              </a>
            </span>
          </div>
          <div style={{ minWidth: 220, flex: 1 }}>
            <div style={{ fontWeight: 600 }}>Oly Su</div>
            <a href="https://www.linkedin.com/in/olysu/" target="_blank" rel="noopener noreferrer" style={{ color: '#0072b1', textDecoration: 'underline', display: 'flex', alignItems: 'center', margin: '6px 0' }}>
              <img src="/linkedin.svg" alt="LinkedIn" style={iconStyle} />LinkedIn
            </a>
            <span style={{ display: 'flex', alignItems: 'center', margin: '6px 0' }}>
              <a href="mailto:taiya1229@gmail.com" style={{ color: '#0072b1', textDecoration: 'underline', display: 'flex', alignItems: 'center' }}>
                <img src="/email.svg" alt="Email" style={iconStyle} />taiya1229@gmail.com
              </a>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
} 