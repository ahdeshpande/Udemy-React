import React, { Component } from 'react';

// Class based component
class SearchBar extends Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  // Function to render the input
  render() {
    return (
    <div className="search-bar">
      <input
        value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
    </div>
    )
  }

  onInputChange(term){
    this.setState({ term });
    this.props.onSearchTermChanged(term);
  }

}

export default SearchBar;
