import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import CommentsForm from '../../imports/ui/CommentsForm';
import Comments from '../../imports/ui/Comments';
import Messages from '../../imports/Collections/database';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="box">
                <h1>Comments Section</h1>
                <CommentsForm />
                <Comments />
            </div>
        );
    }
}

export default Home;
