import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Context } from '../../context/Context';
import {
  fetchApi,
  getFoodsByCategory,
} from '../../services/api';
import { Loading, Header, FoodCard, BottomMenu } from '../../components';
import MainPageContainer from './styles';

const FoodsContainer = styled.div`
  width: 100vw;
  padding: 5%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const MainPage = ({ match: { path }, location: { searchByIngredient } }) => {
  const [categoryFiltered, setCategoryFiltered] = useState(null);

  const {
    loading,
    mealValues,
    drinkValues,
  } = useContext(Context);

  const foods = path.includes('comidas') ? mealValues : drinkValues;

  const filterByCategory = (category) => {
    if (category === categoryFiltered || !category) {
      setCategoryFiltered(null);
      return fetchApi(foods.initialValuesURL).then(foods.setFunc);
    }
    setCategoryFiltered(category);
    return getFoodsByCategory(foods.URL, category).then(foods.setFunc);
  };

  if (loading) return <Loading />;

  return (
    <MainPageContainer>
      <Header pageTitle={foods.title} ingredient={searchByIngredient} />
      <button data-testid="All-category-filter" type="button" onClick={() => filterByCategory()}>
        All
      </button>
      {foods.categories.slice(0, 5).map(({ strCategory }) => (
        <button
          key={strCategory}
          data-testid={`${strCategory}-category-filter`}
          type="button"
          onClick={() => filterByCategory(strCategory)}
        >
          {strCategory}
        </button>
      ))}
      <FoodsContainer>
        {foods.list.slice(0, 12).map((food, index) => (
          <FoodCard
            key={`${foods[`id${foods.key}`]} ${foods[`str${foods.key}`]}`}
            thumb={food[`str${foods.key}Thumb`]}
            str={food[`str${foods.key}`]}
            index={index}
            id={food[`id${foods.key}`]}
            foodType={foods.path}
          />
        ))}
      </FoodsContainer>
      <BottomMenu />
    </MainPageContainer>
  );
};

export default MainPage;

MainPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    searchByIngredient: PropTypes.string,
  }).isRequired,
};
