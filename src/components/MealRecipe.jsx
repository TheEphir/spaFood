import { useEffect, useState } from 'react';
import { getMealById } from '../api';
import { useParams } from 'react-router-dom';
import { Preloader } from './Prealoader';

export function MealResipe() {
  const RecipeID = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getMealById(RecipeID.id).then((data) => setRecipe(data.meals[0]));
  }, [RecipeID]);

  return (
    <>
      <div className='meal'>
        {!recipe ? (
          <Preloader />
        ) : (
          <div className='recipe'>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h1>{recipe.strMeal}</h1>
            <h6>Category: {recipe.strCategory}</h6>
            {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
            <p>{recipe.strInstructions}</p>

            <table className='centered'>
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes('Ingredient') && recipe[key]) {
                    return (
                      <tr key={key}>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>

            {recipe.strYoutube ? (
              <div className='row'>
                <h4 style={{ magrin: '2rem 0 1.5rem' }}>Vidoe recipe</h4>
                <iframe
                  title={recipe.strMeal}
                  src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                    -11
                  )}`}
                  allowfullscreen
                ></iframe>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}
