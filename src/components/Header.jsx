import {
  Box,
  Button,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsCartCheck, BsHeart } from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <Box bg={"white"}>
        <Box padding="6px">
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          w={"85%"}
          mx={"auto"}
          mt={2}
          padding="5px"
        >
          <Box>
            <Heading as="h2" size={"lg"} color={"gray.500"}>
              NorthStar
            </Heading>
          </Box>

          <Box>
            <InputGroup>
              <InputLeftElement >
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Search" w={60} h={9} shadow={"lg"}/>
            </InputGroup>
          </Box>

          <Box display="flex" justifyContent={"space-evenly"}>
            <Box>
            <Button
              bg={"gray.500"}
              size={"sm"}
              borderRadius="none"
              colorScheme="blackAlpha"
            >
              {" "}
              <Text color="white">Login</Text>
            </Button>
            </Box>
            
            <Box ml={5} mt={1}>
            <Icon as={BsHeart} w={5} h={5} />
            </Box>
            <Box ml={5} mt={1} >
            <Icon as={BsCartCheck} w={6} h={5} />
            </Box>
            
          </Box>
        </Box>
        </Box>
        
      </Box>
    </>
  );
};

export default Header;
