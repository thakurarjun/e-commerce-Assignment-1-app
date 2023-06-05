import {
  Badge,
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
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";


const Header = ({search,setSearch,cartCount=0,wishlist=0}) => {
  const style = {
    position:"absolute",
    top:"10px",
    right:"144px"
  }
  const style1 = {
    position:"absolute",
    top:"10px",
    left:"10px"
  }
  // console.log(search,setSearch,"======================")
  const navigate = useNavigate();
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
          <Box cursor={"pointer"}>
            <Heading as="h2" size={"lg"} color={"gray.500"} onClick={()=>navigate("/")}>
              NorthStar
            </Heading>
          </Box>

          <Box>
            <InputGroup>
              <InputLeftElement >
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Search" w={60} h={9} shadow={"lg"}
               onChange={(e)=>setSearch(e.target.value)}/>
            </InputGroup>
          </Box>

          <Box display="flex" justifyContent={"space-evenly"}>
            <Box>
            <Button
              bg={"gray.500"}
              size={"sm"}
              borderRadius="none"
              colorScheme="blackAlpha"
              onClick={() => navigate("/login")}
            >
              {" "}
              <Text color="white">Login</Text>
            </Button>
            </Box>
            
            <Box ml={5} mt={1} cursor={"pointer"} onClick={()=>navigate("/wishlist")}>
            <Badge style1={style1} colorScheme='purple'>{wishlist}</Badge>
            <Icon as={BsHeart} w={5} h={5} />
            </Box>
            <Box ml={5} mt={1} cursor="pointer" onClick={()=>navigate("/cart")}>
            <Badge style={style} colorScheme='purple'>{cartCount}</Badge>
            <Icon as={BsCartCheck} w={6} h={5} />
            </Box>
            <Box ml={5} mt={1} cursor="pointer">
            <Icon as={BiLogOut} w={7} h={6} />
            </Box>
            
          </Box>
        </Box>
        </Box>
        
      </Box>
    </>
  );
};

export default Header;
