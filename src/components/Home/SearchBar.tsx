import { useEffect, useState } from 'react';
import './SearchBar.scss';

type TProps = {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ setSearchText }: TProps) {
  const [searchInputValue, setSearchInputValue] = useState(
    localStorage.getItem('searchInputValue') || ''
  );

  useEffect(() => {
    return () => {
      localStorage.setItem('searchInputValue', searchInputValue);
    };
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchText(searchInputValue);
  }

  return (
    <form role="search" onSubmit={handleSubmit}>
      <input
        type="search"
        className="search__input"
        value={searchInputValue}
        placeholder="Search..."
        onChange={(event) => setSearchInputValue(event.target.value)}
      />
      <button className="search__button">Search</button>
    </form>
  );
}
