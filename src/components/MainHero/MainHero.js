import React from "react";
import "./MainHero.css";
import animals from "../../assets/images";
import { Container } from "reactstrap";
import { useQuery, gql } from "@apollo/client";

function MainHero() {
  const {error, loading, data} = useQuery(gql`
    {
      mainCards {
        title
        image
      }
    }
  `);

    if(loading) return <div>loading...</div>
    if(error) return <div>Some error happen</div>
    // console.log(data);
  return (
    <div className="MainHero">
      <Container>
        <div className="header-container">
          <h2>
            Find your <br /> new four-legged <br /> best friend
          </h2>
          <img src={animals.rhino} alt="rhino" />
        </div>
        <div className="cards-container">
          {data.mainCards.map((card,index) => {
            return (
              <div className="card" key={index}>
                <h3>{card.title}</h3>
                <img src={animals[card.image]} style={{ width: "100%" }} alt={card.title}/>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default MainHero;
