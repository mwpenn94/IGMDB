import React from 'react';
import { connect } from 'react-redux';
import { fetchPeople, updatePeople } from '../../store/actions';
import { fetchImage } from '../../store/actions/unsplashActions';
import ProfileList from './ProfileList';

const mapStateToProps = state => {
  return {
    people: state.people.people,
    defaultPeople: state.people.defaultPeople,
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    term: state.people.term
  };
};

export default connect(
  mapStateToProps,
  { fetchPeople, fetchImage, updatePeople }
)(ProfileList);