import React, { useContext, useState } from "react";
import RecipeContext from "../contexts/RecipeContext";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link, Navigate, NavLink, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
    let { recipe } = useContext(RecipeContext);
  let navigate = useNavigate();
  
  let [Protein, setNewProtein] = useState();
 
 let {getRecipeDetails} = useContext(RecipeContext)
 
  const handleSelect = (e) => {
    console.log(e);
    setNewProtein(e);
  };
  
  function handleLink(id) {
console.log(id);

getRecipeDetails(id);
navigate("/recipes/"+id)

  }

  
    return (
        <>
        <div class="container-fluid">
            <div class="row">
                <div class="col-4 mt-5">
                <p>Welcome to Find Grub! 
                                Now that you're here, we know you love food as 
                                much as we do. Enter your ingredients and search for delicious recipes. 
                                Or, you can choose from some specialized meal options randomly.
                    </p>
                    <Dropdown>
                        <DropdownButton alignRight title="Select Protein" id="dropdown-menu-align-right" onSelect={handleSelect}>
                            

                            <Dropdown.Item eventKey="Chicken">Chicken</Dropdown.Item>
                            <Dropdown.Item eventKey="Beef">Beef</Dropdown.Item>
                            <Dropdown.Item eventKey="Fish">Fish</Dropdown.Item>
                        </DropdownButton>
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
                        <DropdownButton alignRight title="Select Carb" id="dropdown-menu-align-right" onSelect={handleSelect}>
                            

                            <Dropdown.Item eventKey="Noodle">Noodle</Dropdown.Item>
                            <Dropdown.Item eventKey="Potato">Potato</Dropdown.Item>
                            <Dropdown.Item eventKey="Rice">Rice</Dropdown.Item>
                        </DropdownButton>
                    </Dropdown>
            </div>
            <br />
            <br />
            <br />
            <br />
        

            <div class="dropdown mt-3">
            <Dropdown>
                        <DropdownButton alignRight title="Select Vegetable" id="dropdown-menu-align-right" onSelect={handleSelect}>
                            

                            <Dropdown.Item eventKey="Broccoli">Broccoli</Dropdown.Item>
                            <Dropdown.Item eventKey="Zucchini">Zucchini</Dropdown.Item>
                            <Dropdown.Item eventKey="Cabbage">Cabbage</Dropdown.Item>
                        </DropdownButton>
                    </Dropdown>

                    <br></br>
                    <br></br>
                    <Button variant="warning">Search</Button>{' '}

                    {/*  */}

               </div>
               
                
                
               <RecipeContext.Consumer>
      

      {({ recipe }) => {
            <div>
                <div>
              {recipe.map((c) => {
                return (
                  
                  <div>
                    <div key={c.id}>
                    
                      <p>{c.title}</p>
                      <img src={c.image} /><br></br>
                      <p>{c.id}</p>
                      <Button onClick={handleLink.bind(this,c.id)}
            
            key={c.id}
            className="btn btn-secondary mx-3"
          >
            Details
          </Button>
                      
                      <div></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
    }}
    </RecipeContext.Consumer>
                </div>

            </div>
           
        </div>
       
              </>
    )
}


export default Home