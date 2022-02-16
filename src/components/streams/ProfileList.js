import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

class ProfileList extends React.Component {
  componentDidMount() {    
    this.props.fetchPeople();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.people !== this.props.people) {
      this.props.fetchImage(this.props.people)
    }
  }

  renderList() {
    const { people, defaultPeople, term } = this.props;
    const filtered = defaultPeople && defaultPeople.filter(person => {
      const regExp = new RegExp(`^${term}`, 'gi');
      return person.name.match(regExp)
    });
   if(filtered && filtered.length > 0) this.props.updatePeople(filtered);   
    return filtered && filtered.length > 0 && filtered.map((person, index) => {
      return (
        <div className="item" key={index}>
          {
            person.image ? <img className="ui avatar image"  src={person.image}></img> : <img className="ui avatar image" src='https://qph.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd'></img>
          }          
          <div className="content">
            <Link to={`people/${person.id}`} className="header">
              {person.name}
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

export default ProfileList;