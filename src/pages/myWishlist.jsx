import { Box, Button, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyWishlist = () => {
  return (
    <>
    <Box>
    <Header />
    <Box>
  <Text as="b" fontSize={"25px"}>My WishList</Text>
  <Box w={"95%"} mx={"auto"} mt={5} mb={5}>
              <Grid templateColumns="repeat(3, 2fr)" gap={6}>
                <GridItem w="100%" h="50vh" bg="gray.300">
                  <Box>
                    <Image
                      boxsize="200px"
                      h="35vh"
                      src="https://images.pexels.com/photos/5319520/pexels-photo-5319520.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Box display="flex" flexDirection={"column"}>
                      <Text>Men Premium Jacket</Text>
                      <Text color="black" as="b">
                        Rs. 2000
                      </Text>
                      <Button borderRadius={"none"} bg="blue" mt={2}>
                        <Text color="white">Move To Cart</Text>
                      </Button>
                    </Box>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="50vh" bg="gray.300">
                  <Box>
                    <Image
                      boxsize="200px"
                      h="35vh"
                      src="https://images.pexels.com/photos/5319520/pexels-photo-5319520.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Box display="flex" flexDirection={"column"}>
                      <Text>Men Premium Jacket</Text>
                      <Text color="black" as="b">
                        Rs. 2000
                      </Text>
                      <Button borderRadius={"none"} bg="blue" mt={2}>
                        <Text color="white">Move To Cart</Text>
                      </Button>
                    </Box>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="50vh" bg="gray.300">
                  <Box>
                    <Image
                      boxsize="200px"
                      h="35vh"
                      src="https://images.pexels.com/photos/5319520/pexels-photo-5319520.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Box display="flex" flexDirection={"column"}>
                      <Text>Men Premium Jacket</Text>
                      <Text color="black" as="b">
                        Rs. 2000
                      </Text>
                      <Button borderRadius={"none"} bg="blue" mt={2}>
                        <Text color="white">Move To Cart</Text>
                      </Button>
                    </Box>
                  </Box>
                </GridItem>
              
              </Grid>
            </Box>
<Box>

</Box>
    </Box>
    <Footer />
    </Box>
    </>
  )
}

export default MyWishlist;