import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchStyled } from "./Search.style";

class Search extends Component {
  state = {
    searchString: "",
  };

  handleSearch = (e, searchString) => {
    e.preventDefault();
    this.props.search(searchString);
  };

  handleChange = (e) => {
    this.setState({
      searchString: e.target.value,
    });
  };

  render() {
    const { searchString } = this.state;
    return (
      <SearchStyled onSubmit={(e) => this.handleSearch(e, searchString)}>
        <input
          type="text"
          placeholder="search"
          value={searchString}
          onChange={this.handleChange}
        />
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
      </SearchStyled>
    );
  }
}

export default Search;
