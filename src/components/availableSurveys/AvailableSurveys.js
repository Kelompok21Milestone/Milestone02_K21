import {
  Box,
  Text,
  Image,
  Spacer,
  Stack,
  HStack,
  Button,
  VStack,
  Flex,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import FormalHeading from '../FormalHeading';

const AvailableSurveys = () => {
  function Surveybox(){
    return(
      <Box
        w='300px'
        h='700px'
        bg='white'
        boxShadow='0 4px 12px 0 black'
        borderRadius={20}
        padding={5}
      >
        <Stack w='100%' h='100%'>
          <Spacer></Spacer>
          <Box boxSize={'15em'} w='100%'>
            <Spacer></Spacer>
            <Image src='./AvailableSurveys.png' />
          </Box>
          <Box>
            <Text
              fontSize='1em'
              fontWeight='bold'
              color='black'
              align='left'
            >
              Judul
            </Text>
            <Text align='left' color='black'>Kaitan Gawai dan Jam Tidur</Text>
          </Box>
          <Spacer></Spacer>
          <Box>
            <Text
              fontSize='1em'
              fontWeight='bold'
              color='black'
              align='left'
            >
              Deskripsi
            </Text>
            <Text align='left' color='black'>
              Survei ini dibuat untuk menganalisis kaitan antara penggunaan
              gawai terhadap waktu jam tidur. Hipotesis yang diajukan adalah
              penggunaan gawai yang berlebih sebelum tidur akan
              mengakibatkan waktu jam tidur yang berkurang dan kualitas
              tidur yang tidak baik
            </Text>
          </Box>
          <Spacer></Spacer>
          <Box>
            <Text
              fontSize='1em'
              fontWeight='bold'
              color='black'
              align='left'
            >
              Syarat Khusus
            </Text>
            <Flex paddingLeft='10px'>
              <UnorderedList>
                <ListItem align='left' color='black'>Merupakan mahasiswa</ListItem>
                <ListItem align='left' color='black'>Berumur di bawah 25 tahun</ListItem>
              </UnorderedList>
            </Flex>
          </Box>
          <Spacer></Spacer>
          <Spacer></Spacer>
          <Spacer></Spacer>
          <Spacer></Spacer>
          <Text align='center' color='black'>Redeemable Points: 10</Text>
          <Box align='center'>
            <Button
              bgColor='#EA8238'
              color='white'
              _hover={{ bg: '#d66a1e' }}
              w='80%'
              fontWeight='bold'
              borderRadius={20}
            >
              PARTICIPATE
            </Button>
          </Box>
          <Spacer></Spacer>
        </Stack>
      </Box>
    )
  }
  return (
    <div>
      <VStack align='center'>
        <FormalHeading title='Available Surveys'/>
        <Spacer></Spacer>
        <Box w='auto' h='full' borderRadius={10}>
          <HStack p={5} spacing={20}>
            <Surveybox/>
            <Surveybox/>
            <Surveybox/>
          </HStack>
        </Box>
        <Box w='auto' h='full' borderRadius={10}>
          <HStack p={5} spacing={20}>
            <Surveybox/>
            <Surveybox/>
            <Surveybox/>
          </HStack>
        </Box>
      <VStack align='left'>
        <Text color='white' fontSize={'3em'} fontWeight='bold' textAlign='center'>
          AVAILABLE SURVEYS
        </Text>
        <VStack w='auto' h='full' css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}} overflowX="auto" maxHeight="520px">
          <Spacer></Spacer>
          <Box w='auto' h='full' borderRadius={10}>
            <HStack p={5} spacing={20}>
              <Surveybox/>
              <Surveybox/>
              <Surveybox/>
            </HStack>
          </Box>          
          <Box w='auto' h='full' borderRadius={10}>
            <HStack spacing={20}>
              <Surveybox/>
              <Surveybox/>
              <Surveybox/>
            </HStack>
          </Box>
          <Spacer></Spacer>
          <Spacer></Spacer>
          <Spacer></Spacer>
          <Spacer></Spacer>
          <Spacer></Spacer>
        </VStack>
      </VStack>
    </div>
  );
};

export default AvailableSurveys;
