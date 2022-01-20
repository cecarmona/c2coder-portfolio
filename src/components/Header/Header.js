import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

// Animations
import { Slide } from 'react-reveal';

const Header = () =>  (
  <Slide top>
    <Container>
      {/* Logo */}
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: "20;" }}>
          <img src="/images/logo-c2coder.png" style={{ width: "20%", marginRight: "10px" }}/>
            <Span>C2 Coder</Span>
          </a>
        </Link>
      </Div1>
      {/* Nav items */}
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      {/* Social icons */}
      <Div3>
        <SocialIcons href="https://github.com/cecarmona" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/carlosecarmonam/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/c2coder_" target="_blank">
          <AiOutlineInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </Slide>
);

export default Header;
