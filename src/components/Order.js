import React from "react";
import styled from "styled-components";



const PizzaBox = styled.div`
background: #228656;
display: flex;
flex-direction: row;
justify-content: space-evenly;
border-radius: 20px;
`;

const Results = styled.div`
background: black;
border: 2px solid grey;
width: 400px;
display: flex;
flex-direction: column;
margin: 0;
justify-content: center;
font-family: 'Neucha', cursive;
border-radius: 8px;
`;

const Name = styled.h2 `
color: Blue;
`;

const Size = styled.p`
color: yellow;
`;
const Inst = styled.p`
color: orange;
`;

const Meat = styled.p`
color: brown;
`;


const Veggie = styled.p`
color: Green;
`;


const Order = ({pizza}) => {
console.log(pizza)
  return (
      <div>
      {pizza ? <PizzaBox>
        {pizza.map(use => (
          <Results>
              <h1>Your Order Details</h1>
            <Name>Name: {use.name}</Name>
            <Size>Size: {(use.size === "Small" ? "Small" 
            : use.size === "Medium" ? "Medium" 
            : use.size === "Large" ? "Large" 
            : use.size === "Family" ? "Family"
            : null
            )}</Size>
            
            
            <Meat>Pepperoni: {(use.pep === true) ? "Yes" : "No"}</Meat>
            <Meat>Sausage: {(use.saus === true) ? "Yes" : "No"}</Meat>
            <Meat>Canadian Bacon: {(use.bacon === true) ? "Yes" : "No"}</Meat>
            <Meat>Chicken: {(use.chx === true) ? "Yes" : "No"}</Meat>

            <Veggie>Peppers:{(use.pepper === true) ? "Yes" : "No"}</Veggie>
            <Veggie>Olives:{(use.olives === true) ? "Yes" : "No"}</Veggie>
            <Veggie>Jalapenos:{(use.jala === true) ? "Yes" : "No"}</Veggie>
            <Veggie>Onions:{(use.oni === true) ? "Yes" : "No"}</Veggie>

            <Inst>Special Instructions:{use.inst}</Inst>
          </Results>
        ))}
      </PizzaBox>
      : <div />
    }
    </div>

  );
};

export default Order;