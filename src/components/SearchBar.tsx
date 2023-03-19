import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchBarText: '',
  };

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      searchBarText: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.searchBarText}
          placeholder="Search"
          onChange={this.handleChange.bind(this)}
        />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchBar;
