import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router'
import { loadUsersList, selectUser } from '../../actions/Users/index';
import UsersDetails from './UsersDetails'

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            large: false,
            small: false,
            primary: false,
            success: false,
            warning: false,
            danger: false,
            info: false,
            dropdownOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleLarge= this.toggleLarge.bind(this);
        this.toggleSmall= this.toggleSmall.bind(this);
        this.togglePrimary= this.togglePrimary.bind(this);
        this.toggleSuccess= this.toggleSuccess.bind(this);
        this.toggleWarning= this.toggleWarning.bind(this);
        this.toggleDanger= this.toggleDanger.bind(this);
        this.toggleInfo= this.toggleInfo.bind(this);
        
    }

    componentDidMount() {
        this.props.loadUsersList();
    }

    toggleModal(user) {
        this.props.selectUser(user);
        this.setState({
            modal: !this.state.modal
        });
    }
    toggleLarge() {
        this.setState({
        large: !this.state.large
        });
    }
    toggleSmall() {
        this.setState({
        small: !this.state.small
        });
    }
    togglePrimary() {
        this.setState({
        primary: !this.state.primary
        });
    }
    toggleSuccess() {
        this.setState({
        success: !this.state.success
        });
    }
    toggleWarning() {
        this.setState({
        warning: !this.state.warning
        });
    }
    toggleDanger() {
        this.setState({
        danger: !this.state.danger
        });
    }
    toggleInfo() {
        this.setState({
        info: !this.state.info
        });
    }
    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        var createListItems = () => {
            if(!this.props.users) return(
                <tr key="0">
                    <td colSpan="6">
                        <p>No Users data.</p>
                    </td>
                </tr>    
            )
            return this.props.users.map((user, i) => {
                return (<tr key={user.id}>
                    <td>
                        <input type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value={user.id} onClick={() => this.props.selectUser(user)} />
                    </td>
                    <td scope="row">
                        {user.id}
                    </td>
                    <td>
                        <Button onClick={() => this.toggleModal(user)} color="link">{user.fullName}</Button>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td><Badge>{user.position}</Badge></td>
                    <td><Badge color={user.permissionClass}>{user.permission}</Badge></td>
                </tr>)
            });
        }
        return (
            <div>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>
                            <span><i className="fa fa-info-circle fa-lg mt-2"></i></span> User Details
                        </ModalHeader>
                        <ModalBody>
                            <UsersDetails />
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div>
                    <table className="table">
                        <thead className="thead-inverse">
                            <tr>
                                <th>
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                                        <button onClick={this.toggleDropDown} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                                        <i className="icon-settings"></i>
                                        </button>
                                        <DropdownMenu>
                                            <DropdownItem>
                                                <Link to={'/pages/users/new'} className="nav-link">
                                                    <i className="icon-plus"></i> Create User
                                                </Link>
                                            </DropdownItem>
                                            <DropdownItem>Edit Selected</DropdownItem>
                                            <DropdownItem>Remove Selected</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </th>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>E-mail</th>
                                <th>Phone Number</th>
                                <th>Position</th>
                                <th>Permissions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {createListItems()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadUsersList: loadUsersList, selectUser: selectUser }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UsersList);