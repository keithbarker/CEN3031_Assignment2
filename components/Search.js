import React from 'react';

class Search extends React.Component {
  render() {
    //You will need to save the value from the textbox and update it as it changes
    //You will need the onChange value for the input tag to capture the textbox value

    return (
      <form>
        <input className="SearchInput" type="text" onChange={this.props.filterUpdate} placeholder="Type to Filter" />
      </form>
    );
  }
}
export default Search;
