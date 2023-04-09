import { useEffect, useState } from 'react';
import SearchBar from '../components/Home/SearchBar';
import { TSearchResults } from '../services/types';
import SearchResults from '../components/Home/SearchResults';

export default function Home() {
  const [searchText, setSearchText] = useState(localStorage.getItem('searchInputValue') || '');
  const [searchResults, setSearchResults] = useState<TSearchResults | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch(
        'https://rickandmortyapi.com/api/character' + (searchText && `/?name=${searchText}`)
      );
      if (!response.ok) {
        setSearchResults(null);
      } else {
        const data: TSearchResults = await response.json();
        setSearchResults(data);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [searchText]);

  return (
    <main>
      <h1>Home page</h1>
      <SearchBar setSearchText={setSearchText} />
      {isLoading && <h3>Progressing...</h3>}
      {!isLoading && !searchResults && <h3>no results found for &apos;{searchText}&apos; :(</h3>}
      {!isLoading && searchResults && (
        <SearchResults searchText={searchText} searchResults={searchResults} />
      )}
    </main>
  );
}
