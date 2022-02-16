import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

class ProfileList extends React.Component {
  state = {
    localStatePeople: [],
  }
  componentDidMount() {    
    this.props.fetchPeople();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.people !== this.props.people || prevProps.term !== this.props.term) {
    
      const { people, defaultPeople, term } = this.props;
      if(this.props.term === '' && defaultPeople.length > people.length || defaultPeople.length > people.length)
      {
        const filtered1 = defaultPeople && defaultPeople.filter(person => {
          const regExp = new RegExp(`^${term}`, 'gi');
          return person.name.match(regExp)
        }); 
        this.setState({localStatePeople:filtered1})
      }
      else
      {
        const filtered2 = people && people.filter(person => {
          const regExp = new RegExp(`^${term}`, 'gi');
          return person.name.match(regExp)
        });
        this.setState({localStatePeople:filtered2})
      }
    }

  }

  renderList() {
    const { localStatePeople } = this.state; 
    return localStatePeople.length > 0 && localStatePeople.map((person, index) => {
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