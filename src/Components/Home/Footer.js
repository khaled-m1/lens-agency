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
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import LogoAvatar from '../../img/logo-color.svg';
import logoAvatarW from '../../img/logo-white.svg';

const Footer = () => {
  return (
    <>
      <Stack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
        mt={50}
        mb={10}
      >
        <Box>
          <SimpleGrid
            minChildWidth={['10px', '120px']}
            spacing={['10', '40px']}
          >
            <Box>
              <ButtonGroup spacing="4" mt={6} mr={['5', '90px']}>
                <Icon as={FaFacebook} w={['4', '8']} h={['4', '8']} />
                <Icon as={FaInstagram} w={['4', '8']} h={['4', '8']} />
                <Icon as={FaTwitter} w={['4', '8']} h={['4', '8']} />
                <Icon as={FaYoutube} w={['4', '8']} h={['4', '8']} />
              </ButtonGroup>
            </Box>
            <Box>
              <Container mt={7} mr={['5', '90px']}>
                <Text fontSize={['0', 'xl']}>
                  &#169; وكالة لنس للدعاية والإعلان
                </Text>
              </Container>
            </Box>
            <Box>
              <Image
                boxSize="100px"
                objectFit="cover"
                src={useColorModeValue(LogoAvatar, logoAvatarW)}
                alt="LOGO"
                w={['23', '200px']}
                h={['7', '65px']}
                mr={['1', '90px']}
                mt={['5', '3']}
              />
            </Box>
          </SimpleGrid>
        </Box>
      </Stack>
    </>
  );
};

export default Footer;
