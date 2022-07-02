import React from 'react';
import {
  Box,
  VStack,
  StackDivider,
  SimpleGrid,
  Image,
  Container,
  Text,
  ButtonGroup,
  Icon,
  Stack,
  useColorModeValue,
  Link,
  Heading,
} from '@chakra-ui/react';
import { FaBehance, FaWhatsapp, FaTwitter, FaYoutube } from 'react-icons/fa';
import LogoAvatar from '../../img/logo-color.svg';
import logoAvatarW from '../../img/logo-white.svg';
import ppWhite from '../../img/ppWhite.svg';
import ppColor from '../../img/ppColor.svg';
const Footer = () => {
  return (
    <>
      <Stack spacing={4} align="stretch" mt={50} mb={10}>
        <Box zIndex={2}>
          <hr width={['100%']} />
        </Box>
        <Box zIndex={2}>
          <SimpleGrid
            minChildWidth={['10px', '120px']}
            spacing={['10', '40px']}
          >
            <Box>
              <Heading fontSize={['10px', '2xl']} mr={['5', '90px']}>
                التقط نجاحك
              </Heading>
              <ButtonGroup spacing="4" mt={6} mr={['5', '90px']}>
                <Link href="https://www.behance.net/lensagency" isExternal>
                  <Icon as={FaBehance} w={['4', '8']} h={['4', '8']} />
                </Link>
                <Link href="https://wa.me/+966550215222" isExternal>
                  <Icon as={FaWhatsapp} w={['4', '8']} h={['4', '8']} />
                </Link>
                <Link href="https://twitter.com/LensAgency" isExternal>
                  <Icon as={FaTwitter} w={['4', '8']} h={['4', '8']} />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCGiOz8lnaVmiZu1a6D8L6fg"
                  isExternal
                >
                  <Icon as={FaYoutube} w={['4', '8']} h={['4', '8']} />
                </Link>
              </ButtonGroup>
            </Box>
            <Box>
              <Container mt={7} mr={['5', '140px']}>
                <Text fontSize={['0', 'xl']}>&#169; Lens Agency</Text>
              </Container>
            </Box>
            <Box>
              <Image
                boxSize="100px"
                objectFit="cover"
                src={useColorModeValue(LogoAvatar, logoAvatarW)}
                alt="LOGO"
                w={['23', '95px']}
                h={['7', '31px']}
                mr={['1', '90px']}
                mt={['5', '7']}
              />
            </Box>
          </SimpleGrid>
        </Box>
        <Box
          position="absolute"
          zIndex={0}
          objectFit="cover"
          // border={'1px solid black'}
          w={'100%'}
          h={'25vh'}
          overflow="hidden"
          bottom={'-40px'}
        >
          <Image
            src={useColorModeValue(ppColor, ppWhite)}
            w={'100vw'}
            zIndex={0}
            alt="Pattren"
            opacity="0.1"
          />
        </Box>
      </Stack>
    </>
  );
};

export default Footer;
