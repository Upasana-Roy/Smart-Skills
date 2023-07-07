import { Text, Box, Stack, VStack, Heading} from "@chakra-ui/react";
import React from "react";

const Featured = () => {
    return (
    <Box bgColor={"blackAlpha.500"} w={"full"} p={"20"}>
      <Text alignItems={["center"]}  textAlign={"center"} fontSize={"5xl"} zIndices={"overlay"} fontWeight={"bold"} mb={"20vh"}>What makes Smart Skills better?</Text>
        <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
          <VStack w={"100vw"} alignItems={["center"]}  textAlign={"center"}>
            <>
              <i class="fa-solid fa-circle-check fa-4x f-icon"></i> 
              <Heading class="feature-title fw-bold" fontWeight={"bold"}>Easy Hiring</Heading>
              <p>Receive calls from qualified candidates in under an hour of posting a job</p>
            </>
          </VStack>
          <VStack w={"100vw"} alignItems={["center"]} textAlign={"center"}>
            <>
              <i class="fa-solid fa-bullseye fa-4x f-icon"></i>
              <h3 class="feature-title fw-bold" >Intelligent Recommendations</h3>
              <p>Only the best candidates are recommended by our ML as per your requirement</p>
            </>            
          </VStack>
          <VStack w={"100vw"} alignItems={["center"]} textAlign={"center"}>
            <>
              <i class="fa-solid fa-heart fa-4x f-icon"></i>
              <h3 class="feature-title fw-bold" fontWeight={"bold"}>Customer support</h3>
              <p>Prioritized customer support for the subscribers open 24/7</p>
            </>            
          </VStack>
        </Stack>
    </Box>);
}

export default Featured;
