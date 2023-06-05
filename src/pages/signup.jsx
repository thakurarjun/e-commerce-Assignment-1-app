import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { users } from "../backend/db/users";
import { v4 as uuid } from "uuid";
// import { formatDate } from "../utils/authUtils.js";


const schema = yup.object({
  firstName: yup.string().required(),
 lastName:yup.string().required(),
 email:yup.string().email().required(),
 password:yup.string().required(),



}).required();

const Signup = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [userData,setUserData] = useState([])
  useEffect(()=>{
    setUserData(users)
  },[users])
  // console.log(users,"====== users")
const handleSignup = (data) => {
  if(userData.length > 0){
    userData.forEach((item)=>{
      if(item.email === data.email || item.firstName === data.firstName || item.lastName === data.lastName){
        return  alert("user already exist")
      
      }
    });
    // return 
  }
    const myData = {
      _id: uuid(),
       firstName:data.firstName,
       lastName:data.lastName,
       email:data.email,
       password:data.password,
       createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    // setUserData([...userData,myData])
  localStorage.setItem("userData",JSON.stringify([...userData,myData]))

  // }
  

  
  console.log(userData,"===== user data ")
  
}
// useEffect(()=>{

// },[userData])
console.log(userData,"====================== geting data")


  return (
    <>
      <Box bg={"gray.100"}>
        <Header />
        <Box>
          <Box>
            <Flex justify="center" align="center" h={"90vh"}>
              <Center>
                <Box>
                  <Box w={450} bg="white" p={5}>
                    <Heading as="h1" size={"md"} color={"black"}>
                      Signup
                    </Heading>
                    <FormControl w={80} mx="auto" mt={4}>
                      <FormLabel>
                        {" "}
                        <Text as="b">First Name</Text>
                      </FormLabel>
                      <Input
                        type="text"
                        placeholder=" First Name"
                        shadow={"lg"}
                        {...register("firstName")}
                      />
                      <FormLabel mt={3}>
                        {" "}
                        <Text as="b">Last Name</Text>
                      </FormLabel>
                      <Input
                        type="text"
                        placeholder="Last Name"
                        shadow={"lg"}
                        {...register("lastName")}
                      />
                      <FormLabel mt={3}>
                        {" "}
                        <Text as="b">Email address</Text>
                      </FormLabel>
                      <Input
                        type="email"
                        placeholder="arjun@neog.camp"
                        shadow={"lg"}
                        {...register("email")}
                      />
                      <FormLabel mt={3}>
                        <Text as="b">Password</Text>
                      </FormLabel>
                      <Input
                        type="password"
                        w={80}
                        placeholder="enter password"
                        shadow="lg"
                        {...register("password")}
                      />
                    </FormControl>

                    <Box
                      display={"flex"}
                      w={80}
                      mx={"auto"}
                      mt={6}
                      justifyContent={"space-between"}
                    >
                      <Box>
                        {" "}
                        <Checkbox size="md" colorScheme="gray">
                          <Text as="b"> I accept all Terms & Conditions</Text>
                        </Checkbox>
                      </Box>
                      
                    </Box>

                    <Box mt={5} mb={3} 
                        onClick={handleSubmit(handleSignup)}
                    
                    >
                      <Button
                        colorScheme="blackAlpha"
                        w={80}
                        bg="blue"
                        shadow="lg"
                      >
                        <Text color="white">Create New Account</Text>
                      </Button>
                    </Box>
                    <Box mt={5} mb={3}>
                      <Button
                        w={80}
                        shadow="lg"
                        onClick={()=>navigate("/login")}
                      >
                        <Text color="black">Already have an account?</Text>
                      </Button>
                    </Box>

                  </Box>
                </Box>
              </Center>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
