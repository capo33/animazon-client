import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { useQuery, gql } from "@apollo/client";

const CATEGORY_QUERY = gql`
  query Category($slug: String!) {
    category(slug: $slug) {
      slug
      category
      image
      animals {
        image
        title
        slug
        price
        id
      }
    }
  }
`;
function CategoryPage() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(CATEGORY_QUERY, {
    variables: { slug },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className='py-5'>
      <Container>
        <h1 className='text-capitalize'>
          {data.category.category}
          <CardDisplay animals={data.category.animals} />
        </h1>
      </Container>
    </div>
  );
}

export default CategoryPage;
