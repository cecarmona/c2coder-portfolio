import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, Img } from './HeroStyles';

// Animations
import { Zoom, Fade } from 'react-reveal';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <Zoom>
        <SectionTitle main center>
          Hi I'm C2 Coder,<br />
          a Web Developer
        </SectionTitle>
      </Zoom>
      <Fade bottom>
        <SectionText>
        I'm a Venezuelan software engineer with 6 years of experience in web development. I've worked for companies and projects around the world in countries such as Venezuela, Spain, Argentina, Mexico and EEUU. 
        </SectionText>
        <Button onClick={() => window.open('https://instagram.com/c2coder_', '_blank')} >Check My Days</Button>
      </Fade>
    </LeftSection>
    <Fade bottom>
    <RightSection>
      <SectionTitle main center style={{opacity: '0'}}>
        JavaScript Dev
      </SectionTitle>
        <Img src="/images/cartoon-c2coder.png" />
    </RightSection>
    </Fade>
    
  </Section>
);

export default Hero;