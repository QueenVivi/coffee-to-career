import Image from "next/image";

const Community = () => (
  <section id="community">
    <div className='flex'>
    <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0' }}>
      Join our Slack channel&nbsp; 
    </h1>
      <Image 
        src='slack_icon.svg'
        alt="slack icon"
        width={32}
        height={32}
      />
      </div>
    <p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>Welcome to our community! Join to stay tuned with the lastest event, connect with like-minded people, grow together and never feel lonely again &#128540;</p>
    <p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>Join Coffee to Career Slack channel from 
      <a 
        href="https://join.slack.com/t/coffeetocareer/shared_invite/zt-39hu472lf-pnJm7P2KIoZQAfXvBJV~NA" target="_blank"
        style={{color: 'blue'}}
        > this link!</a></p>
  </section>
)

export default Community;
