import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersForm from '../../../containers/Users/UsersForm'

class UpdateUser extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="card mx-2">
                <div className="card-block p-2">
                  <h1>Edit User</h1>
                  <p className="text-muted">Edit User informations.</p>
                  <UsersForm submitBtn="Update" userData={this.props.user} action="update"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.active
    }
}

export default connect(mapStateToProps)(UpdateUser);
