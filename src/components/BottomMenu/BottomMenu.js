import React from 'react';
import { Link } from 'react-router-dom';
import DrinkIcon from '../../images/drinkIcon.svg';
import ExploreIcon from '../../images/exploreIcon.svg';
import MealIcon from '../../images/mealIcon.svg';
import FooterContainer from './styles';

const BottomMenu = () => (
  <FooterContainer data-testid="footer">
    <Link to="/bebidas">
      <img data-testid="drinks-bottom-btn" src={DrinkIcon} alt="Drink icon" />
    </Link>
    <Link to="/explorar">
      <img data-testid="explore-bottom-btn" src={ExploreIcon} alt="Explore icon" />
    </Link>
    <Link to="/comidas">
      <img data-testid="food-bottom-btn" src={MealIcon} alt="Meal Icon" />
    </Link>
  </FooterContainer>
);

export default BottomMenu;
