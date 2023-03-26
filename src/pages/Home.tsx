import React from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import { getAllProducts } from '../services/api';
import { TProduct } from '../services/types';

type TState = {
  searchResultsList: TProduct[] | null;
};

class Home extends React.Component {
  state: TState = {
    searchResultsList: null,
  };

  async componentDidMount() {
    const result = await getAllProducts();
    this.setState({ searchResultsList: result.products });
  }

  render() {
    return (
      <main>
        <h1>Home page</h1>
        <SearchBar />
        {this.state.searchResultsList !== null ? (
          <ResultsList resultsArray={this.state.searchResultsList} />
        ) : (
          <h3>loading...</h3>
        )}
      </main>
    );
  }
}

export default Home;
