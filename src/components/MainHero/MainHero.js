import React from "react";
import "./MainHero.css";
import animals from "../../assets/images";
import { Container } from "reactstrap";
import { useQuery, gql } from "@apollo/client";

const GET_ANIMALS = gql`
  {
    mainCards {
      image
      title
    }
  }
`;

function MainHero() {
  const { loading, error, data } = useQuery(GET_ANIMALS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className='MainHero'>
      <Container>
        <div className='header-container'>
          <h2>
            Find your <br /> new four-legged <br /> best friend
          </h2>
          <img src={animals.rhino} alt='rhino' />
        </div>
        <div className='cards-container'>
          {data.mainCards.map((card) => {
            return (
              <div className='card' key={card.image}>
                <h3>{card.title}</h3>
                <img
                  src={animals[card.image]}
                  alt=''
                  style={{ width: "100%" }}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default MainHero;
