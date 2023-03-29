import { useEffect } from 'react';
import './SearchBar.scss';

export default function SearchBar() {
  let searchBarText = localStorage.getItem('searchBarText') || '';

  useEffect(() => {
    return () => {
      localStorage.setItem('searchBarText', searchBarText);
    };
  });

  return (
    <form role="search">
      <input
        type="search"
        className="search__input"
        defaultValue={searchBarText}
        placeholder="Search..."
        onChange={(event) => (searchBarText = event.target.value)}
      />
      <button className="search__button">Search</button>
    </form>
  );
}
