import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const MyCart = ({ cartCount, setWishlist, wishlist,cartItem,setCartItem }) => {
  const addToWishList = () => {
    setWishlist((pre) => pre + 1);
  };
  const { state } = useLocation();
  // console.log(state.productDetails, "state====>");
  // useEffect(() => {
  //   if (state) {
  //     setCartItem([...cartItem, state?.productDetails[0]]);
  //   }
  // }, [state]);
  console.log(cartItem,"getting cartItem")
  const removeItem = (index) =>{
    const updateItem = cartItem.filter((_,i)=> i !== index )
    setCartItem(updateItem)
    console.log(updateItem,"update")
  }

  return (
    <>
      <Box>
        <Header cartCount={cartCount} cartItem={cartItem} wishlist={wishlist} />
        <Box>
          {cartItem  ? 
          <Box >
            {cartItem && cartItem?.map((item,i)=>(
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
                  src={item?.image}
                />
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
                <Text fontSize={"18px"}>{item?.title}</Text>
                <Box display="flex" gap={2} flexDirection={"column"}>
                  <Box
                    display="flex"
                    gap={2}
                    justifyContent={"center"}
                    alignItems={"center"}
                    mt={5}
                  >
                    <Text as="b" fontSize={"25px"}>
                      {item?.price}
                    </Text>
                    <Text as="s" fontSize={"25px"} color="gray">
                      {" "}
                      Rs. 3999
                    </Text>
                  </Box>
                  <Text color="gray">50% off</Text>
                  <Text color="gray">
                    Rating : {item?.stock}
                  </Text>
                </Box>
                <Box mt={5} display={"flex"} flexDirection={"column"}>
                  <Button bg="blue">
                    <Text color="white" onClick={() => addToWishList()}>
                      SAVE TO WISHLIST
                    </Text>
                  </Button>
                  <Button mt={2} bg="blue">
                    <Text color="white" onClick={()=>removeItem(i)}>REMOVE</Text>
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
                    <Text fontSize={"18px"} as="b">
                      Price Details
                    </Text>
                  </Box>
                  <Box mt={5} display={"flex"} justifyContent={"space-between"}>
                    <Box>Price(1 item)</Box>
                    <Box>{item?.price}</Box>
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
                    <Box>
                      <Text as="b">Total Amount</Text>
                    </Box>
                    <Box>Rs. 2499</Box>
                  </Box>
                  <Box>You will save Rs.1000 on this order</Box>
                  <Box w="full" mt={3}>
                    <Button bg="blue">
                      <Text color="white">PLACE ORDER</Text>
                    </Button>
                  </Box>
                </Box>

                {/* <Button mt={2} bg="blue">
                  <Text color="white">PLACE ORDER</Text>
                </Button> */}
              </Box>
            </Box>
            ))}
            
          </Box>
          : <Box> there is no Item </Box>}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default MyCart;
