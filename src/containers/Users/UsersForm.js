import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Alert, Button, Col, Label, Input, Form, FormGroup, FormText, Link } from 'reactstrap';
import { createUser, updateUser } from '../../actions/Users/index';

class UsersForm extends Component {
    constructor (props) {
        super(props);
        var userData = this.props.userData ? this.props.userData : {}
        this.state = {
            dangerAlertOpened: false,
            successAlertOpened: false,
            formData: {
                firstName: userData.firstName,
                lastName: userData.lastName,
                firstEmail: userData.email,
                email: userData.email,
                gender: userData.gender ? userData.gender : 'male',
                image: userData.image,
                address: userData.address,
                position: userData.position,
                permission: userData.permission
            }
        }
        
        this.toggleAlert = this.toggleAlert.bind(this);
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
        if(this.props.action === 'create'){
            this.props.createUser(this.state.formData)
            .then((data) => {
                this.toggleAlert('successAlertOpened')
            })
            .catch((error) => {
                this.toggleAlert('dangerAlertOpened')
            })
        }
        if(this.props.action === 'update'){
            this.props.updateUser(this.state.formData)
            .then((data) => {
                this.toggleAlert('successAlertOpened')
            })
            .catch((error) => {
                this.toggleAlert('dangerAlertOpened')
            })
        }
        event.preventDefault();
    }

    createPositionsOptions () {
        return (
            <Input type="select" name="position" id="positionSelect" value={this.state.formData.position} onChange={this.handleChange}>
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
                    <Input type="radio" name="permissions" id="permissions" value="owner" onChange={this.handleChange} checked={"owner" === this.state.formData.permission} />{' '}
                    Owner 
                </Label>
                <Label check>
                    <Input type="radio" name="permissions" id="permissions" value="administrator" onChange={this.handleChange} checked={"administrator" === this.state.formData.permission} />{' '}
                    Administrator
                </Label>
                <Label check>
                    <Input type="radio" name="permissions" id="permissions" value="manager" onChange={this.handleChange} checked={"manager" === this.state.formData.permission} />{' '}
                    Manager
                </Label>
                <Label check>
                    <Input type="radio" name="permissions" id="permissions" value="standard" onChange={this.handleChange} checked={"standard" === this.state.formData.permission} />{' '}
                    Standard
                </Label>
            </FormGroup>
        )
    }

    toggleAlert (type) {
        var obj = {};
        obj[type] = !this.state[type]
        this.setState(obj);
    }

    render() {
        return (
            <Form>
                <div>
                    <Alert color="danger" isOpen={this.state.dangerAlertOpened}>
                        <strong>Oh snap!</strong> Change a few things up and try submitting again.
                    </Alert>
                    <Alert color="success" isOpen={this.state.successAlertOpened}>
                        <strong>Saved</strong> information successfully.
                        {' '}<a href='#/pages/users/'><i className="fa fa-chevron-left"></i> Users list</a>
                    </Alert>
                </div>
                <FormGroup>
                    <Label for="lblFirstName">First Name</Label>
                    <Input type="text" name="firstName" id="firstName" value={ this.state.formData.firstName } placeholder="First Name" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="lblLastName">Last Name</Label>
                    <Input type="text" name="lastName" id="lastName" value={ this.state.formData.lastName } placeholder="Last Name" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="lblEmail">E-mail</Label>
                    <Input type="email" name="email" id="email" value={ this.state.formData.email } placeholder="anony@tokenlab.com.br" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="lblGenderSelect">Gender</Label>
                    <Input type="select" name="gender" id="genderSelect" value={this.state.formData.gender} onChange={this.handleChange}>
                        <option key="0" value="Male" >Male</option>
                        <option key="1" value="Female" >Female</option>
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
                    <Input type="text" name="address" id="address" placeholder="Rua XV de Novembro, Sao Carlos - Brazil" value={this.state.formData.address} onChange={this.handleChange} />
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
    return bindActionCreators({ createUser: createUser, updateUser: updateUser }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UsersForm);