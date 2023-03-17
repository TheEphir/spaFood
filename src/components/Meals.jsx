import { MealItem } from './MealItem';

export function MealsList(props) {
  const { meals } = props;
  return (
    <div className='list'>
      {meals.map((meal) => (
        <MealItem key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
}
