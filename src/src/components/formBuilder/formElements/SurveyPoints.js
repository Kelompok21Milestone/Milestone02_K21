import { Box, Text, Stack } from '@chakra-ui/react';

const SurveyPoints = () => {
  return (
    <Box w='97%' h='auto' bg='#122543' borderRadius='25px'>
      <Text
        color='white'
        fontSize='20px'
        pl={4}
        pt={2}
        pb={2}
      >
        Survei Points
      </Text>
      <Box w='100%' h='auto' bg='white' borderRadius='25px'>
        <Stack pt={2} pl={4} pb={3} spacing='0.5px'>
          <Text color='black' fontSize='20px'>
            Points per response : 10
          </Text>
          <Text color='black' fontSize='20px'>
            Target respondents : 100
          </Text>
          <Text color='black' fontSize='20px'>
            Creation fee : 1.500 points
          </Text>
          <Text color='#7298B9' fontSize='20px'>
            Points needed : 2.500
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default SurveyPoints;
