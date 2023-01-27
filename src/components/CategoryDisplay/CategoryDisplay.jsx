import React from "react";
import "./CategoryDisplay.css";
import { Container } from "react-bootstrap";
import animals from "../../assets/images";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const CATEGORIES_QUERY = gql`
  {
    categories {
      id
      category
      image
      slug
    }
  }
`;

function CategoryDisplay() {
  const { loading, error, data } = useQuery(CATEGORIES_QUERY);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className='CategoryDisplay'>
      <Container className='CategoryDisplay-container'>
        {data.categories.map((category) => {
          return (
            <Link
              to={`/products/${category.slug}`}
              key={category.id}
              className='CategoryDisplay-card-container'
            >
              <div className='CategoryDisplay-card'>
                <img src={animals[category.image]} alt='' />
              </div>
              <h3>{category.category}</h3>
            </Link>
          );
        })}
      </Container>
    </div>
  );
}

export default CategoryDisplay;
