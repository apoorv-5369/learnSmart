import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  IconButton,
  Input,
  chakra,
  VisuallyHidden,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BiMailSend } from 'react-icons/bi';
import { FaGithub, FaInstagram} from 'react-icons/fa';
import Logo from "../../../assets/Images/logoblack.png";
import { GrAppleAppStore } from "react-icons/gr";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithLogoCentered() {
  return (
    <Box
      bg={useColorModeValue('gray.200', 'gray.900')}  //#04294f
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={8}>
        
        <Stack align={'flex-start'}>
            <ListHeader>Technology</ListHeader>
            <Link href={'https://firebase.google.com/?gclid=CjwKCAjwk_WVBhBZEiwAUHQCmfP06-InLYW2IP39xkAStTaVPV1kakO8zNXvhbo0TIuVZIT_1HNCUBoC-oMQAvD_BwE&gclsrc=aw.ds'}>Firebase</Link>
            <Link href={'https://www.netlify.com'}>Netlify</Link>
            <Link href={'//github.com/apoorv-5369'}>Git</Link>
            <Link href={'https://nodejs.org/en/'}>Node</Link>
          </Stack>
        

          <Stack align={'flex-start'}>
            <ListHeader>Languages</ListHeader>
            <Link href={'https://reactjs.org'}>React</Link>
            <Link href={'https://www.typescriptlang.org'}>TypeScript</Link>
            <Link href={'https://www.javascript.com'}>JavaScript</Link>
            <Link href={'https://www.python.org'}>Python</Link>
            <Link href={'https://en.wikipedia.org/wiki/CSS'}>CSS</Link>
          </Stack>

          
              {/* Contributors  */}
          {/* <Stack align={'flex-start'}>
            <Stack align={'center'}>
            <ListHeader>Contributers</ListHeader>
            <Link href={'#'}>Pg</Link>          
            <Link href={'#'}>Smoke</Link>
            <Link href={'#'}>Ti</Link>
            <Link href={'#'}>Kertz</Link>
            </Stack>
          </Stack> */}
          
          <Stack align={'flex-start'} >
            <ListHeader>Stay up to date</ListHeader>

            <Stack direction={'row'} >
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('#f04e23', '#f04e23')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: '#f04e2395',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>

            <Stack spacing={6}>
            <Box>
              
            </Box>
            
            <ListHeader>Follow Us</ListHeader>
            <Stack direction={{base:'column' ,lg:'row'}}spacing={6}>
              <SocialButton label={'github'} href={'//github.com/apoorv-5369'}>
                <FaGithub />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://www.instagram.com/apoorv__12/?hl=en'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          </Stack>
          
         

        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '2px solid',
            borderColor: useColorModeValue('gray.700', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '2px solid',
            borderColor: useColorModeValue('gray.700', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <img alt='logo' style={{ width: 150 }} src={ Logo }  />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2022 Learn Smart. All rights are reserved
        </Text>
      </Box>
    </Box>
  );
}
