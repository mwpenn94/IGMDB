import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

class StreamList extends React.Component {


  componentDidMount() {
    this.props.fetchPeople();
  }

  renderList() {
    const { people, term } = this.props;
    console.log(this.props.people)
    const filtered = people && people.filter(person => {
      const regExp = new RegExp(`^${term}`, 'gi');
      return person.name.match(regExp)
    })
   
  
    return people && people.length > 0 && filtered.map((person, index) => {
//      this.props.fetchImage(person.name)
      return (
        <div className="item" key={index}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`people/${index}`} className="header">
              {person.name}
              {person.image}
            </Link>
            <div className="description">
            </div>
          </div>
        </div>
      );
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar />
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

export default StreamList;