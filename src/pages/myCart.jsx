import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyCart = () => {
  return (
   <>
   <Box>
    <Header />
    <Box>
    <Box>
       
          <Box
            justifyContent={"left"}
            alignItems={"center"}
            mt={15}
            display={"flex"}
            h={"70vh"}
            w="70%"
            mx="auto"
            bg="gray.100"
            shadow="lg"
            borderRadius="10px"
            gap={5}
          >
            <Box w="30%" mt={8}>
              <Image
              ml={7}
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
              w="30%"
              height={"43vh"}
              ml={8}
            >
              <Text fontSize={"18px"}>Men Premium Jacket</Text>
              <Box display="flex" gap={2} flexDirection={"column"}>
                <Box display="flex" gap={2} justifyContent={"center"} alignItems={"center"} mt={8}>
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

            <Box
              p={3}
              bg="white"
              shadow={"lg"}
              borderRadius={"8px"}
              w="30%"
              height={"43vh"}
            >
                <Box>
                    <Box>
                    <Text fontSize={"18px"} as="b">Price Details</Text>
                    </Box>
                    <Box mt={5} display={"flex"} justifyContent={"space-between"}>
                      <Box>Price(1 item)</Box>
                      <Box>Rs. 2000</Box>
                    </Box>
                    <Box mt={2} display={"flex"} justifyContent={"space-between"}>
                      <Box>Discount</Box>
                      <Box>Rs. -1000</Box>
                    </Box>
                    <Box mt={2} display={"flex"} justifyContent={"space-between"}>
                      <Box>Delivery Charges</Box>
                      <Box>Rs. 499</Box>
                    </Box>
                    <Box mt={5} display={"flex"} justifyContent={"space-between"}>
                      <Box><Text as="b">Total Amount</Text></Box>
                      <Box>Rs. 2499</Box>
                    </Box>
                    <Box>
                        You will save Rs.1000 on this order
                    </Box>
                    <Box w="full" mt={3}>
                    <Button bg="blue"><Text color="white">PLACE ORDER</Text></Button>
                    </Box>
                    
                </Box>
              
              
              
                {/* <Button mt={2} bg="blue">
                  <Text color="white">PLACE ORDER</Text>
                </Button> */}
              </Box>
          </Box>
        </Box>

    </Box>
    <Footer />
   </Box>
   </>
  )
}

export default MyCart