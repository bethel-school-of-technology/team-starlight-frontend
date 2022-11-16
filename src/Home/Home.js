import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./Home.css";

function Home() {
    return (
        <>
        <div class="container-fluid">
            <div class="row">
                <div class="col-4 mt-5">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Choose Your Protein
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Chicken</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Beef</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Fish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                {/* <div class="dropdown pl-5">
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="recipe-dropdown" data-bs-toggle="dropdown">
                    Choose Your Protein
                </button>
                <ul class="dropdown-menu" aria-labelledby="recipe-dropdown">
                    <li><a class="dropdown-item" href="#">Chicken</a></li>
                    <li><a class="dropdown-item" href="#">Fish</a></li>
                    <li><a class="dropdown-item" href="#">Beef</a></li>
                </ul>
            </div> */}
            <br />
            <br />
            <br />
            <br />

            <div class="dropdown mt-3">
                <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Choose Your Carbs
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Noodle</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Potoato</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Rice</Dropdown.Item>
                        </Dropdown.Menu>
                 </Dropdown>
            </div>
            <br />
            <br />
            <br />
            <br />
        

            <div class="dropdown mt-3">
                <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Choose Your Vegetables
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Brocolli</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Zucchini</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Cabbage</Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
            </div>
                </div>
                <div class="col-8">
                    <img src="https://plus.unsplash.com/premium_photo-1663126351065-741a1d338b5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=8" width="100%"></img>
                    <br />
                    <br />
                    <p>Welcome to Find Grub! 
                                Now that you're here, we know you love food as 
                                much as we do. Enter your ingredients and search for delicious recipes. 
                                Or, you can choose from some specialized meal options randomly.</p>
                </div>
            </div>
        </div>
        <hr/>
        </>
    )
}


export default Home