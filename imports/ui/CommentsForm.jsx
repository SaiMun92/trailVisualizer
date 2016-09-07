import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Messages } from '../Collections/database';

class CommentsForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    // prevent the page from refreshing
    event.preventDefault();

    Meteor.call('messages.insert', this.refs.userName.value, this.refs.userMessage.value);
    this.refs.userName.value = '';
    this.refs.userMessage.value = '';
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            ref="userName"
            onChange={this.handleNameChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Your Message"
            ref="userMessage"
            onChange={this.handleMessageChange}
          />
        </div>
        <input type="submit" value="Post" />
      </form>
    );
  }
}

// var CommentsForm = React.createClass({
//   getInitialState: function() {
//     return{name: '', message: ''};
//   },
//
//   handleNameChange: function(event) {
//     this.setState({name: event.target.value});
//   },
//
//   handleMessageChange: function(event) {
//     this.setState({message: event.target.value});
//   },
//
//   handleSubmit: function(event) {
//     event.preventDefault();
//     Meteor.call('messages.insert', this.state.name, this.state.message);
//     this.setState({name: '', message: ''});
//   },
//
//   render() {
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={this.state.name}
//             onChange={this.handleNameChange}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Your Message"
//             value={this.state.message}
//             onChange={this.handleMessageChange}
//           />
//         </div>
//         <input type="submit" value="Post" />
//       </form>
//     );
//   }
// });

export default CommentsForm;
