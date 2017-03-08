import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Alert, Button, Col, Label, Input, Form, FormGroup, FormText } from 'reactstrap';
import { createUser } from '../../actions/Users/index';

class UsersForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formData: {
                firstName: this.props.firstName,
                lastName: this.props.lastName,
                firstEmail: this.props.email,
                gender: this.props.gender ? this.props.gender : 'male',
                image: this.props.image,
                address: this.props.address,
                position: this.props.position,
                permissions: this.props.permissions
            }
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let formData = this.state.formData;
        formData[event.target.id] = event.target.value
        this.setState({formData: formData});
        console.log(this.state.formData[event.target.id])
    }

    handleSubmit(event) {
        this.props.createUser(this.state.formData)
        .then((data) => {
            if (data.value.status !== 201) {
                return(
                     <div>
                         <Alert color="danger" isOpen="true">
                            <strong>Oh snap!</strong> Change a few things up and try submitting again.
                        </Alert>
                    </div>
                )
            } else {
                return (
                     <div>
                        <Alert color="success"  isOpen="true">
                            <strong>Well done!</strong> You successfully create "{this.state.formData['email']}" user.
                        </Alert>
                    </div>
                )
            }
        })
        event.preventDefault();
    }

    createPositionsOptions () {
        return (
            <Input type="select" name="position" id="positionSelect" onChange={this.handleChange}>
                <option value="scrum master">Scrum Master</option>
                <option value="junior developer">Junior Developer</option>
                <option value="full developer">Full Developer</option>
                <option value="senior developer">Senior Developer</option>
                <option value="designer">Designer</option>
            </Input>
        )
    }

    createPermissionsOptions () {
        return (
            <FormGroup tag="fieldset">
                <Label check>
                    <Input type="radio" name="permissions" id="permissions" value="owner" onChange={this.handleChange} />{' '}
                    Owner
                </Label>
                <Label check>
                    <Input type="radio" name="permissions" id="permissions" value="administrator" onChange={this.handleChange} />{' '}
                    Administrator
                </Label>
                <Label check>
                    <Input type="radio" name="permissions" id="permissions" value="manager" onChange={this.handleChange} />{' '}
                    Manager
                </Label>
                <Label check>
                    <Input type="radio" name="permissions" id="permissions" value="standard" onChange={this.handleChange} />{' '}
                    Standard
                </Label>
            </FormGroup>
        )
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="lblFirstName">First Name</Label>
                    <Input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="lblLastName">Last Name</Label>
                    <Input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="lblEmail">E-mail</Label>
                    <Input type="email" name="email" id="email" placeholder="anony@tokenlab.com.br" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="lblGenderSelect">Gender</Label>
                    <Input type="select" name="gender" id="genderSelect" onChange={this.handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="lblUserPhoto">Profile Photo</Label>
                    <Input type="file" name="image" id="image" onChange={this.handleChange} />
                    <FormText color="muted">
                        Use this file form to upload th User profile photo.
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="lblAddress">Full Address</Label>
                    <Input type="text" name="address" id="address"placeholder="Rua XV de Novembro, Sao Carlos - Brazil" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="lblPositionSelect">Position</Label>
                    {this.createPositionsOptions()}
                </FormGroup>
                <FormGroup row>
                    <Label for="permissions" sm={2}>Permissions</Label>
                    <Col sm={{ size: 10 }}>
                        {this.createPermissionsOptions()}
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10 }}>
                        <Button onClick={this.handleSubmit}>{this.props.submitBtn ? this.props.submitBtn : 'Submit'}</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.active
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ createUser: createUser }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UsersForm);