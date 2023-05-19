import React from "react";
import Header from "../components/Header";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  GridItem,
  Icon,
  Image,
  Radio,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { MdGraphicEq } from "react-icons/md";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <>
      <Box>
        <Header />
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
              <Box>
                <Text as="u" fontSize={20}>
                  Clear
                </Text>
              </Box>
            </Box>

            <Box textAlign={"left"} w={"90%"} mx={"auto"} mt={8}>
              <Text as="b" fontSize={20}>
                Price
              </Text>
              <RangeSlider
                aria-label={["min", "max"]}
                defaultValue={[0, 1000]}
                mt={3}
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
              </RangeSlider>
            </Box>

            <Box textAlign={"left"} w={"90%"} mx={"auto"} mt={6}>
              <Box>
                <Text as="b" fontSize={20}>
                  Category
                </Text>
              </Box>
              <Box mt={2}>
                <Checkbox defaultChecked colorScheme="gray">
                  Men Clothing
                </Checkbox>{" "}
              </Box>
              <Box mt={1}>
                <Checkbox colorScheme="gray">Women Clothing</Checkbox>
              </Box>
              <Box mt={1}>
                {" "}
                <Checkbox colorScheme="gray">Kids Clothing</Checkbox>
              </Box>
            </Box>

            <Box textAlign={"left"} w={"90%"} mx={"auto"} mt={6}>
              <Box>
                <Text as="b" fontSize={20}>
                  Rating
                </Text>
              </Box>
              <Box mt={2}>
                <Radio size="md" name="1" colorScheme="gray" defaultChecked>
                  4 Stars & above
                </Radio>
              </Box>
              <Box mt={1}>
                <Radio size="md" name="1" colorScheme="gray">
                  3 Stars & above
                </Radio>
              </Box>
              <Box mt={1}>
                <Radio size="md" name="1" colorScheme="gray">
                  2 Stars & above
                </Radio>
              </Box>
              <Box mt={1}>
                <Radio size="md" name="1" colorScheme="gray">
                  1 Stars & above
                </Radio>
              </Box>
            </Box>

            <Box textAlign={"left"} w={"90%"} mx={"auto"} mt={6}>
              <Box>
                <Text as="b" fontSize={20}>
                  Sort by
                </Text>
              </Box>
              <Box mt={2}>
                <Radio size="md" name="1" colorScheme="gray" defaultChecked>
                  Price - Low to High
                </Radio>
              </Box>
              <Box mt={1}>
                <Radio size="md" name="1" colorScheme="gray">
                  Price - High to Low
                </Radio>
              </Box>
            </Box>
          </Box>
          <Box w="75%" bg="gray.100">
            <Box w={"95%"} textAlign={"left"} mx={"auto"} mt={1}>
              <Text as="b" fontSize={20}>
                Showing All Products
              </Text>
            </Box>

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
                        <Text color="white">Go To Cart</Text>
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
                        <Text color="white">Go To Cart</Text>
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
                        <Text color="white">Go To Cart</Text>
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
                        <Text color="white">Go To Cart</Text>
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
                        <Text color="white">Go To Cart</Text>
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
                        <Text color="white">Go To Cart</Text>
                      </Button>
                    </Box>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Footer/>
      </Box>
    </>
  );
};

export default Products;
