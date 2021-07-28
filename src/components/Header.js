import {
  Box,
  Flex,
  Link,
  HStack,
  VStack,
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { NavLink as ReachLink } from 'react-router-dom';
import React from 'react';
import logo from '../assets/images/logo.svg';

const rwd = {
  base: '100%',
  sm: '100%',
  md: '100%',
  lg: '960px',
  xl: '1080px',
  '2xl': '80%',
};

const displayMd = {
  base: 'block',
  sm: 'block',
  md: 'block',
  lg: 'none',
  xl: 'none',
  '2xl': 'none',
};

const displayLg = {
  base: 'none',
  sm: 'none',
  md: 'none',
  lg: 'flex',
  xl: 'flex',
  '2xl': 'flex',
};

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box w="42px" h="19.5px" ref={btnRef} onClick={onOpen}>
        <Box h="2.5px" w="30px" bg="#C4C4C4" my="4px"></Box>
        <Box h="2.5px" w="30px" bg="#98B2C9" my="4px"></Box>
        <Box h="2.5px" w="30px" bg="#C4C4C4" my="4px"></Box>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Hugh portfolio</DrawerHeader>

          <DrawerBody>
            <VStack space="28" align="left">
              <Link as={ReachLink} to="/resume">
                Resume
              </Link>
              <Link href="https://github.com/indexhui" isExternal>
                Github
              </Link>
              <Link isExternal href="https://indexhui.github.io/note/">
                MyNotes
              </Link>
              <Link
                href="https://www.dropbox.com/s/u6akl0yhwml71xu/resume_linkedin.pdf?dl=0"
                isExternal
              >
                PDF
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const Header = () => {
  return (
    <Flex w="100%" justify="center" h="56px" px="24px">
      <Flex w={rwd} h="100%" justify="space-between" align="center">
        <HStack spacing="12px">
          <Image w="32px" h="32px" src={logo} alt="Hugh" />
          <Link as={ReachLink} to="/">
            <Box>FENG HUGH</Box>
          </Link>
        </HStack>
        <Flex>
          <HStack spacing="20px" display={displayLg}>
            <Link as={ReachLink} to="/resume">
              Resume
            </Link>
            <Link href="https://github.com/indexhui" isExternal>
              Github
            </Link>
            <Link isExternal href="https://indexhui.github.io/note/">
              MyNotes
            </Link>
            <Link
              href="https://www.dropbox.com/s/u6akl0yhwml71xu/resume_linkedin.pdf?dl=0"
              isExternal
            >
              PDF
            </Link>
            <DrawerExample />
          </HStack>
          <Box display={displayMd}>
            <DrawerExample />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
