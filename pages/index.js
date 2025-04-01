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
        {/* <Link href="https://twitter.com/dearpbpod">
          check out my podcast with swooce where we give speedrun advice
        </Link> */}

        <Link href="https://gamesdonequick.com/framefatales">
          i&apos;m a member of gdq staff as the tech lead for frame fatales.
        </Link>
        <Subinfo>
          also i&apos;m the head of software projects for all of GDQ. pretty neat!
        </Subinfo>

        <Link href="https://www.youtube.com/playlist?list=PLz8YL4HVC87X9I54nPFBYLnJs4nKVs4zI">
          i had a gdq hotfix show with swooce.
        </Link>
        <Subinfo>
          it&apos;s a speedrunning trivia game show. it&apos;s still on i just don&apos;t host it anymore
        </Subinfo>

        <Link href="https://allagarta.live/">
          i&apos;m the lead engineer for allagarta events team
        </Link>
        <Subinfo>
          we&apos;d love to design and/or broadcast your event!
        </Subinfo>
        {/* <Sublink href="https://github.com/psrdiversity/">
          (check out my nodecg layouts and stuff i did for psrd back in the)
        </Sublink> */}

        <Link href="https://crosshare.org/corvimae">
          crossword puzzles that i&apos;ve made are here
        </Link>
        <Subinfo>
          a few were also published on puzzmo, like&nbsp;
          <a href="https://www.puzzmo.com/play/crossword/8b2j5i2mro" target="_blank" rel="noreferrer">this one</a>.
        </Subinfo>

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
        you should speedrun oras on your nintendo 3ds
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