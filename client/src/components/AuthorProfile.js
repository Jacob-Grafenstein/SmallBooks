import React, { Component } from 'react';
import {
  Container,
  CardHeader,
  Card,
  CardBody,
  CardSubtitle,
  CardLink,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import ShortStoryList from './ShortStoryList';
import PropTypes from 'prop-types';

class AuthorProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
        author: this.props.author
		/*
		author: {
	      id: null,
	      authorName: "J. K. Rowling",
	      authorBiography: "Wrote seven popular books featuring a hairy potter and his ascension from the mortal realm. The success of the series lead to the emergence of J. K. Rowling as a cult leader within upper management at Macedon Technologies.",
	      authorImage: "",
	      createdBy:"",
	      updatedBy:""
	    }
	    */
    }
  }

  render() {
    return(
    	<Card>
			<CardHeader tag="h3">{this.state.author.authorName}</CardHeader>
			<CardBody>
				<CardTitle>
					Biography
				</CardTitle>
	  			<CardText>
	  				{this.state.author.authorBiography}
	  			</CardText>
	  			<CardTitle>
	  				Stories by this Author
	  			</CardTitle>
	  			<ShortStoryList/>
		</CardBody>
    	</Card>
    );
  }
}

AuthorProfile.propTypes = {
  author: PropTypes.object.isRequired
}

export default AuthorProfile;