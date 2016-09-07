import { Meteor } from 'meteor/meteor';
import { Messages } from '../imports/Collections/database';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('messages', function() {
    return Messages.find({ owner: this.userId });
  });
});
