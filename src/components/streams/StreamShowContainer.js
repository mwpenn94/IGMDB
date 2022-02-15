import React from 'react';
import { connect } from 'react-redux';
import { fetchPerson, fetchSpecies, fetchFilm, fetchFilms, fetchStarships } from '../../actions';
import { fetchImage } from '../../actions/unsplashActions';
import StreamShow from './StreamShow';


const mapStateToProps = (state, ownProps) => {
  return { person: state.people.people[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchPerson, fetchSpecies, fetchFilm, fetchFilms, fetchStarships, fetchImage }
)(StreamShow);