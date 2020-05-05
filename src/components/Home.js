import React from 'react';
import styled from 'styled-components';
import { Link} from 'react-router-dom';

const HomeWrap = styled.div `
display: flex;
flex-direction: column;
align-items: center;
  justify-content: center;
`;

const Order = styled.button `

`;

function Home() {
  return (
    <HomeWrap>
      <img
        className="pizza-img"
        src={require(`.././Assets/Pizza.jpg`)}
        alt="Pizza"
      />
      <Link to="/Pizza">
      <Order>Order Now!</Order>
  </Link>
      
    </HomeWrap>
  );
}

export default Home;