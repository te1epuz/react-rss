import SearchBar from '../components/Home/SearchBar';
import SearchResults from '../components/Home/SearchResults';
import { useAppSelector } from '../redux/hooks';
import { useFetchRickMortyQuery } from '../redux/fetchRickMortyAPI';

export default function Home() {
  const searchText = useAppSelector((state) => state.searchData.searchText);

  const { data, error, isFetching } = useFetchRickMortyQuery(searchText);

  return (
    <main>
      <h1>Home page</h1>
      <SearchBar />
      {isFetching && <h3>Loading...</h3>}
      {!isFetching && error && <h3>no results found for &apos;{searchText}&apos; :(</h3>}
      {!isFetching && !error && data && (
        <SearchResults searchText={searchText} searchResults={data} />
      )}
    </main>
  );
}
