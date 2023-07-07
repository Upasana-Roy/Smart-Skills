import { Text, Box, Stack, VStack, Heading} from "@chakra-ui/react";
import React from "react";
import Button from "react-bootstrap/Button";

import "./Login.css";

const GetStart = () => {
    return (
        <Box textAlign={"center"} bgColor={"whiteAlpha.700"}>
    <Box  w={"full"} p={"20"}>
      <Text alignItems={["center"]}  textAlign={"center"} fontSize={"5xl"} zIndices={"overlay"} fontWeight={"bold"} mb={"20vh"}>Getting Started</Text>
        <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
          <VStack w={"100vw"} alignItems={["center"]}  textAlign={"center"}>
            <>
              <i class="fa-solid fa-1 fa-3x"></i>
              <Heading class="feature-title fw-bold h3" >Post a Job</Heading>
              <p>Tell us your requirements in a candidate in just 5-minutes.</p>
            </>
          </VStack>
          <VStack w={"100vw"} alignItems={["center"]} textAlign={"center"}>
            <>
            <i class="fa-solid fa-2 fa-3x"></i>
              <h3 class="feature-title fw-bold h3" >Get Verified</h3>
              <p>Our team will call to verify your employer account within few hours</p>
            </>            
          </VStack>
          <VStack w={"100vw"} alignItems={["center"]} textAlign={"center"}>
            <>
            <i class="fa-solid fa-3 fa-3x"></i>
              <h3 class="feature-title fw-bold h3" fontWeight={"bold"}>Get calls. Hire.</h3>
              <p>You will get calls from relevant candidates or call them directly from our candidate database.</p>
            </>            
          </VStack>
        </Stack>
        
    </Box>
    <Button class="btn btn-primary rounded-full text-white font-bold py-2 px-4 rounded align-item-centre "
                    type="submit" block size="lg" >

          Post a Job

        </Button>
        </Box>);
}

export default GetStart;