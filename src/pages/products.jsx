import React, { useEffect, useState } from "react";
import Header from "../components/Header";
// import RangeSlider from "../components/RangeSlider";
import { useSlider } from "../hooks/useSlider";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  GridItem,
  Icon,
  Image,
  Radio,
  RadioGroup,
  // RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { MdGraphicEq } from "react-icons/md";
import Footer from "../components/Footer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  products,
  womenProducts,
  kidProducts,
  allData,
} from "../backend/db/products";
import Spiner from "../components/Spinner";
import { toast } from "react-hot-toast";

const Products = ({search,setSearch,setCartCount,cartItem ,setCartItem,wishList}) => {
  const [isLoading,setIsLoading] = useState(false)
  const [value, setValue] = useState(0);

  const [slideValue, Slider, slide, val] = useSlider(
    0,
    3000,
    3000,
    "Threshold",
    "threshold",
    setValue
  );
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [priceValue, setPriceValue] = useState("lowToHigh");
  const [productDetailsData,setProductDetailsData] = useState({})

  const navigate = useNavigate()

  console.log(productDetailsData, "getting value");
  const handleRatingChange = (val) => {
    setIsLoading(true)
    const newData = sortedData.filter((item) => item.rating == val);
    setSortedData(newData);
    setIsLoading(false)

  };
  // console.log(sortedData,"arjun Data ======== >")

  const clearAllData = () =>{
    setPriceValue("lowToHigh");
    setSortedData(data)

  }

  useEffect(() => {
    setIsLoading(true)
    const priceSort = data.filter((item) => item.price <= value);
    setSortedData(priceSort);
    setIsLoading(false)
  }, [value]);

  const { id } = useParams();

  useEffect(() => {
    if (id === "Men_Collection") {
      setData(products);
    } else if (id === "Women_Collection") {
      setData(womenProducts);
    } else {
      setData(kidProducts);
    }
  }, [id]);

  useEffect(() => {
    if (sortedData?.length === 0) {
      setSortedData(data);
    }
  }, [sortedData]);
  // console.log(sortedData, "===>sortedData");

  const handleSortPrice = (e) => {
    const option = e.target.value;
    setPriceValue(option);
    const d = [...data].sort((a, b) => {
      if (option === "lowToHigh") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedData(d);
  };
  const handleCategoryData = (cat) => {
    const filterData = allData.filter((item) => item.cat === cat);
    //  console.log(first)
    setSortedData(filterData);
    // console.log("hello world", filterData);
  };

  const productCardDetails =(data) =>{
    let singleArr = sortedData.filter ((_,i)=> i === data)
    // setProductDetailsData(sortedData.filter ((_,i)=> i === data));
    // console.log(obj)
    navigate("/productCard",{state:{productDetails:singleArr}})
  }

  const handleCart = (data) => {
   const addItemToCart = sortedData.filter((_,i) => i === data)
   setCartCount((pre)=>pre+1)
   setCartItem([...cartItem,addItemToCart[0]])
   navigate("/cart",{state:{productDetails: addItemToCart}})
   toast.success("Item added to the cart")
  }
  return (
    <>
    {isLoading ? <Spiner /> :  <Box>
        <Header search = {search} setSearch={setSearch} cartItem={cartItem} wishList={wishList}/>
        <Box display="flex">
          <Box w="22%" pt={2}>
            <Box
              display="flex"
              justifyContent={"space-between"}
              width={"90%"}
              mx="auto"
            >
              <Box>
                <Text as="b" fontSize={20}>
                  Filters
                </Text>
              </Box>
              <Box cursor={"pointer"} onClick={()=>clearAllData()}>
                <Text as="u" fontSize={20} >
                  Clear
                </Text>
              </Box>
            </Box>

            <Box textAlign={"left"} w={"90%"} mx={"auto"} mt={8}>
              <Text as="b" fontSize={20}>
                Price
              </Text>
              {/* <RangeSlider
                min={500} max={3000}
                // aria-aria-label={[500,1000,1500,2000,2500,3000]}
                defaultValue={[50, 3000]}
                mt={3}
                step={500}
                onChange={()=>console.log("first",value)}
              >
                <RangeSliderTrack bg="gray.300">
                  <RangeSliderFilledTrack bg="black" />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={6} index={0}>
                  <Icon color="black" as={MdGraphicEq} />
                </RangeSliderThumb>
                <RangeSliderThumb boxSize={6} index={1}>
                  <Icon color="black" as={MdGraphicEq} />
                </RangeSliderThumb>
              </RangeSlider> */}
              <Slider />
            </Box>

            <Box textAlign={"left"} w={"90%"} mx={"auto"} mt={6}>
              <Box>
                <Text as="b" fontSize={20}>
                  Category
                </Text>
              </Box>
              <Box mt={2}>
                <Checkbox
                  colorScheme="gray"
                  isChecked={sortedData[0]?.cat == "man" ? true : false}
                  onChange={() => handleCategoryData("man")}
                >
                  Men Clothing
                </Checkbox>{" "}
              </Box>
              <Box mt={1}>
                <Checkbox
                  colorScheme="gray"
                  isChecked={sortedData[0]?.cat === "women" ? true : false}
                  onChange={() => handleCategoryData("women")}
                >
                  Women Clothing
                </Checkbox>
              </Box>
              <Box mt={1}>
                {" "}
                <Checkbox
                  colorScheme="gray"
                  isChecked={sortedData[0]?.cat === "kid" ? true : false}
                  onChange={() => handleCategoryData("kid")}
                >
                  Kids Clothing
                </Checkbox>
              </Box>
            </Box>

            <Box textAlign={"left"} w={"90%"} mx={"auto"} mt={6}>
              <Box>
                <Text as="b" fontSize={20}>
                  Rating
                </Text>
              </Box>
              {/* <Box mt={2}>
                <Radio
                  size="md"
                  // value={ratingFilter}
                  // checked={rating == 4
                  // value = "option1"
                  colorScheme="gray"
                  onClick={() => handleRatingChange(4)}
                >
                  4 Stars & above
                </Radio>
              </Box> */}
              <RadioGroup onChange={handleRatingChange} colorScheme="green">
                <Radio value={4}> 4 Stars & above</Radio>
                <Radio value={3}> 3 Stars & above</Radio>
                <Radio value={2}> 2 Stars & above</Radio>
                <Radio value={1}> 1 Stars & above</Radio>
              </RadioGroup>
            </Box>

            <Box textAlign={"left"} w={"90%"} mx={"auto"} mt={6}>
              <Box>
                <Text as="b" fontSize={20}>
                  Sort by
                </Text>
              </Box>

              <RadioGroup>
                <Box mt={2}>
                  <Radio
                    size="md"
                    name="1"
                    colorScheme="gray"
                    value="lowToHigh"
                    onChange={handleSortPrice}
                    checked={priceValue === "lowToHigh"}
                  >
                    Price - Low to High
                  </Radio>
                </Box>
                <Box mt={1}>
                  <Radio
                    size="md"
                    name="1"
                    colorScheme="gray"
                    value="highToLow"
                    onChange={handleSortPrice}
                    checked={priceValue === "highToLow"}
                  >
                    Price - High to Low
                  </Radio>
                </Box>
              </RadioGroup>
            </Box>
          </Box>
          <Box w="75%" bg="gray.100">
            <Box w={"95%"} textAlign={"left"} mx={"auto"} mt={1}>
              <Text as="b" fontSize={20}>
                Showing All Products
              </Text>
            </Box>

            <Box w={"95%"} mx={"auto"} mt={5} mb={5}>
              {sortedData?.map((item,i) => (
                <Grid
                  templateColumns="repeat(1, 1fr)"
                  gap={10}
                  width={"80%"}
                  mx="auto"
                  key={item._id}
                >
                  <GridItem w="100%" h="50vh" bg="gray.300" mt={2} >
                    <Box>
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mt={1}
                        onClick={()=>productCardDetails(i)}
                        cursor={"pointer"}
                      >
                        <Image boxsize="250px" h="35vh" src={item.image} />
                      </Box>

                      <Box display="flex" flexDirection={"column"}>
                        <Text>{item.title}</Text>
                        <Text color="black" as="b">
                          Rs.{item.price} & Rating: {item.rating}
                        </Text>
                        <Button
                          borderRadius={"none"}
                          bg="blue"
                          w={"28%"}
                          mx="auto"
                          onClick={() => handleCart(i)}
                        >
                          <Text color="white">Add To Cart</Text>
                        </Button>
                      </Box>
                    </Box>
                  </GridItem>
                </Grid>
              ))}
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>}
     
    </>
  );
};

export default Products;
