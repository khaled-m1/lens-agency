import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      borderColor={useColorModeValue('gray', 'gray')}
      rounded={'lg'}
    >
      <StatNumber
        fontSize={'3xl'}
        fontWeight={'650'}
        color={useColorModeValue('#F0BD1B', 'white')}
      >
        {title}
      </StatNumber>

      <hr
        style={{
          color: '#3F3393',
          backgroundColor: '#3F3393',
          width: 30,
          height: 5,
          marginTop: 10,
          marginBottom: 10,
        }}
      />

      <StatLabel
        fontWeight={'medium'}
        isTruncated
        color={useColorModeValue('#3F3393', 'white')}
      >
        {stat}
      </StatLabel>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'الرسالة'}
          stat={
            'تسليط ضوء عدستنا على علامتك التجارية ليوسّع زاوية أصدائها، ويقرّب حزمة الأنظار نحو شعاعها'
          }
        />
        <StatsCard
          title={'الرؤية'}
          stat={
            'تصوير الأفكار بمنظور مختلف وصياغتها بقلم محترف لنغدو علامةً فارقة ووجهةً بارقة'
          }
        />
        <StatsCard
          title={'قيمنــا'}
          stat={`
          أصــالة،
         تــحـدي،
         طــمـوح،
         إبــداع
          `}
        />
      </SimpleGrid>
    </Box>
  );
}
