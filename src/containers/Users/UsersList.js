import React, { Component } from 'react';
import Relay from 'react-relay';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Alert, Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, withRouter } from 'react-router'
import { loadUsersList, selectUser, removeUsers } from '../../actions/Users/index';
import UsersDetails from './UsersDetails'



class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
            modal: false,
            removeModal: false,
            large: false,
            small: false,
            primary: false,
            success: false,
            warning: false,
            danger: false,
            info: false,
            dropdownOpen: false,
            removeIds: [],
            dangerAlertOpened: false,
            successAlertOpened: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleRemoveModal = this.toggleRemoveModal.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleLarge= this.toggleLarge.bind(this);
        this.toggleSmall= this.toggleSmall.bind(this);
        this.togglePrimary= this.togglePrimary.bind(this);
        this.toggleSuccess= this.toggleSuccess.bind(this);
        this.toggleWarning= this.toggleWarning.bind(this);
        this.toggleDanger= this.toggleDanger.bind(this);
        this.toggleInfo= this.toggleInfo.bind(this);
        this.selectUserRadio = this.selectUserRadio.bind(this);
        this.confirmRemove = this.confirmRemove.bind(this);
        this.toggleAlert = this.toggleAlert.bind(this);
        console.log(this.props.router)
    }
    
    toggleAlert (type) {
        var obj = {};
        obj[type] = !this.state[type]
        this.setState(obj);
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
    toggleRemoveModal() {
        this.setState({
            removeModal: !this.state.removeModal
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
    selectUserRadio(user) {
        this.props.selectUser(user)
        this.setState({
            user: user
        });
        let removeIds = this.state.removeIds;
        removeIds.push(user.id);
        this.setState({
            removeIds: removeIds
        })
    }
    confirmRemove () {
        this.props.removeUsers(this.state.removeIds)
        .then(() => {
            this.toggleRemoveModal();
            this.toggleAlert('successAlertOpened')
        })
        .catch((error) => {
            this.toggleRemoveModal();
            this.toggleAlert('dangerAlertOpened')
        })
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
                        <input type="radio" id="inline-checkbox1" name="inline-checkbox1" value={user.id} onClick={() => this.selectUserRadio(user)} />
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
                    <Modal isOpen={this.state.removeModal} toggle={this.toggleRemoveModal} className={this.props.className} backdrop={false}>
                        <ModalHeader toggle={this.toggleRemoveModal}>Remove User</ModalHeader>
                        <ModalBody>
                            Are you sure that want to delete the User #{this.state.removeIds}?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={this.confirmRemove}>Remove</Button>{' '}
                            <Button color="secondary" onClick={this.toggleRemoveModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div>
                    <div>
                        <Alert color="danger" isOpen={this.state.dangerAlertOpened}>
                            <strong>Oh snap!</strong> Change a few things up and try submitting again.
                        </Alert>
                        <Alert color="success" isOpen={this.state.successAlertOpened}>
                            <strong>Saved</strong> information successfully.
                        </Alert>
                    </div>
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
                                            <DropdownItem>
                                                <Link to={'/pages/users/edit'} className="nav-link">
                                                    <i className="icon-equalizer"></i> Edit User
                                                </Link>
                                            </DropdownItem>
                                            <DropdownItem disabled={ this.state.user ? undefined : true }>
                                                <Link id="remove" onClick={this.toggleRemoveModal} className="nav-link">
                                                    <i className="icon-equalizer"></i> Remove Selected 
                                                </Link>
                                            </DropdownItem>
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

// module.exports = Relay.createContainer(
//     withRouter(UsersList),
//     {
//         fragments: {
//             viewer: () => Relay.QL`
//                 fragment on Viewer {
//                     users {
//                         edges {
//                             node {
//                                 id
//                                 name
//                                 firstName
//                                 lastName
//                             }
//                         }
//                     }
//                 }
//             `
//         }
//     }
// );

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadUsersList: loadUsersList, selectUser: selectUser, removeUsers: removeUsers }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UsersList);