import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextTransition, { presets } from 'react-text-transition';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const EVENT_TYPE_CAROUSEL_DURATION_MS = 3000;
const EVENT_TYPE_CAROUSEL_ITEMS = [
  'tournaments',
  'charity events',
  'stream celebrations',
];

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCarouselIndex((carouselIndex) => carouselIndex + 1)
    }, EVENT_TYPE_CAROUSEL_DURATION_MS);

    return () => {
      clearTimeout(intervalId);
    };
  }, []);
  return (
    <Container>
      <Hero>
        <Title>
          <TitleMainRow>
            Allgarta helps<HideForSmall>&nbsp;small</HideForSmall>&nbsp;
            <EventTypeCarousel springConfig={presets.gentle} inline>
              {EVENT_TYPE_CAROUSEL_ITEMS[carouselIndex % EVENT_TYPE_CAROUSEL_ITEMS.length]}
            </EventTypeCarousel>
            </TitleMainRow>
          <span>aim big.</span>
        </Title>
      </Hero>
      <Section>
        <SectionTitle>What we do</SectionTitle>
        <SectionBody>
          Allagarta provides the <strong>support you need</strong> to put on a successful live event.
        </SectionBody>
        <SupportGrid>
          <SupportGridTitle>Live Production</SupportGridTitle>
          <div>
            Our production team handles the video and audio, leaving
            you free to focus on the bigger picture - or what your next line is.
          </div>
          <SupportGridTitle>Broadcast Graphics</SupportGridTitle>
          <div>
            We build dynamic overlays tailored to your event. Need to show
            raid stats, tournament standings, or details on what that ult does? We can
            build that for you.
          </div>
          <SupportGridTitle>Talent Management</SupportGridTitle>
          <div>
            
          </div>
        </SupportGrid>
      </Section>
      <Divider />
      <Section>
        <SectionTitle>What we&apos;ve done</SectionTitle>
        <PreviousWorkGrid>
          <PreviousWorkTitle>Cardboard Clash</PreviousWorkTitle>
          <div>
            <LiteYouTubeEmbed id="zJT5bCdxLAw" title="Cardboard Clash Group Stage - Swiftalu vs ThomasPatrickWX" />
          </div>
          <div>
            <p>
              Cardboard Clash is a series of Pokémon Trading Card Game tournaments where players learn the game
              for the first time when they arrive.
            </p>
            <p>
              In addition to producing the event, Allagarta built custom lower thirds to display card data, 
              allowing for viewers new to the game to easily see what cards do.
            </p>
          </div>
        </PreviousWorkGrid>
      </Section>
      <Divider flipped/>
      <Section>
        <SectionTitle>Who we are</SectionTitle>
        <AboutUsGrid>
          <AboutUsImage />
          <div>
            <strong>Allagarta Events Team is Corvimae, achocolateorange, and frozenflygone.</strong>
            <p>
              The team has worked together on Frame Fatales, Games Done Quick, and Celeste Community events, 
              and provide a wide range of technical skills, talent management, and production experience to 
              live broadcasts.
            </p>
          </div>
        </AboutUsGrid>
      </Section>
      <Divider />
      <Section>
        <SectionTitle>Contact us</SectionTitle>
        <ContactUsSectionBody>
          If you&apos;re interested in contracting Allagarta for any of our services, please
          email us.
          <EmailButtonContainer>
            <a href="mailto:inquiries@allagarta.live">
              <EmailButton>inquiries@allagarta.live</EmailButton>
            </a>
          </EmailButtonContainer>
        </ContactUsSectionBody>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-color: #f0f0f0;
  overflow-y: auto;
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;

  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url('/allagarta/images/allagarta-header.jpg');
  background-size: cover;
  color: #fff;
  padding: 3rem 4rem;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);

  @media screen and (max-width: 1200px) {
    padding: 3rem 2rem;
  }
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  font-weight: 400;
  margin: 0;

  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }
`; 

const HideForSmall = styled.span`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const EventTypeCarousel = styled(TextTransition)`
  font-weight: 900;
`;

const TitleMainRow = styled.span`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const Section = styled.div`
  display: flex;
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  padding-top: 0;
  margin-top: -1rem;
`; 

const SectionTitle = styled.h2`
  position: relative;
  font-size: 2.5rem;
  color: #fff;
  padding: 1rem 2rem;
  margin: 0.5rem;
  z-index: 0;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #673AB7;
    clip-path: polygon(0 10%, 100% 0%, 100% 100%, 0 90%);
    z-index: -1;
  }

  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const SectionBody = styled.div`
  text-align: center;

  & p {
    text-align: left;
  }

  & > p:first-child {
    margin-top: 0;
  }

  & + & {
    margin-top: 0;
  }
`;

const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  width: 100%;

  & > div {
    padding: 1rem;
  }
`; 

const SupportGridTitle = styled.div`
  font-weight: 900;
  text-align: right;
`;

const Divider = styled.div`;
  position: relative;
  left: -10%;
  width: 120%;
  min-height: 2px;
  max-height: 2px;
  margin: 0.5rem 0 1.5rem;
  background-color: #673AB7;
  transform: rotate(${props => props.flipped ? -1 : 1 }deg);
`;

const AboutUsGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-gap: 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 200px 1fr;
  }
`;

const AboutUsImage = styled.div`
  background-image: url('/allagarta/images/about-us.jpg');
  background-size: cover;
  height: 300px;
  border: 4px solid #673AB7;

  @media screen and (max-width: 1200px) {
    height: 150px;
  }
`;

const PreviousWorkGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  font-size: 1.25rem;

  & > div {
    &:nth-of-type(2n) {
      margin-right: 2rem;
    }

    & p:first-child {
      margin-top: 0;
    }
    
    & p:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 200px 1fr;
    font-size: 1rem;
  }
`;

const PreviousWorkTitle = styled.div`
  grid-column: 1 / -1;
  font-weight: 900;
  margin-bottom: 1rem;
  font-size: 2rem;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const ContactUsSectionBody = styled(SectionBody)`
  text-align: center;
  font-size: 2rem;
  
  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const EmailButton = styled.button`
  font-family: inherit;
  font-size: 2rem;
  background-color: #673AB7;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  border-bottom: 4px solid #33146A;
  transition: background-color ease-in 100ms;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #875DD0;
  }

  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const EmailButtonContainer = styled.div`
  margin-top: 1rem;
`;