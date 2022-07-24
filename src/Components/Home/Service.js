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
  Link,
  Button,
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
        w={5}
        h={5}
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
              color={useColorModeValue('#393E86', '#fff')}
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
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="right">
                      <Feature
                        icon={
                          <Icon as={FaAngleLeft} color={'white'} w={3} h={3} />
                        }
                        iconBg={useColorModeValue('#F0BD1B', '#F0BD1B')}
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
                      الحملات الإعلانية عبر المؤثرين
                    </ListItem>

                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      إدارة حسابات مواقع التواصل الاجتماعي
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      كتابة المحتوى
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      الترويج الإلكتروني
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
                      أفكار دعائية
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
                          <Icon as={FaAngleLeft} color={'white'} w={3} h={3} />
                        }
                        iconBg={useColorModeValue('#3F3393', '#3F3393')}
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
                    {/* 
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      أبحاث السوق والتنافسية
                    </ListItem> */}
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      استراتيجية التسويق
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      استراتيجية إدارة علاقات العملاء
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      التخطيط الإعلامي
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
                          <Icon as={FaAngleLeft} color={'white'} w={3} h={3} />
                        }
                        iconBg={useColorModeValue('#F0BD1B', '#F0BD1B')}
                        text={'الخدمات الإبداعية'}
                      />
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      صناعة وتطوير الهوية البصرية
                    </ListItem>

                    {/* <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      صناعة العلامة التجارية
                    </ListItem> */}
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      تصميم الكتيبات والعروض التقديمية
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      تصميم الإنفوجرافيك
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
                          <Icon as={FaAngleLeft} color={'white'} w={3} h={3} />
                        }
                        iconBg={useColorModeValue('#3F3393', '#3F3393')}
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
                      صناعة الأغاني
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
                          <Icon as={FaAngleLeft} color={'white'} w={3} h={3} />
                        }
                        iconBg={useColorModeValue('#F0BD1B', '#F0BD1B')}
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
                          <Icon as={FaAngleLeft} color={'white'} w={3} h={3} />
                        }
                        iconBg={useColorModeValue('#3F3393', '#3F3393')}
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
                      إدارة السمعة الإعلامية
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      إدارة الأزمات
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
