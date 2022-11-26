import React from "react";
import "./Home.css";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


function Home() {
    return (
        <>
        <div class="container">
          <div class="row">
            <div class="col-8">
              <img src="https://images.unsplash.com/photo-1593759608363-fde2fa65f5d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1418&q=80" class="img-fluid" alt=""></img>
              <br />
              <br /> 
              </div>
                <br />
                <br />
                <br />
             <h3>Select your Protein <span class="badge bg-secondary"></span></h3>
                <ToggleButtonGroup type="checkbox" defaultValue={[1,2,3]} className="mb-2">
                  <ToggleButton id="tbg-check-1" value={1}>
                    Chicken
                    </ToggleButton>
                    <ToggleButton id="tbg-check-2" value={2}>
                      Beef
                      </ToggleButton>
                      <ToggleButton id="tbg-check-3" value={3}>
                        Fish
                        </ToggleButton>
                        </ToggleButtonGroup>
                    {/* </div> */}
                        <br />
                        <br />
          
                <h3>Select your Carbohydrate<span class="badge bg-secondary"></span></h3>
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
                  </ToggleButtonGroup>
        </div>
      <div/>
      <br />
      <br />
      <div class="align-items: right">
      <button type="button" class="btn btn-danger">Get Recipes</button>
                </div>      
                </div>
        <hr/>
        </>
    )
}


export default Home;