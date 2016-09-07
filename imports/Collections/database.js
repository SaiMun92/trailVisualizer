import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'messages.insert':function(name, message) {
    check(name, String);
    check(message, String);
    // throws an error that u have to enter to insert into the chat
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Messages.insert({
      name,
      message,
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  }
});

export const Messages = new Mongo.Collection('messages');
