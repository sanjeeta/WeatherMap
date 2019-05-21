import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

       
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const registering = this.props;
 const { username, password, lastName} = this.state;
        return (
            <div>
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div >
                        <label >First Name</label>
                        <input type="text"/>
                       
 
                    </div>
                    <div >
                        <label>Last Name</label>
                        <input type="text"  name="lastName" value={user.lastName}/>
                       
                    </div>
                    <div>
                        <label>Username</label>
                        <input type="text" name="username" value={user.username} />
                        
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"  name="password" value={user.password} />
                        
                    </div>
                    <div >
                        <button >Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const xRegisterPage = connect(mapStateToProps)(Register);
export { xRegisterPage as Register };