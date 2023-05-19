import React from "react";
import Header from "../components/Header";
import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Box h="auto">
        <Header />
        <Box mt={3}>
          <Box pos={"relative"}>
            <Image
              src="https://images.pexels.com/photos/5319520/pexels-photo-5319520.jpeg?auto=compress&cs=tinysrgb&w=1200"
              w={"100%"}
              h={"80vh"}
            />
            <Box position={"absolute"} top={20} left={20} w={40}>
              <Text color="white" fontSize="4xl" as="b">
                STYLIST PICKS BEAT THE HEAT
              </Text>
              <Button
                mt={4}
                w={40}
                shadow={"lg"}
                bg={"transparent"}
                border="2px solid white"
              >
                <Text color="white">SHOP NOW</Text>
              </Button>
            </Box>
          </Box>

          <Box mt={8}>
            <Text as="b" fontSize="25px" color="black">
              Discover Categories
            </Text>
          </Box>

          <Box mt={5}>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              gap={8}
              w="90%"
              mx="auto"
            >
              <Box>
                <Box border="1px solid white" padding={5} shadow="xl" bg="gray.200" borderRadius="15px">
                  <Image
                    boxSize="300px"
                    objectFit="cover"
                    src="https://images.pexels.com/photos/5319580/pexels-photo-5319580.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Dan Abramov"
                  />
                  <Box mt={3} alignContent={"center"}>
                    <Text as="b" fontSize={"25px"}>
                      Men Collection
                    </Text>
                    <Text>Check out our best men collection</Text>
                    <Text as="i" color="blue" fontSize={"30px"}>30-60% OFF</Text>
                  </Box>
                </Box>
              </Box>

              <Box  border="1px solid white" padding={5} shadow="xl" bg="gray.200"borderRadius="15px">
                <Image
                  boxSize="300px"
                  objectFit="cover"
                  src="https://images.pexels.com/photos/4734810/pexels-photo-4734810.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dan Abramov"
                />
                <Box mt={3}>
                  <Text as="b" fontSize={"25px"}>WOMEN </Text>
                  <Text>Check out our best women collection</Text>
                    <Text as="i" color="blue" fontSize={"30px"}>30-60% OFF</Text>
                </Box>
              </Box>

              <Box border="1px solid white" padding={5} shadow="xl" bg="gray.200" borderRadius="15px">
                <Image
                  boxSize="300px"
                  src="https://images.pexels.com/photos/8224757/pexels-photo-8224757.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dan Abramov"
                />
                <Box mt={3}>
                  <Text as="b" fontSize={"25px"}>KIDS </Text>
                  <Text>Check out our best kids collection</Text>
                    <Text as="i" color="blue" fontSize={"30px"}>30-60% OFF</Text>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box mt={10} justifyContent={"center"} alignItems={"center"}>
        <Footer />
        </Box>
       
      </Box>
    </>
  );
};

export default Home;
