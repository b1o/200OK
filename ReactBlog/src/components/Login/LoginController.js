import React, {Component} from 'react';
import LoginForm from './LoginForm'
import {login} from '../../models/userModel'

export default class LoginController extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onChange(event) {
        switch (event.target.name) {
            case 'username':
                this.setState({username: event.target.value});
                break;
            case 'password':
                this.setState({password: event.target.value});
                break;
            default:
                break;
        }
    }

    onSubmit(event) {
        event.preventDefault();
        login(this.state.username, this.state.password, this.onSubmitResponse)
    }

    onSubmitResponse(response) {
        if (response === true) {
            this.context.router.push('/');
        } else {
            alert('something went wrong')
        }
    }

    render() {
        if(sessionStorage.getItem("authToken")) {
            this.context.router.push('/my-profile')
        }

        return(
            <div>
                <LoginForm
                    username={this.state.username}
                    password={this.state.password}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

LoginController.contextTypes = {
    router: React.PropTypes.object
};