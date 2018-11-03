import React, { Component } from 'react';
import {
  Container,
  Button
} from 'reactstrap';

class ShortStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      story: this.props.story
    }
  }

  render() {
    return(
      <Container>
        <h1>{this.state.story.name}</h1>
        <p><em>By: {this.state.story.author}</em></p>
        <br />
        <p>
          {this.state.story.story}
        </p>
      </Container>
    );
  }
}

export default ShortStory;