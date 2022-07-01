import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>التقط نجاحك</Heading>
        <Text color={useColorModeValue('gray.600', 'white')} fontSize={'xl'}>
          عدسة ننسج خلالها ما يصوره خيالها
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10} ml={24.5}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>الخدمات التسويقية</Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                الحملات الاعلانية عبر المؤثرين
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                ادارة حسابات مواقع التواصل الاجتماعي
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                كتابة المحتوى
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                الترويج الالكتروني
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                إعلانات الشوارع
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                الرصد والتقرير
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                التسويق عبر الايميل و sms{' '}
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                افكار دعائية
              </Text>
            </VStack>
          </HStack>
          {/*  */}
          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>الخدمات الاستراتيجية </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                التحليلات
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                ابحاث السوق والتنافسية
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                استراتيجية التسويق{' '}
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                استراتيجية ادارة علاقات العملاء
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                التخطيط الاعلامي
              </Text>
            </VStack>
          </HStack>
          {/*  */}
          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>الخدمات الفنية </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                تطوير الهوية البصرية{' '}
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                صناعة العلامة التجارية{' '}
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                تصميم الكتيبات والعروض التقديمية{' '}
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                تصميم الانفوجرافيك
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                تصميم الغلافات الدعائية{' '}
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                تصاميم ذكية وابداعية
              </Text>
            </VStack>
          </HStack>
          {/*  */}
          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>الخدمات الصوتية</Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                التعليق الصوتي
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                الهوية الصوتية{' '}
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                صناعة الاغاني
              </Text>
            </VStack>
          </HStack>
          {/*  */}
          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>الخدمات الانتاجية </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                التصوير
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                موشن جرافيك{' '}
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>VFX</Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                المونتاج
              </Text>
            </VStack>
          </HStack>
          {/*  */}
          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>خدمات العلاقات العامة</Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                تعزيز العلاقة بالصحف والقنوات{' '}
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                ادارة السمعة الاعلامية
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                ادارة الازمات{' '}
              </Text>
              <Text color={useColorModeValue('gray.600', 'white')}>
                الرعايات
              </Text>
            </VStack>
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
