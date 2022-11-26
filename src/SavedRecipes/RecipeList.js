import React, { useContext, useState } from "react";
import RecipeContext from "../contexts/RecipeContext";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link, Navigate, NavLink, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";


const RecipeList = () => {
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
    <div>
      <br></br>RECIPE RESULTS
      <br></br>
      <DropdownButton
        alignRight
        title="Select Protein"
        id="dropdown-menu-align-right"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="Chicken">Chicken</Dropdown.Item>
        <Dropdown.Item eventKey="Fish">Fish</Dropdown.Item>
      </DropdownButton>
      <h4>You selected {Protein}</h4>

      
      <RecipeContext.Consumer>
      

        {({ recipe }) => {
          return (
            <div>
              <br></br>
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
          );
        }}
      </RecipeContext.Consumer>
    </div>
  );
};

export default RecipeList;
