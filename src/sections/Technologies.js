import React, { useContext } from 'react';
import Section from '../components/Section';
import { Triangle } from '../components/Triangle';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { IconContext } from 'react-icons';
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiSass,
  DiGit,
  DiGithubBadge,
  DiBootstrap,
  DiMarkdown,
  DiNpm,
  DiVisualstudio,
  DiTerminal,
} from 'react-icons/di';
import { AiFillGitlab, AiOutlineAntDesign } from 'react-icons/ai';
import { FaDocker, FaJenkins, FaNode, FaLinode, FaAws } from 'react-icons/fa';
import { GrGatsbyjs } from 'react-icons/gr';
import { ThemeContext } from '../context/ThemeContext';

const { Container, Header } = Section;

const Background = () => (
  <div>
    <Triangle
      color="primaryLight"
      height={['20vh', '30vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['20vh', '8vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['10vh', '16vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="primary"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

// TODO Maybe refactor to use rebass...
const Skills = styled.div`
  // position: relative;
`;

const Wrap = styled.div`
  padding: 4rem 1.25rem 5rem;
  font-family: Nunito, sans-serif;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.div`
  font-size: 0;
  margin: 1.25rem;
  
  svg {
    font-size: 5rem;
    // transition: all 0.4s ease;
    color: #7aa6c1;
  }
`;

const Technologies = () => {
  const [theme] = useContext(ThemeContext);
  const iconColor = theme === "light" ? "#ff0340" : "#03dac5";
  const techIcons = [
    <DiHtml5 />,
    <DiCss3 />,
    <DiJsBadge />,
    <DiReact />,
    <DiGit />,
    <DiNpm />,
    <DiBootstrap />,
    <DiVisualstudio />,
    <GrGatsbyjs />,
    <FaJenkins />,
    <FaNode />,
    <DiSass />,
    <AiOutlineAntDesign />,
    <DiGithubBadge />,
    <DiMarkdown />,
    <DiTerminal />,
    <AiFillGitlab />,
    <FaDocker />,
    <FaLinode />,
    <FaAws />,
  ];

  return (
    <Container id="technologies" Background={Background}>
      <Header name="Technologies" icon="🛠" label="tools"  />
        <Skills>
          <Wrap>
            <List>
              <IconContext.Provider value={{ color: iconColor }}>
                {techIcons.map((icon) => {
                  return (
                    <Item>
                      <Fade bottom delay={200}>
                        {icon}
                      </Fade>
                    </Item>
                  )
                })}
              </IconContext.Provider>
            </List>
          </Wrap>
        </Skills>
    </Container>
  )
}

export default Technologies
