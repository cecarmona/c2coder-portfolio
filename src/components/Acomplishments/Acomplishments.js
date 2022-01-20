import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

// Animations
import { LightSpeed, Fade } from 'react-reveal';

const data = [
  { number: 80, text: 'Projects'},
  { number: 50, text: 'Happy Customers', },
  { number: 14, text: 'Developer of Month in agencies', },
  { number: 2000, text: 'Social Media Followers', }
];

const Acomplishments = () => (
  <Section>
    <LightSpeed left>
      <SectionTitle>Personal Acomplishments</SectionTitle>
    </LightSpeed>
    <Fade right>
      <Boxes>
        {data.map((card, index)=> (
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Fade>
  </Section>
);

export default Acomplishments;
