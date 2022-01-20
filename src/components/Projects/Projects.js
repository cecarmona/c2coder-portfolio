import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// Animations
import { LightSpeed, Fade } from 'react-reveal';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <LightSpeed left>
      <SectionTitle main>Last Projects</SectionTitle>
    </LightSpeed>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <Fade>
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
            </TitleContent>
            <Hr />
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent style={{marginTop: '20px'}}>STACK</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit} target="_blank">Code</ExternalLinks>
              <ExternalLinks href={source} target="_blank">Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        </Fade>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;