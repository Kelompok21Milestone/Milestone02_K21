import { Text, HStack, Image, VStack, Button} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import FormalHeading from "../FormalHeading";

const FrontPage = () => {
  return (
    <HStack
    >
      <VStack spacing={19} alignItems='baseline'>
        <VStack alignItems='baseline'>
          <VStack spacing={-1} alignItems='baseline'>
            <FormalHeading title='Daftarkan Surveimu'/>
            <FormalHeading title='Dengan Mudah'/>
            </VStack>
          <VStack alignItems='baseline'>
            <Text fontSize='xl' color={'white'}>
              Ingin surveimu diisi dengan responden yang berkualitas dan memenuhi
              target?
            </Text>
            <Text fontSize='xl' color={'white'}>
              Bergabunglah dengan SureveiKu sekarang juga.
            </Text>
          </VStack>
        </VStack>
        <NavLink to='/signup'>
          <Button bg='#49439B' color='white' fontWeight='bold' borderRadius={0} w='220px' h='40px' fontSize={18} _hover={{ bg: '#231E63' }}>DAFTAR SEKARANG</Button>
        </NavLink>
      </VStack>
      <Image src='./pie-chart.png' boxSize={500}/>
    </HStack>
  );
};

export default FrontPage;