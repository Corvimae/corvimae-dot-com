import Head from 'next/head'
import styled from 'styled-components';

const Link = ({ children, className, href }) => (
  <p className={className}>
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  </p>
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>it&apos;s corvimae!!!!!</title>
        <meta name="description" content="corvimae official website do not steal" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Main>
        <h1>
          hi i&apos;m corvimae
        </h1>
        <h3>or may. spelled with a y.</h3>
        <p>
          i do speedruns and speedrun-adjacent things
        </p>

        <Link href="https://twitch.tv/corvimae">
          i stream here
        </Link>
        <Link href="https://twitter.com/dearpbpod">
          check out my podcast with swooce where we give speedrun advice
        </Link>

        <Link href="https://gamesdonequick.com/framefatales">
          tech lead for frame fatales
        </Link>

        <Link href="https://gamesdonequick.com/hotfix">
          i have a gdq hotfix show also with swooce.
        </Link>
        <Subinfo>
          it&apos;s a speedrunning trivia game show every other saturday at 4pm eastern
        </Subinfo>

        <Link href="https://psrd.run/">
          i&apos;m the event producer and lead technician for pokémon speedrunning diversity
        </Link>
        <Sublink href="https://github.com/psrdiversity/">
          (check out my nodecg layouts and stuff)
        </Sublink>

        <Link href="https://maybreak.com/">
          blog is here
        </Link>

        <Link href="https://github.com/corvimae">
          github is here
        </Link>
        <Link href="mailto:corvimae@maybreak.com">
          business inquiries here
        </Link> 
        <p>
          thank you for reading :)
        </p>
      </Main>

      <Footer>
        play oras
      </Footer>
    </div>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;

  h3 {
    margin-top: -1rem;
  }

  a {
    color: #2700c2;
  }
`;

const Sublink = styled(Link)`
  font-size: 1.25rem;
  margin-top: -1rem;
`

const Footer = styled.footer`
  font-size: 0.75rem;
  text-align: center;
`;

const Subinfo = styled.p`
  font-size: 1.25rem;
  margin-top: -1rem;

`;