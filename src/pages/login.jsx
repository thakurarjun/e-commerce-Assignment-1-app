import React from "react";
import Header from "../components/Header";
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
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/reducers/authSlicer";
import { setToLocalStorage } from "../helpers";

const schema = yup.object({
  email: yup.string().required("username is required"),
  password: yup.string().min(5).max(16).required("Password is required"),
})

const Login = () => {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    const apiData = {
      email:data.email,
      password:data.password
    }
    console.log(apiData,"===>loginapidata")
    try {
      const response = await fetch('api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData,"===>rsponelogindata");
        dispatch(loginSuccess(responseData))
        setToLocalStorage("token",responseData.encodedToken)
        setToLocalStorage("user",responseData.foundUser)
        navigate("/home")
        toast.success("You have loggedin successfully")
      } else {
        console.log('Request failed with status:', response.status);
      }
    } catch (error) {
      console.log('Request failed:', error);
    }
  }
  
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
                      Login
                    </Heading>
                    <FormControl w={80} mx="auto" mt={4}>
                      <FormLabel>
                        {" "}
                        <Text as="b">Email address</Text>
                      </FormLabel>
                      <Input
                        type="email"
                        placeholder="arjun@neog.camp"
                        shadow={"lg"}
                        {...register("email")}
                      />
                      <FormLabel mt={5}>
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
                          <Text as="b"> Remember me</Text>
                        </Checkbox>
                      </Box>
                      <Box>
                        <Text as="b" color={"blue"}>
                          Forgot your password?
                        </Text>
                      </Box>
                    </Box>

                    <Box mt={5} mb={3}>
                      <Button colorScheme="blackAlpha" w={80} bg="blue"
                      shadow="lg" onClick={handleSubmit(handleLogin)}>
                        <Text color="white">Login</Text>
                      </Button>
                    </Box>
                    <Box mt={5} mb={3}>
                      <Button
                        w={80}
                        shadow="lg"
                      >
                        <Text color="black" onClick={()=>navigate("/signup")}>Don't have any account?</Text>
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

export default Login;
