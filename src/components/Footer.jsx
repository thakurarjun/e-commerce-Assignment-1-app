import { Box, Icon, Text } from '@chakra-ui/react';
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
  return (
   <>
   <Box border="1px solid white" padding={"15px"} shadow={"xl"} bg="gray.200" borderRadius="15px">

    <Box display="flex" justifyContent={"center"} alignItems={"center"} gap={15} mt={4}>
<Box>
    <Icon as={BsLinkedin} w={6} h={6} color="blue" />
</Box>
<Box>
    <Icon as={FaTwitterSquare} w={6} h={6} color="blue" />
</Box>
<Box>
    <Icon as={BsGithub} w={6} h={6} color="blue" />
</Box>
    </Box>
    <Box display="flex" justifyContent={"center"} alignItems={"center"} gap={1} mt={1} >
        <Icon as={BiCopyright} w={4} h={4} color="blue" mt={1} />
    <Text color="blue">
        No Copyright, Feel free to replicate
    </Text>
</Box>

   </Box>
   </>
  )
}

export default Footer;