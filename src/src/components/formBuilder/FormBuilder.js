import { Box, VStack, Button } from '@chakra-ui/react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import '@fontsource/nunito';
import { BsXCircle, BsShieldFillExclamation} from "react-icons/bs";
import { useDisclosure } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import FormalHeading from '../FormalHeading';
import SurveyOverview from './formElements/SurveyOverview';
import SurveyRequirements from './formElements/SurveyRequirements';
import Question from './formElements/Question';
import SurveyPoints from './formElements/SurveyPoints';
import { useState } from 'react';
import { createNewSurvey } from '../../firebase';
import React from 'react';

const FormBuilder = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const navigate = useNavigate();

  const [surveyTitle, setSurveyTitle] = useState('');
  const [surveyDesc, setSurveyDesc] = useState('');
  const [surveyReqs, setSurveyReqs] = useState([
    'Merupakan mahasiswa',
    'Berumur di bawah 25 tahun',
  ]);

  const [questionTypes, setQuestionTypes] = useState([
    'paragraph',
    'checkbox',
    'radio',
  ]);

  const [questionText, setQuestionText] = useState(['', '', '']);
  const [questionChoices, setQuestionChoices] = useState([[''], [''], ['']]);

  const createSurvey = async () => {
    const questions = questionText.map((q, idx) => ({
      question: q,
      qType: questionTypes[idx],
      choices: questionChoices[idx],
    }));

    createNewSurvey(surveyTitle, surveyDesc, surveyReqs, questions, () => {
      navigate('/my-surveys', { replace: true });
    });
  };

  const handleChangeQuestionText = (val, idx) => {
    const newQuestionText = [...questionText];
    newQuestionText[idx] = val;
    setQuestionText(newQuestionText);
  };

  const handleChangeQuestionChoices = (val, idx) => {
    const newQuestionChoices = [...questionChoices];
    newQuestionChoices[idx] = val;
    setQuestionChoices(newQuestionChoices);
  };

  return (
    <VStack align='left' h='100%'>
      <Box pb={3}>
        <FormalHeading title='Create Survey' />
      </Box>
      <Box
        w='auto'
        h='full'
        overflowY={'scroll'}
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
      >
        <VStack align='left' pl={3} pt={3} spacing='30px'>
          <SurveyOverview
            surveyTitle={surveyTitle}
            surveyDesc={surveyDesc}
            setSurveyTitle={setSurveyTitle}
            setSurveyDesc={setSurveyDesc}
          />
          <SurveyRequirements
            surveyReqs={surveyReqs}
            setSurveyReqs={setSurveyReqs}
          />
          {questionTypes.map((qType, idx) => (
            <Question
              type={qType}
              changeType={(targetType) => {
                const newQuestionType = [...questionTypes];
                newQuestionType[idx] = targetType;
                setQuestionTypes(newQuestionType);
              }}
              removeQuestion={() => {
                if (questionTypes.length > 1) {
                  const newQuestionType = [...questionTypes];
                  newQuestionType.splice(idx, 1);
                  setQuestionTypes(newQuestionType);
                }
              }}
              addQuestion={() => {
                const newQuestionType = [...questionTypes];
                newQuestionType.push('paragraph');
                setQuestionTypes(newQuestionType);
              }}
              isLast={idx === questionTypes.length - 1}
              onChangeQuestionText={(val) => {
                handleChangeQuestionText(val, idx);
              }}
              onChangeQuestionChoices={(val) => {
                handleChangeQuestionChoices(val, idx);
              }}
            />
          ))}
          <SurveyPoints />
        </VStack>
      </Box>
      <Box align='right' pt={4}>
          <Button
            color='white'
            bgColor='#EA8238'
            _hover={{ bg: '#d66a1e' }}
            w='180px'
            h='55px'
            fontSize='20px'
            letterSpacing={1}
            fontFamily='Nunito'
            borderRadius='27px'
            onClick={onOpen}
          >
            SUBMIT
          </Button>
        <AlertDialog
          motionPreset='slideInBottom'
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isCentered
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Create Survey
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure you want to create this survey?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button colorScheme='red' ref={cancelRef} onClick={onClose} leftIcon={<BsXCircle/>}>
                  Cancel
                </Button>
                <NavLink to='/my-surveys'>
                  <Button colorScheme='green' onClick={createSurvey} ml={3} leftIcon={<BsShieldFillExclamation/>}>
                    Proceed
                  </Button>
                </NavLink>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </VStack>
  );
};

export default FormBuilder;
