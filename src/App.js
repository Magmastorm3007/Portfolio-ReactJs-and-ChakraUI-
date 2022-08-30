
import './App.css';
import {FaSun,FaMoon,FaInstagram,} from "react-icons/fa"
import {Flex,Heading,VStack} from "@chakra-ui/layout"
import { IconButton, useColorMode } from '@chakra-ui/react';

function App() {
  const {colormode,togglecolor}=useColorMode();
  const isdark=colormode=="dark"
  return (
 

   <VStack>
    <Flex w="100%">
<Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">imhejo</Heading>
    </Flex>
    <IconButton ml={8} icon={isdark?<FaSun/>:<FaMoon/>} isRound='true' onClick={togglecolor} ></IconButton>
   </VStack>
  );
}

export default App;
