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

        {/* <MDBCarousel  showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        alt='...'
      >
       
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-50 h-10 d-block'
        itemId={2}
        src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80'
        alt='...'
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-50 h-10 d-block'
        itemId={3}
        src='https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        alt='...'
      >
       
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-50 h-10 d-block'
        itemId={4}
        src='https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        alt='...'
      >
       
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-50 h-10 d-block'
        itemId={5}
        src='https://images.unsplash.com/photo-1486485764572-92b96f21882a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        alt='...'
      >
       
      </MDBCarouselItem>
    </MDBCarousel> */}
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
          {/* </div> */}
          <br />
          <br />

          {/* <h3>Select your Carbohydrate<span class="badge bg-secondary"></span></h3>
                <ToggleButtonGroup type="checkbox" defaultValue={[4,5,6]} className="mb-2">
                  <ToggleButton id="tbg-check-4" value={4}>
                    Noodle
                    </ToggleButton>
                    <ToggleButton id="tbg-check-5" value={5}>
                      Potato
                      </ToggleButton>
                      <ToggleButton id="tbg-check-6" value={6}>
                        Rice
                        </ToggleButton>
                        </ToggleButtonGroup>
                          <br />
                          <br />
                        
          <h3>Select your Vegetable<span class="badge bg-secondary"></span></h3>
          <ToggleButtonGroup type="checkbox" defaultValue={[7,8,9]} className="mb-2">
            <ToggleButton id="tbg-check-7" value={7}>
              Broccoli
              </ToggleButton>
              <ToggleButton id="tbg-check-8" value={8}>
                Zucchini  
                </ToggleButton>
                <ToggleButton id="tbg-check-9" value={9}>
                  Cabbage
                  </ToggleButton>
                  </ToggleButtonGroup> */}
        </div>
        <div />
        <br />
        <br />
        {/* <div class="align-items: right">
          <button type="button" class="btn btn-danger" onClick={showComponent}>
            {isVisible ? "Hide" : "Show"} Recipes
          </button>
          {isVisible ? <RecipeList /> : null}
        </div> */}
        <RecipeList />
      </div>
      
      <hr />
    </>
  );
}

export default Home;
