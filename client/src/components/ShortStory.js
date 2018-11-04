import React, { Component } from 'react';
import {
  Container
} from 'reactstrap';
import PropTypes from 'prop-types';

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

ShortStory.propTypes = {
  story: PropTypes.object.isRequired
}

export default ShortStory;