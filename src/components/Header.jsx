import { HStack, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
  <HStack p={"4"} shadow={"base"} bgColor={'blackAlpha.700'}>
    <nav class="navbar navbar-expand-sm navbar-dark">
        <button class="navbar-toggler" type="button" style={{ marginRight: 10 }} data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <p class="navbar-brand">Smart Skills</p>
        
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <Button variant={"unstyled"} color={"white"} style={{ marginLeft: '1rem' }}>
                <Link to="/">Home</Link>
            </Button>
            </li>
            <li class="nav-item">
            <Button variant={"unstyled"} color={"white"} style={{ marginLeft: '1rem' }}>
                <Link to="/getStart">Getting started</Link>
            </Button>
            </li>
            
            
            <li class="nav-item">
            <Button variant={"unstyled"} color={"white"} style={{ marginLeft: '1rem' }}>
                <Link to="/featured">Featured</Link>
            </Button>
            </li>
            <li class="nav-item">
            <Button variant={"unstyled"} color={"white"} style={{ marginLeft: '1rem' }}>
                <Link to="/categories">Categories</Link>
            </Button>
            </li>
            {/* <li class="nav-item">
            <Button variant={"unstyled"} color={"white"} style={{ marginLeft: '1rem' }}>
                <Link to="/trending">Trending</Link>
            </Button>
            </li> */}
            <li>
            <Button variant={"unstyled"} color={"white"} style={{ marginLeft: '1rem' }}>
                <Link to="/login">Login/Register</Link>
            </Button>
            </li>
            <li>
            <Button variant={"unstyled"} color={"white"} style={{ marginLeft: '1rem' }}>
                <Link to="/search">Search</Link>
            </Button>
            </li>
          </ul>
        </div>
      </nav>
  </HStack>
  )
} 

export default Header;
