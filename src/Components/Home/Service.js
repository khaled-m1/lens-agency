import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebook, FaEllo, FaAngleLeft, FaYoutube } from 'react-icons/fa';
import { ReactElement } from 'react';
import logoHero from '../../img/logo-color.svg';
import logoHeroW from '../../img/logo-white.svg';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            أبعاد لنس
          </Text>

          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Feature
              icon={<Icon as={FaAngleLeft} color={'white'} w={5} h={5} />}
              iconBg={useColorModeValue('#EFBC34', 'yellow.900')}
              text={'الخدمات التسويقية'}
            />
            <Feature
              icon={<Icon as={FaAngleLeft} color={'white'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'الخدمات الاستراتيجية'}
            />
            <Feature
              icon={<Icon as={FaAngleLeft} color={'white'} w={5} h={5} />}
              iconBg={useColorModeValue('#3F3791', 'purple.900')}
              text={'الخدمات الفنية'}
            />
            <Feature
              icon={<Icon as={FaAngleLeft} color={'white'} w={5} h={5} />}
              iconBg={useColorModeValue('#EFBC34', 'yellow.900')}
              text={'الخدمات الصوتية'}
            />
            <Feature
              icon={<Icon as={FaAngleLeft} color={'white'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'الخدمات الإنتاجية'}
            />
            <Feature
              icon={<Icon as={FaAngleLeft} color={'white'} w={5} h={5} />}
              iconBg={useColorModeValue('#3F3791', 'purple.900')}
              text={'خدمات العلاقات العامة'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={useColorModeValue(logoHero, logoHeroW)}
            objectFit={['stretch']}
            w={['0', '100%']}
            mr={10}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
