import React from 'react';

class SearchBar extends React.Component {
  constructor (props){
    super(props);

    this.state = {term: ''}
  }
  render(){
    return (
      <div className="search-bar">
        <input></input>
      </div>
    );
  }
}

export default SearchBar;
