import { Flex, Box, Text, Link, HStack, Icon } from '@chakra-ui/react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import subscription from '../assets/images/subscription-management.png';
const rwd = {
  base: '100%',
  sm: '100%',
  md: '100%',
  lg: '1080px',
  xl: '1080px',
  '2xl': '80%',
};

const Subscription = () => {
  return (
    <Flex justify="center" align="center" direction="column" bg="#EEF1F1">
      <Flex w={rwd} padding="32px" direction="column">
        <Box>
          <Text fontSize="sm" color="gray.500">
            REACT AIRTABLE
          </Text>
          <Text fontSize="2xl">Subscription Management 訂閱管理</Text>
          <Text fontSize="lg" color="gray.800">
            一個簡單的訂閱服務統計工具，利用簡單的方式，來整理自己日常使用了那些訂閱服務和花費。
          </Text>
        </Box>
        <HStack spacing="4" mt="12px">
          <Link
            isExternal
            _hover={{ textDecoration: 'none', fontWeight: 'semibold' }}
            textDecoration="none"
            href="https://indexhui.github.io/subscription-management/"
          >
            前往網站 <Icon as={FiExternalLink} />
          </Link>
          <Link
            isExternal
            href="https://github.com/indexhui/subscription-management"
          >
            View code <Icon as={FiGithub} />
          </Link>
        </HStack>
        <Flex></Flex>
      </Flex>
      <Flex bg="white" w="100%" justify="center" py="6">
        <Flex w={rwd} flexWrap="wrap">
          <Box w="100%">01-操作畫面展示</Box>
          <Box
            bg={`url('${subscription}')`}
            h="360px"
            w="500px"
            maxW="700px"
            bgRepeat="no-repeat"
            bgPosition="center"
            backgroundSize="cover"
          />
          {/* <Box
            bg={`url('${subscription}')`}
            h="320px"
            w="50%"
            maxW="700px"
            bgRepeat="no-repeat"
            bgPosition="center"
            backgroundSize="cover"
          /> */}

          {/* <Box w="100%">02-airtable</Box>
          <Box w="100%">03-資料傳遞構思</Box> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Subscription;
