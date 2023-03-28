import React from 'react';
import SearchBar from '../components/Home/SearchBar';
import ResultsList from '../components/Home/ResultsList';
import data from '../assets/data.json';
import { TProduct } from '../services/types';

type TState = {
  searchResultsList: TProduct[] | null;
};

class Home extends React.Component {
  state: TState = {
    searchResultsList: null,
  };

  componentDidMount() {
    this.setState({ searchResultsList: data.products });
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
