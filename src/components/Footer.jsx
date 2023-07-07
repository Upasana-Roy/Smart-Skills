import React from 'react';
import { Box, VStack,Text, Stack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.700"}
    color={"whiteAlpha.900"}
    minH={"48"}
    px={"16"}
    py={["16", "8"]}>
    <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"100vw"} alignItems={["center"]}>
          <Text fontWeight={"bold"} fontSize={"3xl"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center"]}>
            Get a smooth, cost-efficient Hiring experience. Trusted by 40,000+ Companies.
          </Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center"]}>
            <p class="footer-p">©Smart Skills : All rights reserved 2023</p>
          </Text>
          <Text
            fontSize={"lg"}
            pt={"10vh"}
            letterSpacing={"widest"}
            textAlign={["center"]}>Contact Us
          </Text>
          <Box direction={["column", "row"]} h={"full"} alignItems={"center"} >
      <i class="p-2 fa-brands fa-twitter footer-icon"></i> <i class="p-2 fa-brands fa-facebook-f footer-icon"></i> <i class="p-2 fa-brands fa-instagram footer-icon"></i> <i class="p-2 fa-solid fa-envelope footer-icon"></i>
      </Box>
        </VStack>

      </Stack>
      
    </Box>
  )
}

export default Footer;
