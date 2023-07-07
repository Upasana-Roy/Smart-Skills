import { Box, Stack, VStack, Text, Image} from "@chakra-ui/react";
import React from "react";
import "./Login.css";
import src1 from "../assets/Img4.jpg"
import src2 from "../assets/src2.jpg"
import src3 from "../assets/src3.jpg"
import src4 from "../assets/src4.jpg"
import src6 from "../assets/src6.jpg"


const Categories = () => {
    return (
    <Box  w={"full"} p={"20"}>
      <Text alignItems={["center"]}  textAlign={"center"} fontSize={"5xl"} zIndices={"overlay"} fontWeight={"bold"} mb={"20vh"}>50+ Job Categories</Text>

        <Stack color={"blackAlpha.700"} direction={["column", "row"]} h={"full"} alignItems={"center"} m={"10"} >
          <VStack w={"100vw"} alignItems={["center"]}  textAlign={"center"}>
          <div class="card">
      <div class="card-header">
        <h3>Web Developer</h3>
      </div>
      <Image src={src1}/>
      <div class="card-body">
        <h2 class="price-text">10K+ Candidates</h2>
        <p>Experienced</p>
        <p class="para">With certified skillset</p>
        <button type="button" class="btn btn-lg btn-outline-primary col-12 ">Hire Now</button>
      </div>
    </div>
          </VStack>
          <VStack w={"100vw"} alignItems={["center"]} textAlign={"center"}>
          <div class="card">
      <div class="card-header">
        <h3>Cyber Security Analyst</h3>
      </div>
      <Image src={src2}/>
      <div class="card-body">
        <h2 class="price-text">2K+ Candidates</h2>
        <p>2+ years of experience</p>
        <p class="para">With hands on experience </p>
        <button type="button" class="btn btn-lg btn-outline-primary col-12 ">Hire Now</button>
      </div>
    </div>           
          </VStack>
          <VStack w={"100vw"} alignItems={["center"]} textAlign={"center"}>
          <div class="card">
      <div class="card-header">
        <h3>HR Manager</h3>
      </div>
      <Image src={src3}/>
      <div class="card-body">
        <h2 class="price-text">15K+ Candidates</h2>
        <p>Experienced</p>
        <p class="para">With good communication skills</p>
        <button type="button" class="btn btn-lg btn-outline-primary col-12 ">Hire Now</button>
      </div>
    </div>            
          </VStack>
          </Stack>
          <Stack color={"blackAlpha.700"} direction={["column", "row"]} h={"full"} alignItems={"center"} m={"10"}>
          <VStack w={"100vw"} alignItems={["center"]} textAlign={"center"}>
          <div class="card">
      <div class="card-header">
        <h3>Cloud Computist</h3>
      </div>
      <Image src={src4}/>
      <div class="card-body">
        <h2 class="price-text">10K+ Candidates</h2>
        <p>Experienced</p>
        <p class="para">With certified skillset</p>
        <button type="button" class="btn btn-lg btn-outline-primary col-12 ">Hire Now</button>
      </div>
    </div>            
          </VStack>
          <VStack w={"100vw"} alignItems={["center"]} textAlign={"center"}>
          <div class="card">
      <div class="card-header">
        <h3>Data Scientist</h3>
      </div>
      <Image src={src1}/>
      <div class="card-body">
        <h2 class="price-text">5K+ Candidates</h2>
        <p>Experienced</p>
        <p class="para">With certified skillset</p>
        <button type="button" class="btn btn-lg btn-outline-primary col-12 ">Hire Now</button>
      </div>
    </div>            
          </VStack>
          <VStack w={"100vw"} alignItems={["center"]} textAlign={"center"}>
          <div class="card">
      <div class="card-header">
        <h3>Accountant</h3>
      </div>
      <Image src={src6}/>
      <div class="card-body">
        <h2 class="price-text">10K+ Candidates</h2>
        <p>Experienced</p>
        <p class="para">Skilledt</p>
        <button type="button" class="btn btn-lg btn-outline-primary col-12 ">Hire Now</button>
      </div>
    </div>            
          </VStack>
        </Stack>
    </Box>);
}

export default Categories;

