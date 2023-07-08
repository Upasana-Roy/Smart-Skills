import React, { useState } from 'react';
import { Box,Image,Text} from "@chakra-ui/react";
import Button from "react-bootstrap/Button";
import bgSrc from "../assets/home-background.png";


import "./Login.css";

import Scroll from './Scroll';
import SearchList from './SearchList';
// import SearchList2 from './SearchList2';



function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .prof
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .address
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

//   const filteredCity = details.filter(
//     person => {
//       return (
//         person
//         .address
//         .toLowerCase()
//         .includes(searchField.toLowerCase()) ||
//         person
//         .email
//         .toLowerCase()
//         .includes(searchField.toLowerCase())
//       );
//     }
//   );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
  }

//   function searchList2() {
//     return (
//       <Scroll>
//         <SearchList2 filteredCity={filteredCity} />
//       </Scroll>
//     );
//   }

  return (
    <Box >
    <Image className="img" w={"full"} h={"150vh"} zIndex={"hide"} src={bgSrc} />
    <Box className="search"> 
    <div>
        <Text alignItems={["center"]}  textAlign={"center"} fontSize={"5xl"} zIndices={"overlay"} fontWeight={"bold"} mb={"5vh"}>Search your Candidate</Text>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma1"
          type = "search" 
          placeholder = "Search Profession" 
          onChange = {handleChange}
        />
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma1"
          type = "search" 
          placeholder = "Filter City" 
          onChange = {handleChange}
        />
      <Button class="homeBtn btn btn-primary btn-lg">Search</Button>

      </div>

       
      {searchList()}
      

      </Box>
      {/* <Search2/> */}
      </Box>
    
  );
}

export default Search;