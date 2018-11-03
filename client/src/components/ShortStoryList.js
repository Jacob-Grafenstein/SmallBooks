import React, { Component } from 'react';
import ShortStory from './ShortStory';
import {
  Container,
  Button,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import uuid from 'uuid';

class ShortStoryList extends Component {
  state = {
    storyId:0,
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
    const shortStories = this.state.shortStories;
    const storyID = this.state.storyId;
    if (storyID !== 0 ) {
      return(
        <Container>
          <Button
            color="dark"
            style={{marginBottom: '2rem'}}
            onClick={()=> {
              this.setState({
                storyId: 0
              })
            }}
          >Back</Button>
          <ShortStory story={shortStories.find((shortStory) => { 
            return shortStory.id === storyID
          })}/>
        </Container>
      );
    } else {
      return(
        
        <Container>
          <Button
            color="success"
            style={{marginBottom: '2rem'}}
            onClick={() => {
              const name = prompt('Enter Story Name');
              if (name) {
                this.setState(state => ({
                  shortStories:[...state.shortStories, {
                    id:uuid(),
                    name
                  }]
                }));
              }
            }}
          >Create New Story</Button>
          <ListGroup>
            <TransitionGroup className="short-story-list">
              {shortStories.map(({id, name}) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                  <ListGroupItem>
                    {name}
                    <Button 
                      color="dark"
                      size="sm"
                      className="pull-right"
                      onClick={() => {
                        this.setState({
                          storyId:id
                        })
                      }}>
                      Read Story
                    </Button>
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
        </Container>
      )
    }
  }
}

export default ShortStoryList;