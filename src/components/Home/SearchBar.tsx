import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
  state = {
    searchBarText: localStorage.getItem('searchBarText') || '',
  };

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      searchBarText: event.target.value,
    });
    // localStorage.setItem('searchBarText', event.target.value); // this will allow to save text even on page reload
  }

  componentWillUnmount() {
    localStorage.setItem('searchBarText', this.state.searchBarText);
  }

  render() {
    return (
      <form role="search">
        <input
          type="search"
          className="input"
          value={this.state.searchBarText}
          placeholder="Search..."
          onChange={this.handleChange.bind(this)}
        />
        <button className="button">Search</button>
      </form>
    );
  }
}

export default SearchBar;
