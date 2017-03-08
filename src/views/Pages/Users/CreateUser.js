import React, { Component } from 'react';
import UsersForm from '../../../containers/Users/UsersForm'

class User extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="card mx-2">
                <div className="card-block p-2">
                  <h1>New User</h1>
                  <p className="text-muted">Create a new system User.</p>
                  <UsersForm submitBtn="Create" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
