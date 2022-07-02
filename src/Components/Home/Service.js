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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import { FaFacebook, FaEllo, FaAngleLeft, FaYoutube } from 'react-icons/fa';
import { CheckIcon } from '@chakra-ui/icons';
import { ReactElement } from 'react';
import logoHero from '../../img/logo-color.svg';
import logoHeroW from '../../img/logo-white.svg';
import yptreen from '../../img/yellowPatrren.svg';
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
          <Flex>
            <Text
              color={'#393E86'}
              fontWeight={750}
              fontSize={'4xl'}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}
              zIndex={2}
            >
              أبعـــاد لنس
            </Text>
            <Image
              boxSize="100px"
              objectFit="cover"
              src={yptreen}
              alt="Dan Abramov"
              w={50}
              h={50}
              position="absolute"
              zIndex={0}
              ml={80}
              mt={2}
            />
          </Flex>

          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="right">
                      <Feature
                        icon={
                          <Icon as={FaAngleLeft} color={'white'} w={5} h={5} />
                        }
                        iconBg={useColorModeValue('#EFBC34', 'yellow.900')}
                        text={'الخدمات التسويقية'}
                      />
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      الحملات الاعلانية عبر المؤثرين
                    </ListItem>

                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      ادارة حسابات مواقع التواصل الاجتماعي
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      كتابة المحتوى
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      الترويج الالكتروني
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      إعلانات الشوارع
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      الرصد والتقرير
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      التسويق عبر الايميل و sms
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      افكار دعائية
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="right">
                      <Feature
                        icon={
                          <Icon as={FaAngleLeft} color={'white'} w={5} h={5} />
                        }
                        iconBg={useColorModeValue('green.100', 'green.900')}
                        text={'الخدمات الاستراتيجية'}
                      />
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      التحليلات
                    </ListItem>

                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      ابحاث السوق والتنافسية
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      استراتيجية التسويق
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      استراتيجية ادارة علاقات العملاء
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      التخطيط الاعلامي
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="right">
                      <Feature
                        icon={
                          <Icon as={FaAngleLeft} color={'white'} w={5} h={5} />
                        }
                        iconBg={useColorModeValue('#3F3791', 'purple.900')}
                        text={'الخدمات الفنية'}
                      />
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      تطوير الهوية البصرية
                    </ListItem>

                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      صناعة العلامة التجارية
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      تصميم الكتيبات والعروض التقديمية
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      تصميم الانفوجرافيك
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      تصميم الغلافات الدعائية
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      تصاميم ذكية وابداعية
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="right">
                      <Feature
                        icon={
                          <Icon as={FaAngleLeft} color={'white'} w={5} h={5} />
                        }
                        iconBg={useColorModeValue('#EFBC34', 'yellow.900')}
                        text={'الخدمات الصوتية'}
                      />
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      التعليق الصوتي
                    </ListItem>

                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      الهوية الصوتية
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      صناعة الاغاني
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="right">
                      <Feature
                        icon={
                          <Icon as={FaAngleLeft} color={'white'} w={5} h={5} />
                        }
                        iconBg={useColorModeValue('green.100', 'green.900')}
                        text={'الخدمات الإنتاجية'}
                      />
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      التصوير
                    </ListItem>

                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      موشن جرافيك
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      المونتاج
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="right">
                      <Feature
                        icon={
                          <Icon as={FaAngleLeft} color={'white'} w={5} h={5} />
                        }
                        iconBg={useColorModeValue('#3F3791', 'purple.900')}
                        text={'خدمات العلاقات العامة'}
                      />
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      تعزيز العلاقة بالصحف والقنوات
                    </ListItem>

                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      ادارة السمعة الاعلامية
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      ادارة الازمات
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      الرعايات
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
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
