import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

const Spiner = () => {
  return (
    <Box display="grid" placeItems={"center"} h={"100vh"}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="gray"
        size="xl"
      />
    </Box>
  );
};

export default Spiner;
