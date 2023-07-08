import React, { useState } from "react";
import { Box, Image, Text} from "@chakra-ui/react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

// import tailwindConfig from "./../tailwind.config";
import bgSrc from "../assets/home-background.png";

import "./Login.css";

export default function Register() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();

  }

  return (

    <Box bgColor={"WhiteAlpha.700"} w={"full"} h={"120vh"}>
        <Image className="img" w={"full"} h={"full"} zIndex={"hide"} src={bgSrc} /> 
        {/* <div class="backgnd"> */}
        <Box className="Login" bgColor={"WhiteAlpha.700"} mt={"-100vh"} zIndex={"overlay"}> 
        <Text fontSize={"3xl"} zIndices={"overlay"} fontWeight={"bold"} color={"blackAlpha.700"} mb={"5vh"}>Register</Text> 

      <Form onSubmit={handleSubmit} class="form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >

        <Form.Group  controlId="email" class="mb-4">

          <Form.Label class="label block text-gray-700 text-sm font-bold mb-2" for="username" >Email</Form.Label>

          <Form.Control class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Enter your email" 
            autoFocus

            value={email}

            onChange={(e) => setEmail(e.target.value)}

          />

        </Form.Group>

        <Form.Group size="md" controlId="password" class="mb-6">

          <Form.Label class=" block text-gray-700 text-sm font-bold mb-2 label" for="password">Password</Form.Label>

          <Form.Control class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="password" placeholder="******************"

            

            value={password}

            onChange={(e) => setPassword(e.target.value)}

          />

        </Form.Group>

        <div class="flex items-center justify-between">
        <Button class="btn btn-primary rounded-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit" block size="lg" disabled={!validateForm()}>

            Register

        </Button>
        <a class="inline-block align-baseline font-bold text-sm" href="/login">
                    Already have account?
                </a>
        </div>
      </Form>

      <p class="text-center w3-text-grey text-xs">
            &copy;2023 Smart Skills. All rights reserved.
        </p>

        </Box>
    </Box>

  );

}

/* <section class="login flex justify-center pt-24">
    <div class="w-full max-w-xs">
        <form action="/register" method="POST" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Name
                </label>
                <input name="name"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" placeholder="Enter your name">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Email
                </label>
                <input name="email" 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="email" placeholder="Enter your email">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input name="password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="password" placeholder="******************">
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="btn-primary rounded-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Register
                </button>
                <a class="inline-block align-baseline font-bold text-sm" href="/login">
                    Already have account?
                </a>
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy;2023 Pizza Paradise. All rights reserved.
        </p>
    </div>
</section>  */