import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component {
    render () {
        return (
            <div>
                <h2>{this.props.user.fullName} <small>#{this.props.user.id}</small></h2>
                <p>firstName: {this.props.user.firstName}</p>
                <p>lastName: {this.props.user.lastName}</p>
                <p>email: {this.props.user.email}</p>
                <p>gender: {this.props.user.gender}</p>
                <p>ipAddress: {this.props.user.ipAddress}</p>
                <p>address: {this.props.user.address}</p>
                <p>fullName: {this.props.user.fullName}</p>
                <p>position: {this.props.user.position}</p>
                <p>permission: {this.props.user.permission}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.active
    }
}

export default connect(mapStateToProps)(UserDetails);