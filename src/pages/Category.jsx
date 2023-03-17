import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFilteredCategory } from '../api';
import { Preloader } from '../components/Prealoader';
import { MealsList } from '../components/Meals';

export function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return <>{!meals.length ? <Preloader /> : <MealsList meals={meals} />}</>;
}
