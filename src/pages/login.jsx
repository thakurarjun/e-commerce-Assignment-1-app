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

const Login = () => {
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
                      />
                      <FormLabel mt={5}>
                        <Text as="b">Password</Text>
                      </FormLabel>
                      <Input
                        type="password"
                        w={80}
                        placeholder="enter password"
                        shadow="lg"
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
                      <Button colorScheme="blackAlpha" w={80} bg="blue" shadow="lg">
                        <Text color="white">Login</Text>
                      </Button>
                    </Box>
                    <Box mt={5} mb={3}>
                      <Button
                        w={80}
                        shadow="lg"
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

export default Login;
