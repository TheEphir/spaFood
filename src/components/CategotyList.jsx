import { CatItem } from './CateroryItem';
export function CategotyList({ catalog = [] }) {
  return (
    <div className='catalog list'>
      {catalog.map((el) => {
        return <CatItem key={el.idCategory} {...el} />;
      })}
    </div>
  );
}
