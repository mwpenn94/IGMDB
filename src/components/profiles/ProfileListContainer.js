import React from 'react';
import { connect } from 'react-redux';
import { fetchPeople } from '../../store/actions';
//import { fetchImage } from '../../store/actions/unsplashActions';
import ProfileList from './ProfileList';

const mapStateToProps = state => {
  return {
    people: state.people.people,
    update: state.people.update,
    defaultPeople: state.people.defaultPeople,
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    term: state.people.term
  };
};

export default connect(
  mapStateToProps,
  { fetchPeople }
)(ProfileList);