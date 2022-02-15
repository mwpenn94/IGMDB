import React from 'react';
import { Link } from 'react-router-dom';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPerson(id);
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
            <Link to={`species/${specie.id}`} className="header">
              {specie.name}
            </Link>
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
        <img class="ui mini image" src={this.props.person.image}></img>
      </div>
    );
  }
}

export default StreamShow;