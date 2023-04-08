import { useEffect, useState } from 'react';
import SearchBar from '../components/Home/SearchBar';
import ResultsList from '../components/Home/ResultsList';
import data from '../assets/data.json';
import { TProduct } from '../services/types';

export default function Home() {
  const [searchResultsList, setSearchResultsList] = useState<TProduct[] | null>(null);

  useEffect(() => {
    setSearchResultsList(data.products);
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <main>
      <h1>Home page</h1>
      <SearchBar />
      {searchResultsList !== null ? (
        <ResultsList resultsArray={searchResultsList} />
      ) : (
        <h3>loading...</h3>
      )}
    </main>
  );
}
