import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addStory } from '../actions/storyActions'; 

class shortStoryModal extends Component {
  state = {
    isModalOpen: false,
    shortStory: {
      id: null,
      name: "",
      description: "",
      author: "",
      isPublic:false,
      createdBy:"",
      updatedBy:""
    }
  }

  toggle = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  onChange = e => {
    let shortStory = this.state.shortStory;
    shortStory[e.target.name] = e.target.value;
    this.setState({
      shortStory: shortStory
    });
  }

  onSubmit = e => {
    e.preventDefault();
    let shortStory = this.state.shortStory;
    shortStory.createdBy = "You Know";
    shortStory.updatedBy = "You Know";
    this.setState({
      shortStory: shortStory
    });
    const newShortStory = this.state.shortStory;

    this.props.addStory(newShortStory);
    this.toggle();
  }

  render() {
    return(
      <div>
        <Button
          color="success"
          style={{marginBottom: '2rem'}}
          onClick={this.toggle}
        >
          Create Short Story
        </Button>

        <Modal
          isOpen={this.state.isModalOpen}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Create Short Story
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="name" id="title" onChange={this.onChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="summary">Summary</Label>
                <Input type="textarea" name="description" id="summary" onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Label for="author">Author</Label>
                <Input type="select" name="author" id="author" onChange={this.onChange}>
                  <option>Jacob Grafenstein</option>
                  <option>Jake Massmann</option>
                  <option>Adam Weinstein</option>
                </Input>
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Privacy</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="isPublic" onChange={this.onChange}/>{' '}
                    Make Story Private
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="isPublic" onChange={this.onChange}/>{' '}
                    Make Story Public
                  </Label>
                </FormGroup>
              </FormGroup>
              <Button 
                color="primary"
                className="pull-right" 
                onClick={this.onSubmit}
                block
              >
                Save Story  
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  shortStories: state.shortStory
});

export default connect(mapStateToProps, {addStory})(shortStoryModal);