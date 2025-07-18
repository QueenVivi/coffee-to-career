import Image from "next/image";

const Welcome = () => (
  <section id="welcome">
    <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Welcome to Coffee to Career!</h1>
    <p style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
      Coffee to Career is a community-driven meetup designed to empower the next generation of tech professionals. Whether you’re a university student, making a career switch, or just starting out in tech, we’re here to help you become job-ready.
    </p>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0.5rem 0' }}>Who are we?</h2>
    <div style={{display: 'flex', width: '100%' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>Viv and Oly are a couple who both work in tech. Viv is a career changer from education background, now works as a Full-stack engineer at REA group.</p>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>Oly is an experienced Product Designer who also loves coding, and now works at Canva.</p> 
        <p style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>Their daughter, Zoe, sometimes comes and helps running the event. She is a great vibe buddy. Although, Mango might disagree, as some attendees do enjoy his presence.</p>
      </div>
      <div  style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Image src="/founders.jpg" alt="Coffee to Career's logo, a round circle with a dog that's sipping coffee in the center" width={300} height={400} style={{ borderRadius: '12px' }}/>
      </div>
    </div>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0.5rem 0' }}>Who is this for?</h2>
    <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, paddingLeft: '1.2rem' }}>
      <li>University students exploring tech careers</li>
      <li>Career changers looking to break into tech</li>
      <li>Junior professionals wanting to level up</li>
      <li>Anyone interested in tech and career development</li>  
    </ul> 
    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0.5rem 0' }}>What do we do?</h2>
    <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, paddingLeft: '1.2rem' }}>
      <li>Host regular sessions on coding, technical topics, and interview prep</li>
      <li>Bring in speakers from the industry to share real-world advice</li>
      <li>Build a supportive network for learning and growth</li>
    </ul>
  </section>
)

export default Welcome;