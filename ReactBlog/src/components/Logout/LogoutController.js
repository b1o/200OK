import React, {Component} from 'react';
import {logout} from '../../models/userModel';

export default class LogoutController extends Component {
    constructor(props) {
        super(props);
        this.logout();
    }

    logout() {
        logout(this.onSubmitResponse.bind(this));
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from login page
            this.context.router.push('/');
        } else {
            // Something went wrong, let the user know
        }
    }

    render() {
        return (
            <div>
                <span>Logout Page</span>
            </div>
        );
    }
}

LogoutController.contextTypes = {
    router: React.PropTypes.object
};