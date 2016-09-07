import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Comments from '../imports/ui/Comments';
import CommentsForm from '../imports/ui/CommentsForm';
import Messages from '../imports/Collections/database';
import { Link, browserHistory } from 'react-router';
import Accounts from './Accounts';

class Header extends Component {

  render() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            <Accounts />
            <Link to="maps">Google Maps</Link>
        </div>
    );
  }
}

export default Header;
