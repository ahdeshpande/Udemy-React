import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBeb1m_zyG9H0R7ircVS3ZteCMyQMIa_GM';

// Create a new component. This component should produce
// some HTML.
const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

// Take this component's generated HTML and put it on
// the page (in the DOM )
ReactDOM.render(<App/>, document.querySelector('.container'));
