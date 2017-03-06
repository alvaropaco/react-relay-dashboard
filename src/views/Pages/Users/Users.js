import React, { Component } from 'react';

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
                <table className="table">
                  <thead className="thead-inverse">
                    <tr>
                      <th>#</th>
                      <th>Full Name</th>
                      <th>E-mail</th>
                      <th>Phone Number</th>
                      <th>Position</th>
                      <th>Permissions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Jefferson Lima</td>
                      <td>jeff@tokenlab.com.br</td>
                      <td>16 987654321</td>
                      <td><span className="badge badge-default">Scrum Master</span></td>
                      <td><span className="badge badge-success">Administrator</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
