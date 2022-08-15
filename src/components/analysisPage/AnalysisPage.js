import {VStack, Text, HStack, Image, Box} from "@chakra-ui/react";
import FormalHeading from '../FormalHeading';
import "@fontsource/raleway";
import "@fontsource/nunito"


const AnalysisPage = () => {
    return ( 
        <VStack h='100%'>
            <HStack alignItems={'left'} w='100%' pb={4}>
                <FormalHeading title='ANALYSIS PAGE'/>
            </HStack>
            <VStack pt={5} align='left' w='100%' h='full' spacing='40px' overflowY={'scroll'} css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}}>
                <Box w='98%' h='auto' bg={'#122543'} color='white' borderRadius='25px' pt={2}>
                    <Text pl={'15px'} marginBottom='5px' fontFamily='Raleway' fontSize='22px' m={1} pb={1}>
                        Persentase Ketercapaian Target Responden Survei Online
                    </Text>
                    <Box w='100%' h='auto' bg={'white'} color='black' borderRadius='25px' pl={'15px'}>
                        <HStack verticalAlign={'center'}>
                            <Image src='./saysno.png' boxSize='20em'/>
                            <Box pr={20}>
                                <Text color='black' fontFamily='Nunito' fontSize='20px'>
                                    Berdasarkan data tersebut dapat dilihat bahwa mahasiswa yang dapat mencapai target responden survei online mereka kurang dari 50%, yaitu hanya sekitar 35,2%. Hal ini menunjukkan bahwa adanya kesulitan yang cukup berarti yang dihadapi oleh para mahasiswa dalam mencapai target responden yang mereka perlukan. Oleh karena itu, perlu adanya inovasi yang dapat mengatasi kesulitan tersebut, mengingat jumlah responden merupakan salah satu hal yang sangat penting dalam mengumpulkan suatu data agar dapat dikatakan sebagai data yang valid.
                                </Text>
                            </Box>
                        </HStack>
                    </Box>
                </Box>
                <Box w='98%' h='auto' bg={'#122543'} color='white' borderRadius='25px' pt={2}>
                    <Text pl={'15px'} marginBottom='5px' fontFamily='Raleway' fontSize='22px' m={1} pb={1}>
                        Kisaran Uang yang Rela Dikeluarkan Pembuat Survey untuk Mencapai Target Jumlah Responden
                    </Text>
                    <Box w='100%' h='full' bg={'white'} borderRadius='25px'>
                        <HStack>
                            <Image src='./kisaranuangdiagram.png' h='30em' pl={10} pt={20} pb={10}/>
                            <Box pr={20}>
                                <Text color='black' fontFamily='Nunito' fontSize='20px'>
                                    Berdasarkan data survey, rata-rata persentasenya lihat kolom kategori_budget adalah pilihan 3, yaitu budget dengan kisaran Rp10.000 - Rp25.000. Kesimpulan yang dapat diambil adalah jumlah uang yang rela dikeluarkan oleh pembuat survey untuk mencapai target jumlah responden berada di kisaran Rp10.000 - Rp25.000.
                                </Text>
                            </Box>
                        </HStack>
                    </Box>
                </Box>
            </VStack>
        </VStack>
     );
}
 
export default AnalysisPage;