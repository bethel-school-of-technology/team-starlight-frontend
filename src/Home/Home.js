import React from "react";
import "./Home.css";
import { useContext, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import RecipeList from "../RecipeList";
import RecipeContext from "../contexts/RecipeContext";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Stack from "react-bootstrap/Stack";


function Home(props) {
  // function callRecipes() {
  //   RecipeList()
  //     }
  const [isVisible, setIsVisible] = useState(false);
  const [protein, setNewProtein] = useState();
  const [carbohydrate, setNewCarbohydrate] = useState();
  const [vegetable, setNewVegetable] = useState();

  let { getAllRecipe } = useContext(RecipeContext);

  function showComponent(event) {
    setIsVisible(!isVisible);
  }

function displayRecipes (value){
  console.log (value);
  setNewProtein(value);
  setNewCarbohydrate(value);
  setNewVegetable(value);
  console.log(value);
  return getAllRecipe(value)
}

  

  return (
    <>
    
      <div class="container">
      
        <div class="row">

          <div className="img">
          <div class="col-8">
            <img
              src="https://images.unsplash.com/photo-1593759608363-fde2fa65f5d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1418&q=80"
              class="img-fluid"
              alt=""
            ></img>
            <br />
            <br />
          </div>
          </div>

          <h3>
            Select your Protein <span class="badge bg-secondary"></span>
          </h3>

          <ToggleButtonGroup
            type="checkbox"
            value={protein}
            onChange={displayRecipes}
          >
            <ToggleButton id="tbg-check-1" value={"Chicken"}>
              Chicken
            </ToggleButton>
            <ToggleButton id="tbg-check-2" value={"Beef"}>
              Beef
            </ToggleButton>
            <ToggleButton id="tbg-check-3" value={"Fish"}>
              Fish
            </ToggleButton>
          </ToggleButtonGroup>
          
          {/* </div> */}
          <br />
          <br />

          <h3>
            Select your Carbohydrate <span class="badge bg-secondary"></span>
          </h3>

          <ToggleButtonGroup
            type="checkbox"
            value={carbohydrate}
            onChange={displayRecipes}
          >
            <ToggleButton id="tbg-check-4" value={"Noodle"}>
              Noodle
            </ToggleButton>
            <ToggleButton id="tbg-check-5" value={"Potato"}>
              Potato
            </ToggleButton>
            <ToggleButton id="tbg-check-6" value={"Rice"}>
              Rice
            </ToggleButton>
          </ToggleButtonGroup>
          
          {/* </div> */}
          <br />
          <br />
          
          <h3>
            Select your Vegetable <span class="badge bg-secondary"></span>
          </h3>

          <ToggleButtonGroup
            type="checkbox"
            value={vegetable}
            onChange={displayRecipes}
          >
            <ToggleButton id="tbg-check-7" value={"Broccoli"}>
              Broccoli
            </ToggleButton>
            <ToggleButton id="tbg-check-8" value={"Zucchini"}>
              Zucchini
            </ToggleButton>
            <ToggleButton id="tbg-check-9" value={"Cabbage"}>
              Cabbage
            </ToggleButton>
          </ToggleButtonGroup>
          <h4>You selected {protein}</h4>
          
          <br />
          <br />

          
        </div>
        <div />
        <br />
        <br />
        
        <RecipeList />
      </div>
      
      <hr />
    </>
  );
}

export default Home;

//test
