import { useEffect, useState } from 'react';
import SearchBar from '../components/Home/SearchBar';
import { TSearchResults } from '../services/types';
import SearchResults from '../components/Home/SearchResults';

export default function Home() {
  const [searchResults, setSearchResults] = useState<TSearchResults | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setSearchResults(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <main>
      <h1>Home page</h1>
      <SearchBar />
      {searchResults !== null ? (
        <SearchResults searchResults={searchResults} />
      ) : (
        <h3>loading...</h3>
      )}
    </main>
  );
}
