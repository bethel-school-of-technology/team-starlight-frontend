import axios from "axios";
import { useEffect, useState } from "react";
import RecipeContext from "./RecipeContext";

export const RecipeProvider = (props) => {

    const [ recipe, setRecipe ] = useState([]);
    const baseUrl = "http://localhost:3000/recipes/results";

    useEffect(() => {
        async function fetchData() {
            await getAllRecipe();
            }
        fetchData();
    }, []);

   

    function getAllRecipe() {
        return axios.get(baseUrl).then(response => setRecipe(response.data));
    }

    //function getMessages(_id) {
        //return axios.get(baseUrl + _id).then(response => {
          //  return new Promise(resolve => resolve(response.data));
        //});
    //}

    //function addMessages(messages) {    
      //  let token = localStorage.getItem('myMessagesToken');
        //let headers = {
          //  Authorization: `Bearer ` + token
    //     };
    
    //     return axios.post(baseUrl, messages, { headers })
    //         .then(response => {
    //             getAllMessages();
    //             return new Promise(resolve => resolve(response.data));
    //         }
    //     );
    // }

    // function editMessages(messages) {
    //     let token = localStorage.getItem('myMessagesToken');
    //     let headers = {
    //         Authorization: `Bearer ` + token
    //     };

    //     // console.log("this is trying to edit " + messages.writing)
    //     return axios.put(baseUrl + messages._id, messages, {headers})
    //     .then(response => {
    //         getAllMessages();
    //         return new Promise(resolve => resolve(response.data));
    //     }
    // );
    // }

    // function deleteMessages(_id) {
    //     let token = localStorage.getItem('myMessagesToken');
    //     let headers = {
    //         Authorization: `Bearer ` + token
    //     };

    //     console.log("this is connected to "+ _id)
    //     return axios.delete(baseUrl + _id, messages, { headers}).then(response=>{
    //         getAllMessages();
    //         return new Promise(resolve => resolve(response.data));
            
            
    //     })
    //     }

 
    return (
        <RecipeContext.Provider value={{
            recipe,
            //getMessages,
            // addMessages,
            // editMessages,
            // deleteMessages
        }}>
            { props.children }
        </RecipeContext.Provider>
    )
};