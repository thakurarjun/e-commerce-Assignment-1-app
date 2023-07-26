import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Spiner from "../components/Spinner";
import { toast } from "react-hot-toast";

const Home = ({cartItem,wishList}) => {
  const [search,setSearch] = useState("faizane")

  const [categoryData, setCategoryData] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchCategoryData = async () => {
      setIsLoading(true)
      const res = await fetch("/api/categories");
      const newData = await res.json();
      console.log(newData, "===>data");
      setCategoryData(newData);
      setIsLoading(false)
    };
    fetchCategoryData();
   
  }, []);

  const handleCategoryData = (cat) => {
    navigate(`/products/${cat}`)
  }
  const handleShowBtn = () => {
    navigate("/login")
    toast.success("Please login with your account")
  }
  return (
    <>
    {isLoading ? <Spiner /> :  <Box h="auto">
        <Header  abc={search} ABC={setSearch} cartItem={cartItem} wishList={wishList}/>
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
                onClick={() =>handleShowBtn()}
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
            {categoryData?.categories?.map((value) => (
              <Stack
                key={value._id}
                // gap={8}
                w="95%"
                mx="auto"
              >
                <Box onClick={()=>handleCategoryData(value.categoryName)}>
                  <Box
                    border="1px solid white"
                    padding={5}
                    shadow="xl"
                    bg="gray.200"
                    borderRadius="15px"
                    cursor={"pointer"}
                  >
                    <Box
                      justifyContent={"center"}
                      alignItems={"center"}
                      w="25%"
                      mx="auto"
                    >
                      <Image
                        boxSize="300px"
                        objectFit="cover"
                        src={value?.image}
                        alt="Dan Abramov"
                      />
                    </Box>

                    <Box mt={3} alignContent={"center"}>
                      <Text as="b" fontSize={"25px"}>
                        {value?.categoryName}
                      </Text>
                      <Text>{value?.description}</Text>
                      <Text as="i" color="blue" fontSize={"30px"}>
                        30-60% OFF
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Stack>
            ))}
          </Box>
        </Box>
        <Box mt={10} justifyContent={"center"} alignItems={"center"}>
          <Footer />
        </Box>
      </Box>}
     
    </>
  );
};

export default Home;
