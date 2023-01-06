import React from 'react';
import styled from "styled-components";
import  { mobile }  from "../responsive";

const Container = styled.div`
    background-color: #080814e6;
    border: .1rem solid rgba(255,255,255,.3);
    width: 80%;
    padding: 10px 15px;
    margin: 7px;
    color: white;
    border-radius: 0.5rem;
    display: flex ;
    
    ${mobile({ 
    padding: "8px 10px",
    margin: "4px"
   })}
`;

const RecipeNameWrapper = styled.div`
    flex: 3;
`;



const PriceWrapper = styled.div`
    flex: 3;
`;

const DollarSpan = styled.small`
  margin-left: 3px;
  color: orange;
`; 

const FirstRecipeLetter = styled.span`
  color: orange;
  text-transform: capitalize;
  margin-right: 1.5px;
`;

const RecipeLetters = styled.span`
  color: white;
  text-transform: lowercase;
`;

const RecipeIngredientsWrapper  =  styled.div`
    align-items: center;
    font-size: x-small;
    padding-top: 3px;
`;

function colorFirstLetter (name) {

  if(name.length< 1) return;
  var indents = [];

  indents.push(<FirstRecipeLetter>{name[0]}</FirstRecipeLetter>)
  indents.push(<RecipeLetters>{name.slice(1)}</RecipeLetters>)
    
  return indents;
}

const ListItem = ({name, price}) => {
  return (
    <Container key={name} id={name}>
            <RecipeNameWrapper> 
              {colorFirstLetter(name)}
            </RecipeNameWrapper>

            <PriceWrapper>{price}<DollarSpan>$</DollarSpan></PriceWrapper>
    </Container>
  );
}

ListItem.defaultProps = {
  name: 'unknown Recipe',
  price: '-',
}
export default ListItem;