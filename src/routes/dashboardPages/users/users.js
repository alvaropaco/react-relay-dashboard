import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';

import {
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

const title = 'Users';

function displayUsers(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>System Users</PageHeader>
          <div className="table-responsive">
            <table className="table table-striped"> 
              <thead> 
                <tr> 
                  <th>
                    <ul className="nav navbar-left">
                      <NavDropdown bsClass="dropdown" title={<span><i className="fa fa-bars fa-fw"></i></span>} id="usersActionsDropdown">
                        <MenuItem style={ {width: 300} } eventKey="1">
                          <div>Create</div>
                        </MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="2">
                          <div>Edit</div>
                        </MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="3">
                          <div>Remove</div>
                        </MenuItem>
                      </NavDropdown>
                    </ul>
                  </th>
                  <th>#</th> 
                  <th>Name</th> 
                  <th>E-mail</th> 
                  <th>Position</th>
                  <th>Permission</th>
                </tr> 
              </thead> 
              <tbody> 
                <tr className="active"> 
                  <td>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" />
                      </label>
                    </div>
                  </td>
                  <td scope="row">0</td> 
                  <td>Dayane</td> 
                  <td>day@tokenlab.com.br</td> 
                  <td><span className="badge">Human Resources</span></td> 
                  <td><span className="label label-success">Administrator</span></td>
                </tr>
                <tr> 
                  <td>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" />
                      </label>
                    </div>
                  </td>
                  <td scope="row">1</td> 
                  <td>Jefferson Lima</td> 
                  <td>jeff@tokenlab.com.br</td> 
                  <td><span className="badge">Scrum Master</span></td> 
                  <td><span className="label label-primary">Manager</span></td>
                </tr>
                <tr> 
                  <td>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" />
                      </label>
                    </div>
                  </td>
                  <td scope="row">2</td> 
                  <td>Thiago Tamega</td> 
                  <td>tamega@tokenlab.com.br</td> 
                  <td><span className="badge">Scrum Master</span></td> 
                  <td><span className="label label-primary">Manager</span></td>
                </tr>
                <tr> 
                  <td>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" />
                      </label>
                    </div>
                  </td>
                  <td scope="row">3</td> 
                  <td>Álvaro Paçó</td> 
                  <td>alvaropaco@tokenlab.com.br</td> 
                  <td><span className="badge">Developer</span></td> 
                  <td><span className="label label-warning">Default</span></td>
                </tr>
                <tr> 
                  <td>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" />
                      </label>
                    </div>
                  </td>
                  <td scope="row">4</td> 
                  <td>Eduardo Domene</td> 
                  <td>edud@tokenlab.com.br</td> 
                  <td><span className="badge">Developer</span></td> 
                  <td><span className="label label-warning">Default</span></td>
                </tr>
              </tbody> 
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}


displayUsers.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayUsers;
