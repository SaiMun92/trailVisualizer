import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Messages } from '../Collections/database';

class CommentsBox extends Component {
  constructor(props) {
    super(props);
  }

  renderComments() {
      return this.props.data.map(data => {
        const { name, message } = data;

        return(
          <div>
            <h3>{name}</h3>
            <h4>{message}</h4>
          </div>
        );
      });
    }

  render() {
    return(
      <div>
           <h2>This is the comment section</h2>
           <h2>{this.renderComments()}</h2>
      </div>
    );
  }
}

// var CommentsBox = React.createClass({
//   renderComments: function() {
//     return this.props.data.map(data => {
//       const { name, message } = data;
//
//       return(
//         <div>
//           <h3>{name}</h3>
//           <h3>{message}</h3>
//         </div>
//       );
//     });
//   },
//
//   render: function() {
//     return(
//       <div>
//         <h2>This is the comment section</h2>
//         <h2>{this.renderComments()}</h2>
//       </div>
//     );
//   }
// });


export default createContainer(() => {
  Meteor.subscribe('messages');

  return {
    data: Messages.find({}).fetch(),
    currentUser: Meteor.user()
   };
}, CommentsBox);
