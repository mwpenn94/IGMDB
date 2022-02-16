import React from 'react';
import { connect } from 'react-redux';
import { fetchSpecies, fetchFilm, fetchFilms, fetchStarships } from '../../store/actions';
//import { fetchImage } from '../../store/actions/unsplashActions';
import ProfileShow from './ProfileShow';


const mapStateToProps = (state, ownProps) => {
  return { 
    person: state.people.people.find(person => person.id === ownProps.match.params.id)
  };
};

export default connect(
  mapStateToProps,
  { fetchSpecies, fetchFilm, fetchFilms, fetchStarships }
)(ProfileShow);