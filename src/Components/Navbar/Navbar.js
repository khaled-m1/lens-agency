import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Avatar,
  Image,
  useColorMode,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import avatarLogo from '../../img/logo-color.svg';
import avatarLogoW from '../../img/logo-white.svg';

// const Links = ['الصفحة الرئيسية', 'About', 'Team'];

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     // _hover={{
//     //   textDecoration: 'none',
//     //   bg: useColorModeValue('gray.200', 'gray.700'),
//     // }}
//     to={children === 'الصفحة الرئيسية' ? '/' : '/' + children}
//   >
//     {children}
//   </Link>
// );

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('none', 'none')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image
                boxSize="100px"
                objectFit="cover"
                src={useColorModeValue(avatarLogo, avatarLogoW)}
                alt="LOGO"
                w={['120px', '190px']}
                h={['39px', '62px']}
                mr={5}
                mt={10}
              />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {/* {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {/* {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
