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
    <div>
      <input
        value = {this.state.term}
        onChange={event => this.setState({ term: event.target.value })} />
    </div>
    )
  }
}

export default SearchBar;
