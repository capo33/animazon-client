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
  const { error, loading, data } = useQuery(CATEGORIES_QUERY);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Some error happen</div>;
console.log(data);
  return (
    <div className="CategoryDisplay">
      <Container className="CategoryDisplay-container">
        {data.categories.map((category) => {
          return (
            <Link
              to={`/products/${category.slug}`}
              className="CategoryDisplay-card-container"
            >
              <div className="CategoryDisplay-card">
                <img src={animals[category.image]} alt="" />
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
