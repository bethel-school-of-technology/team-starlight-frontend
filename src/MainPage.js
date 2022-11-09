import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import "./MainPage.css";


function MainPage() {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="https://www.citypng.com/public/uploads/small/11637221757bxddbtect7yzembsrxthedntofx7p81pziqcptiod2jduacd8qke3jaeadhcabswtrho0ogcphosnvsz1djnxpswexq8lafpbjzk.png" width="30" height="30" alt="" />
            </a>
            <a class="navbar-brand" href="#">Find Grub</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">
                <img src="https://www.citypng.com/public/uploads/small/11637221757bxddbtect7yzembsrxthedntofx7p81pziqcptiod2jduacd8qke3jaeadhcabswtrho0ogcphosnvsz1djnxpswexq8lafpbjzk.png" width="30" height="30" alt="" />
            </a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Main Page 
                    </a>
                    <div class="dropdown-divider"></div>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Recipes</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">My Recipes</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">About Us</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Login/Sign Up</a>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
        <br></br>
        <br></br>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Random Search
                                </a>
                                <div class="dropdown-divider"></div>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Keto</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Quick & Easy</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Plant-Based</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Vegetarian</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Low Carb</a>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div class="col-md-4">
                        <img src="https://trello.com/1/cards/635954c77324910240337682/attachments/635954c7732491024033769e/download/luisa-brimble-aFzg83dvnAI-unsplash.jpg" class="img-rounded" alt="group meal"></img>
                    </div>
                    <p>Welcome to Find Grub! 
                    Now that you're here, we know you love food as 
                    much as we do Enter your ingredients and search for delicious recipes. Or, you can choose 
                    from some specialized meal options randomly.</p>
                    </div>
                 </div>
                    <div>
                        <footer>
                            <div class="footer">
                                © 2022 Copyright: BST Group Project
                            </div>
                        </footer>
                    </div>
        </div>
    )
}

export default MainPage