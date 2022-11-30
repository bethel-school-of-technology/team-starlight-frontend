import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Home from './Home/Home';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import { UserProvider } from './contexts/UserProvider';
import {RecipeProvider} from "./contexts/RecipeProvider";
import AboutUs from './AboutUs/AboutUs';
import RecipeList from './RecipeList'
import Details from './Details/Details'
import SavedRecipes from './SavedRecipes/SavedRecipes'
import EditRecipes from './EditRecipes/EditRecipes'
import EditRecipe from './EditRecipe/EditRecipe'

function App() {

  return (
    <UserProvider>
    <RecipeProvider>
        <BrowserRouter>
          <Navbar bg="gray">
          <img src="https://www.citypng.com/public/uploads/small/11637221757bxddbtect7yzembsrxthedntofx7p81pziqcptiod2jduacd8qke3jaeadhcabswtrho0ogcphosnvsz1djnxpswexq8lafpbjzk.png" width="30" height="30" alt="" />
          <Navbar.Brand className="brand">  Find Grub</Navbar.Brand>
          <img src="https://www.citypng.com/public/uploads/small/11637221757bxddbtect7yzembsrxthedntofx7p81pziqcptiod2jduacd8qke3jaeadhcabswtrho0ogcphosnvsz1djnxpswexq8lafpbjzk.png" width="30" height="30" alt="" />
          
          <Container className="container" class="text-center">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sign-up">Sign up</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/recipes/saved">My Recipes</Nav.Link>
          </Nav>
          </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />}>
             <Route path="/results" element={<RecipeList />} /> 
            </Route>
             
            <Route path="sign-up" element={<SignUp/>} />
            <Route path="about-us" element={<AboutUs/>} />
            <Route path="login" element={<Login/>} />
            
            <Route path="recipes/:id" element={<Details />} />
            <Route path="recipes/edit/:id" element={<EditRecipe />} />
          <Route path="recipes/saved" element={<SavedRecipes />} />
          </Routes>
        </BrowserRouter>

        <footer className="footer">
          <div class="text-left">
            <p>@ copyright 2022 Starlight || BST Group Project</p>
          </div>
        </footer>
    </RecipeProvider>
    </UserProvider>
    
    );
}

export default App;