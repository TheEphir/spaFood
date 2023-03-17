import { useState } from 'react';
import { useEffect } from 'react';
import { getAllMealCategories } from '../api';
import { Preloader } from '../components/Prealoader';
import { CategotyList } from '../components/CategotyList';
import { Search } from '../components/Search';

export function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getAllMealCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(data.categories);
    });
  }, []);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategotyList catalog={filteredCatalog} />
      )}
    </>
  );
}
