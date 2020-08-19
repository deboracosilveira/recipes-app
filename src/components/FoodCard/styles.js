import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FoodCardContainer = styled.div`
  width: 230px;
  text-align: center;
  margin: 15px;
  border-radius: 10px;
  padding: 10px;
  background-color: #e0ecec;
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    width: 330px;
  }
`;

FoodCardContainer.Img = styled.img`
  width: 200px;
  border-radius: 50%;

  @media (max-width: 800px) {
    width: 280px;
  }
`;

FoodCardContainer.Link = styled(Link)`
  text-decoration: none;
`;

FoodCardContainer.Name = styled.p`
  color: var(--primary);
  font-size: 1.4rem;
  background-color: white;
  border-radius: 5px;
`;

export default FoodCardContainer;
