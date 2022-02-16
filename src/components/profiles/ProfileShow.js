import React from 'react';
import { Link } from 'react-router-dom';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSpecies(this.props.person.url, this.props.person.species);
    this.props.fetchFilms(this.props.person.url, this.props.person.films);
    this.props.fetchStarships(this.props.person.url, this.props.person.starships);
  }

  renderSpeciesList() {
    const { speciesWithDetails: species } = this.props.person;
    return species && species.length > 0 && species.map((specie) => {
      return (
        <div className="item" key={specie.id}>
          <i className="ui mini image" src="/images/wireframe/image.png" />
          <div className="content">
              {specie.name}
            <div className="description">
            </div>
          </div>
        </div>
      );
    });
  }

  renderFilmsList() {
    const { filmsWithDetails: films } = this.props.person;
    return films && films.length > 0 && films.map((film) => {
      return (
        <div className="item" key={film.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
              {film.title}
            <div className="description">
            </div>
          </div>
        </div>
      );
    });
  }

  renderStarshipsList() {
    const { starshipsWithDetails: starships } = this.props.person;
    return starships && starships.length > 0 && starships.map((starship) => {
      return (
        <div className="item" key={starship.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
              {starship.name}
            <div className="description">
            </div>
          </div>
        </div>
      );
    });
  }
    
  render() {
    if (!this.props.person) {
      return <div>Loading...</div>;
    }
console.log(this.props)
    return (
      <div>
        <h1>{this.props.person.name}</h1>
        {
            this.props.person.image ? <img className="ui small circular image" style={{width:'200px',height:'200px'}}  src={this.props.person.image}></img> : <img className="ui small circular image" style={{width:'200px',height:'200px'}} src="https://qph.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"></img>
        }
        {
            this.props.person.image ? <h6>A random image of {this.props.person.name} brought to you by Unsplash</h6> : <h6>Unsplash has no images of {this.props.person.name} :'(</h6>
        }
                  
        <h5>Height: {this.props.person.height} cm</h5>
        <h5>Weight: {this.props.person.mass} kg</h5>
        <h5>Hair Color: {this.props.person.hair_color}</h5>
        <h5>Birth Year: {this.props.person.birth_year}</h5>
        <h5>Species: 
        <div className="ui celled list">{this.renderSpeciesList()}</div></h5>
        <h5>Films:         
        <div className="ui celled list">{this.renderFilmsList()}</div></h5>
        <h5>Starships: 
        <div className="ui celled list">{this.renderStarshipsList()}</div></h5>
      </div>
    );
  }
}

export default ProfileShow;