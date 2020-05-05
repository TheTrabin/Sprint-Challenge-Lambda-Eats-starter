import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Wrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: center;
border: red 2px solid;
background: black;
`;

const Logo = styled.h1`
color: red;
`;

const Links = styled.div`
color: red;
display: flex;
flex-direction: row;
align-content: center;
justify-content: space-around;
margin: 0;
width: 800px;
a {
    color: red;
    :hover {
        color: green;
    }
}

`;

const Bar = () => {

    return (
        <Wrap>
        <Logo>Lambda Eats</Logo>
        <Links>
        <Link to="/" data-cy="home">
            Home
        </Link>
        <Link to="/Pizza" data-cy="pizza">
            Order Now
        </Link>
        </Links>
        </Wrap>
    )
}
export default Bar;