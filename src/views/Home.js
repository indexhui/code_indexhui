import { Flex, Box, Text, Container } from '@chakra-ui/react';
import ProjectsGroup from '../components/ProjectsGroup';
import heroImg from '../assets/images/hero.png';
import subscription from '../assets/images/subscription-management.png';
import realengine from '../assets/images/realengine.jpg';
import temperatureCoventer from '../assets/images/temperatureCoventer.jpg';
import memoTodo from '../assets/images/memoTodo.jpg';

const rwd = {
  base: '100%',
  sm: '100%',
  md: '100%',
  lg: '960px',
  xl: '1080px',
  '2xl': '70%',
};

const frontEndProject = [
  {
    id: 'sb01',
    name: 'Subscription Management 訂閱管理',
    img: subscription,
    tag: ['React', 'Airtable'],
    link: 'subscription-management',
  },
  {
    name: 'Memo Todo list',
    img: memoTodo,
    tag: ['Vue'],
    link: '',
  },
  {
    name: 'Temperature Coventer',
    img: temperatureCoventer,
    tag: ['React', 'Vue'],
    link: '',
  },
];

const uiProject = [
  {
    id: 'ui01',
    name: 'SOV',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/74498c71249629.Y3JvcCwxNDQ3LDExMzEsMTcsMTc.png',
    tag: ['UIUX', 'branding'],
    href: 'https://www.behance.net/gallery/71249629/SOV-website-UXUI-Design',
  },
  {
    name: '女人迷EC',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/a94fce64428637.Y3JvcCw5MDYsNzA5LDIxMCww.png',
    tag: ['UIUX', 'EC'],
    link: 'https://www.behance.net/gallery/71249629/SOV-website-UXUI-Design',
  },
  {
    name: 'Realengine 真實引擎',
    img: realengine,
    tag: ['UIUX', 'DesignSystem'],
  },
];

const SectionProject = () => {
  return (
    <Flex w={rwd} padding="32px" direction="column">
      <Flex>
        <Text fontSize="2xl"> Front-end Project</Text>
      </Flex>
      <Flex w="100%" flexWrap="wrap">
        <ProjectsGroup projects={frontEndProject} />
      </Flex>
    </Flex>
  );
};

const SectionUIUX = () => {
  return (
    <Flex bg="#fff" my="8" w="100%" justify="center">
      <Flex w={rwd} padding="32px" direction="column">
        <Text fontSize="2xl">UIUX</Text>
        <Flex w="100%" flexWrap="wrap">
          <ProjectsGroup projects={uiProject} />
        </Flex>
      </Flex>
    </Flex>
  );
};

const Hero = () => {
  return (
    <Flex
      w="100%"
      overflow="hidden"
      justify="space-between"
      position="relative"
      h="400px"
    >
      <Container maxW="container.lg" className="cont">
        <Flex
          h="400px"
          maxW="320px"
          direction="column"
          align="center"
          justify="center"
        >
          <Text fontSize="2xl" color="gray.600">
            Hi I'm Hugh.
            <br />A junior front end engineer.
          </Text>
        </Flex>
      </Container>
      <Box
        position="absolute"
        h="320"
        w="50%"
        minW="320px"
        bgImage={`url('${heroImg}')`}
        bgRepeat="no-repeat"
        right="0"
        top="40px"
      ></Box>
    </Flex>
  );
};

const Home = () => {
  return (
    <Flex justify="center" align="center" direction="column" bg="#EEF1F1">
      <Hero />
      <SectionProject />
      <SectionUIUX />
    </Flex>
  );
};

export default Home;
