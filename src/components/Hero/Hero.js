import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi I'm C2 Coder!<br />
        JavaScript Developer
      </SectionTitle>
      <SectionText>
      I am a Venezuelan software engineer with 5 years of experience in web development. I have worked for companies and projects around the world in countries such as Venezuela, Spain, Argentina, Japan, Mexico, Panama and the United States. 
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;