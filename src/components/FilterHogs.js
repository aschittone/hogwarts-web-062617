import React from 'react';


class FilterHogs extends React.Component {



render() {
      return (
      <div>
        <form onChange={filterPigs}>
          <select>
            <option value="all">All</option>
            <option value="true">Greased</option>
            <option value="false">Not Greased</option>
          </select>
        </form>
      </div>
    );
  }
}

export default FilterHogs;
