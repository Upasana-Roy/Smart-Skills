import { Box, HStack, Image, Text} from "@chakra-ui/react";
import React from "react";
// import { extendTheme } from '@chakra-ui/react'
import bgSrc from "../assets/home-background.png";
import img1Src from "../assets/Img1.webp";
import img3Src from "../assets/Img3.jpg";
import img6Src from "../assets/Img6.png";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import { Button } from "react-bootstrap";
// import Categories from "./Categories";
import "./Login.css"



// const zIndices = {
//   zIndices: {
//     hide: -1,
//     auto: 'auto',
//     base: 0,
//     docked: 10,
//     dropdown: 1000,
//     sticky: 1100,
//     banner: 1200,
//     overlay: 1300,
//     modal: 1400,
//     popover: 1500,
//     skipLink: 1600,
//     toast: 1700,
//     tooltip: 1800,
//   },
// }
// const theme = extendTheme({ zIndices})
const Home = () => {
  return (
    <Box bgColor={"WhiteAlpha.700"} w={"full"} h={"120vh"}>
        <Image w={"full"} h={"full"}  src={bgSrc} />
        {/* objectPosition={"absolute"} top={"50vh"} */}
        {/* <div style="width:50%; display:inline-block;">A</div><div style="width:50%; display:inline-block;">B</div> */}
        <HStack>
        <Box w={"half"}>
        <Text fontSize={"5xl"} zIndices={"overlay"} fontWeight={"bold"} color={"blackAlpha.700"} mx={"15vh"} mt={"-100vh"}>Smart Skills</Text>
        <Text fontSize={"3xl"} zIndices={"overlay"} fontWeight={"bold"} color={"blackAlpha.700"} mx={"15vh"} >India's Best Digital Hiring Portal</Text>
        <Text fontSize={"md"} zIndices={"overlay"} fontWeight={"bold"}  mx={"15vh"} mt={"25vh"} >Looking for a smooth, cost-efficient hiring experience?</Text>

        <Button class="homeBtn btn btn-primary btn-lg" size={"lg"} variant={"primary"} color={"white"} m={"20vh"} ><Link to="/login">Sign In</Link></Button>
        </Box>
        <Box w={"half"}>
        <Image w={"50vh"} h={"35vh"} zIndices={"overlay"} mr={"20vh"} ml={"60vh"} mt={"-100vh"} src={img1Src} />

      
        
        <Image w={"50vh"} h={"35vh"} zIndices={"overlay"} mr={"60vh"} ml={"20vh"}  mt={"-10vh"} src={img3Src} />
        
        <Image w={"50vh"} h={"35vh"} zIndices={"overlay"} mr={"20vh"} ml={"60vh"} mt={"-5vh"} src={img6Src} />
        </Box>
        
        </HStack>
    </Box>
    
  )
}

export default Home;
