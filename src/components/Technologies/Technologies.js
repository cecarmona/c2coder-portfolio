import React from 'react';
import { DiFirebase, DiReact, DiWordpress } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end to Front-end.
    </SectionText>
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
            PHP and Databases.
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

    
    
  </Section>
);

export default Technologies;
