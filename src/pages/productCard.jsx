import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductCard = () => {
  return (
    <>
      <Box>
        <Header />
        <Box>
          <Box
            justifyContent={"center"}
            alignItems={"center"}
            mt={15}
            display={"flex"}
            h={"70vh"}
            w="70%"
            mx="auto"
            bg="gray.100"
            shadow="lg"
            borderRadius="10px"
          >
            <Box w="50%" mt={8}>
              <Image
                boxsize="150px"
                borderRadius={"8px"}
                h="40vh"
                src="https://images.pexels.com/photos/5319520/pexels-photo-5319520.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            
              <Box
                display="flex"
                justifyContent={"center"}
                alignItems={"center"}
                mt={2}
              >
                <Text>
                  Quantity: <Button>-</Button> 5 <Button>+</Button>
                </Text>
              </Box>
            </Box>

            <Box
              p={3}
              bg="white"
              shadow={"lg"}
              borderRadius={"8px"}
              w="40%"
              height={"43vh"}
            >
              <Text fontSize={"18px"}>Men Premium Jacket</Text>
              <Box display="flex" gap={2} flexDirection={"column"}>
                <Box display="flex" gap={2} justifyContent={"center"} alignItems={"center"} mt={4}>
                <Text as="b" fontSize={"25px"}>
                  Rs. 2000
                </Text>
                <Text as="s" fontSize={"25px"} color="gray">
                  {" "}
                  Rs. 3999
                </Text>
                </Box>
                <Text color="gray">50% off</Text>
              </Box>
              <Box mt={10} display={"flex"} flexDirection={"column"}>
                <Button bg="blue">
                  <Text color="white">SAVE FOR LATER</Text>
                </Button>
                <Button mt={2} bg="blue">
                  <Text color="white">REMOVE</Text>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
       
      </Box>
      <Footer />
    </>
  );
};

export default ProductCard;
