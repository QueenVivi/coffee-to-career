import React from "react";

const Sessions = () => (
  <section id='sessions'>
    <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '1rem 0' }}>Upcoming Sessions</h1>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0.5rem 0' }}>📚 Build React web app - “Find Your Next Read”</h2>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0.5rem 0' }}>📍 REA Group headcourters 📅28 Aug 2O25</h2>
    <p style={{ fontSize: '1.2rem', lineHeight: 1.7, fontWeight: 'bold' }}>
    What: 
    </p>
    <p style={{ fontSize: '1.2rem', lineHeight: 1.7, }}>A hands-on session where we’ll build a React app that searches books via the Google Books API.
    </p>
    <p style={{ fontSize: '1.2rem', lineHeight: 1.7, fontWeight: 'bold' }}>
    Who is it for:
    </p>
    <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, paddingLeft: '1.2rem',listStyleType: 'disc'}}>
      <li>Uni students or early-career devs</li>
      <li>Anyone curious about React, API integration, or collaborative coding</li>
    </ul>
    <p style={{ fontSize: '1.2rem', lineHeight: 1.7, fontWeight: 'bold' }}>
    Why?
    </p>
    <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, paddingLeft: '1.2rem', listStyleType: 'disc' }}>
      <li>Learn mob programming: one “driver” writes code while the “navigators” guide, rotating roles every 6-8 min.</li>
      <li>Walk away with a polished GitHub repo for your portfolio.</li>
    </ul>
  </section>
)

export default Sessions;