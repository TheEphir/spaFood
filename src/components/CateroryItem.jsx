import { Link } from 'react-router-dom';

export function CatItem(props) {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;
  return (
    <div className='card' key={idCategory}>
      <div className='card-image'>
        <img src={strCategoryThumb} alt='#' />
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {strCategory} <i className='material-icons right'>more_vert</i>
        </span>
      </div>
      <div className='card-reveal'>
        <span className='card-title grey-text text-darken-4'>
          {strCategory}
          <i className='material-icons right'>close</i>
        </span>
        <p>{strCategoryDescription}</p>
      </div>
      <div className='card-action'>
        <Link to={`category/${strCategory}`} className='btn'>
          Watch category
        </Link>
      </div>
    </div>
  );
}
