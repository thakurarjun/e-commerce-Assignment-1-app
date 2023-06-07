import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ProductCard = ({setCartCount,setWishlist,wishList,setCartItem,cartItem}) => {
  const [count,setCount] = useState(1)
  const {state} = useLocation();
console.log(state,"==>myState")
  const [pro,setPro] = useState([])
  const navigate = useNavigate();
  
  const increament = (val) =>{
    if(pro[0].stock > val){
      setCount((pre)=>pre +1 )
    }
  }
  const decreament = (val) =>{
    if(pro[0].stock > 1 && val > 1 ){
      setCount((pre)=>pre - 1 )
    }
  }

useEffect(()=>{
if(state){
  setPro(state.productDetails)
}
},[state])

const handleCart = () =>{
  setCartCount(pre=>pre+1);
  setCartItem([...cartItem,pro[0]])
  navigate("/cart")
  toast.success("Item added to the cart")
}

const handleWishlist = () => {
  setWishlist([...wishList,pro[0]])
  // navigate("/wishlist")
  toast.success("Item added to wishlist")
}


  return (
    <>
      <Box>
        <Header cartItem={cartItem} />
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
                src={pro[0]?.image}
              />
            
              <Box
                display="flex"
                justifyContent={"center"}
                alignItems={"center"}
                mt={2}
              >
                <Text>
                  Quantity: <Button onClick={()=>decreament(count)}>-</Button> 
                  {count}<Button onClick={()=>increament(count)}>+</Button>
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
              <Text fontSize={"18px"}>{pro[0]?.title}</Text>
              <Box display="flex" gap={2} flexDirection={"column"}>
                <Box display="flex" gap={2} justifyContent={"center"} alignItems={"center"} mt={4}>
                <Text as="b" fontSize={"25px"}>
                  Rs. {pro[0]?.price}
                </Text>
                <Text as="s" fontSize={"25px"} color="gray">
                  {" "}
                  Rs. 3999
                </Text>
                </Box>
                <Text color="gray">50% off</Text>
              </Box>
              <Box mt={10} display={"flex"} flexDirection={"column"}>
                <Button bg="blue"onClick={() => handleCart()}>
                  <Text color="white" >ADD TO CART</Text>
                </Button>
                <Button mt={2} bg="blue" onClick={() => handleWishlist()}>
                  <Text color="white">ADD TO WISHLIST</Text>
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
