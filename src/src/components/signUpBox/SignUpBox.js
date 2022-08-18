import {
  Container,
  Flex,
  VStack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,

} from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  EmailIcon,
  LockIcon,
  ViewOffIcon,
  ViewIcon,
  ChatIcon,
} from '@chakra-ui/icons';
import { Box, Button, Spacer, Stack } from '@chakra-ui/react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { BsXCircle, BsShieldFillExclamation} from "react-icons/bs";
import { useDisclosure} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { getDoc, doc, getFirestore } from 'firebase/firestore';
import { createNewUserData } from '../../firebase';
import LoginGoogle from '../LoginGoogle';

const SignUpBox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickPassword = () => setShowPassword(!showPassword);

  const [showConfirm, setShowConfirm] = useState(false);
  const handleClickConfirm = () => setShowConfirm(!showConfirm);

  const [fullName, setFullName] = useState('');
  const handleChangeFullName = (e) => setFullName(e.target.value);

  const [email, setEmail] = useState('');
  const handleChangeEmail = (e) => setEmail(e.target.value);

  const [password, setPassword] = useState('');
  const handleChangePassword = (e) => setPassword(e.target.value);

  const [confirm, setConfirm] = useState('');
  const handleChangeConfirm = (e) => setConfirm(e.target.value);

  const [invalidPrompt, setInvalidPrompt] = useState('');

  const signUpAccount = async () => {
    if (fullName === '' || email === '' || password === '' || confirm === '') {
      setInvalidPrompt('Invalid Credentials');
    } else if (password !== confirm) {
      setInvalidPrompt("Passwords doesn't match");
    } else {
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          getAuth(),
          email,
          password
        );
        const user = userCredentials.user;

        createNewUserData(user.uid, fullName, email, 17000, 'email');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const signInAccountGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const userCredentials = await signInWithPopup(getAuth(), provider);
    const user = userCredentials.user;
    const docSnap = await getDoc(doc(getFirestore(), 'Akun', user.uid));

    if (!docSnap.exists()) {
      await createNewUserData(
        user.uid,
        user.displayName,
        user.email,
        17000,
        'google'
      );
    }
  };

  return (
    <Container maxW='440px'>
      <Flex h='90vh' py={20}>
        <VStack
          w='full'
          h='full'
          p={10}
          alignItems='center'
          bg='#FFFFFF'
          borderRadius='10'
          boxShadow='lg'
        >
          <Spacer></Spacer>
          <Text fontSize='3em' fontWeight='bold' color='black'>
            Signup
          </Text>
          <Spacer></Spacer>
          <Stack>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<ChatIcon />}
                  color='black'
                />
                <Input
                  value={fullName}
                  onChange={handleChangeFullName}
                  placeholder='full name'
                  _placeholder={{ color: 'gray.400' }}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<EmailIcon />}
                  color='black'
                />
                <Input
                  value={email}
                  onChange={handleChangeEmail}
                  type='email'
                  placeholder='example@mail.com'
                  _placeholder={{ color: 'gray.400' }}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<LockIcon />}
                  color='black'
                />
                <Input
                  value={password}
                  onChange={handleChangePassword}
                  type={showPassword ? 'text' : 'password'}
                  placeholder='your password'
                  _placeholder={{ color: 'gray.400' }}
                />
                <InputRightElement
                  children={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  onClick={handleClickPassword}
                  color='black'
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<LockIcon />}
                  color='black'
                />
                <Input
                  value={confirm}
                  onChange={handleChangeConfirm}
                  type={showConfirm ? 'text' : 'password'}
                  placeholder='confirm password'
                  _placeholder={{ color: 'gray.400' }}
                />
                <InputRightElement
                  children={showConfirm ? <ViewIcon /> : <ViewOffIcon />}
                  onClick={handleClickConfirm}
                  color='black'
                />
              </InputGroup>
            </FormControl>
          </Stack>
          <Spacer></Spacer>
          <Stack alignItems='center'>
            <Button
              onClick={onOpen}
              bg='#49439B'
              color='white'
              _hover={{ background: '#1A1287' }}
              _active={{ background: '#1A1287' }}
            >
              Register
            </Button>
            <Text color='black'>or register with</Text>
            <Spacer></Spacer>
            <Box onClick={signInAccountGoogle} _hover={{ cursor: 'pointer' }}>
              <LoginGoogle />
            </Box>
            <Spacer></Spacer>
          </Stack>
        </VStack>
      </Flex>
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
                Signup Account
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure you want to signup this account?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button colorScheme='red' ref={cancelRef} onClick={onClose} leftIcon={<BsXCircle/>}>
                  Cancel
                </Button>
                <NavLink to='/login'>
                  <Button colorScheme='green' onClick={signUpAccount} ml={3} leftIcon={<BsShieldFillExclamation/>}>
                    Proceed
                  </Button>
                </NavLink>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
    </Container>
  );
};

export default SignUpBox;
