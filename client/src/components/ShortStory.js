import React, { Component } from 'react';
import {
  Container,
  Button
} from 'reactstrap';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import uuid from 'uuid';

class ShortStory extends Component {
  state = {
    shortStory: {
      id: uuid(),
      name: "Spooky Story",
      description: "A very scary story written by me.",
      author: "Jacob Grafenstein",
      story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      createdBy: "Jacob Grafenstein",
      createdDate: Date.now,
      updatedBy: "Jacob Grafenstein",
      updatedDate: Date.now
    }
  }
}

export default ShortStory;