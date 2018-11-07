import React, { Component } from 'react';
import AuthorProfile from './AuthorProfile';
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
import { connect } from 'react-redux';
import { getAuthors, deleteAuthor } from '../actions/authorActions';
import PropTypes from 'prop-types';

class AuthorProfileList extends Component {
  state = {
    authorId: 0
  }

  componentDidMount() {
    this.props.getAuthors();
  }

  onDeleteClick = (id) => {
    this.props.deleteAuthor(id);
  }

  render() {
    const { authors }  = this.props.authors;
    const authorId = this.state.authorId;
    if (authorId !== 0 ) {
      return(
        <Container>
          <Button
            color="dark"
            style={{marginBottom: '2rem'}}
            onClick={()=> {
              this.setState({
                authorId: 0
              })
            }}
          >Back</Button>
          <AuthorProfile author={authors.find((author) => { 
            return author._id === authorId
          })}/>
        </Container>
      );
    } else {
      return(
        <ListGroup>
          <TransitionGroup className="short-story-list">
            {authors.map(({_id, authorName}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  {authorName}
                  <Button 
                    color="dark"
                    size="sm"
                    className="pull-right"
                    onClick={() => {
                      this.setState({
                        authorId: _id
                      })
                    }}>
                    View Author
                  </Button>
                  <Button 
                    color="danger"
                    size="sm"
                    className="pull-right"
                    style={{marginRight:"10px"}}
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    Delete Author
                  </Button>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      )
    }
  }
}

AuthorProfileList.propTypes = {
  getAuthors: PropTypes.func.isRequired,
  deleteAuthor: PropTypes.func.isRequired,
  authors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  authors: state.author
});

export default connect(mapStateToProps, { getAuthors, deleteAuthor })(AuthorProfileList);