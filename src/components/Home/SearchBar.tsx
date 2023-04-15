import './SearchBar.scss';
import { updateInput } from '../../redux/searchTextSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

type TProps = {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ setSearchText }: TProps) {
  const searchInputValue = useAppSelector((state) => state.searchText.inputValue);
  const dispatch = useAppDispatch();

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
        onChange={(event) => dispatch(updateInput(event.target.value))}
      />
      <button className="search__button">Search</button>
    </form>
  );
}
