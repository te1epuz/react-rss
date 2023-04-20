import './SearchBar.scss';
import { updateInput, updateText } from '../../redux/searchDataSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

export default function SearchBar() {
  const searchInputValue = useAppSelector((state) => state.searchData.inputValue);
  const dispatch = useAppDispatch();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(updateText(searchInputValue));
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
