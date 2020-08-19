import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FoodCardContainer = styled.div`
  width: 200px;
  text-align: center;
  margin: 15px;
`;

FoodCardContainer.Img = styled.img`
  width: 200px;
  border-radius: 50%;
`;

FoodCardContainer.Link = styled(Link)`
  text-decoration: none;
`;

FoodCardContainer.Name = styled.p`
  color: white;
  font-size: 1.4rem;
  background-color: var(--primary);
  border-radius: 5px;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default FoodCardContainer;
