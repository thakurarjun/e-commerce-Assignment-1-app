import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const MyWishlist = ({ cartCount, wishList, cartItem }) => {
  const { state } = useLocation();
  // console.log(state, "myWishlist====>");

  const handleCartButton = () => {};
  return (
    <>
      <Box>
        <Header wishList={wishList} cartCount={cartCount} cartItem={cartItem} />
        <Box mt={25}>
          <Text as="b" fontSize={"25px"}>
            My WishList
          </Text>
          <Box w={"95%"} mx={"auto"} mt={5} mb={5}>
            <Grid templateColumns="repeat(3, 2fr)" gap={6}>
              {wishList && wishList.map((item)=>(
                <GridItem w="100%" h="50vh" bg="gray.300">
                <Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Image
                      boxsize="200px"
                      h="35vh"
                      src={item.image}
                    />
                  </Box>

                  <Box display="flex" flexDirection={"column"}>
                    <Text>{item.title}</Text>
                    <Text color="black" as="b">
                      Rs. {item.price}
                    </Text>
                    <Button borderRadius={"none"} bg="blue" mt={2}>
                      <Text color="white" onClick={() => handleCartButton()}>
                        Move To Cart
                      </Text>
                    </Button>
                  </Box>
                </Box>
              </GridItem>
              ))}
              
            </Grid>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </>
  );
};

export default MyWishlist;
