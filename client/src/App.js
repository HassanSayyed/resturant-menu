import './App.css';
import Navbar from './components/Navbar';
import ListView from './components/ListView';
import axios from "axios";
import { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {

  const [plate, setPlate] = useState([]);
  const [drink, setDrink] = useState([]);
  const [sandwich, setSandwich] = useState([]);

  const [shisha, setShisha] = useState();



  useEffect(() =>  {
    
    fetchRecipes();
    
  }, []);


  const fetchRecipes = async () => {
    const { data } = await axios.get(`http://localhost:8000/api/recipes/`);
    

        var sorted = {};
        for( var i = 0; i < data.recipes.length ; i++ ){

          if( sorted[data.recipes[i].type] === undefined ){
          sorted[data.recipes[i].type] = [];
          }
          sorted[data.recipes[i].type].push(data.recipes[i]);
        }

        console.log(sorted)
        
        setDrink(sorted['drink']);
        setSandwich(sorted['sandwich']);
        setPlate(sorted['plate']);
      
        setShisha(sorted['shisha'])

  };

  const Link = styled.a`
  background-color: white;
  color: blue;
  `;


  return (
    <div className="App">
      <Navbar />
      
      <ListView recipes={plate} type="plates" />

      <ListView recipes={sandwich} type="sandwichs"  />
     
     <ListView recipes={drink} type="drinks" />

     <ListView recipes={shisha} type="shishas" />
    </div>
  );
}

export default App;
