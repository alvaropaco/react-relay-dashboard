import React, { Component } from 'react';
import UsersList from '../../../containers/Users/UsersList'

class Users extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <strong>User's List</strong>
              </div>
              <div className="card-block">
                <UsersList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;

