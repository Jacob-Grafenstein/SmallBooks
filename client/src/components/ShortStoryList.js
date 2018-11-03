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

class ShortStoryList extends Component {
  state = {
    shortStories: [
      {
        id: uuid(),
        name: "Spooky Story",
        description: "A very scary story written by me.",
        author: "Jacob Grafenstein",
        story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        createdBy: "Jacob Grafenstein",
        createdDate: Date.now,
        updatedBy: "Jacob Grafenstein",
        updatedDate: Date.now
      },
      {
        id: uuid(),
        name: "Spooky Story 2 ",
        description: "A scarier story written by me.",
        author: "Jake Massmann",
        story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        createdBy: "Jacob Grafenstein",
        createdDate: Date.now,
        updatedBy: "Jacob Grafenstein",
        updatedDate: Date.now
      },
      {
        id: uuid(),
        name: "Spooky Story 3",
        description: "A scariest story written by me.",
        author: "Adam Weinstein",
        story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        createdBy: "Jacob Grafenstein",
        createdDate: Date.now,
        updatedBy: "Jacob Grafenstein",
        updatedDate: Date.now
      }
    ]
  }

  render() {
    const { shortStories } = this.state;
    return(
      <Container>
        <Button
          color="success"
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const name = prompt('Enter Story Name');
            if (name) {
              this.setState(state => ({
                items:[...state.items, {
                  id:uuid(),
                  name
                }]
              }));
            }
          }}
        >Create New Story</Button>
      </Container>
    )
  }
}

export default ShortStoryList;