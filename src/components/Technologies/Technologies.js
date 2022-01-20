import React from 'react';
import { DiFirebase, DiReact, DiWordpress } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

// Animations
import { LightSpeed, Fade } from 'react-reveal';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <LightSpeed left>
      <SectionTitle main>My Skills</SectionTitle>
    </LightSpeed>
    <Fade right>
      <SectionText>
        I’ve had the opportunity to work with different projects that required good skills in web development.
      </SectionText>
    </Fade>
    <Fade bottom>
      <List>
        <ListItem>
          <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Html5, css3, sass <br />
              JavaScript and React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiFirebase size="3rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              PHP and Databases. <br />
              ( Node.js soon! )
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiWordpress size="3rem"/>
          <ListContainer>
            <ListTitle>WordPress</ListTitle>
            <ListParagraph>
              A lot of experience building <br />
              WordPress custom themes <br />
              from scratch.
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Fade>
    

    
    
  </Section>
);

export default Technologies;
