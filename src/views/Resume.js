import { Flex, Box, Text, Avatar } from '@chakra-ui/react';
import heroImg from '../assets/images/hero.jpg';
import avatar from '../assets/images/avatar.jpg';

const rwd = {
  base: '100%',
  sm: '100%',
  md: '100%',
  lg: '920px',
  xl: '920px',
  '2xl': '65%',
};

const workExperience = [
  {
    company: 'Crosspoint',
    intro: '以AI替企業打造安全運動場域',
    role: 'Product Designer',
    duration: 'Feb 2019 - Present',
  },
  {
    company: 'SOV',
    intro: '牙材新創',
    role: 'UIUX Designer',
    duration: 'March 2018 - Feb 2019',
  },
  {
    company: 'Freelance',
    intro: '客戶有女人迷、臺灣吧、小暖健康',
    role: 'UIUX Designer',
    duration: '2017 - 2018',
  },
  {
    company: 'Re-lab',
    intro: '資訊顧問設計',
    role: 'Web Developer Internship',
    duration: 'July 2016 - August2016',
  },
  {
    company: 'Fontech',
    intro: '軟體開發新創',
    role: 'Frontend Developer Internship',
    duration: 'Feb 2014 - August 2015',
  },
];

const Resume = () => {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      bg="rgba(218, 236, 246, 0.25)"
    >
      <Box
        h="280"
        w={rwd}
        my="5"
        bgImage={`url('${heroImg}')`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
      ></Box>
      <Flex
        w="100%"
        bg="white"
        justify="center"
        align="center"
        my="0"
        py="5"
        px="4"
      >
        <Flex w={rwd} wrap="wrap" align="center">
          <Box w="20" my="2">
            <Avatar size="lg" name="Hugh" src={avatar} />
          </Box>
          <Text verticalAlign="middle" textAlign="left">
            三年經驗UIUX 設計師 <br /> 目前正在Alpha Camp
            (學期三)學習，培養前端工程師的能力
          </Text>
        </Flex>
      </Flex>
      <Flex w="100%" bg="white" justify="center" align="center" py="5" px="4">
        <Flex w={rwd} wrap="wrap">
          <Flex w={{ base: '100%', lg: '35%' }}>
            <Text fontSize="3xl" color="cyan.600" pt="2">
              Experience
            </Text>
          </Flex>
          <Flex
            w={{ base: '100%', lg: '65%' }}
            justify="spaceBetween"
            direction="column"
            py="2"
          >
            {workExperience.map((work, index) => (
              <Flex
                key={index}
                w="100%"
                borderBottom="1px solid #C4C4C4"
                justify="space-between"
                py="5"
              >
                <Flex wrap="wrap">
                  <Text fontSize="2xl" color="gray.600" w="100%" pb="1">
                    {work.company}
                  </Text>
                  <Text fontSize="lg" color="gray.500">
                    {work.intro}
                  </Text>
                </Flex>
                <Flex wrap="wrap">
                  <Text
                    fontSize="2xl"
                    color="gray.600"
                    w="100%"
                    align="right"
                    pb="1"
                  >
                    {work.role}
                  </Text>
                  <Text fontSize="lg" color="gray.500" w="100%" align="right">
                    {work.duration}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Resume;
