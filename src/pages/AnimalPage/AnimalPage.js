import React from "react";
import { Container } from "react-bootstrap";
import animals from "../../assets/images";
import star from "../../assets/svg/star.svg";
import "./AnimalPage.css";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const ANIMAL_QUERY = gql`
  query ($slug: String!) {
    animal(slug: $slug) {
      title
      image
      stock
      description
      price
    }
  }
`;
function AnimalPage() {
  const { slug } = useParams();

  const { data, loading, error } = useQuery(ANIMAL_QUERY, {
    variables: {
      slug,
    },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className='py-5'>
      <Container>
        <div className='d-flex'>
          <img
            src={animals[data.animal?.image]}
            className='product-img'
            style={{ marginRight: "1rem" }}
            alt='product-img'
          />
          <div className='text-container'>
            <h1>{data.animal?.title}</h1>
            <div className='star-container'>
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
              <div className='rating-stock-container'>
                <p>1402 rating</p>
                <p>{data.animal?.stock} in stock</p>
              </div>
            </div>
            <div className='about-container'>
              <h4>About this Animal</h4>
              {data.animal?.description.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className='cart-container border'>
            <p className='price'>
              <span>CAD$ {}</span>
            </p>
            <p className='delivery-time'>
              FREE delivery: Thursday, Feb 25 Details
              <button className='buy-now-btn' style={{ marginTop: "2rem" }}>
                Add to Cart
              </button>
              <button>Buy Now</button>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AnimalPage;
