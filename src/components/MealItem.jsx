import { Link } from 'react-router-dom';

export function MealItem(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={strMealThumb} alt='#' />
      </div>
      <div className='card-content'>
        <span className='card-title grey-text text-darken-4'>{strMeal}</span>
      </div>
      <div className='card-action'>
        <Link to={`meal/${idMeal}`} className='btn'>
          Watch recipe
        </Link>
      </div>
    </div>
  );
}
