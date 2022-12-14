import {
  Button,
  SimpleGrid,
  VStack,
  Box
} from '@chakra-ui/react';
import FormalHeading from '../FormalHeading';
import ProfileBar from './ProfileBar';
import ProfileGenderBar from './ProfileGenderBar';
import '@fontsource/krona-one';

const ProfilPage = () => {
  return (
    <VStack align='left' w='full' h='full'>
      <FormalHeading title='Profile' />
      <VStack
        align='left'
        w='full'
        h='full'
        css={{
          '&::-webkit-scrollbar': { width: '8px' },
          '&::-webkit-scrollbar-track': {
            background: '#D9D9D9',
            borderRadius: '50px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#122543',
            borderRadius: '50px',
          },
        }}
        overflowX='auto'
        height='full'
      >
        <SimpleGrid
          rows={8}
          spacingY={5}
          mt='0.5%'
          mr='1.25%'
          w='auto'
          h='full'
        >
          <ProfileBar title='Nama' placeholder='Input nama di sini...'/>
          <ProfileBar title='No. Telp' placeholder='Input no. telp di sini...'/>
          <ProfileBar title='Email' placeholder='Input email di sini...'/>
          <ProfileBar title='Alamat' placeholder='Input alamat di sini...'/>
          <ProfileBar title='Tanggal Lahir' typeInput='date'/>
          <ProfileBar title='Pekerjaan' placeholder='Input pekerjaan di sini...'/>
          <ProfileGenderBar title='Gender'/>
          <ProfileBar title='Hobi' placeholder='Input hobi di sini...'/>
          <Box align='right' pt={4}>
            <Button
              bg='#EA8238'
              borderRadius={20}
              color='white'
              fontWeight='bold'
              fontSize='20px'
              w='200px'
              _hover={{ bg: '#d66a1e' }}
            >
              EDIT PROFILE
            </Button>
          </Box>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default ProfilPage;
