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
    localStorage.setItem('searchBarText', event.target.value); // added setItem here to save search text even on page reload
  }

  componentWillUnmount() {
    localStorage.setItem('searchBarText', this.state.searchBarText); // currently reduntant, but required by the task description
  }

  render() {
    return (
      <form onSubmit={(event) => event.preventDefault()} role="search">
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
