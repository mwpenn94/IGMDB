import React from 'react';
import { connect } from 'react-redux';
import { fetchPeople } from '../../actions';
import { fetchImage } from '../../actions/unsplashActions';
import StreamList from './StreamList';

const mapStateToProps = state => {
  return {
    people: state.people.people,
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    term: state.people.term
  };
};

export default connect(
  mapStateToProps,
  { fetchPeople, fetchImage }
)(StreamList);